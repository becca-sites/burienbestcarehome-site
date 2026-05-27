'use client'

import { useState, useEffect, useMemo, useRef } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

// Apps Script webhook (same env var as ContactForm). When unset at build time,
// submissions return an opaque "succeeded" because mode: 'no-cors' hides the
// response, but the data does not actually reach a sheet. We surface a clear
// error to the user only if fetch itself throws.
const APPS_SCRIPT_WEBHOOK_URL =
  process.env.NEXT_PUBLIC_APPS_SCRIPT_WEBHOOK_URL ?? 'APPS_SCRIPT_WEBHOOK_URL_TODO_REPLACE'

type QuestionType = 'single' | 'multi'

interface Option {
  value: string
  label: string
}

interface Question {
  id: string
  step: number
  act: 1 | 2 | 3
  type: QuestionType
  title: string
  subtitle?: string
  options: Option[]
  // multi questions can opt out of requiring a choice (e.g. "none of these")
  optional?: boolean
}

const QUESTIONS: Question[] = [
  // ACT 1: Current Situation
  {
    id: 'who',
    step: 1,
    act: 1,
    type: 'single',
    title: 'Who are you exploring care options for?',
    options: [
      { value: 'parent', label: 'My parent' },
      { value: 'spouse', label: 'My spouse' },
      { value: 'family', label: 'Another family member' },
      { value: 'self', label: 'Myself' },
    ],
  },
  {
    id: 'living',
    step: 2,
    act: 1,
    type: 'single',
    title: 'Where is your loved one currently living?',
    options: [
      { value: 'alone', label: 'Alone at home' },
      { value: 'with-family', label: 'With me or another family member' },
      { value: 'facility', label: 'In another care facility' },
      { value: 'hospital', label: 'In a hospital or rehab center' },
    ],
  },
  {
    id: 'trigger',
    step: 3,
    act: 1,
    type: 'single',
    title: 'What brought you here today?',
    options: [
      { value: 'fall', label: 'A recent fall or hospitalization' },
      { value: 'diagnosis', label: "A new diagnosis like dementia or Alzheimer's" },
      { value: 'burnout', label: 'Caregiver burnout, I need help' },
      { value: 'researching', label: 'Just researching options for the future' },
      { value: 'discharge', label: 'A hospital discharge planner recommended I look into this' },
    ],
  },
  {
    id: 'timeline',
    step: 4,
    act: 1,
    type: 'single',
    title: 'How soon do you need a care solution?',
    options: [
      { value: 'urgent', label: "This week, it's urgent" },
      { value: 'month', label: 'Within the next month' },
      { value: '1-3-months', label: '1 to 3 months' },
      { value: 'exploring', label: 'Just exploring, no rush' },
    ],
  },
  {
    id: 'concerns',
    step: 5,
    act: 1,
    type: 'multi',
    title: 'What concerns do you have about your loved one right now?',
    subtitle: 'Select any that apply.',
    options: [
      { value: 'safety', label: 'Safety (falls or accidents)' },
      { value: 'isolation', label: 'Loneliness or isolation' },
      { value: 'medications', label: 'Managing medications and health needs' },
      { value: 'memory', label: 'Memory or cognitive changes' },
      { value: 'mobility', label: 'Decline in mobility or daily activities' },
      { value: 'nutrition', label: 'Nutrition or eating habits' },
    ],
  },
  {
    id: 'barriers',
    step: 6,
    act: 1,
    type: 'multi',
    title: "What's holding you back from making a decision?",
    subtitle: 'Select any that apply.',
    options: [
      { value: 'guilt', label: 'I feel guilty about handing over the reins' },
      { value: 'cost', label: 'Cost and affordability' },
      { value: 'unsure', label: "I don't know what type of care is right" },
      { value: 'disagreement', label: 'Family disagreement on next steps' },
      { value: 'resistance', label: 'My loved one is resistant to the idea' },
    ],
  },
  // ACT 2: Care Needs
  {
    id: 'adls',
    step: 6,
    act: 2,
    type: 'multi',
    title: 'Which daily activities does your loved one need help with?',
    subtitle: 'Select any that apply.',
    options: [
      { value: 'bathing', label: 'Bathing or showering' },
      { value: 'dressing', label: 'Getting dressed' },
      { value: 'meals', label: 'Preparing meals' },
      { value: 'medications', label: 'Taking medications' },
      { value: 'mobility', label: 'Getting around the house' },
      { value: 'toileting', label: 'Using the bathroom' },
      { value: 'none', label: 'None of these yet' },
    ],
    optional: true,
  },
  {
    id: 'dementia',
    step: 7,
    act: 2,
    type: 'single',
    title: "Has your loved one been diagnosed with dementia, Alzheimer's, or memory loss?",
    options: [
      { value: 'yes', label: 'Yes, diagnosed' },
      { value: 'suspect', label: 'We suspect it but no formal diagnosis' },
      { value: 'no', label: 'No' },
    ],
  },
  {
    id: 'behaviors',
    step: 8,
    act: 2,
    type: 'multi',
    title: 'Have you noticed any of these behaviors?',
    subtitle: 'Select any that apply.',
    options: [
      { value: 'wandering', label: 'Wandering or getting lost' },
      { value: 'sundowning', label: 'Sundowning, agitation in the evening' },
      { value: 'recognition', label: 'Difficulty recognizing family members' },
      { value: 'refusal', label: 'Refusing to bathe or eat' },
      { value: 'confusion', label: 'Confusion about time or place' },
      { value: 'none', label: 'None of these' },
    ],
    optional: true,
  },
  {
    id: 'supervision',
    step: 9,
    act: 2,
    type: 'single',
    title: 'How many hours per day does your loved one need someone present?',
    options: [
      { value: 'few', label: 'A few hours for check-ins' },
      { value: 'most', label: 'Most of the day' },
      { value: 'all', label: '24/7 supervision' },
      { value: 'unsure', label: "I'm not sure" },
    ],
  },
  {
    id: 'medical',
    step: 10,
    act: 2,
    type: 'multi',
    title: 'Are there any specific medical needs?',
    subtitle: 'Select any that apply.',
    options: [
      { value: 'medication', label: 'Medication management' },
      { value: 'diabetes', label: 'Diabetes care' },
      { value: 'wound', label: 'Wound care' },
      { value: 'pt', label: 'Physical therapy' },
      { value: 'oxygen', label: 'Oxygen or respiratory support' },
      { value: 'incontinence', label: 'Incontinence care' },
      { value: 'none', label: 'None of these' },
    ],
    optional: true,
  },
  // ACT 3: Preferences
  {
    id: 'priorities',
    step: 11,
    act: 3,
    type: 'multi',
    title: 'What matters most to you in a care setting?',
    subtitle: 'Pick up to three that feel most important.',
    options: [
      { value: 'home-like', label: 'Small home-like environment' },
      { value: 'one-on-one', label: 'Personalized one-on-one attention' },
      { value: 'memory-care', label: 'Memory care expertise' },
      { value: 'location', label: 'Location close to family' },
      { value: 'affordability', label: 'Affordability' },
      { value: 'activities', label: 'Activities and social engagement' },
      { value: 'family-involved', label: 'Family involvement in care planning' },
    ],
    optional: true,
  },
  {
    id: 'payment',
    step: 12,
    act: 3,
    type: 'single',
    title: 'How are you planning to pay for care?',
    options: [
      { value: 'private', label: 'Private pay' },
      { value: 'medicaid', label: 'Medicaid' },
      { value: 'ltc', label: 'Long-term care insurance' },
      { value: 'va', label: 'VA benefits' },
      { value: 'unsure', label: 'Not sure yet' },
      { value: 'combination', label: 'Combination' },
    ],
  },
  {
    id: 'area',
    step: 13,
    act: 3,
    type: 'single',
    title: 'In what area does your loved one currently live?',
    options: [
      { value: 'burien', label: 'Burien, White Center, Normandy Park' },
      { value: 'tukwila', label: 'Tukwila, SeaTac, Des Moines' },
      { value: 'renton-kent', label: 'Renton, Kent' },
      { value: 'federal-way', label: 'Federal Way, Auburn' },
      { value: 'west-seattle', label: 'West Seattle' },
      { value: 'other', label: 'Other' },
    ],
  },
]

