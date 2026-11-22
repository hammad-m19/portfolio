import { useRef } from 'react'
import { skills } from '../data'
import { useReveal } from '../lib/useReveal'
import OrbitingSkills from '@/components/ui/orbiting-skills'
import { SectionHead } from './SectionHead'

export function Skills() {
  const ref = useRef<HTMLElement>(null)
  useReveal(ref)
  return (
    <section id="skills" ref={ref} className="py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-10">
        <SectionHead index="04" label="Skills" title="What I work with." />
        <div className="mt-14 grid items-center gap-10 lg:mt-16 lg:grid-cols-12">
          <div aria-hidden className="relative flex justify-center overflow-hidden lg:col-span-5">
            <OrbitingSkills />
          </div>
          <dl className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
          {skills.map((s) => (
            <div key={s.group} data-reveal className="card p-6">
              <dt className="text-xs uppercase tracking-[0.14em] mb-4 block text-accent">{s.group}</dt>
              <dd className="m-0">
                <ul className="flex flex-wrap gap-2 text-sm">
                  {s.items.map((it) => (
                    <li key={it}>
                      <span className="inline-block rounded-full border border-paper/15 bg-paper/5 px-3 py-1 text-paper/85 transition-colors hover:border-accent hover:text-accent">
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
      </div>
    </section>
  )
}
