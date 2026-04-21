import iconImg from '../assets/images/icon.png'

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
        언제든지 준비되어 있는 건입니다! 🔫🔫🔫
      </p>

      <img
        src={iconImg}
        alt="안건 포트폴리오 아이콘"
        style={{ width: '80px', height: '80px', borderRadius: '20px', filter: 'brightness(0) invert(1)' }}
      />

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
