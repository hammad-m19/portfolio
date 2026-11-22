import { useRef } from 'react'
import { profile } from '../data'
import { useReveal } from '../lib/useReveal'
import { SectionHead } from './SectionHead'

export function Contact() {
  const ref = useRef<HTMLElement>(null)
  useReveal(ref)
  const rows = [
    { label: 'Email', text: profile.email, href: `mailto:${profile.email}` },
    { label: 'LinkedIn', text: 'muhammad-hammad-mahmood', href: profile.linkedin },
    { label: 'GitHub', text: 'hammad-m19', href: profile.github },
  ]
  return (
    <section id="contact" ref={ref} className="pt-24 md:pt-32">
      <div className="card mx-auto grid max-w-[1280px] gap-10 p-8 sm:p-12 lg:grid-cols-12 lg:mx-10 xl:mx-auto">
        <div className="lg:col-span-5">
          <SectionHead index="06" label="Contact" title="Get in touch." />
          <p data-reveal className="mt-6 max-w-sm text-paper/70">
            Open to software engineering, full-stack and internship roles.
          </p>
          <a
            data-reveal
            data-magnetic
            href={`mailto:${profile.email}`}
            className="mt-8 inline-block rounded-full bg-accent px-7 py-4 text-sm font-medium uppercase tracking-[0.12em] text-ink"
          >
            Send an email
          </a>
        </div>
        <ul className="lg:col-span-6 lg:col-start-7">
          {rows.map((r) => (
            <li key={r.label} data-reveal className="border-t border-paper/15 py-5 last:border-b">
              <span className="block text-xs uppercase tracking-[0.14em] text-paper/60">{r.label}</span>
              <a
                href={r.href}
                {...(r.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="break-all font-display text-2xl transition-colors hover:text-accent sm:text-3xl"
              >
                {r.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <footer className="mx-auto mt-24 flex max-w-[1280px] justify-between gap-4 border-t border-paper/10 px-5 py-6 text-xs text-paper/60 sm:px-10">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>{profile.location}</span>
      </footer>
    </section>
  )
}
