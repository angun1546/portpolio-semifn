import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionDivider from './SectionDivider'
import Btn from './Btn'

gsap.registerPlugin(ScrollTrigger)

import imgScreen from '../assets/images/screen1.png'
import imgScreen2 from '../assets/images/screen2.png'
import imgScreen3 from '../assets/images/screen3.png'

const PROJECTS = [
  {
    number: '01',
    image: imgScreen,
    title: '풀사이클 생성형 AI OTT 서비스 프로젝트',
    period: '2주',
    contribution: '65%',
    stack: [
      'Figma',
      'Premiere pro',
      'React19',
      'Vite7',
      'EsLint9',
      'React Compiler',
      'Python3',
      'Tmdb API',
      'Gemini CLI',
      'Claude CLI',
    ],
    summary:
      'TMDB API와 생성형 AI를 연동하여 사용자 취향에 최적화된 콘텐츠를 제안하는 OTT 큐레이션 서비스 프로젝트입니다. 기획부터 디자인, 개발에 참여 했으며 픽셀 퍼펙트 UI와 GSAP 기반의 몰입감 있는 인터랙션을 구현했습니다.',
    problem:
      'react-player로 YouTube 예고편 재생 시 일부 영화에서 영상이 표시되지 않고 빈 화면만 나오는 문제점이 생겼습니다. 필터 조건을 Trailer → Teaser → Clip 우선순위 폴백으로 변경하고, 영상이 아예 없는 경우 "예고편 없음" 안내 메시지를 표시했습니다.',
    links: {
      site: 'https://voda-front.onrender.com',
      github: 'https://github.com/angun1546/voda.git',
      plan: 'https://www.figma.com/deck/EVvbKzcfR2xDUUO6LwaHWC',
    },
  },
  {
    number: '02',
    figmaEmbed:
      'https://embed.figma.com/proto/tFYu71ZQtogvN3P1Qs4XTg/%EB%B8%8C%EB%A3%A8%EB%8B%A4-%EC%BB%A4%ED%94%BC-%ED%94%84%EB%A1%9C%ED%86%A0-%ED%83%80%EC%9E%85-%EA%B5%AC%ED%98%84?node-id=4-2&p=f&viewport=598%2C481%2C0.12&scaling=scale-down&content-scaling=fixed&starting-point-node-id=4%3A59&page-id=0%3A1&embed-host=share&hide-ui=1&hotspot-hints=0&show-proto-sidebar=0',
    title: '브루다커피(Brewda Coffee)\n브랜드 앱 디자인 & 미디어 프로젝트',
    period: '2주',
    contribution: '60%',
    stack: ['Figma', 'Premiere pro', 'Whisk'],
    summary:
      '브랜드 아이덴티티를 디지털 앱 경험으로 확장하기 위해 기획, UX/UI 디자인, 광고 영상 제작 전 과정을 주도한 프로젝트입니다. 60%의 기여도를 바탕으로 직관적인 서비스 설계와 감각적인 미디어를 결합해 일관성 있는 브랜드 몰입감을 구현했습니다.',
    problem:
      '실제 사용자의 핵심 니즈를 놓치던 모호한 페르소나 설정을 \'상황 중심(Context) 분석\'으로 재정의하여 해결했습니다. 이를 통해 바쁜 출근 시간대에 최적화된 \'퀵 오더\' UI를 설계함으로써 주문 단계를 단축하고 실질적인 서비스 효율을 높였습니다.',
    links: {
      site: 'https://www.figma.com/proto/tFYu71ZQtogvN3P1Qs4XTg/%EB%B8%8C%EB%A3%A8%EB%8B%A4-%EC%BB%A4%ED%94%BC-%ED%94%84%EB%A1%9C%ED%86%A0-%ED%83%80%EC%9E%85-%EA%B5%AC%ED%98%84?node-id=4-2&p=f&viewport=598%2C481%2C0.12&t=6OhDeWw2bfTrRp40-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=4%3A59&page-id=0%3A1',
      video: 'https://drive.google.com/drive/folders/1W46YKBq8Ihewcah1qGBoQ3jEvT3Pya3n?usp=sharing',
      plan: 'https://www.figma.com/deck/TmiSDz7bdKHpt071O8FwD6/%EC%95%88%EA%B1%B4-3%ED%8C%80-%EA%B8%B0%ED%9A%8D%EC%84%9C?node-id=4001-803&t=RJALUrXbkmuFAepm-1',
    },
  },
  {
    number: '03',
    image: imgScreen2,
    wrapFrame: true,
    title: '네네치킨 스노윙 맥스 치킨 광고 AI생성형 영상 리뉴얼',
    period: '1주',
    contribution: '100%',
    stack: ['kling', 'Premiere pro', 'Whisk', 'Gemini CLI'],
    summary:
      'AI로 영상을 생성해 기존 광고를 리뉴얼한 영상편집 프로젝트입니다. 제미나이에서 프롬프트를 출력받은 후, 프롬프트를 토대로 위스크에서 이미지를 생성하고, 생성된 이미지를 바탕으로 클링에서 영상을 제작한 후 만든 영상을 광고 오디오 소스와 맞도록 프리미어 프로에서 컷편집을 진행하여 마무리 했습니다.',
    problem:
      '영상 내 \'스노윙 치킨\' 자막 생성 시, 한글 \'스\'의 형태를 AI가 동물 \'소\'로 오인하여 글자 대신 소가 등장하는 그래픽 오류가 발생했으나 텍스트와 이미지를 분리하여 인식하도록 프롬프트를 재구성하고, \'cow\' 등을 부정 프롬프트로 설정해 형태적 왜곡을 차단했습니다.',
    links: {
      site: '#',
      video: '#',
      videoLabel: '영상보기',
      plan: 'https://drive.google.com/file/d/1hiqnu3qsvy70YyCf7mdhjsYjz4Fy57_O/view?usp=sharing',
    },
  },
  {
    number: '04',
    image: imgScreen3,
    wrapFrame: true,
    title: '사이트 반응형 구현',
    period: '3주',
    contribution: '100%',
    stack: ['Figma', 'Html5', 'Css'],
    summary:
      'Figma 디자인을 기반으로 만들어진 K-Mooc(한국형 온라인 공개강좌) 웹사이트의 반응형 구현입니다. 웹 인터페이스를 재해석한 프론트앤드 작업물입니다. 단순히 화면을 복제하는 것을 넘어, 사용자 경험을 개선하고 시각적 완성도를 높이는 데 주력 했습니다.',
    problem:
      '배경 이미지 위에 흰색 텍스트를 배치했을 때, 이미지의 밝은 부분과 글자가 겹쳐 가독성이 현저히 떨어지는 현상이 발생했습니다. CSS의 linear-gradient를 활용하여 이미지 위에 반투명한 검은색 레이어(Overlay)를 씌움으로 해결했습니다.',
    links: {
      site: 'https://angun1546.github.io/k-Mooc/',
      github: 'https://github.com/angun1546/k-Mooc.git',
      plan: 'https://www.figma.com/design/khrGcMpQHgLdr86v5nOuxH/%EC%8A%A4%ED%83%80%EC%9D%BC-%EA%B0%80%EC%9D%B4%EB%93%9C?m=auto&t=xkbmkw9BxnzRrgcR-1',
    },
  },
  {
    number: '05',
    videoSrc: '/videos/project5.mp4',
    title: '생성형 AI영상 배너',
    period: '2일',
    contribution: '100%',
    stack: ['Grok', 'Gemini CLI', 'Whisk'],
    summary:
      "데이터 기반의 가상 세계로 빨려 들어가는 '몰입의 관문'을 컨셉으로, 현실과 가상의 경계를 허무는 OTT 플랫폼의 비전을 강렬한 시네마틱 영상으로 구현했습니다. 정교한 프롬프트 제어를 통해 워프 효과, 드라마틱한 조명, 눈동자 반사 등 실사급 텍스처와 역동적인 카메라 무빙을 결합하여 플랫폼의 기술적 완성도를 강조했습니다.",
    problem:
      "초기 프롬프트에서는 '거실에서 스크린을 보는 남자'와 '판타지 세계'가 단순한 교차 편집(Cut) 형태로 생성되어, VODA가 추구하는 데이터 속으로 빨려 들어가는 몰입감이 시각적으로 충분히 전달되지 않고 흐름이 끊기는 이질감이 발생했습니다. 단순한 장면 묘사를 넘어, 물리적 공간과 가상 공간을 잇는 시객적 매개체(Vortex, Warp)와 카메라 무빙(Dolly-in)에 집중한 기술적 프롬프트로 재설계하여 해결했습니다.",
    links: { site: '#', github: null, plan: '#' },
  },
]

