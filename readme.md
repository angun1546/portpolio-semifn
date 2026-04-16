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
- 진행한 프로젝트 3가지(OTT 서비스, 브랜드 앱 디자인, AI 영상 리뉴얼)를 소개합니다.

## 사용 기술
- React - 19.0.0
- Vite - 6.0.0
- TailwindCSS - 4.0.0
- GSAP - 3.12.5
- Lenis - 1.1.14
- React Router DOM - 7.0.0
- split-type - 0.3.4
- clsx - 2.1.1
- tailwind-merge - 2.5.2

## 주요 기능
- **부드러운 스크롤** — Lenis 기반의 관성 스크롤 적용
- **스크롤 애니메이션** — GSAP ScrollTrigger로 섹션별 진입 애니메이션 구현
- **글라스모피즘 헤더** — 스크롤 시 반투명 블러 효과 적용
- **반응형 레이아웃** — 모바일·데스크톱 대응 레이아웃
- **Figma 프로토타입 임베드** — 브루다커피 프로젝트 카드에 Figma 프로토타입 직접 삽입
- **Contact Me 섹션** — 메일/전화 버튼, 글라스모피즘 스타일

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
│   │   └── Btn.jsx
│   ├── hooks/
│   │   ├── useAnimations.js
│   │   └── useLenis.js
│   ├── pages/
│   │   └── Home.jsx
│   ├── styles/
│   │   └── global.css
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
- 접근성(a11y) 개선

앞으로 추가할 기능:
- 다크모드 지원
- 프로젝트 상세 페이지 라우팅

## 연락처
- 이메일: angun1546@gmail.com
- 연락처: 010-4206-0415
- GitHub: [angun1546](https://github.com/angun1546)
