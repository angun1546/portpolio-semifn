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
        width: '34px',
        height: '88px',
        borderRadius: '0 0 8px 8px',
        border: 'none',
        cursor: 'pointer',
        background: 'linear-gradient(180deg, #1a1a1a 0%, #000000 100%)',
        boxShadow:
          '4px 8px 20px rgba(0,0,0,0.6), inset 1px 0 0 rgba(255,255,255,0.18), inset -1px 0 0 rgba(255,255,255,0.06)',
        outline: '5px solid #f5f5f5',
        outlineOffset: '-5px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '6px',
        opacity: 0,
        zIndex: 9999,
        transformOrigin: 'bottom center',
        pointerEvents: 'none', // 초기 상태 비활성화
      }}
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <path
          d="M2 10L7 4L12 10"
          stroke="#ffffff"
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
          color: 'rgba(255,255,255,0.7)',
          lineHeight: 1,
        }}
      >
        TOP
      </span>
    </button>
  )
}