function InfoRow({ label, value }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'start',
        gap: '40px',
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-sans)',
          fontWeight: 400,
          fontSize: '16px',
          color: 'var(--fg-sub-light)',
          width: '56px',
          flexShrink: 0,
          lineHeight: '28px',
          whiteSpace: 'pre',
        }}
      >
        {label}
      </span>
      <span
        style={{
          fontFamily: 'var(--font-sans)',
          fontWeight: 400,
          fontSize: '16px',
          color: 'var(--fg-near)',
          lineHeight: '28px',
        }}
      >
        {value}
      </span>
    </div>
  )
}

function ProjectItem({ project, index }) {
  const itemRef = useRef(null)
  const screenRef = useRef(null)

  useEffect(() => {
    const item = itemRef.current
    const screen = screenRef.current
    if (!item || !screen) return

    const handleMouseMove = (e) => {
      const rect = item.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const nx = (e.clientX - cx) / (rect.width / 2)   // -1 ~ 1
      const ny = (e.clientY - cy) / (rect.height / 2)  // -1 ~ 1

      gsap.to(screen, {
        rotateY: nx * 14,
        rotateX: -ny * 9,
        x: nx * 18,
        y: ny * 10,
        scale: 1.04,
        transformPerspective: 900,
        transformOrigin: 'center center',
        duration: 0.5,
        ease: 'power2.out',
      })
    }

    const handleMouseLeave = () => {
      gsap.to(screen, {
        rotateY: 0,
        rotateX: 0,
        x: 0,
        y: 0,
        scale: 1,
        duration: 0.7,
        ease: 'power3.out',
      })
    }

    item.addEventListener('mousemove', handleMouseMove)
    item.addEventListener('mouseleave', handleMouseLeave)

    // ─── Effect 3: SCROLL SCRUB ───────────────────────────────
    // 이미지가 스크롤에 연동되어 위로 살짝 떠오르는 시차 효과
    gsap.fromTo(
      screen,
      { y: 30 },
      {
        y: -30,
        ease: 'none',
        scrollTrigger: {
          trigger: item,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5,
        },
      }
    )

    return () => {
      item.removeEventListener('mousemove', handleMouseMove)
      item.removeEventListener('mouseleave', handleMouseLeave)
      ScrollTrigger.getAll()
        .filter(st => st.vars.trigger === item)
        .forEach(st => st.kill())
    }
  }, [])

  // 프로젝트별 숫자 위치 — 스크린 상단에 살짝 걸쳐 숫자가 보이는 정도
  const NUM_POS = [
    { top: '-10px',  left: '-25px' },  // 01
    { top: '130px',  left: '-25px' },  // 02
    { top: '215px',  left: '-25px' },  // 03
    { top: '190px',  left: '-25px' },  // 04
    { top: '290px',  left: '-25px' },  // 05
  ]
  const numPos = NUM_POS[index] ?? NUM_POS[0]

  return (
    <div
      ref={itemRef}
      className="project-item"
      style={{ position: 'relative', width: 'fit-content', margin: '0 auto', paddingTop: index > 0 ? '230px' : '0' }}
    >
      {/* 번호 — 스크린 상단에 걸치게 배치 */}
      <div
        style={{
          position: 'absolute',
          top: numPos.top,
          left: numPos.left,
          zIndex: 0,
          fontFamily: 'var(--font-sans)',
          fontWeight: 800,
          fontSize: '98px',
          color: 'var(--fg-accent)',
          letterSpacing: '-2px',
          textShadow:
            '14px 14px 21.213px rgba(0,0,0,0.2), 0.445px 0.445px 0.629px rgba(0,0,0,0.26)',
          lineHeight: 1.12,
          userSelect: 'none',
          pointerEvents: 'none',
        }}
      >
        {project.number}
      </div>

      {/* 프로젝트 본문 */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'row',
          gap: '64px',
          alignItems: 'center',
        }}
      >
        {/* 왼쪽: 스크린샷 */}
        <div ref={screenRef} style={{ flexShrink: 0, width: '629px', willChange: 'transform' }}>
          {project.videoSrc ? (
            <div
              style={{
                width: '629px',
                background: '#111',
                borderRadius: '22px',
                overflow: 'hidden',
                boxShadow:
                  '14px 14px 21px rgba(0,0,0,0.2), 0.5px 0.5px 0.6px rgba(0,0,0,0.26)',
              }}
            >
              <video
                src={project.videoSrc}
                autoPlay
                loop
                muted
                playsInline
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          ) : project.figmaEmbed ? (
            <div
              style={{
                width: '560px',
                height: '520px',
                borderRadius: '12px',
                overflow: 'hidden',
                backgroundColor: '#FF7F18',
                boxShadow:
                  '14px 14px 21px rgba(0,0,0,0.2), 0.5px 0.5px 0.6px rgba(0,0,0,0.26)',
              }}
            >
              <iframe
                src={project.figmaEmbed}
                width="560"
                height="520"
                allowFullScreen
                style={{ border: 'none', display: 'block' }}
              />
            </div>
          ) : project.wrapFrame ? (
            <div
              style={{
                width: '629px',
                background: 'var(--card-bg)',
                borderRadius: '22px',
                border: '1px solid rgba(255,255,255,0.1)',
                padding: '11px',
                boxSizing: 'border-box',
                boxShadow:
                  '14px 14px 21px rgba(0,0,0,0.2), 0.5px 0.5px 0.6px rgba(0,0,0,0.26)',
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  borderRadius: '12px',
                }}
              />
            </div>
          ) : (
            <img
              src={project.image}
              alt={project.title}
              style={{
                width: '629px',
                height: 'auto',
                display: 'block',
                filter:
                  'drop-shadow(14px 14px 21px rgba(0,0,0,0.2)) drop-shadow(0.5px 0.5px 0.6px rgba(0,0,0,0.26))',
              }}
            />
          )}
        </div>

        {/* 오른쪽: 정보 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '496px' }}>
          {/* 타이틀 */}
          <h3
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 700,
              fontSize: '24px',
              color: 'var(--fg-near)',
              letterSpacing: '-1px',
              lineHeight: '1.4',
              whiteSpace: 'pre-line',
            }}
          >
            {project.title}
          </h3>

          {/* 메타 정보 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <InfoRow label="제작기간" value={project.period} />
            <InfoRow label="기 여  도" value={project.contribution} />

            {/* 기술스택 */}
            <div style={{ display: 'flex', alignItems: 'start', gap: '40px' }}>
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 400,
                  fontSize: '16px',
                  color: 'var(--fg-sub-light)',
                  width: '56px',
                  flexShrink: 0,
                  lineHeight: '28px',
                }}
              >
                기술스택
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', rowGap: '4px' }}>
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontWeight: 400,
                      fontSize: '16px',
                      color: 'var(--fg-near)',
                      lineHeight: '28px',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* 개요 */}
            <div style={{ display: 'flex', alignItems: 'start', gap: '40px' }}>
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 400,
                  fontSize: '16px',
                  color: 'var(--fg-sub-light)',
                  width: '56px',
                  flexShrink: 0,
                  lineHeight: '28px',
                  whiteSpace: 'pre',
                }}
              >
                {'개      요'}
              </span>
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 400,
                  fontSize: '16px',
                  color: 'var(--fg-near)',
                  lineHeight: '28px',
                }}
              >
                {project.summary}
              </p>
            </div>

            {/* 문제해결 */}
            <div style={{ display: 'flex', alignItems: 'start', gap: '40px' }}>
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 400,
                  fontSize: '16px',
                  color: 'var(--fg-sub-light)',
                  width: '56px',
                  flexShrink: 0,
                  lineHeight: '28px',
                }}
              >
                문제해결
              </span>
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 400,
                  fontSize: '16px',
                  color: 'var(--fg-near)',
                  lineHeight: '28px',
                }}
              >
                {project.problem}
              </p>
            </div>
          </div>

          {/* 버튼 */}
          {(() => {
            const hasSite = project.links.site && project.links.site !== '#'
            const hasGithub = !!project.links.github
            const hasVideo = !!project.links.video
            const primaryIs = hasSite ? 'site' : hasGithub ? 'github' : hasVideo ? 'video' : 'plan'
            const glassStyle = {
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid var(--btn-glass-border)',
            }
            return (
              <div style={{ display: 'flex', gap: '16px', marginTop: '12px', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
                {hasSite && (
                  <Btn
                    variant={primaryIs === 'site' ? 'cta' : 'glass'}
                    icon="external-link-alt"
                    label="사이트"
                    href={project.links.site}
                    target="_blank"
                    rel="noreferrer"
                    style={primaryIs !== 'site' ? glassStyle : undefined}
                  />
                )}
                {hasGithub && (
                  <Btn
                    variant={primaryIs === 'github' ? 'cta' : 'glass'}
                    icon="git"
                    label="깃허브"
                    href={project.links.github}
                    target="_blank"
                    rel="noreferrer"
                    style={primaryIs !== 'github' ? glassStyle : undefined}
                  />
                )}
                {hasVideo && (
                  <Btn
                    variant={primaryIs === 'video' ? 'cta' : 'glass'}
                    icon="video"
                    label={project.links.videoLabel ?? '광고영상'}
                    href={project.links.video}
                    target="_blank"
                    rel="noreferrer"
                    style={primaryIs !== 'video' ? glassStyle : undefined}
                  />
                )}
                <Btn
                  variant={primaryIs === 'plan' ? 'cta' : 'glass'}
                  icon="file"
                  label="기획서"
                  href={project.links.plan}
                  target="_blank"
                  rel="noreferrer"
                  style={primaryIs !== 'plan' ? glassStyle : undefined}
                />
              </div>
            )
          })()}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 대형 타이틀 애니메이션
      gsap.from('.projects-title', {
        opacity: 0,
        y: 100,
        duration: 1.2,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: '.projects-title',
          start: 'top 90%',
        },
      })

      // 프로젝트 아이템 — 진입 애니메이션 + 개별 PIN
      gsap.utils.toArray('.project-item').forEach((el) => {
        // 진입 페이드업
        gsap.from(el, {
          opacity: 0,
          y: 60,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
          },
        })

        // 뷰포트 상단에 닿으면 500px 동안 고정
        ScrollTrigger.create({
          trigger: el,
          start: 'top top',
          end: '+=500',
          pin: true,
          pinSpacing: true,
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="projects"
      ref={sectionRef}
      style={{ background: 'transparent', padding: '128px 0 192px' }}
    >
      {/* Projects 섹션 타이틀 */}
      <div className="projects-title" style={{ marginBottom: '200px' }}>
        <SectionDivider iconWhite />
        <h2
          style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 400,
            fontSize: '72px',
            color: 'var(--fg)',
            textAlign: 'center',
            letterSpacing: '-1.44px',
            lineHeight: '80.64px',
            marginTop: '40px',
          }}
        >
          Projects
        </h2>
      </div>

      {/* 프로젝트 목록 */}
      <div>
        {PROJECTS.map((project, i) => (
          <ProjectItem key={project.number} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}