const TOTAL_STEPS = QUESTIONS.length + 1 // +1 for the contact info step
const PRIORITIES_LIMIT = 3

type SingleAnswers = Record<string, string>
type MultiAnswers = Record<string, string[]>

interface ContactInfo {
  firstName: string
  lastName: string
  email: string
  phone: string
  bestTime: string
  botcheck: string
}

interface ContactErrors {
  firstName?: string
  lastName?: string
  email?: string
  bestTime?: string
  submit?: string
}

interface ScoreResult {
  score: number
  category: 'home-care' | 'afh-sweet-spot' | 'residential' | 'specialized'
  headline: string
  body: string
  isAfhFit: boolean
}

function findQuestion(id: string): Question {
  const q = QUESTIONS.find((x) => x.id === id)
  if (!q) throw new Error(`Question ${id} not found`)
  return q
}

function labelFor(id: string, value: string): string {
  const q = findQuestion(id)
  return q.options.find((o) => o.value === value)?.label ?? value
}

function labelsFor(id: string, values: string[]): string[] {
  return values.map((v) => labelFor(id, v))
}

function computeScore(single: SingleAnswers, multi: MultiAnswers): ScoreResult {
  // Q6 ADLs (excluding "none of these yet")
  const adls = (multi.adls ?? []).filter((v) => v !== 'none')
  let adlScore = 0
  if (adls.length >= 5) adlScore = 30
  else if (adls.length >= 3) adlScore = 20
  else if (adls.length >= 1) adlScore = 10

  // Q7 dementia
  let dementiaScore = 0
  if (single.dementia === 'yes') dementiaScore = 20
  else if (single.dementia === 'suspect') dementiaScore = 10

  // Q8 behaviors (excluding "none")
  const behaviors = (multi.behaviors ?? []).filter((v) => v !== 'none')
  const behaviorScore = Math.min(behaviors.length * 5, 30)

  // Q9 supervision
  let supervisionScore = 0
  if (single.supervision === 'few') supervisionScore = 5
  else if (single.supervision === 'most') supervisionScore = 15
  else if (single.supervision === 'all') supervisionScore = 25
  else if (single.supervision === 'unsure') supervisionScore = 10

  // Q10 medical (excluding "none")
  const medical = (multi.medical ?? []).filter((v) => v !== 'none')
  const medicalScore = Math.min(medical.length * 5, 30)

  const score = adlScore + dementiaScore + behaviorScore + supervisionScore + medicalScore

  if (score <= 20) {
    return {
      score,
      category: 'home-care',
      headline: 'Home care may still be a good fit',
      body: "Based on your answers, your loved one's needs may still be manageable with in-home support, family help, or part-time care. That said, every family situation has nuance that a checklist cannot capture. If anything is weighing on you, we are happy to talk it through, no pressure.",
      isAfhFit: false,
    }
  }

  if (score <= 50) {
    return {
      score,
      category: 'afh-sweet-spot',
      headline: 'An adult family home could be the perfect solution',
      body: 'Your loved one needs more than occasional help, but not the intensity of a large facility. This is exactly the situation an adult family home is built for. Small. Personal. Steady. The kind of care that meets your family where you are.',
      isAfhFit: true,
    }
  }

  if (score <= 80) {
    return {
      score,
      category: 'residential',
      headline: 'Your loved one needs dedicated residential care',
      body: 'The level of need you described calls for full-time, professional care. An adult family home with memory care experience can absolutely meet this need, often with a level of attention that larger facilities simply cannot offer. The 1:3 caregiver ratio at our home was built for situations like yours.',
      isAfhFit: true,
    }
  }

  return {
    score,
    category: 'specialized',
    headline: 'Specialized care is needed',
    body: 'Your loved one has complex needs that may require skilled nursing or specialized medical support. An adult family home with memory care can still be a wonderful fit for many high-acuity residents. We would want to talk through the specifics with you and, if our home is not the right place, help you find one that is.',
    isAfhFit: true,
  }
}

