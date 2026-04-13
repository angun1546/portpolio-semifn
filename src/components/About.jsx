import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const skills = [
  { text: '정보 수집가', red: false },
  { text: '의사소통', red: false },
  { text: '경험 설계자', red: false },
  { text: '과정과 표현 중시', red: true },
  { text: '유연한 구조 설계', red: true },
  { text: '예술적 사고', red: false },
  { text: '유저 편의성 우선', red: true },
  { text: 'Business Needs', red: false },
]

function SkillPill({ text, red }) {
  return (
    <div
      className="flex items-center justify-center rounded-full shrink-0"
      style={{
        padding: '25px 57px',
        background: 'rgba(255,255,255,0.05)',
        backdropFilter: 'blur(2.5px)',
        WebkitBackdropFilter: 'blur(2.5px)',
        border: '1px solid rgba(0,0,0,0.1)',
      }}
    >
      <span
        className="font-sans font-semibold whitespace-nowrap"
        style={{
          fontSize: 'clamp(1rem, 2.2vw, 1.8rem)',
          color: red ? 'var(--color-red-10)' : 'var(--color-grey-10)',
        }}
      >
        {text}
      </span>
    </div>
  )
}

export default function About() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 설명 텍스트 애니메이션
      gsap.from('.about-desc', {
        opacity: 0,
        y: 40,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.about-desc',
          start: 'top 80%',
        },
      })

      // 스킬 필 애니메이션
      gsap.from('.skill-pill', {
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.06,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.skills-grid',
          start: 'top 80%',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20"
    >
      {/* ABOUT ME 대형 타이틀 */}
      <div
        className="text-center overflow-hidden"
        style={{ padding: '40px 0 20px' }}
      >
        <p
          className="font-display font-extrabold text-grey-16 text-center leading-none"
          style={{
            fontSize: 'clamp(4rem, 12vw, 11.25rem)',
            letterSpacing: '-1.6px',
            lineHeight: '0.88',
          }}
        >
          ABOUT ME
        </p>
      </div>

      {/* 본문 컨테이너 */}
      <div
        className="mx-auto"
        style={{ maxWidth: '1400px', padding: '60px 60px 80px' }}
      >
        {/* 설명 텍스트 */}
        <div className="about-desc mb-20 overflow-hidden">
          <p
            className="font-sans font-semibold text-grey-10 leading-tight"
            style={{
              fontSize: 'clamp(1.2rem, 4vw, 4.2rem)',
              lineHeight: '1.3',
              letterSpacing: '-0.5px',
            }}
          >
            단순한 화면 구성을 넘어, 사용자의 행동 패턴을 분석하고
            <br />
            비즈니스의 지속 가능한 성장을 돕는 경험을 설계합니다.
          </p>
        </div>

        {/* 스킬 그리드 */}
        <div
          className="skills-grid flex flex-wrap justify-center gap-4"
        >
          {skills.map((s) => (
            <div key={s.text} className="skill-pill">
              <SkillPill text={s.text} red={s.red} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
