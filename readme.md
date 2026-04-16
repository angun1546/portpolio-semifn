# 안건 포트폴리오
> 소음을 울림으로, 경험조율사 안건의 포트폴리오입니다.
> 라이브 데모는 [_여기_](https://github.com/angun1546)에서 만나보실 수 있어요.

## 목차
* [프로젝트 소개](#프로젝트-소개)
* [사용 기술](#사용-기술)
* [주요 기능](#주요-기능)
* [프로젝트 목록](#프로젝트-목록)
* [파일 구조](#파일-구조)
* [설치 방법](#설치-방법)
* [개선 예정 사항](#개선-예정-사항)
* [연락처](#연락처)

## 프로젝트 소개
- UIUX 디자이너 **안건**의 구직용 개인 포트폴리오 웹사이트입니다.
- 기획·디자인·개발까지 전 과정을 혼자 진행했으며, 디자인 감각과 개발 역량을 함께 보여주는 것을 목표로 만들었습니다.
- GSAP + Lenis를 활용해 부드러운 스크롤과 인터랙티브한 애니메이션을 구현했습니다.
- 진행한 프로젝트 5가지를 소개합니다.

## 사용 기술
- React - 19.0.0
- Vite - 6.0.0
- TailwindCSS - 4.0.0 (Custom CSS Theme Variables)
- GSAP - 3.12.5
- Lenis - 1.1.14
- React Router DOM - 7.0.0
- split-type - 0.3.4
- clsx - 2.1.1
- tailwind-merge - 2.5.2

## 주요 기능
- **3가지 멀티 테마 지원** — 라이트(Light), 다크(Deep Echo), 퍼플(Midnight Purple) 모드 제공
- **플로팅 테마 스위처** — 화면 좌측 하단에 고정된 피아노 건반 스타일의 테마 전환 버튼
- **부드러운 스크롤** — Lenis 기반의 관성 스크롤 및 GSAP ScrollTrigger 연동
- **스크롤 애니메이션** — GSAP을 활용한 섹션별 진입 애니메이션 및 배경 컬러 모핑
- **글라스모피즘 디자인** — 헤더 및 버튼 등에 반투명 블러 효과와 정교한 이너 쉐도우 적용
- **3D 틸트 애니메이션** — 프로젝트 스크린샷에 마우스 팔로우 rotateX/Y 인터랙션 적용
- **공통 버튼 시스템** — `Btn.jsx` 하나로 아이콘 SVG 처리 및 Elastic 호버 애니메이션 통합 관리
- **스크롤 탑 버튼** — 우측 하단 피아노 건반 디자인, 클릭 시 최상단 부드러운 복귀
- **반응형 레이아웃** — 모바일·데스크톱 환경에 최적화된 유연한 레이아웃

## 프로젝트 목록

### 01. 풀사이클 생성형 AI OTT 서비스
- 제작기간: 2주 / 기여도: 65%
- 기술스택: Figma, Premiere Pro, React 19, Vite 7, Python 3, TMDB API, Gemini CLI, Claude CLI
- TMDB API와 생성형 AI를 연동해 사용자 취향에 최적화된 콘텐츠를 제안하는 OTT 큐레이션 서비스

### 02. 브루다커피(Brewda Coffee) 브랜드 앱 디자인 & 미디어
- 제작기간: 2주 / 기여도: 60%
- 기술스택: Figma, Premiere Pro, Whisk
- 브랜드 아이덴티티를 디지털 앱 경험으로 확장하기 위해 UX/UI 디자인·광고 영상 제작 전 과정 주도

### 03. 네네치킨 스노윙 맥스 치킨 광고 AI 영상 리뉴얼
- 제작기간: 1주 / 기여도: 100%
- 기술스택: Kling, Premiere Pro, Whisk, Gemini CLI
- Gemini 프롬프트 → Whisk 이미지 생성 → Kling 영상 제작 → Premiere Pro 컷편집 전 과정 단독 진행

### 04. 사이트 반응형 구현
- 제작기간: 3주 / 기여도: 100%
- 기술스택: Figma, Html5, Css
- Figma 디자인 기반 K-Mooc(한국형 온라인 공개강좌) 웹사이트 반응형 구현, 사용자 경험 개선 및 시각적 완성도에 주력

### 05. 생성형 AI영상 배너
- 제작기간: 2일 / 기여도: 100%
- 기술스택: Grok, Gemini CLI, Whisk
- 데이터 기반 가상 세계 몰입 컨셉의 OTT 플랫폼 시네마틱 영상 배너, 프롬프트 제어로 워프·카메라 무빙 구현

## 파일 구조

```text
portpolio-semifn/
├── public/
│   └── videos/
│       └── project5.mp4
├── src/
│   ├── assets/
│   │   └── images/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── ContactMe.jsx
│   │   ├── Footer.jsx
│   │   ├── Btn.jsx            # 통합 아이콘 및 애니메이션 버튼
│   │   ├── SectionDivider.jsx # 섹션 구분선 컴포넌트
│   │   ├── ThemeSwitcher.jsx  # 좌측 하단 테마 전환 스위처
│   │   └── ScrollToTop.jsx    # 우측 하단 탑 버튼
│   ├── lib/
│   │   └── lenisStore.js      # Lenis 인스턴스 전역 공유
│   ├── hooks/
│   │   ├── useAnimations.js
│   │   └── useLenis.js
│   ├── pages/
│   │   └── Home.jsx
│   ├── styles/
│   │   └── global.css         # 테마별 CSS 변수 및 전역 스타일
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```

## 설치 방법

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 빌드 결과 미리보기
npm run preview
```

## 개선 예정 사항

개선할 부분:
- 모바일 반응형 레이아웃 세부 조정
- 접근성(a11y) 보완

앞으로 추가할 기능:
- [x] 다크모드 및 멀티 테마 지원 (완료)
- [ ] 프로젝트 상세 페이지 라우팅

## 연락처
- 이메일: angun1546@gmail.com
- 연락처: 010-4206-0415
- GitHub: [angun1546](https://github.com/angun1546)
