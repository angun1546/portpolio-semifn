import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import bannerImg from "../assets/images/profile.png";
import protpolioIcon from "../assets/images/protpolio.png";

gsap.registerPlugin(ScrollTrigger);

const btnBase = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "12px",
  padding: "0 30px",
  height: "56px",
  borderRadius: "12px",
  fontSize: "18px",
  lineHeight: "28px",
  fontFamily: "var(--font-sans)",
  cursor: "pointer",
  textDecoration: "none",
  whiteSpace: "nowrap",
  boxShadow: "0.445px 0.445px 0.629px rgba(0,0,0,0.26), 14px 14px 21.213px rgba(0,0,0,0.2), inset 1px 1px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(0,0,0,0.23)",
};

function useBtnGsap() {
  const ref = useRef(null);
  return {
    ref,
    onMouseEnter: () => gsap.to(ref.current, { scale: 1.06, y: -4, duration: 0.3, ease: "power2.out" }),
    onMouseLeave: () => gsap.to(ref.current, { scale: 1, y: 0, duration: 0.5, ease: "elastic.out(1, 0.5)" }),
    onMouseDown: () => gsap.to(ref.current, { scale: 0.94, y: 0, duration: 0.1, ease: "power2.in" }),
    onMouseUp: () => gsap.to(ref.current, { scale: 1.06, y: -4, duration: 0.4, ease: "elastic.out(1, 0.4)" }),
  };
}

// 낱자 분리 — 글자별 overflow:hidden 마스크
// 공백은  로 처리 (inline-block에서 공백 0px 버그 방지)
function SplitChars({ text, charClass }) {
  return (
    <>
      {[...text].map((char, i) => (
        <span key={i} style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom", lineHeight: "1.3" }}>
          <span className={charClass} style={{ display: "inline-block", willChange: "transform" }}>
            {char === " " ? " " : char}
          </span>
        </span>
      ))}
    </>
  );
}

// fontSize를 컨테이너에 위임 → 1.3em이 font-size 기준으로 자동 계산됨
const ROW_FONT = "clamp(2rem, 5vw, 4.5rem)";

const SPAN_STYLE = {
  fontFamily: "var(--font-sans)",
  letterSpacing: "2px",
  color: "var(--hero-fg)",
  lineHeight: "1.3",
  fontWeight: 600,
};

