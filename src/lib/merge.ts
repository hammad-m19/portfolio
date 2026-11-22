import { gsap, ScrollTrigger, reducedMotion } from './motion'

// Page tint morphs from one section to the next while scrolling.
const tints = ['#0e0e0c', '#12101c', '#0e1418', '#150f1a', '#0f1512', '#14111e', '#0e0e0c']

export function setupMerge() {
  if (reducedMotion) return () => {}
  const ctx = gsap.context(() => {
    const sections = gsap.utils.toArray<HTMLElement>('main > section')
    sections.forEach((sec, i) => {
      // background colour flows into the next section's colour
      ScrollTrigger.create({
        trigger: sec,
        start: 'top 60%',
        onEnter: () => gsap.to(document.documentElement, { backgroundColor: tints[i % tints.length], duration: 1.2, overwrite: true }),
        onEnterBack: () => gsap.to(document.documentElement, { backgroundColor: tints[i % tints.length], duration: 1.2, overwrite: true }),
      })
      // skip the pinned horizontal section and the hero: transforms would break pinning
      if (sec.id === 'projects' || i === 0) return
      const inner = sec.firstElementChild as HTMLElement | null
      if (!inner) return
      // rises out of the previous section: scale up, un-blur, fade in
      gsap.fromTo(
        inner,
        { scale: 0.92, opacity: 0.2, filter: 'blur(8px)', y: 60 },
        {
          scale: 1, opacity: 1, filter: 'blur(0px)', y: 0, ease: 'none',
          scrollTrigger: { trigger: sec, start: 'top 95%', end: 'top 35%', scrub: true },
        },
      )
    })
  })
  return () => ctx.revert()
}
