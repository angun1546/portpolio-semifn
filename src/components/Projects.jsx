import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const IMG_QNB = 'https://www.figma.com/api/mcp/asset/3fa164a0-2b15-4e30-a0dd-60ebf82b1ab4'
const IMG_AMAZON_1 = 'https://www.figma.com/api/mcp/asset/26d3a6ea-b6ae-4243-bf35-a0bfe9d5ef4a'
const IMG_AMAZON_2 = 'https://www.figma.com/api/mcp/asset/f89ee62c-ad23-4423-8dee-a1cca5847230'
const IMG_AMAZON_3 = 'https://www.figma.com/api/mcp/asset/95f2feda-4128-4e88-9100-d4841295eaa3'

const projects = [
  {
    id: 1,
    title: '생성형 AI로 만든 영상편집',
    duration: '1주',
    contribution: '100%',
    tools: 'Kling, Premiere pro, Whisk, Gemini',
    summary: 'Ai로 영상을 생성해 기존 광고를 리뉴얼한 영상편집 프로젝트입니다.',
    detail: '생성형 Ai를 이용하여 영상을 만들어 기존 광고를 리뉴얼한 영상입니다. 제미나이에서 프롬프트를 출력받은 후, 프롬프트를 토대로 위스크에서 이미지를 생성하고, 생성된 이미지를 바탕으로 클링에서 영상을 제작 했습니다. 마지막으로 만든영상을 광고 오디오 소스와 맞도록 프리미어 프로에서 컷편집을 진행하여 마무리했습니다.',
    image: IMG_QNB,
  },
  {
    id: 2,
    title: '사이트 반응형 구현',
    duration: '3주',
    contribution: '100%',
    tools: 'HTML5, CSS, JS, Figma',
    summary: 'HTML, CSS, JS, Figma를 이용하여 기존 사이트를 반응형으로 구현했습니다.',
    detail: 'Figma 디자인을 기반으로 만들어진 K-MOOC(한국형 온라인 공개강좌)웹사이트의 반응형 구현입니다. 웹 인터페이스를 현대적인 감각으로 재해석한 프론트엔드 작업물입니다. 단순히 화면을 복제하는 것을 넘어, 사용자 경험(UX)을 개선하고 시각적 완성도를 높이는 데 주력했습니다.',
    image: IMG_AMAZON_1,
  },
  {
    id: 3,
    title: '[브루다커피(Brewda Coffee) 브랜드 앱 디자인 & 미디어 프로젝트]',
    duration: '2주',
    contribution: '60%',
    tools: 'Whisk, Figma, Premiere pro',
    summary: 'HTML, CSS, JS, Figma를 이용하여 기존 사이트를 반응형으로 구현했습니다.',
    detail: 'Figma 디자인을 기반으로 만들어진 K-MOOC(한국형 온라인 공개강좌)웹사이트의 반응형 구현입니다. 웹 인터페이스를 현대적인 감각으로 재해석한 프론트엔드 작업물입니다. 단순히 화면을 복제하는 것을 넘어, 사용자 경험(UX)을 개선하고 시각적 완성도를 높이는 데 주력했습니다.',
    image: IMG_AMAZON_3,
  },
  {
    id: 4,
    title: '풀사이클 생성형 AI OTT 서비스 프로젝트',
    duration: '2주',
    contribution: '65%',
    tools: 'Figma, Premiere pro, React19, Vite7, EsLint9, React Compiler, Python, Tmdb API, gemini CLI, Claude',
    summary: 'Ai로 영상을 생성해 기존 광고를 리뉴얼한 영상편집 프로젝트입니다.',
    detail: '팀원들과 협업하여 만든 구독형 OTT사이트 VODA 입니다. VODA는 사용자의 아이디어를 기반으로 AI가 시나리오 작성, 이미지 생성, 영상 제작 및 음성 합성을 수행하여 개인화된 미디어 콘텐츠를 제공하는 AI OTT 플랫폼입니다. 단순한 콘텐츠 소비를 넘어, 생성형 AI 기술을 서비스 전체 사이클에 녹여낸 프로젝트입니다.',
    image: IMG_AMAZON_2,
  },
  {
    id: 5,
    title: '생성형 비디오',
    duration: '1일',
    contribution: '100%',
    tools: 'Grok, Gemini, Premiere pro',
    summary: 'Grok을 이용하여 OTT사이트 메인배너 영상을 생성형 AI로 만들었습니다.',
    detail: '',
    image: IMG_AMAZON_1,
  },
]