export default function AssessmentForm() {
  const [stepIndex, setStepIndex] = useState(0) // 0..QUESTIONS.length (last = contact)
  const [single, setSingle] = useState<SingleAnswers>({})
  const [multi, setMulti] = useState<MultiAnswers>({})
  const [contact, setContact] = useState<ContactInfo>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    bestTime: '',
    botcheck: '',
  })
  const [errors, setErrors] = useState<ContactErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const [result, setResult] = useState<ScoreResult | null>(null)
  const liveRegionRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)

  const isContactStep = stepIndex === QUESTIONS.length
  const currentQuestion = !isContactStep ? QUESTIONS[stepIndex] : null
  const progressPct = Math.round(((stepIndex + 1) / TOTAL_STEPS) * 100)

  // Scroll focus to top of card on step CHANGE (helps mobile),
  // but skip the initial mount so visitors can read the intro section first.
  const isInitialMount = useRef(true)
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false
      return
    }
    cardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [stepIndex])

  const canAdvance = useMemo(() => {
    if (isContactStep) return true // validation happens on submit
    if (!currentQuestion) return false
    if (currentQuestion.type === 'single') {
      return Boolean(single[currentQuestion.id])
    }
    // multi: optional means user can advance without selection
    if (currentQuestion.optional) return true
    return (multi[currentQuestion.id]?.length ?? 0) > 0
  }, [isContactStep, currentQuestion, single, multi])

  const selectSingle = (questionId: string, value: string) => {
    setSingle((prev) => ({ ...prev, [questionId]: value }))
    // Auto-advance after a brief delay so the user sees their choice highlight.
    // Use the functional setter so we only advance when we're still on the same
    // step the click originated from (guards against the user hitting Back mid-timeout).
    setTimeout(() => {
      setStepIndex((s) =>
        QUESTIONS[s]?.id === questionId ? Math.min(s + 1, QUESTIONS.length) : s
      )
    }, 350)
  }

  const toggleMulti = (questionId: string, value: string) => {
    setMulti((prev) => {
      const existing = prev[questionId] ?? []
      const hasNone = existing.includes('none')
      const isNone = value === 'none'

      let next: string[]
      if (isNone) {
        // "none" clears all others
        next = existing.includes('none') ? [] : ['none']
      } else if (hasNone) {
        // selecting a real option clears "none"
        next = [value]
      } else if (existing.includes(value)) {
        next = existing.filter((v) => v !== value)
      } else {
        // priorities cap at 3
        if (questionId === 'priorities' && existing.length >= PRIORITIES_LIMIT) {
          return prev
        }
        next = [...existing, value]
      }
      return { ...prev, [questionId]: next }
    })
  }

  const goNext = () => {
    setStepIndex((s) => Math.min(s + 1, QUESTIONS.length))
  }

  const goBack = () => {
    setStepIndex((s) => Math.max(s - 1, 0))
  }

  const handleContactChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setContact((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof ContactErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const validateContact = (): boolean => {
    const next: ContactErrors = {}
    if (!contact.firstName.trim()) next.firstName = 'First name is required'
    if (!contact.lastName.trim()) next.lastName = 'Last name is required'
    if (!contact.email.trim()) next.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.email))
      next.email = 'Please enter a valid email address'
    if (!contact.bestTime) next.bestTime = 'Please pick a best time to reach you'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const buildMessage = (scored: ScoreResult): string => {
    const lines: string[] = [
      'Assessment Results:',
      `Score: ${scored.score}/135`,
      `Category: ${scored.headline}`,
      '',
      `Q1 Who: ${labelFor('who', single.who ?? '')}`,
      `Q2 Living: ${labelFor('living', single.living ?? '')}`,
      `Q3 Trigger: ${labelFor('trigger', single.trigger ?? '')}`,
      `Q4 Timeline: ${labelFor('timeline', single.timeline ?? '')}`,
      `Q5 Concerns: ${labelsFor('concerns', multi.concerns ?? []).join(', ') || '(none selected)'}`,
      `Q6 Barriers: ${labelsFor('barriers', multi.barriers ?? []).join(', ') || '(none selected)'}`,
      `Q7 ADLs: ${labelsFor('adls', multi.adls ?? []).join(', ') || '(none selected)'}`,
      `Q8 Dementia: ${labelFor('dementia', single.dementia ?? '')}`,
      `Q9 Behaviors: ${labelsFor('behaviors', multi.behaviors ?? []).join(', ') || '(none selected)'}`,
      `Q10 Supervision: ${labelFor('supervision', single.supervision ?? '')}`,
      `Q11 Medical: ${labelsFor('medical', multi.medical ?? []).join(', ') || '(none selected)'}`,
      `Q12 Priorities: ${labelsFor('priorities', multi.priorities ?? []).join(', ') || '(none selected)'}`,
      `Q13 Payment: ${labelFor('payment', single.payment ?? '')}`,
      `Q14 Area: ${labelFor('area', single.area ?? '')}`,
      `Best time: ${contact.bestTime}`,
    ]
    return lines.join('\n')
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!validateContact()) return
    if (contact.botcheck) {
      // honeypot tripped, silently mark complete
      const scored = computeScore(single, multi)
      setResult(scored)
      setIsComplete(true)
      return
    }
    setIsSubmitting(true)
    setErrors((prev) => ({ ...prev, submit: undefined }))

    const scored = computeScore(single, multi)
    const payload = {
      formType: 'assessment',
      name: `${contact.firstName} ${contact.lastName}`.trim(),
      email: contact.email,
      phone: contact.phone,
      message: buildMessage(scored),
    }

    try {
      await fetch(APPS_SCRIPT_WEBHOOK_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      setResult(scored)
      setIsComplete(true)
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Submission failed'
      setErrors({
        submit: `We could not send your results (${msg}). Please email becca@burienbestcarehome.com or call (253) 678-7089 and we will follow up directly.`,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isComplete && result) {
    return <ResultsCard result={result} firstName={contact.firstName} />
  }

  return (
    <div ref={cardRef} className="max-w-2xl mx-auto">
      {/* Progress bar + step indicator */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm font-semibold uppercase tracking-widest text-[color:var(--color-slate-soft)]">
            {isContactStep ? 'Last step' : `Question ${stepIndex + 1} of ${QUESTIONS.length}`}
          </p>
          <p className="text-sm text-ink-soft font-medium">{progressPct}%</p>
        </div>
        <div
          role="progressbar"
          aria-valuenow={progressPct}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Assessment progress"
          className="h-2 w-full rounded-full bg-[rgba(45,62,74,0.08)] overflow-hidden"
        >
          <motion.div
            className="h-full bg-[color:var(--color-sunshine)]"
            initial={false}
            animate={{ width: `${progressPct}%` }}
            transition={{ type: 'spring', stiffness: 120, damping: 22 }}
          />
        </div>
      </div>

      {/* SR-only live region for step announcements */}
      <div ref={liveRegionRef} className="sr-only" aria-live="polite">
        {isContactStep
          ? 'Final step: share your contact information so we can send your results.'
          : `Step ${stepIndex + 1} of ${TOTAL_STEPS}: ${currentQuestion?.title}`}
      </div>

      <AnimatePresence mode="wait">
        {currentQuestion && (
          <motion.div
            key={`q-${currentQuestion.id}`}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.32, ease: [0.22, 0.61, 0.36, 1] }}
            className="bg-[color:var(--color-bone)] border border-[rgba(45,62,74,0.08)] shadow-[0_1px_0_rgba(255,255,255,0.7)_inset,0_10px_28px_-12px_rgba(45,62,74,0.16),0_2px_6px_rgba(45,62,74,0.05)] rounded-2xl p-6 sm:p-10"
          >
            <h2 className="font-serif text-2xl sm:text-3xl text-forest leading-tight mb-3">
              {currentQuestion.title}
            </h2>
            {currentQuestion.subtitle && (
              <p className="text-ink-soft text-base sm:text-lg mb-6 leading-relaxed">
                {currentQuestion.subtitle}
              </p>
            )}

            {/* Options */}
            <fieldset className="space-y-3">
              <legend className="sr-only">{currentQuestion.title}</legend>
              {currentQuestion.options.map((opt) => {
                const selected =
                  currentQuestion.type === 'single'
                    ? single[currentQuestion.id] === opt.value
                    : (multi[currentQuestion.id] ?? []).includes(opt.value)
                return (
                  <OptionButton
                    key={opt.value}
                    label={opt.label}
                    selected={selected}
                    type={currentQuestion.type}
                    onClick={() => {
                      if (currentQuestion.type === 'single') {
                        selectSingle(currentQuestion.id, opt.value)
                      } else {
                        toggleMulti(currentQuestion.id, opt.value)
                      }
                    }}
                  />
                )
              })}
            </fieldset>

            {/* Priorities hint */}
            {currentQuestion.id === 'priorities' && (
              <p className="text-sm text-ink-soft mt-4">
                {(multi.priorities?.length ?? 0)} of {PRIORITIES_LIMIT} selected
              </p>
            )}

            {/* Nav buttons. Back is hidden on the very first question; Continue
                only renders for multi-select (single-select auto-advances). */}
            <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-3 mt-8">
              {stepIndex > 0 ? (
                <button
                  type="button"
                  onClick={goBack}
                  className="inline-flex items-center justify-center min-h-12 px-6 py-3 rounded-lg border-2 border-[rgba(45,62,74,0.18)] text-forest font-semibold hover:bg-[color:var(--color-sage-light)] transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-[color:var(--color-sunshine)]/40"
                >
                  <span aria-hidden="true" className="mr-2">&larr;</span> Back
                </button>
              ) : (
                <span aria-hidden="true" />
              )}

              {currentQuestion.type === 'multi' && (
                <button
                  type="button"
                  onClick={() => goNext()}
                  disabled={!canAdvance}
                  className="inline-flex items-center justify-center min-h-12 px-8 py-3 rounded-lg border-2 bg-[color:var(--color-sunshine)] border-[color:var(--color-sunshine)] text-[color:var(--color-ink)] font-semibold hover:bg-[color:var(--color-sunshine-deep)] hover:border-[color:var(--color-sunshine-deep)] transition-colors duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-[color:var(--color-sunshine)]/50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Continue <span aria-hidden="true" className="ml-2">&rarr;</span>
                </button>
              )}
            </div>
          </motion.div>
        )}

        {isContactStep && (
          <motion.div
            key="contact-step"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.32, ease: [0.22, 0.61, 0.36, 1] }}
            className="bg-[color:var(--color-bone)] border border-[rgba(45,62,74,0.08)] shadow-[0_1px_0_rgba(255,255,255,0.7)_inset,0_10px_28px_-12px_rgba(45,62,74,0.16),0_2px_6px_rgba(45,62,74,0.05)] rounded-2xl p-6 sm:p-10"
          >
            <h2 className="font-serif text-2xl sm:text-3xl text-forest leading-tight mb-3">
              Where should we send your results?
            </h2>
            <p className="text-ink-soft text-base sm:text-lg mb-8 leading-relaxed">
              We will email you a personalized summary and follow up to talk through what we saw.
            </p>

            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              {/* Honeypot */}
              <input
                type="checkbox"
                name="botcheck"
                checked={!!contact.botcheck}
                onChange={(e) =>
                  setContact((prev) => ({ ...prev, botcheck: e.target.checked ? 'true' : '' }))
                }
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-forest font-semibold mb-2">
                    First Name <span className="text-terracotta-deep">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={contact.firstName}
                    onChange={handleContactChange}
                    aria-required="true"
                    autoComplete="given-name"
                    className={`w-full min-h-12 px-4 py-3 rounded-lg border-2 transition-colors ${
                      errors.firstName
                        ? 'border-terracotta-deep bg-white'
                        : 'border-[rgba(45,62,74,0.18)] focus:border-[color:var(--color-sunshine-deep)]'
                    }`}
                  />
                  {errors.firstName && (
                    <p className="text-terracotta-deep text-sm mt-1 font-medium">{errors.firstName}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-forest font-semibold mb-2">
                    Last Name <span className="text-terracotta-deep">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={contact.lastName}
                    onChange={handleContactChange}
                    aria-required="true"
                    autoComplete="family-name"
                    className={`w-full min-h-12 px-4 py-3 rounded-lg border-2 transition-colors ${
                      errors.lastName
                        ? 'border-terracotta-deep bg-white'
                        : 'border-[rgba(45,62,74,0.18)] focus:border-[color:var(--color-sunshine-deep)]'
                    }`}
                  />
                  {errors.lastName && (
                    <p className="text-terracotta-deep text-sm mt-1 font-medium">{errors.lastName}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="email" className="block text-forest font-semibold mb-2">
                    Email <span className="text-terracotta-deep">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={contact.email}
                    onChange={handleContactChange}
                    aria-required="true"
                    autoComplete="email"
                    className={`w-full min-h-12 px-4 py-3 rounded-lg border-2 transition-colors ${
                      errors.email
                        ? 'border-terracotta-deep bg-white'
                        : 'border-[rgba(45,62,74,0.18)] focus:border-[color:var(--color-sunshine-deep)]'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-terracotta-deep text-sm mt-1 font-medium">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-forest font-semibold mb-2">
                    Phone (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={contact.phone}
                    onChange={handleContactChange}
                    autoComplete="tel"
                    className="w-full min-h-12 px-4 py-3 rounded-lg border-2 border-[rgba(45,62,74,0.18)] focus:border-[color:var(--color-sunshine-deep)] transition-colors"
                    placeholder="(253) 555-0123"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="bestTime" className="block text-forest font-semibold mb-2">
                  Best time to reach you <span className="text-terracotta-deep">*</span>
                </label>
                <select
                  id="bestTime"
                  name="bestTime"
                  value={contact.bestTime}
                  onChange={handleContactChange}
                  aria-required="true"
                  className={`w-full min-h-12 px-4 py-3 rounded-lg border-2 transition-colors ${
                    errors.bestTime
                      ? 'border-terracotta-deep bg-white'
                      : 'border-[rgba(45,62,74,0.18)] focus:border-[color:var(--color-sunshine-deep)]'
                  }`}
                >
                  <option value="">Pick a time</option>
                  <option value="Morning">Morning</option>
                  <option value="Afternoon">Afternoon</option>
                  <option value="Evening">Evening</option>
                </select>
                {errors.bestTime && (
                  <p className="text-terracotta-deep text-sm mt-1 font-medium">{errors.bestTime}</p>
                )}
              </div>

              <p className="text-sm text-ink-soft bg-[color:var(--color-sage-light)] rounded-lg p-4 leading-relaxed">
                We respect your privacy. Your answers are used only to send your results and prepare for a more helpful conversation if you want one.
              </p>

              {errors.submit && (
                <div
                  role="alert"
                  className="bg-terracotta/10 border-2 border-terracotta-deep rounded-lg p-4 text-terracotta-deep font-medium"
                >
                  {errors.submit}
                </div>
              )}

              <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-3 pt-2">
                <button
                  type="button"
                  onClick={goBack}
                  className="inline-flex items-center justify-center min-h-12 px-6 py-3 rounded-lg border-2 border-[rgba(45,62,74,0.18)] text-forest font-semibold hover:bg-[color:var(--color-sage-light)] transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-[color:var(--color-sunshine)]/40"
                >
                  <span aria-hidden="true" className="mr-2">&larr;</span> Back
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center min-h-12 px-8 py-3 rounded-lg border-2 bg-[color:var(--color-sunshine)] border-[color:var(--color-sunshine)] text-[color:var(--color-ink)] font-semibold hover:bg-[color:var(--color-sunshine-deep)] hover:border-[color:var(--color-sunshine-deep)] transition-colors duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-[color:var(--color-sunshine)]/50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'See My Results'}
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}

interface OptionButtonProps {
  label: string
  selected: boolean
  type: QuestionType
  onClick: () => void
}

function OptionButton({ label, selected, type, onClick }: OptionButtonProps) {
  const role = type === 'single' ? 'radio' : 'checkbox'
  return (
    <button
      type="button"
      role={role}
      aria-checked={selected}
      onClick={onClick}
      className={`group w-full text-left min-h-12 px-5 py-4 rounded-xl border-2 flex items-center gap-4 transition-all duration-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-[color:var(--color-sunshine)]/40 ${
        selected
          ? 'border-[color:var(--color-sunshine-deep)] bg-[color:var(--color-sunshine)]/15 shadow-[0_4px_14px_-6px_rgba(154,101,0,0.25)]'
          : 'border-[rgba(45,62,74,0.18)] bg-white hover:border-[color:var(--color-sunshine)] hover:bg-[color:var(--color-sunshine)]/5'
      }`}
    >
      <span
        aria-hidden="true"
        className={`flex-shrink-0 inline-flex items-center justify-center w-6 h-6 ${
          type === 'single' ? 'rounded-full' : 'rounded-md'
        } border-2 transition-colors ${
          selected
            ? 'border-[color:var(--color-sunshine-deep)] bg-[color:var(--color-sunshine)]'
            : 'border-[rgba(45,62,74,0.3)] bg-white group-hover:border-[color:var(--color-sunshine)]'
        }`}
      >
        {selected && type === 'single' && (
          <span className="block w-2.5 h-2.5 rounded-full bg-[color:var(--color-ink)]" />
        )}
        {selected && type === 'multi' && (
          <svg
            viewBox="0 0 16 16"
            className="w-4 h-4 text-[color:var(--color-ink)]"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 8l3.5 3.5L13 5" />
          </svg>
        )}
      </span>
      <span className="text-base sm:text-lg text-forest font-medium leading-snug">{label}</span>
    </button>
  )
}

function ResultsCard({ result, firstName }: { result: ScoreResult; firstName: string }) {
  return (
    <div className="max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 0.61, 0.36, 1] }}
        className="bg-[color:var(--color-bone)] border border-[rgba(45,62,74,0.08)] shadow-[0_1px_0_rgba(255,255,255,0.7)_inset,0_10px_28px_-12px_rgba(45,62,74,0.16),0_2px_6px_rgba(45,62,74,0.05)] rounded-2xl p-6 sm:p-10"
        role="status"
        aria-live="polite"
      >
        <div aria-hidden="true" className="w-12 h-1 bg-[color:var(--color-sunshine)] rounded-full mb-6" />
        <p className="uppercase tracking-widest text-xs font-semibold text-[color:var(--color-slate-soft)] mb-3">
          Your Personalized Assessment
        </p>
        <h1 className="font-serif text-3xl sm:text-4xl text-forest leading-tight mb-4">
          {firstName ? `${firstName}, here’s what we’d suggest.` : 'Here’s what we’d suggest.'}
        </h1>

        <div className="bg-[color:var(--color-sage-light)] rounded-xl p-5 sm:p-6 mb-6">
          <p className="text-sm uppercase tracking-widest font-semibold text-[color:var(--color-sunshine-deep)] mb-2">
            Care Need Score: {result.score} / 135
          </p>
          <p className="font-serif text-2xl sm:text-3xl text-forest leading-tight">
            {result.headline}
          </p>
        </div>

        <p className="text-ink-soft text-base sm:text-lg leading-relaxed mb-6">
          {result.body}
        </p>

        {result.isAfhFit && (
          <div className="border-t border-[color:var(--color-sunshine)]/30 pt-6 mb-6">
            <h2 className="font-serif text-xl sm:text-2xl text-forest mb-3 leading-tight">
              Why families choose Burien Best Care Home
            </h2>
            <ul className="space-y-2 text-ink-soft leading-relaxed">
              <li className="flex gap-3">
                <span aria-hidden="true" className="text-[color:var(--color-sunshine-deep)] font-bold">&middot;</span>
                <span>Small home, up to 8 residents, so your loved one is known by name.</span>
              </li>
              <li className="flex gap-3">
                <span aria-hidden="true" className="text-[color:var(--color-sunshine-deep)] font-bold">&middot;</span>
                <span>1 to 3 caregiver ratio, which is uncommon in larger facilities.</span>
              </li>
              <li className="flex gap-3">
                <span aria-hidden="true" className="text-[color:var(--color-sunshine-deep)] font-bold">&middot;</span>
                <span>Memory care experience, including support for sundowning and wandering.</span>
              </li>
              <li className="flex gap-3">
                <span aria-hidden="true" className="text-[color:var(--color-sunshine-deep)] font-bold">&middot;</span>
                <span>Home-cooked meals and a real home environment, not a clinical setting.</span>
              </li>
              <li className="flex gap-3">
                <span aria-hidden="true" className="text-[color:var(--color-sunshine-deep)] font-bold">&middot;</span>
                <span>Medicaid accepted, so private pay is not the only path.</span>
              </li>
            </ul>
          </div>
        )}

        {!result.isAfhFit && (
          <div className="border-t border-[color:var(--color-sunshine)]/30 pt-6 mb-6">
            <h2 className="font-serif text-xl sm:text-2xl text-forest mb-3 leading-tight">
              Where to go from here
            </h2>
            <p className="text-ink-soft leading-relaxed mb-3">
              If you would like a friendly second opinion, Becca is happy to talk through your situation and point you toward the right kind of help. Even if we are not the right fit today, we can help you find one that is.
            </p>
            <p className="text-ink-soft leading-relaxed">
              In the meantime, our Your Best Season resources at{' '}
              <a
                href="https://www.yourbestseason.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-forest font-semibold underline decoration-2 underline-offset-4 decoration-[color:var(--color-sunshine)]/60 hover:decoration-[color:var(--color-sunshine-deep)]"
              >
                yourbestseason.com
              </a>{' '}
              cover home care, planning ahead, and the questions families ask most.
            </p>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <Link
            href="/contact#visit-form"
            className="inline-flex items-center justify-center flex-1 min-h-12 px-6 py-3 rounded-lg border-2 bg-[color:var(--color-sunshine)] border-[color:var(--color-sunshine)] text-[color:var(--color-ink)] font-semibold hover:bg-[color:var(--color-sunshine-deep)] hover:border-[color:var(--color-sunshine-deep)] transition-colors duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-[color:var(--color-sunshine)]/50"
          >
            Schedule a Visit
          </Link>
          <a
            href="tel:+12536787089"
            className="inline-flex items-center justify-center flex-1 min-h-12 px-6 py-3 rounded-lg border-2 border-forest text-forest font-semibold hover:bg-[color:var(--color-sage-light)] transition-colors duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-[color:var(--color-sunshine)]/40"
          >
            Call (253) 678-7089
          </a>
        </div>

        <div className="mt-6 pt-6 border-t border-[rgba(45,62,74,0.08)]">
          <a
            href="/family-guide.pdf"
            download
            className="inline-flex items-center text-forest hover:text-[color:var(--color-sunshine-deep)] font-semibold underline underline-offset-4 decoration-2 decoration-[color:var(--color-sunshine)]/60 hover:decoration-[color:var(--color-sunshine-deep)] transition-colors"
          >
            Download Our Family Guide <span aria-hidden="true" className="ml-2">&darr;</span>
          </a>
          <p className="text-sm text-ink-soft mt-2">
            A printable PDF with our care philosophy, what to ask any facility, and pricing context.
          </p>
        </div>
      </motion.div>

      <p className="text-center text-sm text-ink-soft mt-6 leading-relaxed">
        You&rsquo;re doing the right thing by exploring this. Whatever you decide next, your family is lucky to have you in their corner.
      </p>
    </div>
  )
}
