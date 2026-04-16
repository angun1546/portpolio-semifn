import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { getLenis } from '../lib/lenisStore'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)
  const btnRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
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
      className="fixed right-[30px] bottom-[40px] w-[34px] h-[88px] rounded-b-[8px] border-none cursor-pointer outline-[5px] outline-[#f5f5f5] -outline-offset-[5px] flex flex-col items-center justify-center gap-[6px] opacity-0 z-[9999] origin-bottom"
      style={{
        background: 'linear-gradient(180deg, #1a1a1a 0%, #000000 100%)',
        boxShadow:
          '4px 8px 20px rgba(0,0,0,0.6), inset 1px 0 0 rgba(255,255,255,0.18), inset -1px 0 0 rgba(255,255,255,0.06)',
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
      <span className="font-sans font-bold text-[9px] tracking-[0.5px] text-[rgba(255,255,255,0.7)] leading-none">
        TOP
      </span>
    </button>
  )
}