function ProjectCard({ project }) {
  return (
    <article className="project-card flex flex-col lg:flex-row items-start gap-20">
      {/* 프로젝트 이미지 */}
      <div
        className="w-full lg:w-[56%] shrink-0 overflow-hidden"
        style={{ borderRadius: '50px', aspectRatio: '676.8 / 422.98' }}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* 프로젝트 정보 */}
      <div className="flex flex-col gap-4 flex-1 py-4">
        {/* 제목 */}
        <h3
          className="font-display font-bold text-grey-15"
          style={{ fontSize: 'clamp(1.25rem, 2.5vw, 2.5rem)', lineHeight: '1.6' }}
        >
          {project.title}
        </h3>

        {/* 메타 정보 */}
        <div className="flex flex-col gap-2">
          <div className="flex items-baseline gap-6">
            <span className="font-sans text-grey-53 shrink-0" style={{ fontSize: '16px', minWidth: '80px' }}>
              제작기간
            </span>
            <span className="font-sans text-grey-15" style={{ fontSize: '16px' }}>
              {project.duration}
            </span>
          </div>
          <div className="flex items-baseline gap-6">
            <span className="font-sans text-grey-53 shrink-0" style={{ fontSize: '16px', minWidth: '80px' }}>
              기여도
            </span>
            <span className="font-sans text-grey-15" style={{ fontSize: '16px' }}>
              {project.contribution}
            </span>
          </div>
          <div className="flex items-start gap-6">
            <span className="font-sans text-grey-53 shrink-0" style={{ fontSize: '16px', minWidth: '80px' }}>
              사용프로그램
            </span>
            <span className="font-sans text-grey-15" style={{ fontSize: '16px', lineHeight: '1.6' }}>
              {project.tools}
            </span>
          </div>
        </div>

        {/* 요약 설명 */}
        <p
          className="font-sans text-grey-15"
          style={{ fontSize: '16px', lineHeight: '1.6', opacity: 0.8 }}
        >
          {project.summary}
        </p>

        {/* 상세 설명 */}
        {project.detail && (
          <p
            className="font-sans text-grey-15"
            style={{ fontSize: '16px', lineHeight: '1.6' }}
          >
            {project.detail}
          </p>
        )}
      </div>
    </article>
  )
}

export default function Projects() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.project-card', {
        opacity: 0,
        y: 60,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.projects-list',
          start: 'top 75%',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20"
    >
      {/* Projects 대형 타이틀 */}
      <div className="text-center overflow-hidden" style={{ padding: '40px 0 20px' }}>
        <p
          className="font-display font-extrabold text-grey-16 text-center leading-none"
          style={{
            fontSize: 'clamp(4rem, 12vw, 11.25rem)',
            letterSpacing: '-1.6px',
            lineHeight: '0.88',
          }}
        >
          Projects
        </p>
      </div>

      {/* 서브 설명 */}
      <div className="mx-auto px-15" style={{ maxWidth: '1400px' }}>
        <p
          className="font-sans font-semibold text-grey-10 mb-20"
          style={{ fontSize: 'clamp(1rem, 2vw, 2.25rem)', lineHeight: '1.2' }}
        >
          사용자 중심의 문제 해결과 디지털 경험의 결과물입니다.
        </p>
      </div>

      {/* 프로젝트 카드 목록 */}
      <div
        className="projects-list mx-auto flex flex-col gap-20 px-15"
        style={{ maxWidth: '1400px', padding: '0 60px' }}
      >
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  )
}
