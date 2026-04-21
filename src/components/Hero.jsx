import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import bannerImg from '../assets/images/profile.png'
import protpolioIcon from '../assets/images/protpolio.png'

gsap.registerPlugin(ScrollTrigger)

const btnBase = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '12px',
  padding: '0 30px',
  height: '56px',
  borderRadius: '12px',
  fontSize: '18px',
  lineHeight: '28px',
  fontFamily: 'var(--font-sans)',
  cursor: 'pointer',
  textDecoration: 'none',
  whiteSpace: 'nowrap',
  boxShadow:
    '0.445px 0.445px 0.629px rgba(0,0,0,0.26), 14px 14px 21.213px rgba(0,0,0,0.2), inset 1px 1px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(0,0,0,0.23)',
}

function useBtnGsap() {
  const ref = useRef(null)
  return {
    ref,
    onMouseEnter: () => gsap.to(ref.current, { scale: 1.06, y: -4, duration: 0.3, ease: 'power2.out' }),
    onMouseLeave: () => gsap.to(ref.current, { scale: 1, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.5)' }),
    onMouseDown:  () => gsap.to(ref.current, { scale: 0.94, y: 0, duration: 0.1, ease: 'power2.in' }),
    onMouseUp:    () => gsap.to(ref.current, { scale: 1.06, y: -4, duration: 0.4, ease: 'elastic.out(1, 0.4)' }),
  }
}

export default function Hero() {
  const resumeBtn = useBtnGsap()
  const githubBtn = useBtnGsap()

  const line1Ref      = useRef(null)
  const line2Ref      = useRef(null)
  const sectionRef    = useRef(null)
  const textWrapRef   = useRef(null)
  const imgWrapRef    = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const scrollOpts = {
        trigger: sectionRef.current,
        start: 'top 80%',
      }

      // 초기 z-index: 텍스트 앞(50), 이미지 뒤(10) → 텍스트가 처음부터 사진 앞에 보임
      gsap.set(imgWrapRef.current,  { zIndex: 10 })
      gsap.set(textWrapRef.current, { zIndex: 50 })

      // 라인 1 — 오른쪽에서 천천히 슬라이드 인
      gsap.from(line1Ref.current, {
        x: 160,
        opacity: 0,
        duration: 1.8,
        ease: 'power2.out',
        scrollTrigger: scrollOpts,
      })

      // 라인 2 — 사진 뒤에서 솟구쳐 팝업 직전에 앞으로 전환
      const tl2 = gsap.timeline({ scrollTrigger: scrollOpts })
      tl2
        // 이미지 뒤, 아래에서 서서히 올라옴
        .from(line2Ref.current, {
          y: 200,
          opacity: 0,
          scale: 0.82,
          duration: 1.1,
          ease: 'power3.out',
          delay: 0.55,
        })
        // 팝업 — 시작과 동시에 사진 뒤로 z-index 전환
        .to(line2Ref.current, {
          y: -14,
          scale: 1.05,
          duration: 0.26,
          ease: 'power2.out',
          onStart: () => {
            gsap.set(textWrapRef.current, { zIndex: 1 })
          },
        })
        // 탱글하게 안착
        .to(line2Ref.current, {
          y: 0,
          scale: 1,
          duration: 1.0,
          ease: 'elastic.out(1, 0.42)',
        })

      // ─── 사진 팝업 — 텍스트와 동시에 아래에서 솟구쳐 안착 ────────
      const tlImg = gsap.timeline({ scrollTrigger: scrollOpts })
      tlImg
        .from(imgWrapRef.current, {
          y: 150,
          opacity: 0,
          scale: 0.88,
          duration: 1.2,
          ease: 'power3.out',
          delay: 0.35,
        })
        .to(imgWrapRef.current, {
          y: -12,
          scale: 1.04,
          duration: 0.28,
          ease: 'power2.out',
        })
        .to(imgWrapRef.current, {
          y: 0,
          scale: 1,
          duration: 1.0,
          ease: 'elastic.out(1, 0.42)',
        })

      // ─── Effect 1: PIN ────────────────────────────────────────
      // 히어로 섹션이 뷰포트 상단에 닿으면 300px 동안 고정
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=700',
        pin: true,
        pinSpacing: true,
      })

      // ─── Effect 2: PARALLAX ───────────────────────────────────
      // 프로필 이미지가 스크롤보다 느리게 위로 이동 → 깊이감
      gsap.to(imgWrapRef.current, {
        y: -90,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative"
      style={{ minHeight: '1024px', paddingBottom: '0', background: 'transparent' }}
    >
      {/* 프로필 사진 */}
      <div
        ref={imgWrapRef}
        className="absolute left-1/2 -translate-x-1/2"
        style={{
          top: '246px',
          width: 'clamp(280px, 38.6vw, 556px)',
          height: 'clamp(390px, 54.2vw, 781px)',
        }}
      >
        <img
          src={bannerImg}
          alt="안건"
          className="w-full h-full object-cover object-top"
        />

        {/* 버튼 2개 */}
        <div
          className="absolute left-1/2 -translate-x-1/2 flex gap-4 -translate-y-1/2"
          style={{ top: 'calc(50% + 298.5px)', flexWrap: 'nowrap' }}
        >
          <a
            href="https://drive.google.com/file/d/1QWOU7_6ULBB1YmmLka8lJqyii304lkWG/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            {...resumeBtn}
            style={{ ...btnBase, boxSizing: 'border-box', background: 'var(--resume-btn-glass-bg)', color: '#ffffff', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid var(--btn-glass-border)' }}
          >
            <img src={protpolioIcon} alt="" aria-hidden="true" style={{ width: '25px', height: '25px', filter: 'var(--resume-icon-filter)' }} />
            이력서보기
          </a>

          <a
            href="https://github.com/angun1546"
            target="_blank"
            rel="noopener noreferrer"
            {...githubBtn}
            style={{ ...btnBase, background: 'var(--btn-light-bg)', color: 'var(--fg-near)' }}
          >
            <svg width="25" height="25" viewBox="0 0 25 25" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M12.5 2.5C7.253 2.5 3 6.753 3 12c0 4.193 2.715 7.754 6.479 9.01.474.087.648-.206.648-.457 0-.225-.008-.824-.013-1.618-2.635.573-3.19-1.27-3.19-1.27-.43-1.093-1.05-1.385-1.05-1.385-.858-.587.065-.575.065-.575.949.067 1.448.975 1.448.975.842 1.443 2.209 1.026 2.749.784.085-.61.33-1.026.6-1.262-2.104-.239-4.314-1.052-4.314-4.682 0-1.034.37-1.88.975-2.542-.098-.24-.422-1.203.092-2.508 0 0 .795-.255 2.604.97a9.07 9.07 0 0 1 2.374-.32c.805.004 1.616.109 2.374.32 1.808-1.225 2.601-.97 2.601-.97.516 1.305.192 2.268.094 2.508.607.662.974 1.508.974 2.542 0 3.64-2.213 4.44-4.322 4.675.34.293.642.871.642 1.756 0 1.267-.012 2.29-.012 2.602 0 .253.17.549.653.456A9.504 9.504 0 0 0 22 12c0-5.247-4.253-9.5-9.5-9.5Z"/>
              </svg>
            깃허브
          </a>
        </div>
      </div>

      {/* 히어로 텍스트 */}
      <div
        ref={textWrapRef}
        className="absolute left-1/2 -translate-x-1/2 text-center"
        style={{ top: '134px', width: 'min(765px, calc(100% - 48px))' }}
      >
        {/* 라인 1 : 소음을 울림으로 */}
        <div
          ref={line1Ref}
          className="flex items-baseline justify-center"
          style={{ paddingBottom: '15px', gap: '0' }}
        >
          <span
            className="font-bazzi"
            style={{
              fontSize: 'clamp(2.5rem, 6.67vw, 6rem)',
              letterSpacing: '-1.44px',
              lineHeight: '80.64px',
              padding: '10px',
              color: 'var(--hero-fg)',
            }}
          >
            소음
          </span>
          <span
            className="font-sans font-extralight"
            style={{
              fontSize: 'clamp(2rem, 5vw, 4.5rem)',
              letterSpacing: '-1.44px',
              lineHeight: '80.64px',
              padding: '0 8px',
              color: 'var(--hero-fg)',
            }}
          >
            을
          </span>
          <span
            className="font-bazzi"
            style={{
              fontSize: 'clamp(2.5rem, 6.67vw, 6rem)',
              letterSpacing: '-1.44px',
              lineHeight: '80.64px',
              padding: '10px',
              color: 'var(--hero-fg)',
            }}
          >
            울림
          </span>
          <span
            className="font-sans font-extralight"
            style={{
              fontSize: 'clamp(2rem, 5vw, 4.5rem)',
              letterSpacing: '-1.44px',
              lineHeight: '80.64px',
              paddingLeft: '8px',
              color: 'var(--hero-fg)',
            }}
          >
            으로
          </span>
        </div>

        {/* 라인 2 : 경험조율사 안건입니다 */}
        <p
          ref={line2Ref}
          className="font-sans font-normal text-center"
          style={{
            fontSize: 'clamp(2rem, 5vw, 4.5rem)',
            letterSpacing: '-1.44px',
            lineHeight: '80.64px',
            color: 'var(--hero-fg)',
          }}
        >
          경험조율사 안건입니다
        </p>
      </div>
    </section>
  )
}
