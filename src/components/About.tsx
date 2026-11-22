import { useRef } from 'react'
import { about } from '../data'
import { useReveal } from '../lib/useReveal'
import { SectionHead } from './SectionHead'

export function About() {
  const ref = useRef<HTMLElement>(null)
  useReveal(ref)
  return (
    <section id="about" ref={ref} className="py-24 md:py-32">
      <div className="mx-auto grid max-w-[1280px] gap-10 px-5 sm:px-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHead index="01" label="About" title="Short version." />
        </div>
        <div className="space-y-5 lg:col-span-6 lg:col-start-7">
          {about.map((p, i) => (
            <p key={i} data-reveal className={i === 0 ? 'font-display text-2xl leading-snug sm:text-3xl' : 'text-paper/70'}>
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
