import SectionDivider from './SectionDivider'
import Btn from './Btn'

export default function ContactMe() {
  return (
    <section id="contact" className="bg-white">
      {/* 섹션 타이틀 */}
      <div className="max-w-[1088px] mx-auto px-[clamp(24px,4vw,0px)] py-[100px] pb-0 flex flex-col items-center gap-[20px]">
        <SectionDivider />
        <h2 className="font-sans font-normal text-[72px] leading-[80.64px] tracking-[-1.44px] text-black text-center w-full">
          Contact me
        </h2>
      </div>

      {/* 본문 */}
      <div className="max-w-[1088px] mx-auto px-[clamp(24px,4vw,0px)] py-[80px] pb-[100px] flex flex-col items-center gap-[40px]">
        {/* 헤드라인 */}
        <div className="text-center">
          <p className="font-sans font-normal text-[56px] leading-[62.72px] tracking-[-0.56px] text-[#0c151d] mb-[16px]">
            아이디어를 현실의 코드로 함께 구현합니다.
          </p>
          <p className="font-sans font-normal text-[18px] leading-[27.9px] text-[#40484e]">
            Harmony between Logic and Aesthetic.
          </p>
        </div>

        {/* 버튼 */}
        <div className="flex gap-[20px] flex-wrap justify-center">
          <Btn
            variant="cta"
            icon="mail"
            label="MAIL"
            sublabel="angun1546@gmail.com"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=angun1546@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="w-[220px] h-[60px] !p-0"
          />
          <Btn
            variant="tir"
            icon="phone"
            label="PHONE"
            sublabel="010-4206-0415"
            className="w-[221px] h-[59px] !p-0 cursor-default"
          />
        </div>

        {/* 하단 문구 */}
        <p className="font-sans font-normal text-[14px] leading-[19.88px] text-[#40484e] text-center">
          {`git commit -m "Keep pushing boundaries and dreaming big"`}
        </p>
      </div>
    </section>
  )
}
