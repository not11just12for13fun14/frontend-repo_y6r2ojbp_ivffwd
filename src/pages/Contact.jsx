import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = (e) => {
    // If using Formspree, action="https://formspree.io/f/your-id" method="POST"
    if (!form.name || !form.email || !form.message) {
      e.preventDefault()
      alert('Please fill out all fields.')
    } else {
      setSent(true)
    }
  }

  return (
    <div className="min-h-[100svh] bg-slate-950 text-white">
      <Navbar />
      <main className="relative pt-28 pb-24 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_300px_at_20%_20%,rgba(236,72,153,0.25),transparent),radial-gradient(800px_400px_at_80%_80%,rgba(59,130,246,0.25),transparent)]"/>
        <div className="relative mx-auto max-w-3xl px-6">
          <h1 className="text-3xl md:text-5xl font-bold">Contact</h1>
          <p className="mt-3 text-white/70">Say hello. Collaborations, submissions and ideas welcome.</p>

          <form action="https://formspree.io/f/moqgpwzz" method="POST" onSubmit={onSubmit} className="mt-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 space-y-4">
            <div>
              <label className="text-sm text-white/80">Name</label>
              <input name="name" value={form.name} onChange={update} required className="mt-1 w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 outline-none focus:ring-2 ring-pink-500/50" placeholder="Your name"/>
            </div>
            <div>
              <label className="text-sm text-white/80">Email</label>
              <input type="email" name="email" value={form.email} onChange={update} required className="mt-1 w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 outline-none focus:ring-2 ring-purple-500/50" placeholder="you@example.com"/>
            </div>
            <div>
              <label className="text-sm text-white/80">Message</label>
              <textarea name="message" value={form.message} onChange={update} required rows="5" className="mt-1 w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 outline-none focus:ring-2 ring-blue-500/50" placeholder="Share your thoughts..."/>
            </div>
            <button type="submit" className="group relative inline-flex items-center gap-2 rounded-xl px-5 py-3 text-white font-semibold bg-gradient-to-br from-pink-500 to-purple-600 shadow-lg shadow-pink-500/30 overflow-hidden">
              <span className="relative z-10">Send Message</span>
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-white/20" />
            </button>
            {sent && <p className="text-sm text-green-300">Thanks! Your message was sent.</p>}
          </form>
        </div>
      </main>
      <Footer />
    </div>
  )
}
