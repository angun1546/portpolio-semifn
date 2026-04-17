import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { gsap } from 'gsap'

export default function ProjectDetail() {
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
    gsap.from('main', { opacity: 0, y: 30, duration: 0.6, ease: 'power2.out' })
  }, [])

  const handleBack = () => {
    navigate('/', { state: { scrollTo: 'projects' } })
  }

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: '22px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 200,
          width: 'min(764px, calc(100% - 48px))',
          height: '60px',
          background: 'var(--header-bg)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderRadius: '16px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          padding: '0 36px',
          display: 'flex',
          alignItems: 'center',
          boxShadow:
            '0.445px 0.445px 0.629px rgba(0,0,0,0.26), 14px 14px 21.213px rgba(0,0,0,0.2)',
        }}
      >
        <button
          onClick={handleBack}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: 'none',
            border: 'none',
            color: 'white',
            fontFamily: 'var(--font-sans)',
            fontSize: '16px',
            cursor: 'none',
            opacity: 0.8,
          }}
        >
          ← 돌아가기
        </button>
      </header>

      <main
        style={{
          minHeight: '100dvh',
          paddingTop: '120px',
          paddingBottom: '100px',
          maxWidth: '1088px',
          margin: '0 auto',
          padding: '120px clamp(24px, 4vw, 0px) 100px',
          background: 'transparent',
        }}
      >
        {/* TODO: 프로젝트 {id} 상세 내용 */}
      </main>
    </>
  )
}
