import SectionDivider from './SectionDivider'

const infoRows = [
  { label: '이    름', value: '안건' },
  { label: '나    이', value: '1996.04.' },
  { label: '거주지', value: '경기도 고양시' },
  { label: '휴대폰', value: '010-4206-0415' },
  { label: '이메일', value: 'angun1546@gmail.com' },
]

const educationRows = [
  {
    period: '25.10 - 26.04',
    desc: 'MBC 아카데미 챗GPT 생성형 AI를 활용한 반응형 웹콘텐츠(영상제작&코딩) 개발기획자 양성과정',
  },
  { period: '25.04 - 25.09', desc: '당진시 대호지면사무소 산업팀 행정지원' },
  { period: '22.02 - 25.02', desc: '감리교 신학대학원 신학전공석사 졸업' },
  { period: '15.03 - 18.08', desc: '침례신학대학교 교회음악과 졸업' },
]

function InfoRow({ label, value }) {
  return (
    <div className="flex gap-[6px] items-center text-[16px]">
      <span className="font-sans font-medium leading-[28px] text-[#2c2c2c] whitespace-pre min-w-[60px]">
        {label}
      </span>
      <span className="font-sans font-normal leading-[24px] text-[#3a3a3a] w-[9px]">
        :
      </span>
      <span className="font-sans font-normal leading-[28px] text-[#737373] tracking-[-0.5px]">
        {value}
      </span>
    </div>
  )
}

function EduRow({ period, desc }) {
  return (
    <div className="flex flex-col gap-[6px] mb-[10px]">
      <span className="font-sans font-normal text-[16px] leading-[24px] text-[#2c2c2c]">
        {period}
      </span>
      <span className="font-sans font-normal text-[16px] leading-[24px] text-[#747474]">
        {desc}
      </span>
    </div>
  )
}

const SECTION_LABEL_CLASS = 'font-sans font-extrabold text-[20px] leading-[1.15] text-[#434343] tracking-[-0.5px] mb-[10px] block'

export default function About() {
  return (
    <section id="about" className="bg-white">
      <div className="max-w-[1088px] mx-auto px-[clamp(24px,4vw,0px)] py-[100px] pb-[50px] flex flex-col items-center gap-[20px]">
        <SectionDivider />
        <h2 className="font-sans font-normal text-[72px] leading-[80.64px] tracking-[-1.44px] text-black text-center w-full">
          About me
        </h2>
      </div>

      {/* 정보 그리드 */}
      <div className="max-w-[1088px] mx-auto px-[clamp(24px,4vw,0px)] pb-[100px] grid grid-cols-2 gap-x-[20px] gap-y-[40px]">
        {/* 인적사항 */}
        <div>
          <span className={SECTION_LABEL_CLASS}>인적사항</span>
          <div className="flex flex-col gap-[4px]">
            {infoRows.map((row) => (
              <InfoRow key={row.label} label={row.label} value={row.value} />
            ))}
          </div>
        </div>

        {/* 학력 및 교육사항 */}
        <div>
          <span className={SECTION_LABEL_CLASS}>학력 및 교육사항</span>
          <div className="flex flex-col">
            {educationRows.map((row) => (
              <EduRow
                key={row.period + row.desc}
                period={row.period}
                desc={row.desc}
              />
            ))}
          </div>
        </div>

        {/* 자격사항 */}
        <div>
          <span className={SECTION_LABEL_CLASS}>자격사항</span>
          <div>
            <span className="font-sans font-normal text-[16px] leading-[24px] text-[#2c2c2c] block">
              15.01.15
            </span>
            <span className="font-sans font-normal text-[16px] leading-[24px] text-[#747474] block">
              1종 보통 운전면허
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
