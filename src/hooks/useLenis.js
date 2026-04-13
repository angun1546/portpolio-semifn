import { useEffect } from 'react'
import Lenis from 'lenis'

/**
 * 부드러운 스크롤(Smooth Scroll)을 위한 Lenis 초기화 훅
 */
export const useLenis = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // 컴포넌트 언마운트 시 정리
    return () => {
      lenis.destroy()
    }
  }, [])
}
