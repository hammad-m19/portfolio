import { useRef } from 'react'
import { experience } from '../data'
import { useReveal } from '../lib/useReveal'
import { SectionHead } from './SectionHead'

export function Experience() {
  const ref = useRef<HTMLElement>(null)
  useReveal(ref)
  return (
    <section id="experience" ref={ref} className="border-t border-paper/10 py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-10">
        <SectionHead index="02" label="Experience" title="Where I have worked." />
        <ol className="mt-14 border-l border-paper/20 md:ml-[calc(41.666%-1px)] lg:mt-16">
          {experience.map((job) => (
            <li key={job.company} data-reveal className="relative pb-14 pl-7 last:pb-0 md:pl-10">
              <span aria-hidden className="absolute -left-[5px] top-[0.7rem] h-[9px] w-[9px] bg-accent" />
              <p className="mb-2 text-xs uppercase tracking-[0.14em] text-paper/60">
                {job.period} · {job.place}
              </p>
              <h3 className="font-display text-3xl leading-tight sm:text-4xl">{job.company}</h3>
              <p className="mb-5 mt-1 text-sm text-accent">{job.role}</p>
              <ul className="max-w-xl space-y-2 text-paper/70">
                {job.points.map((pt) => (
                  <li key={pt} className="flex gap-3">
                    <span aria-hidden className="text-paper/40">—</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
