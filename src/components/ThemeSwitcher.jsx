import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const THEMES = ['light', 'dark', 'purple']

const iconStyle = { width: 16, height: 16, flexShrink: 0 }

function SunIcon() {
  return (
    <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2">
      <circle cx="12" cy="12" r="5" />
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}

function StarIcon() {
  return (
    <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}

const ICONS = { light: <SunIcon />, dark: <MoonIcon />, purple: <StarIcon /> }

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState('light')
  const btnRef = useRef(null)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light'
    setTheme(savedTheme)
    document.documentElement.setAttribute('data-theme', savedTheme)
  }, [])

  const toggleTheme = () => {
    const currentIndex = THEMES.indexOf(theme)
    const nextTheme = THEMES[(currentIndex + 1) % THEMES.length]
    setTheme(nextTheme)
    document.documentElement.setAttribute('data-theme', nextTheme)
    localStorage.setItem('theme', nextTheme)
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
      onClick={toggleTheme}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onMouseDown={onDown}
      onMouseUp={onUp}
      aria-label={`테마 전환 (현재: ${theme})`}
      style={{
        position: 'fixed',
        left: '30px',
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
        zIndex: 9999,
        transformOrigin: 'bottom center',
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
      {ICONS[theme]}
      <span
        style={{
          fontFamily: 'var(--font-sans)',
          fontWeight: 700,
          fontSize: '8px',
          letterSpacing: '0.3px',
          color: 'rgba(0,0,0,0.55)',
          lineHeight: 1,
          textTransform: 'uppercase',
        }}
      >
        {theme}
      </span>
    </button>
  )
}
