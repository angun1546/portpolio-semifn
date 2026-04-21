import logoIcon from '../assets/images/Logo.svgbl.png'

export default function SectionDivider({ iconWhite = false }) {
  return (
    <div className="flex items-center h-[20px] w-full">
      <div className="flex-1 border-t border-dashed border-[#dbdbdb]" />
      <div
        className="w-[20px] h-[20px] mx-[20px] rounded-[5.25px] overflow-hidden shrink-0"
        style={{
          boxShadow:
            '0.445px 0.445px 0.629px rgba(0,0,0,0.26), 1.211px 1.211px 1.712px rgba(0,0,0,0.25), 2.658px 2.658px 3.759px rgba(0,0,0,0.23), 5.901px 5.901px 8.345px rgba(0,0,0,0.19), 14px 14px 21.213px rgba(0,0,0,0.2), inset 1px 1px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(0,0,0,0.23)',
        }}
      >
        <img
          src={logoIcon}
          alt=""
          className="w-full h-full block"
          style={{ filter: iconWhite ? 'brightness(0) invert(1)' : 'none' }}
        />
      </div>
      <div className="flex-1 border-t border-dashed border-[#dbdbdb]" />
    </div>
  )
}
