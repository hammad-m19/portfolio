import { useLayoutEffect, useRef } from 'react'
import { profile } from '../data'
import { gsap, reducedMotion } from '../lib/motion'

const links = [
  { label: 'GitHub', href: profile.github },
  { label: 'LinkedIn', href: profile.linkedin },
  { label: 'Email', href: `mailto:${profile.email}` },
]

export function Hero({ ready }: { ready: boolean }) {
  const ref = useRef<HTMLElement>(null)
  useLayoutEffect(() => {
    if (!ready || reducedMotion || !ref.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '[data-intro]',
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.09 },
      )
    }, ref)
    return () => ctx.revert()
  }, [ready])

  return (
    <section id="top" ref={ref} className="relative flex min-h-svh items-end overflow-hidden pt-14">
      <div aria-hidden className="grid-bg pointer-events-none absolute inset-0" />
      <div className="relative mx-auto grid w-full max-w-[1280px] gap-12 px-5 pb-16 pt-24 sm:px-10 lg:grid-cols-12 lg:gap-10 lg:pb-24">
        <div className="lg:col-span-7">
          <p data-intro className="mb-6 text-xs uppercase tracking-[0.18em] text-paper/60">
            {profile.location}
          </p>
          <h1 data-intro className="font-display text-[clamp(2.5rem,6vw,4.75rem)] leading-[1.02]">
            {profile.firstName}
            <br />
            <span className="text-paper/60">{profile.lastName}</span>
            <span className="text-accent">.</span>
          </h1>
        </div>
        <div className="lg:col-span-5 lg:pb-2">
          <p data-intro className="mb-5 flex items-center gap-3 text-xs uppercase tracking-[0.14em]">
            <span aria-hidden className="inline-block h-2 w-2 bg-accent" />
            {profile.role}
          </p>
          <p data-intro className="mb-8 max-w-md text-paper/70">
            {profile.oneLiner}
          </p>
          <ul data-intro className="flex flex-wrap gap-x-7 gap-y-2 border-t border-paper/15 pt-5 text-sm">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  data-magnetic
                  {...(l.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="inline-block underline decoration-paper/30 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                >
                  {l.label} <span aria-hidden>↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
