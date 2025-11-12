import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About() {
  const sections = [
    { title: 'Where AI meets Emotion', body: 'AI Anime Realm fuses modern generative models with cinematic anime direction. The result is a living art book: loops, characters and moments that feel both futuristic and nostalgic.' },
    { title: 'Craft', body: 'We combine text-to-video, diffusion, control nets and hand-tuned motion curves. Assets are optimized to WebM/AVIF with lazy loading to keep the experience feather‑light.' },
    { title: 'Community', body: 'We believe in open inspiration. Follow our work, remix prompts, contribute loops, and help us push anime into new dimensions.' },
  ]

  return (
    <div className="min-h-[100svh] bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-white">
      <Navbar />
      <main className="pt-28 pb-24">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="text-3xl md:text-5xl font-bold">About the Project</h1>
          <p className="mt-3 text-white/70">A short story about creativity augmented by code.</p>

          <div className="mt-10 space-y-10">
            {sections.map((s, i) => (
              <motion.section key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.6, delay: i*0.1 }} className="prose prose-invert max-w-none">
                <h2 className="text-2xl md:text-3xl font-semibold">{s.title}</h2>
                <p className="text-white/80 leading-relaxed">{s.body}</p>
              </motion.section>
            ))}
          </div>

          <section className="mt-12 rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
            <h3 className="font-semibold">Credits</h3>
            <ul className="mt-3 text-white/80 space-y-2 list-disc list-inside">
              <li>Creators: The AI Anime Realm collective</li>
              <li>Tools: Stable Video Diffusion, ControlNet, Deforum, After Effects</li>
              <li>Code: React, Vite, Tailwind, Framer Motion, Spline</li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href="https://github.com/" className="rounded-xl px-4 py-2 bg-white/10 border border-white/10 text-white/80 hover:text-white">GitHub</a>
              <a href="https://discord.com/" className="rounded-xl px-4 py-2 bg-white/10 border border-white/10 text-white/80 hover:text-white">Discord</a>
              <a href="https://www.patreon.com/" className="rounded-xl px-4 py-2 bg-white/10 border border-white/10 text-white/80 hover:text-white">Patreon</a>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
