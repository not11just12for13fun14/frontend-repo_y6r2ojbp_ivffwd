import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const DATA = [
  { id: 'stardrift', title: 'Stardrift Over Neo‑Tokyo', genre: 'Sci‑Fi', date: '2025-07-14', tags: ['space', 'city', 'neon'], src: 'https://images.unsplash.com/photo-1747595062006-6cde8e2870f4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTdGFyZHJpZnQlMjBPdmVyJTIwTmVvJUUyJTgwJTkxVG9reW98ZW58MHwwfHx8MTc2MjkyNTE2Nnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', thumb: 'https://images.unsplash.com/photo-1520975928316-56c0d1c00f01?q=80&w=1200&auto=format&fit=crop', description: 'An astronaut glides above a neon city as ribbons of light weave between towers.' },
  { id: 'aurora', title: 'Aurora Shrine', genre: 'Fantasy', date: '2025-06-02', tags: ['forest', 'spirit', 'light'], src: 'https://images.unsplash.com/photo-1747595062006-6cde8e2870f4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTdGFyZHJpZnQlMjBPdmVyJTIwTmVvJUUyJTgwJTkxVG9reW98ZW58MHwwfHx8MTc2MjkyNTE2Nnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', thumb: 'https://images.unsplash.com/photo-1520975661595-6453be3f7070?q=80&w=1200&auto=format&fit=crop', description: 'A shrine bathed in aurora with luminous spirits drifting through the air.' },
  { id: 'kiss', title: 'Skybound Promise', genre: 'Romance', date: '2025-05-10', tags: ['sky', 'clouds', 'dream'], src: 'https://images.unsplash.com/photo-1747595062006-6cde8e2870f4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTdGFyZHJpZnQlMjBPdmVyJTIwTmVvJUUyJTgwJTkxVG9reW98ZW58MHwwfHx8MTc2MjkyNTE2Nnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', thumb: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop', description: 'Two souls meet above drifting clouds while time pauses around them.' },
  { id: 'mecha', title: 'Mecha Alley', genre: 'Action', date: '2025-03-18', tags: ['mecha', 'rain', 'alley'], src: 'https://images.unsplash.com/photo-1747595062006-6cde8e2870f4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTdGFyZHJpZnQlMjBPdmVyJTIwTmVvJUUyJTgwJTkxVG9reW98ZW58MHwwfHx8MTc2MjkyNTE2Nnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', thumb: 'https://images.unsplash.com/photo-1520971702667-3b1d7b27f5f7?q=80&w=1200&auto=format&fit=crop', description: 'A towering mech awakens in a rain‑soaked alley, lights breathing to life.' },
]

const filters = ['All', 'Fantasy', 'Sci‑Fi', 'Romance', 'Action']

export default function Gallery() {
  const [active, setActive] = useState('All')
  const navigate = useNavigate()

  const filtered = useMemo(() => {
    if (active === 'All') return DATA
    return DATA.filter(i => i.genre === active)
  }, [active])

  return (
    <div className="min-h-[100svh] bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">
      <Navbar />
      <main className="pb-24 pt-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold text-white">Gallery</h1>
              <p className="text-white/70 mt-2">Browse AI‑generated loops and characters. Hover for details, tap to view.</p>
            </div>
            <a href="/" className="hidden md:inline-flex rounded-xl px-4 py-2 bg-white/10 border border-white/10 text-white/80 hover:text-white">Home</a>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {filters.map(f => (
              <button key={f} onClick={() => setActive(f)} className={`rounded-full px-4 py-2 text-sm border backdrop-blur ${active===f?'bg-gradient-to-r from-pink-500/30 to-purple-500/30 text-white border-white/20':'bg-white/5 text-white/80 hover:text-white border-white/10'}`}>{f}</button>
            ))}
          </div>

          <motion.div layout className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filtered.map((item) => (
                <motion.div key={item.id} layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} transition={{ duration: 0.35 }} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
                  <button onClick={() => navigate(`/gallery/${item.id}`)} className="text-left block w-full">
                    <img loading="lazy" src={item.thumb} alt={item.title} className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"/>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-90" />
                    <div className="absolute bottom-0 p-4">
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center rounded-full px-2 py-1 text-xs bg-white/10 text-white/80 border border-white/10 backdrop-blur">{item.genre}</span>
                        <span className="text-white/60 text-xs">{item.date}</span>
                      </div>
                      <h3 className="mt-1 text-white text-lg font-semibold drop-shadow">{item.title}</h3>
                      <p className="text-white/70 text-sm line-clamp-2">{item.description}</p>
                    </div>
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
