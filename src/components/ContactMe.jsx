import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'
import SectionDivider from './SectionDivider'
import Btn from './Btn'

gsap.registerPlugin(TextPlugin)

export default function ContactMe() {
  const textRef   = useRef(null)   // 글씨만 담는 span
  const cursorRef = useRef(null)   // 커서 |

  useEffect(() => {
    const el     = textRef.current
    const cursor = cursorRef.current
    if (!el || !cursor) return

    const fullText  = 'git commit -m "Keep pushing boundaries and dreaming big"'
    const halfText  = 'git commit -m "Keep pushing'
    const deleteCount = fullText.length - halfText.length

    const deleteObj = { n: fullText.length }
    const retypeObj = { n: halfText.length }

    // 커서 깜빡임
    gsap.to(cursor, {
      opacity: 0,
      repeat: -1,
      yoyo: true,
      duration: 0.5,
      ease: 'steps(1)',
    })

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1.5 })

    // 1. 처음 타이핑
    tl.to(el, { duration: 4, text: { value: fullText, delimiter: '' }, ease: 'none' })

    // 2. 백스페이스 연타
    .to(deleteObj, {
      n: halfText.length,
      duration: 0.9,
      ease: `steps(${deleteCount})`,
      delay: 0.6,
      onUpdate() {
        el.textContent = fullText.slice(0, Math.round(deleteObj.n))
      },
    })

    // 3. 다시 타이핑
    .to(retypeObj, {
      n: fullText.length,
      duration: 2,
      ease: `steps(${deleteCount})`,
      onUpdate() {
        el.textContent = fullText.slice(0, Math.round(retypeObj.n))
      },
    })

    return () => { tl.kill() }
  }, [])

  return (
    <section id="contact" style={{ background: 'transparent' }}>
      {/* 섹션 타이틀 */}
      <div
        style={{
          maxWidth: '1088px',
          margin: '0 auto',
          padding: '100px clamp(24px, 4vw, 0px) 0',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px',
        }}
      >
        <SectionDivider />
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 400,
            fontSize: '72px',
            lineHeight: '80.64px',
            letterSpacing: '-1.44px',
            color: 'var(--fg)',
            textAlign: 'center',
            width: '100%',
          }}
        >
          Contact me
        </p>
      </div>

      {/* 본문 */}
      <div
        style={{
          maxWidth: '1088px',
          margin: '0 auto',
          padding: '80px clamp(24px, 4vw, 0px) 100px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '40px',
        }}
      >
        {/* 헤드라인 */}
        <div style={{ textAlign: 'center' }}>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 400,
              fontSize: '56px',
              lineHeight: '62.72px',
              letterSpacing: '-0.56px',
              color: 'var(--fg-near)',
              marginBottom: '16px',
            }}
          >
            아이디어를 현실의 코드로 함께 구현합니다.
          </p>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 400,
              fontSize: '18px',
              lineHeight: '27.9px',
              color: 'var(--fg-sub)',
            }}
          >
            Harmony between Logic and Aesthetic.
          </p>
        </div>

        {/* 버튼 */}
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Btn
            variant="cta"
            icon="mail"
            label="MAIL"
            sublabel="angun1546@gmail.com"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=angun1546@gmail.com"
            target="_blank"
            rel="noreferrer"
            style={{ width: '220px', height: '60px', padding: 0 }}
          />
          <Btn
            variant="tir"
            icon="phone"
            label="PHONE"
            sublabel="010-4206-0415"
            style={{ width: '221px', height: '59px', padding: 0, cursor: 'default' }}
          />
        </div>

        {/* 하단 문구 — 박스 고정, 글씨만 애니메이션 */}
        <p
          style={{
            fontFamily: 'var(--font-mono, "JetBrains Mono", monospace)',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '19.88px',
            color: 'var(--fg-sub)',
            textAlign: 'center',
            padding: '10px 16px',
            backgroundColor: 'rgba(0,0,0,0.05)',
            borderRadius: '4px',
            border: '1px solid rgba(128,128,128,0.15)',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2px',
            width: '520px',
          }}
        >
          <span ref={textRef} />
          <span
            ref={cursorRef}
            style={{ display: 'inline-block', width: '1px', height: '14px', background: 'var(--fg-sub)', marginLeft: '1px' }}
          />
        </p>
      </div>
    </section>
  )
}
