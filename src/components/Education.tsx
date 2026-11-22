import { useRef } from 'react'
import { education } from '../data'
import { useReveal } from '../lib/useReveal'
import { SectionHead } from './SectionHead'

export function Education() {
  const ref = useRef<HTMLElement>(null)
  useReveal(ref)
  return (
    <section id="education" ref={ref} className="border-t border-paper/10 py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-10">
        <SectionHead index="05" label="Education" title="Education and courses." />
        <ul className="mt-14 border-b border-paper/15 lg:mt-16">
          {education.map((e) => (
            <li key={e.title} data-reveal className="grid gap-1 border-t border-paper/15 py-6 md:grid-cols-12 md:gap-10">
              <span className="text-xs uppercase tracking-[0.14em] text-paper/60 md:col-span-3 md:pt-2">{e.period}</span>
              <div className="md:col-span-9">
                <h3 className="font-display text-2xl leading-snug sm:text-3xl">{e.title}</h3>
                <p className="text-paper/70">{e.where}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
