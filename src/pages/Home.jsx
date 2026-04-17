import { useEffect } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { setLenis } from '../lib/lenisStore'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import ContactMe from '../components/ContactMe'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import ThemeSwitcher from '../components/ThemeSwitcher'
import CustomCursor from '../components/CustomCursor'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis()
    setLenis(lenis)
    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })
    gsap.ticker.lagSmoothing(0)
    return () => {
      lenis.destroy()
      setLenis(null)
    }
  }, [])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <ContactMe />
      </main>
      <Footer />
      <ThemeSwitcher />
      <ScrollToTop />
      <CustomCursor />
    </>
  )
}
