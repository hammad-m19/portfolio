import { useLayoutEffect, useRef } from 'react'
import { projects } from '../data'
import { gsap, ScrollTrigger, reducedMotion } from '../lib/motion'
import { useReveal } from '../lib/useReveal'
import { SectionHead } from './SectionHead'

export default function Projects() {
  const root = useRef<HTMLElement>(null)
  const track = useRef<HTMLUListElement>(null)
  const bar = useRef<HTMLDivElement>(null)
  useReveal(root)

  // Pinned horizontal scroll on desktop; native snap scrolling elsewhere.
  useLayoutEffect(() => {
    if (reducedMotion || !root.current) return
    const mm = gsap.matchMedia()
    mm.add('(min-width: 1024px)', () => {
      const dist = () => Math.max(0, (track.current?.scrollWidth ?? 0) - window.innerWidth)
      gsap.to(track.current, {
        x: () => -dist(),
        ease: 'none',
        scrollTrigger: {
          trigger: root.current,
          start: 'top top',
          end: () => `+=${dist()}`,
          pin: true,
          scrub: 0.6,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      })
      gsap.fromTo(
        bar.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: 'none',
          scrollTrigger: { trigger: root.current, start: 'top top', end: () => `+=${dist()}`, scrub: true },
        },
      )
    })
    ScrollTrigger.refresh()
    return () => mm.revert()
  }, [])

  return (
    <section
      id="projects"
      ref={root}
      className="border-t border-paper/10 py-24 motion-safe:lg:flex motion-safe:lg:h-screen motion-safe:lg:flex-col motion-safe:lg:justify-center motion-safe:lg:overflow-hidden motion-safe:lg:py-0 motion-safe:lg:pt-14"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-10">
        <SectionHead index="03" label="Projects" title="Selected work." />
      </div>
      <ul
        ref={track}
        className="scroll-x mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-6 sm:px-10 motion-safe:lg:mt-8 motion-safe:lg:w-max motion-safe:lg:snap-none motion-safe:lg:overflow-visible motion-safe:lg:pb-0 motion-safe:lg:pl-[max(2.5rem,calc((100vw-1280px)/2+2.5rem))]"
        aria-label="Projects"
      >
        {projects.map((p, i) => (
          <li
            key={p.title}
            data-reveal
            className={`flex shrink-0 snap-start flex-col border border-paper/15 p-6 sm:p-8 ${
              p.featured ? 'w-[86vw] border-t-2 border-t-accent sm:w-[600px]' : 'w-[80vw] sm:w-[400px]'
            } min-h-[22rem] lg:h-[min(52vh,420px)] lg:min-h-0`}
          >
            <div className="mb-6 flex items-baseline justify-between text-xs uppercase tracking-[0.14em]">
              <span className="text-paper/60">{String(i + 1).padStart(2, '0')}</span>
              <span className={p.featured ? 'text-accent' : 'text-paper/60'}>{p.kind}</span>
            </div>
            <h3 className={`font-display leading-[1.05] ${p.featured ? 'text-4xl sm:text-5xl' : 'text-3xl sm:text-4xl'}`}>
              {p.title}
            </h3>
            <p className="mt-4 max-w-md text-paper/70">{p.description}</p>
            <ul className="mt-auto flex flex-wrap gap-2 pt-6" aria-label="Tech stack">
              {p.stack.map((s) => (
                <li key={s} className="border border-paper/20 px-2 py-0.5 text-xs text-paper/80">
                  {s}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <div aria-hidden className="mx-auto mt-8 hidden w-full max-w-[1280px] px-10 motion-safe:lg:block">
        <div className="h-px bg-paper/15">
          <div ref={bar} className="h-px origin-left bg-accent" style={{ transform: 'scaleX(0)' }} />
        </div>
      </div>
    </section>
  )
}
