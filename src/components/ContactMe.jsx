import SectionDivider from './SectionDivider'
import Btn from './Btn'

export default function ContactMe() {
  return (
    <section id="contact" style={{ background: '#ffffff' }}>
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
            color: '#000000',
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
              color: '#0c151d',
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
              color: '#40484e',
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

        {/* 하단 문구 */}
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '19.88px',
            color: '#40484e',
            textAlign: 'center',
          }}
        >
          {`git commit -m "Keep pushing boundaries and dreaming big"`}
        </p>
      </div>
    </section>
  )
}
