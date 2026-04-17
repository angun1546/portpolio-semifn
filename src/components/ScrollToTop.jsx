import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { getLenis } from '../lib/lenisStore'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)
  const btnRef = useRef(null)

  useEffect(() => {
    const lenis = getLenis()
    
    // 네이티브 스크롤 감지 폴백
    const onScrollNative = () => {
      if (!lenis) setVisible(window.scrollY > 300)
    }

    // 레니스 스크롤 감지
    const onScrollLenis = (e) => {
      setVisible(e.scroll > 300)
    }

    if (lenis) {
      lenis.on('scroll', onScrollLenis)
    } else {
      window.addEventListener('scroll', onScrollNative)
    }

    return () => {
      if (lenis) {
        lenis.off('scroll', onScrollLenis)
      } else {
        window.removeEventListener('scroll', onScrollNative)
      }
    }
  }, [])

  useEffect(() => {
    if (!btnRef.current) return
    gsap.to(btnRef.current, {
      opacity: visible ? 1 : 0,
      y: visible ? 0 : 20,
      pointerEvents: visible ? 'auto' : 'none',
      duration: 0.35,
      ease: 'power2.out',
    })
  }, [visible])

  const handleClick = () => {
    const lenis = getLenis()
    if (lenis) {
      lenis.scrollTo(0, { duration: 2, easing: (t) => 1 - Math.pow(1 - t, 4) })
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const onEnter = () =>
    gsap.to(btnRef.current, { y: -6, duration: 0.3, ease: 'power2.out' })
  const onLeave = () =>
    gsap.to(btnRef.current, { y: 0, duration: 0.6, ease: 'elastic.out(1, 0.5)' })
  const onDown = () =>
    gsap.to(btnRef.current, { y: 4, scaleY: 0.93, duration: 0.1, ease: 'power2.in' })
  const onUp = () =>
    gsap.to(btnRef.current, { y: -6, scaleY: 1, duration: 0.4, ease: 'elastic.out(1, 0.4)' })

  return (
    <button
      ref={btnRef}
      onClick={handleClick}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onMouseDown={onDown}
      onMouseUp={onUp}
      aria-label="맨 위로"
      style={{
        position: 'fixed',
        right: '30px',
        bottom: '40px',
        width: '72px',
        height: '168px',
        borderRadius: '0 0 12px 12px',
        border: '2px solid #1a1a1a',
        cursor: 'pointer',
        background: '#FFFEF8',
        boxShadow: '3px 6px 20px rgba(0,0,0,0.2)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: '16px',
        gap: '6px',
        opacity: 0,
        zIndex: 9999,
        transformOrigin: 'bottom center',
        pointerEvents: 'none',
      }}
    >
      {/* 검은 건반 캡 */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '28px',
          height: '95px',
          background: 'linear-gradient(180deg, #2a2a2a 0%, #000000 100%)',
          borderRadius: '0 0 6px 6px',
          boxShadow: '0 4px 10px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)',
        }}
      />
      <svg width="16" height="16" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <path
          d="M2 10L7 4L12 10"
          stroke="#1a1a1a"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span
        style={{
          fontFamily: 'var(--font-sans)',
          fontWeight: 700,
          fontSize: '9px',
          letterSpacing: '0.5px',
          color: 'rgba(0,0,0,0.55)',
          lineHeight: 1,
        }}
      >
        TOP
      </span>
    </button>
  )
}
