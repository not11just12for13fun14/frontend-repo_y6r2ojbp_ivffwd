export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-6 py-10 text-white/70">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">© 2025 AI Anime Realm. Built with love and light.</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="/sitemap.xml" className="hover:text-white">Sitemap</a>
            <a href="/robots.txt" className="hover:text-white">Robots</a>
            <a href="https://twitter.com/" className="hover:text-white">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
