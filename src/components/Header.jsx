import { useState, useEffect } from 'react'
import { gsap } from 'gsap'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        '.mobile-nav-link',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: 'power3.out', delay: 0.15 }
      )
    }
  }, [isOpen])

  const closeMenu = () => setIsOpen(false)

  return (
    <>
      {/* GNB - 다크 필 */}
      <header
        className="fixed z-50 left-1/2 -translate-x-1/2 flex items-center justify-between"
        style={{
          top: '22px',
          width: 'min(764px, calc(100% - 48px))',
          height: '60px',
          background: '#222222',
          borderRadius: '16px',
          padding: '0 36px 0 157px',
          boxShadow: '0.445px 0.445px 0.629px rgba(0,0,0,0.26), 1.211px 1.211px 1.712px rgba(0,0,0,0.25), 5.901px 5.901px 8.345px rgba(0,0,0,0.19), 14px 14px 21.213px rgba(0,0,0,0.2)',
        }}
      >
        {/* 데스크탑 네비 */}
        <nav className="hidden md:flex items-center justify-between w-full">
          <a
            href="#about"
            className="font-sans text-white hover:opacity-60 transition-opacity"
            style={{ fontSize: '16px', lineHeight: '24px' }}
          >
            About Me
          </a>
          <a
            href="#projects"
            className="font-sans text-white hover:opacity-60 transition-opacity"
            style={{ fontSize: '16px', lineHeight: '24px' }}
          >
            Projects
          </a>
          {/* Contact me 버튼 */}
          <a
            href="#contact"
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
              boxShadow: '0.445px 0.445px 0.629px rgba(0,0,0,0.26), 8px 4px 9.21px rgba(0,0,0,0.2), inset 1px 1px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(0,0,0,0.23)',
            }}
          >
            Contact me
          </a>
        </nav>

        {/* 모바일 햄버거 */}
        <div className="md:hidden flex justify-end w-full">
          <button
            className="flex flex-col gap-1.5 cursor-pointer"
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
        className="fixed inset-0 z-[200] bg-black flex flex-col items-center justify-center transition-transform duration-500 ease-in-out"
        style={{ transform: isOpen ? 'translateY(0)' : 'translateY(-100%)' }}
      >
        <button
          className="absolute top-8 right-8 text-white text-3xl leading-none"
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
              style={{ fontSize: 'clamp(2.5rem, 8vw, 4rem)', letterSpacing: '-1.44px' }}
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  )
}
