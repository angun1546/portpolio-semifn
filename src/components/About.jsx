const LOGO_ICON = 'https://www.figma.com/api/mcp/asset/1ad724b7-71d5-440c-80d8-6779cae0c850'

function SectionDivider() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', height: '20px', width: '100%' }}>
      <div style={{ flex: 1, borderTop: '1px dashed #dbdbdb' }} />
      <div
        style={{
          width: '20px',
          height: '20px',
          margin: '0 20px',
          borderRadius: '5.25px',
          overflow: 'hidden',
          flexShrink: 0,
          boxShadow: '0.445px 0.445px 0.629px rgba(0,0,0,0.26), 1.211px 1.211px 1.712px rgba(0,0,0,0.25), 2.658px 2.658px 3.759px rgba(0,0,0,0.23), 5.901px 5.901px 8.345px rgba(0,0,0,0.19), 14px 14px 21.213px rgba(0,0,0,0.2), inset 1px 1px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(0,0,0,0.23)',
        }}
      >
        <img src={LOGO_ICON} alt="" style={{ width: '100%', height: '100%', display: 'block' }} />
      </div>
      <div style={{ flex: 1, borderTop: '1px dashed #dbdbdb' }} />
    </div>
  )
}

export { SectionDivider }

const infoRows = [
  { label: '이    름', value: '안건' },
  { label: '나    이', value: '1996.04.' },
  { label: '거주지', value: '경기도 고양시' },
  { label: '휴대폰', value: '010-4206-0415' },
  { label: '이메일', value: 'angun1546@gmail.com' },
]

const educationRows = [
  { period: '25.10 - 26.04', desc: 'MBC 아카데미 챗GPT 생성형 AI를 활용한 반응형 웹콘텐츠(영상제작&코딩) 개발기획자 양성과정' },
  { period: '25.04 - 25.09', desc: '당진시 대호지면사무소 산업팀 행정지원' },
  { period: '22.02 - 25.02', desc: '감리교 신학대학원 신학전공석사 졸업' },
  { period: '15.03 - 18.08', desc: '침례신학대학교 교회음악과 졸업' },
]

function InfoRow({ label, value }) {
  return (
    <div style={{ display: 'flex', gap: '6px', alignItems: 'center', fontSize: '16px' }}>
      <span
        style={{
          fontFamily: 'var(--font-sans)',
          fontWeight: 500,
          lineHeight: '28px',
          color: '#2c2c2c',
          whiteSpace: 'pre',
          minWidth: '60px',
        }}
      >
        {label}
      </span>
      <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 400, lineHeight: '24px', color: '#3a3a3a', width: '9px' }}>
        :
      </span>
      <span
        style={{
          fontFamily: 'var(--font-sans)',
          fontWeight: 400,
          lineHeight: '28px',
          color: '#737373',
          letterSpacing: '-0.5px',
        }}
      >
        {value}
      </span>
    </div>
  )
}

function EduRow({ period, desc }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '10px' }}>
      <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 400, fontSize: '16px', lineHeight: '24px', color: '#2c2c2c' }}>
        {period}
      </span>
      <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 400, fontSize: '16px', lineHeight: '24px', color: '#747474' }}>
        {desc}
      </span>
    </div>
  )
}

const sectionLabel = {
  fontFamily: 'var(--font-sans)',
  fontWeight: 800,
  fontSize: '20px',
  lineHeight: '1.15',
  color: '#434343',
  letterSpacing: '-0.5px',
  marginBottom: '10px',
  display: 'block',
}

export default function About() {
  return (
    <section id="about" style={{ background: '#ffffff' }}>
      <div
        style={{
          maxWidth: '1088px',
          margin: '0 auto',
          padding: '100px clamp(24px, 4vw, 0px) 50px',
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
            fontWeight: 700,
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            lineHeight: '80.64px',
            letterSpacing: '-1.44px',
            color: '#000000',
            textAlign: 'center',
            width: '100%',
          }}
        >
          About me
        </p>
      </div>

      {/* 정보 그리드 */}
      <div
        style={{
          maxWidth: '1088px',
          margin: '0 auto',
          paddingBottom: '100px',
          padding: '0 clamp(24px, 4vw, 0px) 100px',
          display: 'grid',
          gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
          columnGap: '20px',
          rowGap: '40px',
        }}
      >
        {/* 인적사항 */}
        <div>
          <span style={sectionLabel}>인적사항</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {infoRows.map((row) => (
              <InfoRow key={row.label} label={row.label} value={row.value} />
            ))}
          </div>
        </div>

        {/* 학력 및 교육사항 */}
        <div>
          <span style={sectionLabel}>학력 및 교육사항</span>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {educationRows.map((row) => (
              <EduRow key={row.period + row.desc} period={row.period} desc={row.desc} />
            ))}
          </div>
        </div>

        {/* 자격사항 */}
        <div>
          <span style={sectionLabel}>자격사항</span>
          <div>
            <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 400, fontSize: '16px', lineHeight: '24px', color: '#2c2c2c', display: 'block' }}>
              15.01.15
            </span>
            <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 400, fontSize: '16px', lineHeight: '24px', color: '#747474', display: 'block' }}>
              1종 보통 운전면허 
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
