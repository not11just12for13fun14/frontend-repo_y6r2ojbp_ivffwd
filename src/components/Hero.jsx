import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative h-[100svh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_70%_10%,rgba(255,0,128,0.25),transparent),radial-gradient(800px_400px_at_20%_80%,rgba(56,189,248,0.25),transparent)]" />
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: 'easeOut' }} className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 shadow-[0_8px_60px_rgba(79,70,229,0.35)]">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-pink-300 via-purple-300 to-blue-300 drop-shadow">Welcome to the AI Anime Realm</h1>
            <p className="mt-4 md:mt-6 text-white/80 max-w-2xl">Dive into a cinematic universe of AI‑generated anime loops, characters, and stories. Built for speed, crafted for emotion.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/gallery" className="group relative inline-flex items-center gap-2 rounded-xl px-5 py-3 text-white font-semibold bg-gradient-to-br from-pink-500 to-purple-600 shadow-lg shadow-pink-500/30 overflow-hidden">
                <span className="relative z-10">Explore Gallery</span>
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-white/20" />
              </Link>
              <Link to="/about" className="group inline-flex items-center gap-2 rounded-xl px-5 py-3 bg-white/10 text-white/90 hover:text-white border border-white/10 backdrop-blur-md">
                <span>About the Project</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-6 inset-x-0 flex justify-center">
        <div className="h-10 w-10 rounded-full border border-white/20 bg-white/10 backdrop-blur shadow-inner flex items-center justify-center text-white/70 animate-bounce">↓</div>
      </div>
    </section>
  )
}
