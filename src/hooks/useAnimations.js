import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger)

export const useAnimations = () => {
  useEffect(() => {
    // 1. 커스텀 커서 로직
    const cursor = document.querySelector('.custom-cursor')
    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: 'power3.out'
      })
    }
    window.addEventListener('mousemove', moveCursor)

    // 2. 배경색 모핑 (Color Morphing)
    const sections = document.querySelectorAll('section[data-bg]')
    sections.forEach(section => {
      const bgColor = section.getAttribute('data-bg')
      const theme = section.getAttribute('data-theme')
      
      ScrollTrigger.create({
        trigger: section,
        start: 'top 50%',
        end: 'bottom 50%',
        onEnter: () => updateTheme(bgColor, theme),
        onEnterBack: () => updateTheme(bgColor, theme),
      })
    })
function updateTheme(color, theme) {
  document.body.style.setProperty('--background', color)
  if (theme) {
    document.body.className = theme
  }
}

// 3. 무한 루프 티커 (Ticker) 애니메이션
const tickerContent = document.querySelector('.ticker-content')
if (tickerContent) {
  gsap.to('.ticker-content', {
    xPercent: -33.33, // 3개의 아이템 중 하나만큼 이동
    duration: 20,
    ease: 'none',
    repeat: -1
  })
}

// 히어로 섹션 텍스트 애니메이션 예시

    // 3. 텍스트 등장 애니메이션 (SplitType)
    const splitTitles = document.querySelectorAll('.split-text')
    splitTitles.forEach(title => {
      const text = new SplitType(title, { types: 'chars,lines' })
      
      gsap.from(text.chars, {
        scrollTrigger: {
          trigger: title,
          start: 'top 80%',
        },
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.02,
        ease: 'power4.out',
      })
    })

    // 4. 프로젝트 카드 이미지 시차(Parallax) 효과
    const projectImages = document.querySelectorAll('.project-image-wrapper img')
    projectImages.forEach(img => {
      gsap.to(img, {
        scrollTrigger: {
          trigger: img,
          scrub: true,
          start: 'top bottom',
        },
        y: -100,
        ease: 'none'
      })
    })

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])
}
