export default function Footer() {
  return (
    <footer id="contact" className="bg-grey-15 w-full">
      <div
        className="mx-auto flex flex-col items-center py-12"
        style={{ maxWidth: '1260px', padding: '50px 24px' }}
      >
        {/* CONTACT ME 타이틀 */}
        <h3
          className="font-display font-bold text-white text-center mb-8"
          style={{ fontSize: '32px', lineHeight: '32px' }}
        >
          CONTACT ME
        </h3>

        {/* 연락처 정보 */}
        <div className="flex gap-5 items-start">
          {/* 라벨 */}
          <div className="flex flex-col gap-5">
            <div
              className="flex items-center justify-center rounded-lg"
              style={{
                width: '170px',
                height: '45px',
                border: '2px solid #ffd6ee',
              }}
            >
              <span
                className="font-display font-bold text-grey-92 text-center"
                style={{ fontSize: '18px', lineHeight: '45px' }}
              >
                E-mail
              </span>
            </div>
            <div
              className="flex items-center justify-center rounded-lg"
              style={{
                width: '170px',
                height: '45px',
                border: '2px solid #ffd6ee',
              }}
            >
              <span
                className="font-display font-bold text-grey-92 text-center"
                style={{ fontSize: '18px', lineHeight: '45px' }}
              >
                Phone
              </span>
            </div>
          </div>

          {/* 값 */}
          <div className="flex flex-col gap-5">
            <div
              className="flex items-center"
              style={{ height: '45px' }}
            >
              <a
                href="mailto:angun1546@gmail.com"
                className="font-display font-bold text-white hover:text-grey-92 transition-colors"
                style={{ fontSize: '18px', lineHeight: '45px' }}
              >
                angun1546@gmail.com
              </a>
            </div>
            <div
              className="flex items-center"
              style={{ height: '45px' }}
            >
              <a
                href="tel:010-4206-0415"
                className="font-display font-bold text-white hover:text-grey-92 transition-colors"
                style={{ fontSize: '18px', lineHeight: '45px' }}
              >
                010-4206-0415
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
