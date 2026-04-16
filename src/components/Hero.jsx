import { useRef } from 'react'
import { gsap } from 'gsap'
import bannerImg from '../assets/images/me.png'

const ICON_FILE =
  'https://www.figma.com/api/mcp/asset/68e38d59-ab16-47ea-af1a-a5a25c54fa7a'
const ICON_GITHUB =
  'https://www.figma.com/api/mcp/asset/4af55f1b-5ac2-49ef-a612-d807baaa2b35'

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

  return (
    <section
      id="hero"
      className="relative overflow-hidden"
      style={{ minHeight: '1024px', paddingBottom: '0', background: 'var(--bg)' }}
    >
      {/* 히어로 텍스트 - GNB 아래 중앙 */}
      <div
        className="absolute left-1/2 -translate-x-1/2 text-center"
        style={{ top: '134px', width: 'min(765px, calc(100% - 48px))' }}
      >
        {/* 라인 1 : 소음을 울림으로 */}
        <div
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
              color: 'var(--fg-near)',
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
              color: 'var(--fg-near)',
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
              color: 'var(--fg-near)',
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
              color: 'var(--fg-near)',
            }}
          >
            으로
          </span>
        </div>

        {/* 라인 2 : 시각을 연주하는 안건입니다 */}
        <p
          className="font-sans font-normal text-center"
          style={{
            fontSize: 'clamp(2rem, 5vw, 4.5rem)',
            letterSpacing: '-1.44px',
            lineHeight: '80.64px',
            color: 'var(--fg-near)',
          }}
        >
          경험조율사 안건입니다
        </p>
      </div>

      {/* 프로필 사진 - 중앙 하단 */}
      <div
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

        {/* 버튼 2개 - 사진 하단에 오버레이 */}
        <div
          className="absolute left-1/2 -translate-x-1/2 flex gap-4 -translate-y-1/2"
          style={{ top: 'calc(50% + 298.5px)', flexWrap: 'nowrap' }}
        >
          {/* 이력서보기 - 다크 버튼 */}
          <a
            href="https://drive.google.com/file/d/1QWOU7_6ULBB1YmmLka8lJqyii304lkWG/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            {...resumeBtn}
            style={{
              ...btnBase,
              background: 'var(--btn-dark-bg)',
              color: '#ffffff',
            }}
          >
            <img
              src={ICON_GITHUB}
              alt=""
              style={{ width: '25px', height: '25px' }}
            />
            이력서보기
          </a>

          {/* 깃허브 - 라이트 버튼 */}
          <a
            href="https://github.com/angun1546"
            target="_blank"
            rel="noopener noreferrer"
            {...githubBtn}
            style={{
              ...btnBase,
              background: 'var(--btn-light-bg)',
              color: 'var(--fg-near)',
            }}
          >
            <img
              src={ICON_FILE}
              alt=""
              style={{ width: '25px', height: '25px' }}
            />
            깃허브
          </a>
        </div>
      </div>
    </section>
  )
}
