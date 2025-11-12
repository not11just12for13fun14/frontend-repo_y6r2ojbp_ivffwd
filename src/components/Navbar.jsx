import { Link, NavLink, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Menu } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const navItem = (
    text,
    to
  ) => (
    <NavLink
      to={to}
      className={({ isActive }) => `relative px-3 py-2 text-sm md:text-base transition-colors duration-300 ${isActive ? 'text-white' : 'text-white/80 hover:text-white'}`}
    >
      {({ isActive }) => (
        <span className="inline-block">
          {text}
          <span className={`absolute left-0 right-0 -bottom-0.5 h-px bg-gradient-to-r from-pink-500/0 via-pink-500 to-pink-500/0 transition-transform duration-500 ${isActive ? 'scale-x-100' : 'scale-x-0'} origin-center`}></span>
        </span>
      )}
    </NavLink>
  )

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mt-4 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-[0_8px_30px_rgb(2,6,23,0.3)]">
          <div className="flex items-center justify-between px-4 py-3">
            <Link to="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 shadow-inner"></div>
              <span className="text-white font-semibold tracking-wide">AI Anime Realm</span>
            </Link>
            <nav className="hidden md:flex items-center gap-2">
              {navItem('Home', '/')}
              {navItem('Gallery', '/gallery')}
              {navItem('About', '/about')}
              {navItem('Contact', '/contact')}
            </nav>
            <button className="md:hidden text-white" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
              <Menu />
            </button>
          </div>
          {open && (
            <div className="md:hidden px-4 pb-4 space-y-2">
              <div className="grid grid-cols-2 gap-2">
                <Link to="/" className="px-3 py-2 rounded-lg bg-white/5 text-white/90 hover:text-white transition">Home</Link>
                <Link to="/gallery" className="px-3 py-2 rounded-lg bg-white/5 text-white/90 hover:text-white transition">Gallery</Link>
                <Link to="/about" className="px-3 py-2 rounded-lg bg-white/5 text-white/90 hover:text-white transition">About</Link>
                <Link to="/contact" className="px-3 py-2 rounded-lg bg-white/5 text-white/90 hover:text-white transition">Contact</Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
