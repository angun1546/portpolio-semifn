import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SectionDivider } from './About'
import Btn from './Btn'

gsap.registerPlugin(ScrollTrigger)

import imgScreen from '../assets/images/screen1.png'

const PROJECTS = [
  {
    number: '01',
    image: imgScreen,
    title: '풀사이클 생성형 AI OTT 서비스 프로젝트',
    period: '2주',
    contribution: '65%',
    stack: [
      'Figma', 'Premiere pro', 'React19', 'Vite7',
      'EsLint9', 'React Compiler', 'Python3', 'Tmdb API',
      'Gemini CLI', 'Claude CLI',
    ],
    summary:
      'TMDB API와 생성형 AI를 연동하여 사용자 취향에 최적화된 콘텐츠를 제안하는 OTT 큐레이션 서비스 프로젝트입니다. 기획부터 디자인, 개발에 참여 했으며 픽셀 퍼펙트 UI와 GSAP 기반의 몰입감 있는 인터랙션을 구현했습니다.',
    problem:
      'react-player로 YouTube 예고편 재생 시 일부 영화에서 영상이 표시되지 않고 빈 화면만 나오는 문제점이 생겼습니다. 필터 조건을 Trailer → Teaser → Clip 우선순위 폴백으로 변경하고, 영상이 아예 없는 경우 "예고편 없음" 안내 메시지를 표시했습니다.',
    links: { site: '#', github: '#', plan: '#' },
  },
]


function InfoRow({ label, value }) {
  return (
    <div className="flex items-start gap-10">
      <span
        className="font-sans font-normal shrink-0 leading-7"
        style={{ fontSize: '16px', color: '#888', width: '56px', whiteSpace: 'pre' }}
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
    <div className="project-item" style={{ width: 'fit-content', margin: '0 auto' }}>
      {/* 프로젝트 본문 */}
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
        {/* 왼쪽: 번호 + 스크린샷 */}
        <div className="shrink-0" style={{ width: '629px' }}>
          {/* 번호 */}
          <div
            className="font-sans font-extrabold leading-none mb-4"
            style={{
              fontSize: '98px',
              color: '#9747ff',
              letterSpacing: '-2px',
              textShadow: '14px 14px 21.213px rgba(0,0,0,0.2), 0.445px 0.445px 0.629px rgba(0,0,0,0.26)',
              lineHeight: 1.12,
            }}
          >
            {project.number}
          </div>
          <img
            src={project.image}
            alt={project.title}
            style={{
              width: '629px',
              height: 'auto',
              display: 'block',
              filter: 'drop-shadow(14px 14px 21px rgba(0,0,0,0.2)) drop-shadow(0.5px 0.5px 0.6px rgba(0,0,0,0.26))',
            }}
          />
        </div>

        {/* 오른쪽: 정보 */}
        <div className="flex flex-col gap-5" style={{ width: '496px' }}>
          {/* 타이틀 */}
          <h3
            className="font-sans font-bold leading-tight"
            style={{ fontSize: '24px', color: '#0c151d', letterSpacing: '-1px', lineHeight: '1.4' }}
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
                style={{ fontSize: '16px', color: '#888', width: '56px', whiteSpace: 'pre' }}
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
            <Btn variant="cta" icon="external-link-alt" label="사이트" href={project.links.site} target="_blank" rel="noreferrer" />
            <Btn variant="sec" icon="git" label="깃허브" href={project.links.github} target="_blank" rel="noreferrer" />
            <Btn variant="sec" icon="file" label="기획서" href={project.links.plan} target="_blank" rel="noreferrer" />
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
    <section
      id="projects"
      ref={sectionRef}
      className="py-32 md:py-48 bg-white"
    >
      {/* Projects 섹션 타이틀 */}
      <div className="projects-title" style={{ marginBottom: '200px' }}>
        <SectionDivider />
        <h2
          className="font-sans font-normal text-black text-center"
          style={{ fontSize: '72px', letterSpacing: '-1.44px', lineHeight: '80.64px', marginTop: '40px' }}
        >
          Projects
        </h2>
      </div>

      {/* 프로젝트 목록 */}
      <div className="space-y-24 md:space-y-32">
        {PROJECTS.map((project, i) => (
          <ProjectItem key={project.number} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}
