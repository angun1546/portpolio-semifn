/**
 * Btn 컴포넌트
 * variant: "cta" | "sec" | "tir" | "for"
 * icon  : "file" | "angle-right" | "git" | "external-link-alt" | "mail" | "phone" (생략 시 아이콘 없음)
 * label : 버튼 텍스트
 * href  : 링크 URL (있으면 <a>, 없으면 <button>)
 */

import { useRef } from 'react'
import { gsap } from 'gsap'

const STYLES = {
  cta: {
    background: '#222',
    color: '#ffffff',
    sublabelColor: '#cdd0d0',
    boxShadow:
      '0.445px 0.445px 0.629px rgba(0,0,0,0.26), 1.211px 1.211px 1.712px rgba(0,0,0,0.25), 2.658px 2.658px 3.759px rgba(0,0,0,0.23), 5.901px 5.901px 8.345px rgba(0,0,0,0.19), 14px 14px 21.213px rgba(0,0,0,0.2), -0.5px -0.5px 0px rgba(0,0,0,0.69), inset 1px 1px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(0,0,0,0.23)',
    iconColor: '#ffffff',
  },
  sec: {
    background: 'rgba(255,255,255,0.8)',
    color: '#1a1a1a',
    sublabelColor: '#666',
    boxShadow:
      '0.445px 0.445px 0.629px rgba(0,0,0,0.26), 14px 14px 21.213px rgba(0,0,0,0.2), inset 1px 1px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(0,0,0,0.23)',
    iconColor: '#1a1a1a',
  },
  tir: {
    background: '#e5e5e5',
    color: '#000000',
    sublabelColor: '#444',
    boxShadow: 'inset 1px 1px 2px rgba(0,0,0,0.11)',
    iconColor: '#000000',
  },
  for: {
    background: '#f8f8f8',
    color: '#1a1a1a',
    sublabelColor: '#666',
    boxShadow:
      '0.445px 0.445px 0.629px rgba(0,0,0,0.26), 8px 4px 9.21px rgba(0,0,0,0.2), inset 1px 1px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(0,0,0,0.23)',
    iconColor: '#1a1a1a',
  },
}

function BtnIcon({ kind, color }) {
  const s = { width: 25, height: 25, flexShrink: 0 }

  if (kind === 'file')
    return (
      <svg style={s} viewBox="0 0 25 25" fill="none" aria-hidden="true">
        <path
          d="M14.5 3.5H7.5C6.948 3.5 6.5 3.948 6.5 4.5V20.5C6.5 21.052 6.948 21.5 7.5 21.5H17.5C18.052 21.5 18.5 21.052 18.5 20.5V7.5L14.5 3.5Z"
          stroke={color}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.5 3.5V7.5H18.5M9.5 13.5H15.5M9.5 17.5H15.5M9.5 9.5H11.5"
          stroke={color}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )

  if (kind === 'angle-right')
    return (
      <svg style={s} viewBox="0 0 25 25" fill="none" aria-hidden="true">
        <path
          d="M9.5 6.5L15.5 12.5L9.5 18.5"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )

  if (kind === 'git')
    return (
      <svg style={s} viewBox="0 0 25 25" fill="none" aria-hidden="true">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.5 2.5C7.253 2.5 3 6.753 3 12c0 4.193 2.715 7.754 6.479 9.01.474.087.648-.206.648-.457 0-.225-.008-.824-.013-1.618-2.635.573-3.19-1.27-3.19-1.27-.43-1.093-1.05-1.385-1.05-1.385-.858-.587.065-.575.065-.575.949.067 1.448.975 1.448.975.842 1.443 2.209 1.026 2.749.784.085-.61.33-1.026.6-1.262-2.104-.239-4.314-1.052-4.314-4.682 0-1.034.37-1.88.975-2.542-.098-.24-.422-1.203.092-2.508 0 0 .795-.255 2.604.97a9.07 9.07 0 0 1 2.374-.32c.805.004 1.616.109 2.374.32 1.808-1.225 2.601-.97 2.601-.97.516 1.305.192 2.268.094 2.508.607.662.974 1.508.974 2.542 0 3.64-2.213 4.44-4.322 4.675.34.293.642.871.642 1.756 0 1.267-.012 2.29-.012 2.602 0 .253.17.549.653.456A9.504 9.504 0 0 0 22 12c0-5.247-4.253-9.5-9.5-9.5Z"
          fill={color}
        />
      </svg>
    )

  if (kind === 'external-link-alt')
    return (
      <svg style={s} viewBox="0 0 25 25" fill="none" aria-hidden="true">
        <path
          d="M7 18L18 7M18 7H9M18 7V16"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )

  if (kind === 'mail')
    return (
      <svg style={s} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2" y="4" width="20" height="16" rx="3" stroke={color} strokeWidth="1.5" />
        <path d="M2 7L12 13L22 7" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    )

  if (kind === 'phone')
    return (
      <svg style={s} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M6.6 10.8C7.8 13.2 9.8 15.2 12.2 16.4L14 14.6C14.3 14.3 14.7 14.2 15 14.4C16.1 14.8 17.3 15 18.5 15C19 15 19.5 15.4 19.5 16V18.5C19.5 19 19 19.5 18.5 19.5C10.4 19.5 4 13.1 4 5C4 4.5 4.5 4 5 4H7.5C8 4 8.5 4.4 8.5 5C8.5 6.2 8.7 7.4 9.1 8.5C9.2 8.9 9.1 9.3 8.9 9.5L6.6 10.8Z"
          fill={color}
        />
      </svg>
    )

  return null
}