export default function Hero() {
  const resumeBtn = useBtnGsap();
  const githubBtn = useBtnGsap();
  const sectionRef = useRef(null);
  const imgWrapRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".r1a, .r1b, .r2a, .r2b", { y: "110%" });

      // ─── PARALLAX ────────────────────────────────────────────
      gsap.to(imgWrapRef.current, {
        y: -90,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // ─── 텍스트 mask reveal 무한반복 ─────────────────────────
      const tl = gsap.timeline({ repeat: -1 });
      tl.set(".r1a, .r1b, .r2a, .r2b", { y: "110%" })
        // 1행: r1a → r1b 순차 등장
        .to(".r1a", { y: "0%", stagger: 0.04, duration: 0.6, ease: "power3.out" })
        .to(".r1b", { y: "0%", stagger: 0.04, duration: 0.6, ease: "power3.out" })
        // 2행 등장
        .to(".r2a", { y: "0%", stagger: 0.04, duration: 0.6, ease: "power3.out" })
        // 3행 등장
        .to(".r2b", { y: "0%", stagger: 0.04, duration: 0.6, ease: "power3.out" })
        // 대기
        .to({}, { duration: 2 })
        // 모두 퇴장
        .to(".r1a, .r1b, .r2a, .r2b", { y: "-110%", stagger: 0.03, duration: 0.4, ease: "power2.in" });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        onLeave: () => tl.pause(),
        onLeaveBack: () => tl.pause(),
        onEnter: () => tl.resume(),
        onEnterBack: () => tl.resume(),
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="hero" className="relative" style={{ minHeight: "1024px", background: "transparent" }}>
      {/* 좌우 2단 레이아웃 */}
      <div
        style={{
          position: "absolute",
          top: "100px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "min(1088px, calc(100% - 48px))",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: "40px",
        }}
      >
        {/* 좌측: 2행 텍스트 */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            paddingTop: "80px",
            flex: "1 1 0",
            minWidth: 0,
            zIndex: 50,
          }}
        >
          {/* 1행 — "소음에서" + "울림으로" 나란히 (고정 height 없음) */}
          <div
            style={{
              fontSize: ROW_FONT,
              display: "flex",
              alignItems: "center",
              gap: "0.4em",
              whiteSpace: "nowrap",
              flexWrap: "nowrap",
            }}
          >
            <span style={{ ...SPAN_STYLE, fontWeight: 100, letterSpacing: "-5px" , }}>
              <SplitChars text="소음에서" charClass="r1a" />
            </span>
            <span style={{ ...SPAN_STYLE, fontWeight: 100, letterSpacing: "-5px" }}>
              <SplitChars text="울림으로" charClass="r1b" />
            </span>
          </div>

          {/* 2행 — "경험을 조율하는" */}
          <div style={{ fontSize: ROW_FONT, height: "1.3em", overflow: "visible" }}>
            <span style={SPAN_STYLE}>
              <SplitChars text="경험을 조율하는" charClass="r2a" />
            </span>
          </div>

          {/* 3행 — "안건 입니다" */}
          <div style={{ fontSize: ROW_FONT, height: "1.3em", overflow: "visible" }}>
            <span style={SPAN_STYLE}>
              <SplitChars text="안건 입니다" charClass="r2b" />
            </span>
          </div>

          {/* 버튼 2개 — 텍스트 아래 */}
          <div style={{ display: "flex", gap: "16px", marginTop: "32px" }}>
            <a href="https://drive.google.com/file/d/1QWOU7_6ULBB1YmmLka8lJqyii304lkWG/view?usp=drive_link" target="_blank" rel="noopener noreferrer" {...resumeBtn} style={{ ...btnBase, boxSizing: "border-box", background: "var(--resume-btn-glass-bg)", color: "#ffffff", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", border: "1px solid var(--btn-glass-border)" }}>
              <img src={protpolioIcon} alt="" aria-hidden="true" style={{ width: "25px", height: "25px", filter: "var(--resume-icon-filter)" }} />
              이력서보기
            </a>
            <a href="https://github.com/angun1546" target="_blank" rel="noopener noreferrer" {...githubBtn} style={{ ...btnBase, background: "var(--btn-light-bg)", color: "var(--fg-near)" }}>
              <svg width="25" height="25" viewBox="0 0 25 25" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M12.5 2.5C7.253 2.5 3 6.753 3 12c0 4.193 2.715 7.754 6.479 9.01.474.087.648-.206.648-.457 0-.225-.008-.824-.013-1.618-2.635.573-3.19-1.27-3.19-1.27-.43-1.093-1.05-1.385-1.05-1.385-.858-.587.065-.575.065-.575.949.067 1.448.975 1.448.975.842 1.443 2.209 1.026 2.749.784.085-.61.33-1.026.6-1.262-2.104-.239-4.314-1.052-4.314-4.682 0-1.034.37-1.88.975-2.542-.098-.24-.422-1.203.092-2.508 0 0 .795-.255 2.604.97a9.07 9.07 0 0 1 2.374-.32c.805.004 1.616.109 2.374.32 1.808-1.225 2.601-.97 2.601-.97.516 1.305.192 2.268.094 2.508.607.662.974 1.508.974 2.542 0 3.64-2.213 4.44-4.322 4.675.34.293.642.871.642 1.756 0 1.267-.012 2.29-.012 2.602 0 .253.17.549.653.456A9.504 9.504 0 0 0 22 12c0-5.247-4.253-9.5-9.5-9.5Z" />
              </svg>
              깃허브
            </a>
          </div>
        </div>

        {/* 우측: 프로필 사진 */}
        <div
          ref={imgWrapRef}
          style={{
            zIndex: 10,
            flexShrink: 0,
            width: "clamp(280px, 38.6vw, 556px)",
            height: "clamp(390px, 54.2vw, 781px)",
          }}
        >
          <img src={bannerImg} alt="안건" className="w-full h-full object-cover object-top" />
        </div>
      </div>
    </section>
  );
}
