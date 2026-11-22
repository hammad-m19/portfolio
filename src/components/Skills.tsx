import { useRef } from 'react'
import { skills } from '../data'
import { useReveal } from '../lib/useReveal'
import { SectionHead } from './SectionHead'

export function Skills() {
  const ref = useRef<HTMLElement>(null)
  useReveal(ref)
  return (
    <section id="skills" ref={ref} className="border-t border-paper/10 py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-10">
        <SectionHead index="04" label="Skills" title="What I work with." />
        <dl className="mt-14 border-b border-paper/15 lg:mt-16">
          {skills.map((s) => (
            <div key={s.group} data-reveal className="grid gap-3 border-t border-paper/15 py-6 md:grid-cols-12 md:gap-10">
              <dt className="text-xs uppercase tracking-[0.14em] text-paper/60 md:col-span-3 md:pt-2">{s.group}</dt>
              <dd className="m-0 md:col-span-9">
                <ul className="flex flex-wrap gap-x-6 gap-y-1 font-display text-2xl leading-snug sm:text-[1.75rem]">
                  {s.items.map((it) => (
                    <li key={it}>
                      <span className="inline-block text-paper/80 transition-[color,transform] duration-300 hover:-translate-y-0.5 hover:text-accent">
                        {it}
                      </span>
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
