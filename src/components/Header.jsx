import { useState, useEffect } from 'react'
import { gsap } from 'gsap'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  // 모바일 메뉴 열릴 때 스크롤 막기
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  // 메뉴 오픈 시 링크 애니메이션
  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        '.mobile-nav-link',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: 'power3.out', delay: 0.2 }
      )
    }
  }, [isOpen])

  const closeMenu = () => setIsOpen(false)

  return (
    <>
      {/* 데스크탑 헤더 - 볼륨감 있는 고정 글래스모피즘 필 */}
      <header
        className="fixed z-50 left-1/2 -translate-x-1/2 flex items-center justify-between px-12 py-5"
        style={{
          top: '32px',
          width: 'min(1400px, calc(100% - 64px))',
          background: 'rgba(255,255,255,0.15)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: '1px solid rgba(255,255,255,0.25)',
          borderRadius: '100px',
          boxShadow: '0px 12px 40px 0px rgba(0,0,0,0.08)',
        }}
      >
        {/* 로고 - 크기 확대 */}
        <a
          href="#"
          className="font-display font-black text-grey-10"
          style={{ fontSize: '24px', letterSpacing: '2px' }}
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0 }) }}
        >
          AN GUN
        </a>

        {/* 데스크탑 네비 - 텍스트 및 간격 확대 */}
        <nav className="hidden md:flex items-center gap-14">
          <a href="#about" className="font-sans font-bold text-grey-10 hover:opacity-60 transition-opacity" style={{ fontSize: '18px' }}>
            About
          </a>
          <a href="#projects" className="font-sans font-bold text-grey-10 hover:opacity-60 transition-opacity" style={{ fontSize: '18px' }}>
            Projects
          </a>
          <a href="#services" className="font-sans font-bold text-grey-10 hover:opacity-60 transition-opacity" style={{ fontSize: '18px' }}>
            Services
          </a>
          <a
            href="#contact"
            className="font-sans font-bold text-grey-10 bg-white hover:bg-grey-10 hover:text-white transition-colors px-10 py-3.5 rounded-full"
            style={{ fontSize: '20px' }}
          >
            Contact
          </a>
        </nav>

        {/* 모바일 햄버거 - 버튼도 약간 키움 */}
        <button
          className="md:hidden flex flex-col gap-2 cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          <span className="block w-8 h-0.5 bg-grey-10" />
          <span className="block w-8 h-0.5 bg-grey-10" />
          <span className="block w-5 h-0.5 bg-grey-10" />
        </button>
      </header>

      {/* 모바일 오버레이 메뉴 */}
      <div
        className="fixed inset-0 z-[200] bg-black flex flex-col items-center justify-center transition-transform duration-500 ease-in-out"
        style={{ transform: isOpen ? 'translateY(0)' : 'translateY(-100%)' }}
      >
        {/* 닫기 버튼 */}
        <button
          className="absolute top-10 right-10 text-white text-4xl leading-none"
          onClick={closeMenu}
        >
          ✕
        </button>

        <nav className="flex flex-col items-center gap-10">
          {[
            { label: 'About', href: '#about' },
            { label: 'Projects', href: '#projects' },
            { label: 'Services', href: '#services' },
            { label: 'Contact', href: '#contact' },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="mobile-nav-link font-display font-black text-white text-center hover:opacity-60 transition-opacity"
              style={{ fontSize: 'clamp(3rem, 10vw, 5rem)', lineHeight: '1.1' }}
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
