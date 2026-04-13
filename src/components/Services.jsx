const services = [
  {
    id: 1,
    title: 'STRATEGY',
    desc: '데이터 기반의 사용자 분석을 통한 핵심 지표 개선 및 프로덕트 로드맵 수립',
  },
  {
    id: 2,
    title: 'UI/UX DESIGN',
    desc: '복잡한 시스템을 직관적인 인터페이스로 단순화하여 사용자 이탈율을 최소화하는 설계',
  },
  {
    id: 3,
    title: 'DEVELOPMENT',
    desc: 'Framer, Webflow 및 최신 웹 기술을 활용한 고성능 인터랙티브 프로토타이핑',
  },
]

export default function Services() {
  return (
    <section
      id="services"
      className="w-full"
      style={{ borderTop: '1px solid rgba(0,0,0,0.1)' }}
    >
      <div className="grid grid-cols-1 md:grid-cols-3">
        {services.map((s, i) => (
          <div
            key={s.id}
            className="flex flex-col justify-center"
            style={{
              padding: 'clamp(40px, 7vw, 127px) 32px clamp(40px, 7vw, 127px)',
              borderRight: i < 2 ? '1px solid rgba(0,0,0,0.1)' : 'none',
              borderBottom: '1px solid rgba(0,0,0,0.1)',
            }}
          >
            <h5
              className="font-sans font-black text-grey-10 mb-5"
              style={{ fontSize: '17.6px', lineHeight: '28.16px' }}
            >
              {s.title}
            </h5>
            <p
              className="font-sans text-grey-10"
              style={{ fontSize: '15.2px', lineHeight: '24.32px', opacity: 0.7 }}
            >
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