export default function Btn({
  variant = 'sec',
  icon,
  label,
  sublabel,
  href,
  target,
  rel,
  onClick,
  style: styleProp,
  className = '',
}) {
  const s = STYLES[variant] ?? STYLES.sec
  const btnRef = useRef(null)

  const onEnter = () =>
    gsap.to(btnRef.current, { scale: 1.06, y: -4, duration: 0.3, ease: 'power2.out' })

  const onLeave = () =>
    gsap.to(btnRef.current, { scale: 1, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.5)' })

  const onDown = () =>
    gsap.to(btnRef.current, { scale: 0.94, y: 0, duration: 0.1, ease: 'power2.in' })

  const onUp = () =>
    gsap.to(btnRef.current, { scale: 1.06, y: -4, duration: 0.4, ease: 'elastic.out(1, 0.4)' })

  // sublabel 있을 때: [아이콘 + label] 한 row, sublabel은 그 아래
  const inner = sublabel ? (
    <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px' }}>
      <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        {icon && <BtnIcon kind={icon} color={s.iconColor} />}
        <span
          style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '24px',
            color: s.color,
            whiteSpace: 'nowrap',
          }}
        >
          {label}
        </span>
      </span>
      <span
        style={{
          fontFamily: 'var(--font-sans)',
          fontWeight: 400,
          fontSize: '12px',
          lineHeight: '16.8px',
          color: s.sublabelColor,
          whiteSpace: 'nowrap',
        }}
      >
        {sublabel}
      </span>
    </span>
  ) : (
    <>
      {icon && <BtnIcon kind={icon} color={s.iconColor} />}
      {label && (
        <span
          style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 400,
            fontSize: '18px',
            lineHeight: '28px',
            color: s.color,
            whiteSpace: 'nowrap',
          }}
        >
          {label}
        </span>
      )}
    </>
  )

  const baseStyle = {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '20px',
    padding: '16px 30px',
    borderRadius: '12px',
    border: 'none',
    cursor: 'pointer',
    background: s.background,
    boxShadow: s.boxShadow,
    textDecoration: 'none',
    ...styleProp,
  }

  const interactionProps = {
    ref: btnRef,
    onMouseEnter: onEnter,
    onMouseLeave: onLeave,
    onMouseDown: onDown,
    onMouseUp: onUp,
  }

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        style={baseStyle}
        className={className}
        {...interactionProps}
      >
        {inner}
      </a>
    )
  }

  return (
    <button
      type="button"
      onClick={onClick}
      style={baseStyle}
      className={className}
      {...interactionProps}
    >
      {inner}
    </button>
  )
}
