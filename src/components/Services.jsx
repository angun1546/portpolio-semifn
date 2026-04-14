const services = [
  {
    id: 1,
    title: 'STRATEGY',
    desc: '데이터 기반의 사용자 분석을 통한 핵심 지표 개선 및 프로덕트 로드맵 수립. 비즈니스 모델과 사용자 니즈 사이의 균형점을 찾아 최적의 전략을 제안합니다.',
  },
  {
    id: 2,
    title: 'UI/UX DESIGN',
    desc: '복잡한 시스템을 직관적인 인터페이스로 단순화하여 사용자 이탈율을 최소화하는 설계. 현대적인 타이포그래피와 정교한 레이아웃으로 브랜드 가치를 높입니다.',
  },
  {
    id: 3,
    title: 'DEVELOPMENT',
    desc: 'Vite, React 19 및 최신 프론트엔드 기술을 활용한 고성능 인터랙티브 사이트 구축. GSAP과 Lenis를 연동한 부드러운 애니메이션과 사용자 경험을 제공합니다.',
  },
]

export default function Services() {
  return (
    <section
      id="services"
      className="w-full bg-white"
      style={{ borderTop: '1px solid rgba(0,0,0,0.08)' }}
    >
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3">
        {services.map((s, i) => (
          <div
            key={s.id}
            className="flex flex-col group hover:bg-black transition-colors duration-500"
            style={{
              padding: 'clamp(60px, 8vw, 120px) 48px',
              borderRight: i < 2 ? '1px solid rgba(0,0,0,0.08)' : 'none',
              borderBottom: '1px solid rgba(0,0,0,0.08)',
            }}
          >
            {/* 서비스 번호 */}
            <span className="font-display font-black text-black/10 group-hover:text-white/20 text-5xl mb-12 transition-colors">
              0{s.id}
            </span>
            
            {/* 타이틀 (Wanted Sans) */}
            <h5
              className="font-display font-black text-grey-10 group-hover:text-white mb-8 transition-colors"
              style={{ fontSize: '24px', lineHeight: '1.2', letterSpacing: '0.05em' }}
            >
              {s.title}
            </h5>
            
            {/* 설명 (Pretendard) */}
            <p
              className="font-sans font-medium text-grey-10/60 group-hover:text-white/70 transition-colors"
              style={{ fontSize: '16px', lineHeight: '1.7', letterSpacing: '-0.01em' }}
            >
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
