import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function CustomCursor() {
  const cursorRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current

    const onMove = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.12,
        ease: 'power2.out',
      })
    }

    const onClick = (e) => {
      // 물 파동 3겹 동심원
      for (let i = 0; i < 3; i++) {
        const ripple = document.createElement('div')
        const color = getComputedStyle(document.documentElement).getPropertyValue('--cursor-color').trim()
        ripple.style.cssText = `
          position: fixed;
          left: ${e.clientX}px;
          top: ${e.clientY}px;
          width: 0px;
          height: 0px;
          border-radius: 50%;
          border: 1.5px solid ${color};
          transform: translate(-50%, -50%);
          pointer-events: none;
          z-index: 99998;
          opacity: 0.8;
        `
        document.body.appendChild(ripple)

        const size = 48 + i * 36
        gsap.to(ripple, {
          width: size,
          height: size,
          opacity: 0,
          duration: 0.7 + i * 0.15,
          delay: i * 0.08,
          ease: 'power2.out',
          onComplete: () => ripple.remove(),
        })
      }
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('click', onClick)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('click', onClick)
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 99999,
        transform: 'translate(-5px, -34px)',
        userSelect: 'none',
        color: 'var(--cursor-color)',
        filter: 'drop-shadow(0 0 6px var(--cursor-glow))',
        transition: 'color var(--transition), filter var(--transition)',
      }}
    >
      <svg width="26" height="38" viewBox="0 0 18 28" fill="none">
        {/* 음표 머리 — 부드러운 타원, 살짝 기울임 */}
        <ellipse
          cx="6.5"
          cy="23"
          rx="6"
          ry="3.8"
          fill="currentColor"
          transform="rotate(-18 6.5 23)"
        />
        {/* 기둥 */}
        <path
          d="M12 23 L12 4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* 꼬리 — 부드러운 S커브 */}
        <path
          d="M12 4 C18 7 20 12 14 17"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    </div>
  )
}
