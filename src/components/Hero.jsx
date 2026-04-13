import { useRef } from 'react'

const HERO_IMG = 'https://www.figma.com/api/mcp/asset/7d7f07a2-278a-4842-afe1-01f8ce31b877'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden"
      style={{ paddingTop: 'clamp(140px, 15vw, 220px)', paddingBottom: '80px' }}
    >
      {/* 히어로 콘텐츠 */}
      <div
        className="flex flex-col items-center gap-6 mx-auto px-6"
        style={{ maxWidth: '1025px' }}
      >
        {/* 상단 텍스트 */}
        <h1
          className="font-display font-black text-grey-10 text-center"
          style={{
            fontSize: 'clamp(2rem, 4.5vw, 4rem)',
            letterSpacing: '-2.4px',
            lineHeight: '1.1',
          }}
        >
          소음같은 디자인을 울림으로 만드는
        </h1>

        {/* 히어로 이미지 - 알약 모양 */}
        <div
          className="overflow-hidden shrink-0"
          style={{
            width: 'clamp(200px, 32vw, 472px)',
            height: 'clamp(280px, 45vw, 663px)',
            borderRadius: '200px',
          }}
        >
          <img
            src={HERO_IMG}
            alt="안건"
            className="w-full h-full object-cover"
          />
        </div>

        {/* 하단 텍스트 */}
        <h1
          className="font-display font-black text-grey-10 text-center"
          style={{
            fontSize: 'clamp(2.5rem, 8vw, 7.5rem)',
            letterSpacing: '-2.4px',
            lineHeight: '1.1',
          }}
        >
          연주자같은 디자이너 안건 입니다.
        </h1>
      </div>
    </section>
  )
}
