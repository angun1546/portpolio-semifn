import { useState, useEffect } from 'react'
import Btn from './Btn'

const THEMES = ['light', 'dark', 'purple']

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState('light')

  // 테마 초기화
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light'
    setTheme(savedTheme)
    document.documentElement.setAttribute('data-theme', savedTheme)
  }, [])

  // 테마 전환 순환: Light -> Dark -> Purple -> Light
  const toggleTheme = () => {
    const currentIndex = THEMES.indexOf(theme)
    const nextIndex = (currentIndex + 1) % THEMES.length
    const nextTheme = THEMES[nextIndex]
    
    setTheme(nextTheme)
    document.documentElement.setAttribute('data-theme', nextTheme)
    localStorage.setItem('theme', nextTheme)
  }

  // 테마별 아이콘 설정 (BtnIcon에 추가된 키워드 사용)
  const getThemeIcon = () => {
    switch (theme) {
      case 'dark': return 'moon'
      case 'purple': return 'star'
      default: return 'sun'
    }
  }

  return (
    <div style={{ position: 'fixed', left: '30px', bottom: '40px', zIndex: 9999 }}>
      <Btn
        variant="cta"
        icon={getThemeIcon()}
        label={theme}
        onClick={toggleTheme}
        style={{
          width: '34px',
          height: '88px',
          padding: 0,
          borderRadius: '0 0 8px 8px',
          flexDirection: 'column',
          gap: '6px',
          background: 'linear-gradient(180deg, #1a1a1a 0%, #000000 100%)',
          outline: '5px solid #f5f5f5',
          outlineOffset: '-5px',
          boxShadow: '4px 8px 20px rgba(0,0,0,0.6), inset 1px 0 0 rgba(255,255,255,0.18), inset -1px 0 0 rgba(255,255,255,0.06)',
          transformOrigin: 'bottom center',
        }}
        className="theme-switcher-btn"
      />
      {/* 라벨 텍스트 스타일 조정 (Btn 내부 span 타겟팅이 어려우므로 CSS 변수 활용 권장하지만 
          현재는 Btn 컴포넌트의 label 스타일이 span으로 들어가있음. 
          Btn.jsx의 label span에 fontSize: '8px' 등 테마버튼용 조건 처리가 필요할 수 있음) */}
      <style>{`
        .theme-switcher-btn span {
          font-size: 8px !important;
          text-transform: uppercase;
          letter-spacing: 0.2px;
          color: rgba(255,255,255,0.7) !important;
        }
      `}</style>
    </div>
  )
}
