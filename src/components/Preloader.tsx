import { useLayoutEffect, useRef } from 'react'
import { gsap } from '../lib/motion'

export function Preloader({ onDone }: { onDone: () => void }) {
  const wrap = useRef<HTMLDivElement>(null)
  const num = useRef<HTMLSpanElement>(null)
  useLayoutEffect(() => {
    const state = { v: 0 }
    const tl = gsap.timeline({ onComplete: onDone })
    tl.to(state, {
      v: 100,
      duration: 0.7,
      ease: 'power2.inOut',
      onUpdate: () => {
        if (num.current) num.current.textContent = String(Math.round(state.v)).padStart(3, '0')
      },
    }).to(wrap.current, { yPercent: -100, duration: 0.4, ease: 'power3.inOut' }, '>+0.02')
    return () => {
      tl.kill()
    }
  }, [onDone])
  return (
    <div ref={wrap} aria-hidden className="fixed inset-0 z-[90] flex items-end justify-between bg-ink p-5 sm:p-10">
      <span className="text-xs uppercase tracking-[0.18em] text-paper/60">Loading</span>
      <span ref={num} className="font-display text-7xl leading-none text-accent sm:text-8xl">000</span>
    </div>
  )
}
