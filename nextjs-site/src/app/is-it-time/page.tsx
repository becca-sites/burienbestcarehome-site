import type { Metadata } from 'next'
import Script from 'next/script'
import AssessmentForm from '@/components/AssessmentForm'

export const metadata: Metadata = {
  title: 'Is It Time? A Free Care Evaluation',
  description:
    'A free, compassionate evaluation to help families decide if it is time to place a parent or spouse in care, and what kind of care is the right fit. Takes about 3 minutes.',
  keywords: [
    'is it time for assisted living quiz',
    'senior care assessment',
    'when to move parent to care home',
    'adult family home assessment',
    'memory care quiz',
    'is my parent ready for assisted living',
  ],
  alternates: {
    canonical: '/is-it-time',
  },
  openGraph: {
    title: 'Is It Time? A Free Care Evaluation',
    description:
      'A free, compassionate evaluation to help families decide if it is time to place a parent or spouse in care.',
    url: 'https://burienbestcarehome.com/is-it-time',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Is It Time? A Free Care Evaluation | Burien Best Care Home',
    description:
      'A free, compassionate evaluation to help families decide if it is time to place a parent or spouse in care.',
  },
}

const faqItems = [
  {
    question: 'How do I know if it is time to move my parent to assisted living or a care home?',
    answer:
      'Common signals include frequent falls, missed medications, weight loss, social withdrawal, caregiver burnout, and a recent hospitalization. Our short evaluation walks through these in a structured way so you can see the full picture without guessing. There is no single right answer, but most families find clarity in seeing the signals listed side by side.',
  },
  {
    question: 'What is the difference between home care and an adult family home?',
    answer:
      'Home care is part-time help that comes to your loved one in their own house. An adult family home is a small residential care setting, usually with up to eight residents, where care is provided around the clock in a real home. Home care is often a great first step when needs are light. Adult family homes are typically the right fit when 24/7 supervision, daily living help, or memory care is needed.',
  },
  {
    question: 'When should someone with dementia move to memory care?',
    answer:
      'There is no exact timeline, but most families move toward memory care when their loved one wanders, becomes agitated in the evenings (sundowning), no longer recognizes family, or refuses bathing and meals. Safety risk is usually the tipping point. A small adult family home with memory care training can be the right environment when these behaviors emerge.',
  },
  {
    question: 'How long does this evaluation take?',
    answer:
      'About three minutes. There are roughly thirteen short questions and you can go back at any step. At the end you will see a personalized recommendation. Whether or not our home is the right fit, we are happy to talk through your options. No sales pressure.',
  },
]

export default function AssessmentPage() {
  return (
    <>
      <Script
        id="assessment-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqItems.map((item) => ({
              '@type': 'Question',
              name: item.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer,
              },
            })),
          }),
        }}
      />

      <Script
        id="assessment-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://burienbestcarehome.com',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Is It Time? Evaluation',
                item: 'https://burienbestcarehome.com/is-it-time',
              },
            ],
          }),
        }}
      />

      {/* Hero */}
      <section
        aria-labelledby="assessment-hero-headline"
        className="pt-28 pb-12 sm:pt-32 sm:pb-16 px-4 sm:px-6 lg:px-8 bg-transparent"
      >
        <div className="max-w-3xl mx-auto text-center">
          <p className="uppercase tracking-widest text-xs sm:text-sm font-semibold text-[color:var(--color-sunshine-deep)] mb-4">
            Free Care Evaluation
          </p>
          <h1
            id="assessment-hero-headline"
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-forest leading-[1.15] mb-5"
          >
            Is it time for{' '}
            <span className="italic text-[color:var(--color-slate)] underline decoration-2 underline-offset-4 decoration-[color:var(--color-sunshine-deep)]">
              care
            </span>
            ? This free evaluation will help you&nbsp;decide.
          </h1>
          <p className="text-ink-soft text-lg sm:text-xl leading-relaxed mb-3">
            Thirteen short questions, which will take about three minutes and will end with a personalized recommendation.
          </p>
          <p className="text-ink-soft text-base sm:text-lg leading-relaxed">
            Think about each question and be sure to answer as openly and honestly as possible for the most useful results.
          </p>
        </div>
      </section>

      {/* Assessment form */}
      <section className="pb-20 sm:pb-24 px-4 sm:px-6 lg:px-8 bg-transparent">
        <AssessmentForm />
      </section>

      {/* Reassurance + alternative CTA */}
      <section className="pb-20 sm:pb-24 px-4 sm:px-6 lg:px-8 bg-transparent">
        <div className="max-w-2xl mx-auto text-center glass-panel p-8 sm:p-10">
          <h2 className="font-serif text-2xl sm:text-3xl text-forest leading-tight mb-3">
            Would rather just talk to someone?
          </h2>
          <p className="text-ink-soft text-base sm:text-lg leading-relaxed mb-6">
            Call us directly. We will listen and help you figure out the next right step for your family.
          </p>
          <a
            href="tel:+12536787089"
            className="inline-flex items-center justify-center min-h-12 px-8 py-4 rounded-lg border-2 bg-[color:var(--color-sunshine)] border-[color:var(--color-sunshine)] text-[color:var(--color-ink)] font-semibold hover:bg-[color:var(--color-sunshine-deep)] hover:border-[color:var(--color-sunshine-deep)] transition-colors duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-[color:var(--color-sunshine)]/50"
          >
            Call (253) 678-7089
          </a>
        </div>
      </section>
    </>
  )
}
