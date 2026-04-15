import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SectionDivider } from './About'
import Btn from './Btn'

gsap.registerPlugin(ScrollTrigger)

import imgScreen from '../assets/images/screen1.png'
import imgScreen2 from '../assets/images/screen2.png'

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
    links: { site: '#', github: '#', plan: '#' },
  },
  {
    number: '02',
    figmaEmbed:
      'https://embed.figma.com/proto/tFYu71ZQtogvN3P1Qs4XTg/%EB%B8%8C%EB%A3%A8%EB%8B%A4-%EC%BB%A4%ED%94%BC-%ED%94%84%EB%A1%9C%ED%86%A0-%ED%83%80%EC%9E%85-%EA%B5%AC%ED%98%84?node-id=4-2&p=f&viewport=598%2C481%2C0.12&scaling=scale-down&content-scaling=fixed&starting-point-node-id=4%3A59&page-id=0%3A1&embed-host=share',
    title: '브루다커피(Brewda Coffee)\n브랜드 앱 디자인 & 미디어 프로젝트',
    period: '2주',
    contribution: '60%',
    stack: ['Figma', 'Premiere pro', 'Whisk'],
    summary:
      '브랜드 아이덴티티를 디지털 앱 경험으로 확장하기 위해 기획, UX/UI 디자인, 광고 영상 제작 전 과정을 주도한 프로젝트입니다. 60%의 기여도를 바탕으로 직관적인 서비스 설계와 감각적인 미디어를 결합해 일관성 있는 브랜드 몰입감을 구현했습니다.',
    problem:
      '실제 사용자의 핵심 니즈를 놓치던 모호한 페르소나 설정을 \'상황 중심(Context) 분석\'으로 재정의하여 해결했습니다. 이를 통해 바쁜 출근 시간대에 최적화된 \'퀵 오더\' UI를 설계함으로써 주문 단계를 단축하고 실질적인 서비스 효율을 높였습니다.',
    links: { site: '#', github: '#', plan: '#' },
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
    links: { site: '#', github: '#', plan: '#' },
  },
]

function InfoRow({ label, value }) {
  return (
    <div className="flex items-start gap-10">
      <span
        className="font-sans font-normal shrink-0 leading-7"
        style={{
          fontSize: '16px',
          color: '#888',
          width: '56px',
          whiteSpace: 'pre',
        }}
      >
        {label}
      </span>
      <span
        className="font-sans font-normal leading-7"
        style={{ fontSize: '16px', color: '#262626' }}
      >
        {value}
      </span>
    </div>
  )
}

function ProjectItem({ project, index }) {
  return (
    <div
      className="project-item"
      style={{ width: 'fit-content', margin: '0 auto', paddingTop: index > 0 ? '200px' : '0' }}
    >
      {/* 번호 */}
      <div
        className="font-sans font-extrabold leading-none mb-4"
        style={{
          fontSize: '98px',
          color: '#9747ff',
          letterSpacing: '-2px',
          textShadow:
            '14px 14px 21.213px rgba(0,0,0,0.2), 0.445px 0.445px 0.629px rgba(0,0,0,0.26)',
          lineHeight: 1.12,
        }}
      >
        {project.number}
      </div>

      {/* 프로젝트 본문 */}
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
        {/* 왼쪽: 스크린샷 */}
        <div className="shrink-0" style={{ width: '629px' }}>
          {project.figmaEmbed ? (
            <div
              style={{
                width: '629px',
                height: '560px',
                borderRadius: '12px',
                overflow: 'hidden',
                backgroundColor: '#FF7F18',
                boxShadow:
                  '14px 14px 21px rgba(0,0,0,0.2), 0.5px 0.5px 0.6px rgba(0,0,0,0.26)',
              }}
            >
              <iframe
                src={project.figmaEmbed}
                width="629"
                height="610"
                allowFullScreen
                style={{ border: 'none', display: 'block' }}
              />
            </div>
          ) : project.wrapFrame ? (
            <div
              style={{
                width: '629px',
                background: '#ffffff',
                borderRadius: '22px',
                border: '1px solid rgba(0,0,0,0.08)',
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
        <div className="flex flex-col gap-5" style={{ width: '496px' }}>
          {/* 타이틀 */}
          <h3
            className="font-sans font-bold leading-tight"
            style={{
              fontSize: '24px',
              color: '#0c151d',
              letterSpacing: '-1px',
              lineHeight: '1.4',
              whiteSpace: 'pre-line',
            }}
          >
            {project.title}
          </h3>

          {/* 메타 정보 */}
          <div className="flex flex-col gap-3">
            <InfoRow label="제작기간" value={project.period} />
            <InfoRow label="기 여  도" value={project.contribution} />

            {/* 기술스택 */}
            <div className="flex items-start gap-10">
              <span
                className="font-sans font-normal shrink-0 leading-7"
                style={{ fontSize: '16px', color: '#888', width: '56px' }}
              >
                기술스택
              </span>
              <div className="flex flex-wrap gap-x-6 gap-y-1">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="font-sans font-normal leading-7"
                    style={{ fontSize: '16px', color: '#262626' }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* 개요 */}
            <div className="flex items-start gap-10">
              <span
                className="font-sans font-normal shrink-0 leading-7"
                style={{
                  fontSize: '16px',
                  color: '#888',
                  width: '56px',
                  whiteSpace: 'pre',
                }}
              >
                {'개      요'}
              </span>
              <p
                className="font-sans font-normal leading-7"
                style={{ fontSize: '16px', color: '#262626' }}
              >
                {project.summary}
              </p>
            </div>

            {/* 문제해결 */}
            <div className="flex items-start gap-10">
              <span
                className="font-sans font-normal shrink-0 leading-7"
                style={{ fontSize: '16px', color: '#888', width: '56px' }}
              >
                문제해결
              </span>
              <p
                className="font-sans font-normal leading-7"
                style={{ fontSize: '16px', color: '#262626' }}
              >
                {project.problem}
              </p>
            </div>
          </div>

          {/* 버튼 */}
          <div className="flex gap-4 mt-3 flex-wrap">
            <Btn
              variant="cta"
              icon="external-link-alt"
              label="사이트"
              href={project.links.site}
              target="_blank"
              rel="noreferrer"
            />
            <Btn
              variant="sec"
              icon="git"
              label="깃허브"
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
            />
            <Btn
              variant="sec"
              icon="file"
              label="기획서"
              href={project.links.plan}
              target="_blank"
              rel="noreferrer"
            />
          </div>
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

      // 프로젝트 아이템 애니메이션
      gsap.utils.toArray('.project-item').forEach((el) => {
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
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="py-32 md:py-48 bg-white">
      {/* Projects 섹션 타이틀 */}
      <div className="projects-title" style={{ marginBottom: '200px' }}>
        <SectionDivider />
        <h2
          className="font-sans font-normal text-black text-center"
          style={{
            fontSize: '72px',
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
