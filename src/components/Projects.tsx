import { WorksWheel, type WorksWheelItem } from '@/components/ui/works-wheel'
import { projects } from '../data'

const unsplash = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=80`

// Stock cover art, one per project (cycled if there are more projects than images).
const COVERS = [
  'photo-1554224155-6726b3ff858f', // finance / accounting
  'photo-1461749280684-dccba630e2f6', // code on screen
  'photo-1639762681485-074b7f938ba0', // blockchain
  'photo-1556742049-0cfed4f6a45d', // e-commerce
  'photo-1550751827-4bd374c3f58b', // cyber
  'photo-1518770660439-4636190af475', // circuit
].map(unsplash)

const items: WorksWheelItem[] = projects.map((p, i) => ({
  title: p.title,
  image: COVERS[i % COVERS.length],
}))

export default function Projects() {
  return (
    <section id="projects" className="h-svh min-h-[34rem] border-y border-paper/10">
      <WorksWheel items={items} label="Selected work" className="font-display" />
    </section>
  )
}
