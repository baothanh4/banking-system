import "../styles/tableContainer.css";

export default function HomePage() {
  return (
    <div
      className="relative flex min-h-screen w-full flex-col bg-slate-50 overflow-x-hidden"
      style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}
    >
      {/* HEADER */}
      <header className="flex items-center justify-between border-b border-[#e7edf3] px-10 py-3">
        <div className="flex items-center gap-4 text-[#0d141b]">
          <div className="size-4">
            <svg viewBox="0 0 48 48" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <h2 className="text-lg font-bold">Bank of Finance</h2>
        </div>

        <div className="flex items-center gap-8">
          <nav className="flex gap-9 text-sm font-medium">
            <a href="#">Cá nhân</a>
            <a href="#">Doanh nghiệp</a>
            <a href="#">Về chúng tôi</a>
          </nav>
          <div className="flex gap-2">
            <button className="h-10 rounded-lg bg-[#1380ec] px-4 text-sm font-bold text-white">
              Đăng nhập
            </button>
            <button className="h-10 rounded-lg bg-[#e7edf3] px-4 text-sm font-bold">
              Mở tài khoản
            </button>
          </div>
        </div>
      </header>

      {/* CONTENT */}
      <main className="flex justify-center px-40 py-5">
        <div className="max-w-[960px] flex-1 space-y-6">

          {/* HERO */}
          <div
            className="flex min-h-[480px] flex-col justify-end gap-6 rounded-lg bg-cover bg-center px-10 pb-10 text-white"
            style={{
              backgroundImage:
                'linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.4)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAfnbER_a_oIHYNVtTOE274xgG8caBXFiwOfw6Ndjfq8cpTm-AnrT56humuaeizHrv0ghNWrZnzYP3dF5ZsceKOTE_VwNJOZsFf2qZZOeFUjN8jKrYNcrsEeonIp1yJTHKmO2V1Pl_0SXl1CpLqqOCB4TheP89SzKwM4heJWKOWnUyFYFwsCPLl0nBAkKHZvjSLilPpr0OvTTSF7RMPpYBOfgH9uR29QjYDeKgraK-XEXuTWSeplYZNLOfvNdN1fTE-29Ka2QJQp_I")',
            }}
          >
            <h1 className="text-5xl font-black">
              Ngân hàng của bạn, mọi lúc, mọi nơi
            </h1>
            <p className="text-base">
              Quản lý tài chính dễ dàng và an toàn với ứng dụng di động.
            </p>
            <button className="w-fit rounded-lg bg-[#1380ec] px-5 py-3 font-bold">
              Tải ứng dụng
            </button>
          </div>

          {/* PRODUCTS */}
          <h2 className="text-[22px] font-bold">Sản phẩm và dịch vụ</h2>

          {[
  {
    title: "Tài khoản thanh toán",
    desc: "Quản lý chi tiêu hàng ngày",
    img: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc",
  },
  {
    title: "Thẻ tín dụng",
    desc: "Ưu đãi và tích điểm thưởng",
    img: "https://images.unsplash.com/photo-1589758438368-0ad531db3366",
  },
  {
    title: "Vay tiêu dùng",
    desc: "Giải pháp tài chính linh hoạt",
    img: "https://images.unsplash.com/photo-1556740749-887f6717d7e4",
  },
  {
    title: "Tiết kiệm online",
    desc: "Lãi suất ưu đãi, linh hoạt",
    img: "https://images.unsplash.com/photo-1579621970795-87facc2f976d",
  },
].map((item, i) => (
  <div key={i} className="flex gap-4 rounded-lg bg-white p-4">
    <div
      className="aspect-video w-1/3 rounded-lg bg-cover bg-center"
      style={{ backgroundImage: `url(${item.img})` }}
    />
    <div className="flex flex-1 flex-col justify-between">
      <div>
        <p className="text-lg font-bold">{item.title}</p>
        <p className="text-[#4c739a]">{item.desc}</p>
      </div>
      <button className="w-fit rounded-lg bg-[#1380ec] px-4 py-2 text-sm text-white">
        Xem thêm
      </button>
    </div>
  </div>
))}


          {/* NEWS */}
          <h2 className="text-[22px] font-bold">Tin tức và khuyến mãi</h2>
          <div className="flex gap-4 overflow-x-auto">
            {[
  {
    title: "Đổi mới ngân hàng số",
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
  },
  {
    title: "Khuyến mãi thẻ tín dụng",
    img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3",
  },
  {
    title: "Ưu đãi khách hàng thân thiết",
    img: "https://www.pcgamesn.com/wp-content/sites/pcgamesn/2023/06/Valorant-agent-Deadlock.jpg",
  },
].map((item, i) => (
  <div key={i} className="min-w-[240px] space-y-2">
    <div
      className="aspect-video rounded-lg bg-cover bg-center"
      style={{ backgroundImage: `url(${item.img})` }}
    />
    <p className="font-medium">{item.title}</p>
    <p className="text-sm text-[#4c739a]">
      Trải nghiệm dịch vụ tốt hơn
    </p>
  </div>
))}

          </div>

          {/* TABLE */}
          <h2 className="text-[22px] font-bold">Lãi suất và tỷ giá</h2>
          <div className="overflow-hidden rounded-lg border">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-100">
                  <th className="col-120 px-4 py-3 text-left">Sản phẩm</th>
                  <th className="col-240 px-4 py-3 text-left">Lãi suất</th>
                  <th className="col-360 px-4 py-3 text-left">Tỷ giá</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="col-120 px-4 py-2">Tiết kiệm</td>
                  <td className="col-240 px-4 py-2">5.5%</td>
                  <td className="col-360 px-4 py-2">-</td>
                </tr>
                <tr className="border-t">
                  <td className="col-120 px-4 py-2">USD/VND</td>
                  <td className="col-240 px-4 py-2">-</td>
                  <td className="col-360 px-4 py-2">23,500 / 23,700</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </main>
    </div>
  );
}
