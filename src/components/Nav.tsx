import { nav, profile } from '../data'
import { lenis } from '../lib/motion'

export function Nav() {
  const go = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const target = document.querySelector(href)
    if (!target) return
    e.preventDefault()
    if (lenis) lenis.scrollTo(target as HTMLElement, { offset: -56, duration: 1.2 })
    else target.scrollIntoView()
    history.replaceState(null, '', href)
  }
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-paper/10 bg-ink">
      <nav aria-label="Primary" className="mx-auto flex h-14 max-w-[1280px] items-center justify-between px-4 sm:px-10">
        <a
          href="#top"
          onClick={(e) => go(e, '#top')}
          className="hidden font-display text-xl sm:block"
        >
          {profile.firstName.split(' ')[1]}<span className="text-accent">.</span>
        </a>
        <ul className="flex w-full items-center justify-between gap-3 text-[11px] uppercase tracking-[0.08em] sm:w-auto sm:gap-8 sm:text-xs">
          {nav.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                data-magnetic
                onClick={(e) => go(e, l.href)}
                className="inline-block py-2 text-paper/70 transition-colors hover:text-accent"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
