import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function Projects() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 대형 타이틀 애니메이션
      gsap.from('.projects-title', {
        opacity: 0,
        y: 100,
        duration: 1.2,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: '.projects-title',
          start: 'top 90%',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-32 md:py-48 bg-white min-h-[50vh]"
    >
      {/* Projects 대형 타이틀 (Pretendard 적용) */}
      <div className="projects-title text-center overflow-hidden mb-12 md:mb-20">
        <h2
          className="font-sans font-bold text-near-black leading-none"
          style={{
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            letterSpacing: '-1.44px',
            lineHeight: '80.64px',
          }}
        >
          Projects
        </h2>
      </div>

      {/* 본문 컨테이너 - 카드 섹션 삭제됨 */}
      <div className="mx-auto max-w-[1400px] px-8 md:px-16 text-center">
        <p
          className="font-sans font-extrabold text-grey-10 opacity-30"
          style={{ fontSize: 'clamp(1rem, 2vw, 1.5rem)', letterSpacing: '-0.02em' }}
        >
          New Projects Coming Soon...
        </p>
      </div>
    </section>
  )
}
