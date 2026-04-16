import { useRef } from 'react'
import { gsap } from 'gsap'
import bannerImg from '../assets/images/me.png'

const ICON_FILE =
  'https://www.figma.com/api/mcp/asset/68e38d59-ab16-47ea-af1a-a5a25c54fa7a'
const ICON_GITHUB =
  'https://www.figma.com/api/mcp/asset/4af55f1b-5ac2-49ef-a612-d807baaa2b35'

const BTN_BASE_CLASS = 'flex items-center justify-center gap-[12px] px-[30px] h-[56px] rounded-[12px] text-[18px] leading-[28px] font-sans cursor-pointer no-underline whitespace-nowrap'

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
      className="relative bg-white overflow-hidden min-h-[1024px] pb-0"
    >
      {/* 히어로 텍스트 - GNB 아래 중앙 */}
      <div
        className="absolute left-1/2 -translate-x-1/2 text-center top-[134px] w-[min(765px,calc(100%-48px))]"
      >
        {/* 라인 1 : 소음을 울림으로 */}
        <div className="flex items-baseline justify-center pb-[15px] gap-0">
          <span className="font-bazzi text-near-black text-[clamp(2.5rem,6.67vw,6rem)] tracking-[-1.44px] leading-[80.64px] p-[10px]">
            소음
          </span>
          <span className="font-sans font-extralight text-near-black text-[clamp(2rem,5vw,4.5rem)] tracking-[-1.44px] leading-[80.64px] px-[8px]">
            을
          </span>
          <span className="font-bazzi text-near-black text-[clamp(2.5rem,6.67vw,6rem)] tracking-[-1.44px] leading-[80.64px] p-[10px]">
            울림
          </span>
          <span className="font-sans font-extralight text-near-black text-[clamp(2rem,5vw,4.5rem)] tracking-[-1.44px] leading-[80.64px] pl-[8px]">
            으로
          </span>
        </div>

        {/* 라인 2 : 시각을 연주하는 안건입니다 */}
        <p className="font-sans font-normal text-near-black text-center text-[clamp(2rem,5vw,4.5rem)] tracking-[-1.44px] leading-[80.64px]">
          경험조율사 안건입니다
        </p>
      </div>

      {/* 프로필 사진 - 중앙 하단 */}
      <div
        className="absolute left-1/2 -translate-x-1/2 top-[246px] w-[clamp(280px,38.6vw,556px)] h-[clamp(390px,54.2vw,781px)]"
      >
        <img
          src={bannerImg}
          alt="안건"
          className="w-full h-full object-cover object-top"
        />

        {/* 버튼 2개 - 사진 하단에 오버레이 */}
        <div
          className="absolute left-1/2 -translate-x-1/2 flex gap-4 -translate-y-1/2 top-[calc(50%+298.5px)] flex-nowrap"
        >
          {/* 이력서보기 - 다크 버튼 */}
          <a
            href="https://drive.google.com/file/d/1QWOU7_6ULBB1YmmLka8lJqyii304lkWG/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            {...resumeBtn}
            className={`${BTN_BASE_CLASS} bg-[#222222] text-white`}
            style={{
              boxShadow:
                '0.445px 0.445px 0.629px rgba(0,0,0,0.26), 14px 14px 21.213px rgba(0,0,0,0.2), inset 1px 1px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(0,0,0,0.23)',
            }}
          >
            <img
              src={ICON_GITHUB}
              alt=""
              className="w-[25px] h-[25px]"
            />
            이력서보기
          </a>

          {/* 깃허브 - 라이트 버튼 */}
          <a
            href="https://github.com/angun1546"
            target="_blank"
            rel="noopener noreferrer"
            {...githubBtn}
            className={`${BTN_BASE_CLASS} bg-[rgba(255,255,255,0.852)] text-[#1a1a1a]`}
            style={{
              boxShadow:
                '0.445px 0.445px 0.629px rgba(0,0,0,0.26), 14px 14px 21.213px rgba(0,0,0,0.2), inset 1px 1px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(0,0,0,0.23)',
            }}
          >
            <img
              src={ICON_FILE}
              alt=""
              className="w-[25px] h-[25px]"
            />
            깃허브
          </a>
        </div>
      </div>
    </section>
  )
}
