import Navbar from './components/Navbar'
import Hero from './components/Hero'
import GalleryPreview from './components/GalleryPreview'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-[100svh] bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <GalleryPreview />
      </main>
      <Footer />
    </div>
  )
}

export default App
