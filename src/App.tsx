import { lazy, Suspense, useCallback, useEffect, useState } from 'react'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Skills } from './components/Skills'
import { Education } from './components/Education'
import { Contact } from './components/Contact'
import { Preloader } from './components/Preloader'
import { Cursor } from './components/Cursor'
import { setupMerge } from './lib/merge'
import { reducedMotion, startSmoothScroll, ScrollTrigger } from './lib/motion'

const Projects = lazy(() => import('./components/Projects'))

export default function App() {
  const [ready, setReady] = useState(reducedMotion)
  const done = useCallback(() => setReady(true), [])

  useEffect(() => {
    startSmoothScroll()
    const refresh = () => ScrollTrigger.refresh()
    window.addEventListener('load', refresh)
    document.fonts?.ready.then(refresh)
    const undo = setupMerge()
    return () => {
      undo()
      window.removeEventListener('load', refresh)
    }
  }, [])

  return (
    <>
      <a
        href="#about"
        className="fixed left-3 top-3 z-[100] -translate-y-20 bg-accent px-3 py-2 text-xs text-ink focus:translate-y-0"
      >
        Skip to content
      </a>
      {!reducedMotion && !ready && <Preloader onDone={done} />}
      <Cursor />
      <Nav />
      <main>
        <Hero ready={ready} />
        <About />
        <Experience />
        <Suspense fallback={<section id="projects" className="min-h-screen" aria-hidden />}>
          <Projects />
        </Suspense>
        <Skills />
        <Education />
        <Contact />
      </main>
    </>
  )
}
