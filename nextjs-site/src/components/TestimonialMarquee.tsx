'use client'

import { useState } from 'react'
import GlassCard from './GlassCard'

interface Testimonial {
  quote: string
  author: string
}

const testimonials: Testimonial[] = [
  {
    quote:
      'Very friendly staff, clean and warm environment. My mom has lived at Burien Best Care for close to five years and we couldn\u2019t be happier.',
    author: 'Natalie Sherman, Daughter of Resident',
  },
  {
    quote:
      'I was very happy for the care that was given to my husband . His room was also clean and so were his cloths that he had on. Also then made sure he had his meals on time and gave him help if need with eating. He was very happy there in all the years he was a resident',
    author: 'Judy Wait, Wife of Resident',
  },
  {
    quote:
      'My mom was there for 2.5 years, and she received the best care. The whole house & her room was always clean, they gave her meds on time & were good about making any changes needed to her meds. Right now there have a lovely family taking care of the residents, and they are very kind, helpful, and professional people. It\u2019s a good set-up because my mom got to hear children playing in the living room and that was a blessing for her mother\u2019s heart! I can\u2019t say enough good about the home, the staff, and the management team who regularly supports the caregivers & the home, too. Just fantastic care!',
    author: 'Sandra, Daughter of Resident',
  },
]

export default function TestimonialMarquee() {
  const [isPaused, setIsPaused] = useState(false)

  // Duplicate the array so the CSS animation loops seamlessly
  const loop = [...testimonials, ...testimonials]

  return (
    <div
      className="relative overflow-hidden group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      {/* Edge fade masks for polished marquee edges */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-[color:var(--color-bone)] to-transparent z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-[color:var(--color-bone)] to-transparent z-10"
      />

      <div
        className="flex gap-6 md:gap-8 marquee-track py-4"
        style={{
          animationPlayState: isPaused ? 'paused' : 'running',
        }}
      >
        {loop.map((t, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-[85vw] sm:w-[420px]"
            tabIndex={0}
          >
            <GlassCard variant="solid" className="p-8 h-full flex flex-col min-h-[280px]">
              <p
                aria-hidden="true"
                className="text-6xl text-[color:var(--color-sunshine-deep)] font-serif leading-none mb-2 select-none"
              >
                &ldquo;
              </p>
              <p className="text-ink-soft leading-relaxed flex-grow italic">
                {t.quote}
              </p>
              <div className="mt-6 pt-4">
                <span aria-hidden="true" className="block h-0.5 w-10 bg-[color:var(--color-sunshine-deep)] mb-3 rounded-full" />
                <p className="text-forest font-semibold uppercase tracking-wide text-sm">
                  {t.author}
                </p>
              </div>
            </GlassCard>
          </div>
        ))}
      </div>

      <style jsx>{`
        .marquee-track {
          width: max-content;
          animation: marquee 60s linear infinite;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none;
          }
        }
      `}</style>
    </div>
  )
}
