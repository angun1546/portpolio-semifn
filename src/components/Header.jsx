import { useState, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollToPlugin)

function smoothScrollTo(href, callback) {
  const id = href.replace('#', '')
  const target = document.getElementById(id)
  if (!target) return
  gsap.to(window, {
    scrollTo: { y: target, offsetY: 80 },
    duration: 0.9,
    ease: 'power2.inOut',
    onComplete: callback,
  })
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        '.mobile-nav-link',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: 'power3.out',
          delay: 0.15,
        }
      )
    }
  }, [isOpen])

  const closeMenu = () => setIsOpen(false)

  const handleNavClick = (e, href) => {
    e.preventDefault()
    smoothScrollTo(href)
  }

  const handleMobileNavClick = (e, href) => {
    e.preventDefault()
    closeMenu()
    setTimeout(() => smoothScrollTo(href), 300)
  }

  return (
    <>
      {/* GNB - 다크 필 */}
      <header
        className="fixed left-1/2 -translate-x-1/2 flex items-center justify-between"
        style={{
          top: '22px',
          zIndex: 200,
          width: 'min(764px, calc(100% - 48px))',
          height: '60px',
          background: 'var(--header-bg)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderRadius: '16px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          padding: '0 36px 0 157px',
          boxShadow:
            '0.445px 0.445px 0.629px rgba(0,0,0,0.26), 1.211px 1.211px 1.712px rgba(0,0,0,0.25), 2.658px 2.658px 3.759px rgba(0,0,0,0.23), 5.901px 5.901px 8.345px rgba(0,0,0,0.19), 14px 14px 21.213px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.08)',
          transition: 'background-color var(--transition)',
        }}
      >
        {/* 데스크탑 네비 */}
        <nav className="hidden md:flex items-center justify-between w-full">
          <a
            href="#about"
            onClick={(e) => handleNavClick(e, '#about')}
            className="font-sans text-white hover:opacity-60 transition-opacity"
            style={{ fontSize: '16px', lineHeight: '24px' }}
          >
            About Me
          </a>
          <a
            href="#projects"
            onClick={(e) => handleNavClick(e, '#projects')}
            className="font-sans text-white hover:opacity-60 transition-opacity"
            style={{ fontSize: '16px', lineHeight: '24px' }}
          >
            Projects
          </a>

          {/* Contact me 버튼 */}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="flex items-center justify-center"
            style={{
              width: '124px',
              height: '42px',
              background: '#f8f8f8',
              borderRadius: '12px',
              fontSize: '18px',
              lineHeight: '28px',
              color: '#1a1a1a',
              textDecoration: 'none',
              fontFamily: 'var(--font-sans)',
              boxShadow:
                '0.445px 0.445px 0.629px rgba(0,0,0,0.26), 8px 4px 9.21px rgba(0,0,0,0.2), inset 1px 1px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(0,0,0,0.23)',
            }}
          >
            Contact me
          </a>
        </nav>

        {/* 모바일 햄버거 */}
        <div className="md:hidden flex justify-end w-full">
          <button
            className="flex flex-col gap-1.5"
            style={{ cursor: 'none' }}
            onClick={() => setIsOpen(true)}
          >
            <span className="block w-6 h-0.5 bg-white" />
            <span className="block w-6 h-0.5 bg-white" />
            <span className="block w-4 h-0.5 bg-white" />
          </button>
        </div>
      </header>

      {/* 모바일 오버레이 */}
      <div
        className="fixed inset-0 bg-black flex flex-col items-center justify-center transition-transform duration-500 ease-in-out"
        style={{
          zIndex: 300,
          transform: isOpen ? 'translateY(0)' : 'translateY(-100%)',
        }}
      >
        <button
          className="absolute top-8 right-8 text-white text-3xl leading-none"
          style={{ cursor: 'none' }}
          onClick={closeMenu}
        >
          ✕
        </button>
        <nav className="flex flex-col items-center gap-8">
          {[
            { label: 'About Me', href: '#about' },
            { label: 'Projects', href: '#projects' },
            { label: 'Contact me', href: '#contact' },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="mobile-nav-link font-sans text-white text-center hover:opacity-60 transition-opacity"
              style={{
                fontSize: 'clamp(2.5rem, 8vw, 4rem)',
                letterSpacing: '-1.44px',
              }}
              onClick={(e) => handleMobileNavClick(e, item.href)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  )
}
