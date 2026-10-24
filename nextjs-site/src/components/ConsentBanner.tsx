'use client'

import { useEffect, useSyncExternalStore } from 'react'

/**
 * Consent gate for Google Analytics 4 on burienbestcarehome.com.
 *
 * Why this exists, so nobody removes it by accident:
 *
 * Washington's My Health My Data Act (RCW 19.373) defines "consumer health
 * data" broadly enough to include INFERENCES about a person's health status
 * drawn from their behaviour, and it covers inferences about the person being
 * researched as well as the researcher. Many of this site's URL paths name a
 * condition directly (/blog/...-dementia-..., /blog/understanding-hospice-care-...,
 * /services#parkinsons-care). GA4 records page_path on every pageview. So an
 * un-gated pageview here is a stored record tying a pseudonymous ID to
 * "this person is researching dementia care."
 *
 * MHMD requires affirmative opt-in consent BEFORE collecting consumer health
 * data, and it carries a private right of action. This component is the
 * mechanism that makes the collection lawful. GA4 must not load without it.
 *
 * Implementation notes:
 * - gtag.js is not loaded until the visitor says yes. Loading it with
 *   consent "denied" is not enough: Consent Mode still sends cookieless pings
 *   that carry the page URL, which is the health inference itself.
 * - Consent Mode v2 defaults are still set to "denied" in layout.tsx with a
 *   beforeInteractive script, as a second guard if GA4 is ever loaded early.
 * - Declining is as easy as accepting (same visual weight). A banner where
 *   "accept" is prominent and "decline" is buried is not freely given consent.
 */

const STORAGE_KEY = 'bbch-consent-v1'
const SSR = 'ssr'

type Choice = 'granted' | 'denied'

declare global {
  interface Window {
    // Defined by the beforeInteractive consent-default script in layout.tsx,
    // so it is always present by the time this component can run.
    gtag?: (...args: unknown[]) => void
  }
}

/* ---------- tiny external store over localStorage ---------- */

const listeners = new Set<() => void>()

function subscribe(onChange: () => void) {
  listeners.add(onChange)
  // Keep other tabs in sync if the visitor changes their mind elsewhere.
  window.addEventListener('storage', onChange)
  return () => {
    listeners.delete(onChange)
    window.removeEventListener('storage', onChange)
  }
}

function getSnapshot(): string | null {
  try {
    return window.localStorage.getItem(STORAGE_KEY)
  } catch {
    // Private browsing or storage disabled. No prior choice on record, so we
    // ask again rather than silently assuming consent.
    return null
  }
}

function getServerSnapshot(): string {
  return SSR
}

function persist(choice: Choice) {
  try {
    window.localStorage.setItem(STORAGE_KEY, choice)
  } catch {
    // If we cannot remember the choice we still honour it for this page view;
    // the visitor will simply be asked again next time.
  }
  listeners.forEach((l) => l())
}

/* ---------- consent plumbing ---------- */

let ga4Loaded = false

function loadGa4(id: string) {
  if (ga4Loaded) return
  ga4Loaded = true
  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`
  document.head.appendChild(script)
  window.gtag?.('js', new Date())
  window.gtag?.('config', id, { anonymize_ip: true })
}

function applyConsent(choice: Choice, ga4Id: string) {
  // window.gtag is defined by the beforeInteractive script in layout.tsx,
  // which runs before React hydrates, so this is never a race.
  window.gtag?.('consent', 'update', { analytics_storage: choice })
  // Only a yes ever loads GA4. A no, or no answer, never fetches gtag.js.
  if (choice === 'granted') loadGa4(ga4Id)
}

/* ---------- component ---------- */

export function ConsentBanner({ ga4Id }: { ga4Id: string }) {
  const stored = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  // Re-apply a remembered choice on every load. This is an external-system
  // sync (telling gtag what the visitor already decided), which is exactly
  // what effects are for.
  useEffect(() => {
    if (stored === 'granted' || stored === 'denied') {
      applyConsent(stored, ga4Id)
    }
  }, [stored, ga4Id])

  const decided = stored === 'granted' || stored === 'denied'
  if (stored === SSR || decided) return null

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Privacy choices"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-black/10 bg-white p-4 shadow-lg sm:p-5"
    >
      <div className="mx-auto flex max-w-4xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-ink text-sm leading-relaxed">
          We use Google Analytics to understand which pages families find
          helpful. Because the pages you read here can reveal health
          information about you or someone you care for, we only turn it on if
          you say yes. Saying no will not change anything about how this site
          works for you.
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => persist('denied')}
            className="min-h-[48px] rounded-md border border-black/20 px-5 py-2 text-base font-medium"
          >
            No thanks
          </button>
          <button
            type="button"
            onClick={() => persist('granted')}
            className="min-h-[48px] rounded-md border border-black/20 px-5 py-2 text-base font-medium"
          >
            That&rsquo;s fine
          </button>
        </div>
      </div>
    </div>
  )
}
