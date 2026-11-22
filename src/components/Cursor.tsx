import { useEffect, useRef } from 'react'
import { gsap, finePointer, reducedMotion } from '../lib/motion'

/** Desktop-only custom cursor + magnetic hover for [data-magnetic] elements. */
export function Cursor() {
  const dot = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!finePointer || reducedMotion || !dot.current) return
    const el = dot.current
    document.documentElement.classList.add('has-cursor')
    const x = gsap.quickTo(el, 'x', { duration: 0.2, ease: 'power3' })
    const y = gsap.quickTo(el, 'y', { duration: 0.2, ease: 'power3' })
    let active: HTMLElement | null = null

    const release = (t: HTMLElement | null) => {
      if (t) gsap.to(t, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.5)' })
    }
    const move = (e: PointerEvent) => {
      x(e.clientX)
      y(e.clientY)
      const target = e.target as HTMLElement
      const mag = target.closest<HTMLElement>('[data-magnetic]')
      const link = target.closest('a,button')
      gsap.to(el, { scale: link ? 3 : 1, opacity: link ? 0.9 : 1, duration: 0.25, overwrite: 'auto' })
      if (mag !== active) {
        release(active)
        active = mag
      }
      if (mag) {
        const r = mag.getBoundingClientRect()
        gsap.to(mag, {
          x: (e.clientX - (r.left + r.width / 2)) * 0.3,
          y: (e.clientY - (r.top + r.height / 2)) * 0.3,
          duration: 0.3,
          ease: 'power3.out',
        })
      }
    }
    const leave = () => {
      release(active)
      active = null
    }
    window.addEventListener('pointermove', move, { passive: true })
    document.documentElement.addEventListener('pointerleave', leave)
    return () => {
      window.removeEventListener('pointermove', move)
      document.documentElement.removeEventListener('pointerleave', leave)
      document.documentElement.classList.remove('has-cursor')
    }
  }, [])
  if (!finePointer || reducedMotion) return null
  return <div ref={dot} aria-hidden className="cursor-dot" />
}
