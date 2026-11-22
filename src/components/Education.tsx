import { useRef } from 'react'
import { education } from '../data'
import { useReveal } from '../lib/useReveal'
import { SectionHead } from './SectionHead'

export function Education() {
  const ref = useRef<HTMLElement>(null)
  useReveal(ref)
  return (
    <section id="education" ref={ref} className="band py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-10">
        <SectionHead index="05" label="Education" title="Education and courses." />
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {education.map((e) => (
            <li key={e.title} data-reveal className="card flex flex-col gap-3 p-6">
              <span className="text-xs uppercase tracking-[0.14em] text-accent">{e.period}</span>
              <div>
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
