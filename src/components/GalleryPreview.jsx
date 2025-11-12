import { motion } from 'framer-motion'

const items = [
  {
    id: 'stardrift',
    title: 'Stardrift Over Neo-Tokyo',
    genre: 'Sci‑Fi',
    thumb: 'https://images.unsplash.com/photo-1520975928316-56c0d1c00f01?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'aurora',
    title: 'Aurora Shrine',
    genre: 'Fantasy',
    thumb: 'https://images.unsplash.com/photo-1520975661595-6453be3f7070?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'kiss',
    title: 'Skybound Promise',
    genre: 'Romance',
    thumb: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop',
  },
]

export default function GalleryPreview() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="absolute inset-0 -z-0 pointer-events-none bg-gradient-to-b from-transparent via-purple-900/10 to-transparent" />
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold text-white">Featured Loops</h2>
            <p className="text-white/70 mt-2 max-w-2xl">A taste of our ever‑evolving gallery. Lightweight WebM and Lottie animations load as you scroll.</p>
          </div>
          <a href="/gallery" className="hidden md:inline-flex items-center rounded-xl px-4 py-2 bg-white/10 hover:bg-white/20 text-white border border-white/10 backdrop-blur">View all</a>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <motion.a
              key={item.id}
              href={`/gallery/${item.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <img loading="lazy" src={item.thumb} alt={item.title} className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-0 p-4">
                <span className="inline-flex items-center rounded-full px-2 py-1 text-xs bg-white/10 text-white/80 border border-white/10 backdrop-blur">{item.genre}</span>
                <h3 className="mt-2 text-white text-lg font-semibold drop-shadow">{item.title}</h3>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
