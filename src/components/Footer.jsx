export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--btn-dark-bg)',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '16px',
        padding: '50px 24px',
        transition: 'background-color var(--transition)',
      }}
    >
      <p
        style={{
          fontFamily: 'var(--font-sans)',
          fontWeight: 400,
          fontSize: '20px',
          lineHeight: '62.72px',
          letterSpacing: '-0.56px',
          color: '#ffffff',
          textAlign: 'center',
        }}
      >
        본 페이지는 상업적 목적이 아닌 개인 포트폴리오용으로 제작되었습니다.
      </p>
      <p
        style={{
          fontFamily: 'var(--font-sans)',
          fontWeight: 400,
          fontSize: '20px',
          lineHeight: '62.72px',
          letterSpacing: '-0.56px',
          color: '#ffffff',
          textAlign: 'center',
        }}
      >
        © 2026 An Gun. All Rights Reserved.
      </p>
    </footer>
  )
}
