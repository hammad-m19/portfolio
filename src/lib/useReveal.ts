import { useLayoutEffect, type RefObject } from 'react'
import { gsap, ScrollTrigger, reducedMotion } from './motion'

/** Scroll-triggered reveals: [data-reveal] fades/rises, [data-line] slides up inside a mask. */
export function useReveal(ref: RefObject<HTMLElement | null>) {
  useLayoutEffect(() => {
    if (reducedMotion || !ref.current) return
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 90%', once: true },
          },
        )
      })
      gsap.utils.toArray<HTMLElement>('[data-line]').forEach((el) => {
        gsap.fromTo(
          el,
          { yPercent: 110 },
          {
            yPercent: 0,
            duration: 1,
            ease: 'power4.out',
            scrollTrigger: { trigger: el.parentElement, start: 'top 92%', once: true },
          },
        )
      })
    }, ref)
    ScrollTrigger.refresh()
    return () => ctx.revert()
  }, [ref])
}
