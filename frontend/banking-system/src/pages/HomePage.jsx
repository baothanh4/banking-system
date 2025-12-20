import { useState } from "react";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("account");

  const products = {
    account: [
      {
        title: "Tài khoản thanh toán",
        desc: "Quản lý chi tiêu, chuyển khoản nhanh chóng và an toàn.",
        img: "https://images.unsplash.com/photo-1556740749-887f6717d7e4",
      },
    ],
    card: [
      {
        title: "Thẻ ghi nợ",
        desc: "Thanh toán tiện lợi, kiểm soát chi tiêu hiệu quả.",
        img: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc",
      },
      {
        title: "Thẻ tín dụng",
        desc: "Mua sắm trước – thanh toán sau với nhiều ưu đãi.",
        img: "https://images.unsplash.com/photo-1616077168079-7e09e7fa193b",
      },
    ],
    loan: [
      {
        title: "Vay tiêu dùng",
        desc: "Giải pháp tài chính linh hoạt cho mọi nhu cầu.",
        img: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f",
      },
    ],
  };

  return (
    <div
      className="min-h-screen w-full bg-slate-50"
      style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}
    >
      {/* ================= HEADER ================= */}
      <header className="flex items-center justify-between border-b px-10 py-4 bg-white">
        <h1 className="text-xl font-black text-[#0d141b]">
          Bank of Finance
        </h1>

        <nav className="flex gap-8 text-sm font-medium">
          <a href="#">Cá nhân</a>
          <a href="#">Doanh nghiệp</a>
          <a href="#">Về chúng tôi</a>
        </nav>

        <div className="flex gap-2">
          <button className="rounded-lg bg-[#1380ec] px-4 py-2 text-white text-sm font-bold">
            Đăng nhập
          </button>
          <button className="rounded-lg bg-slate-100 px-4 py-2 text-sm font-bold">
            Mở tài khoản
          </button>
        </div>
      </header>

      {/* ================= MAIN ================= */}
      <main className="w-full px-10 py-8 flex justify-center">
        <div className="w-full max-w-[1200px] space-y-12">

          {/* ================= HERO ================= */}
          <section
            className="min-h-[480px] rounded-xl bg-cover bg-center p-10 text-white flex flex-col justify-end"
            style={{
              backgroundImage:
                'linear-gradient(rgba(0,0,0,.3),rgba(0,0,0,.6)), url("https://images.unsplash.com/photo-1507679799987-c73779587ccf")',
            }}
          >
            <h2 className="text-5xl font-black mb-4">
              Ngân hàng của bạn, mọi lúc mọi nơi
            </h2>
            <p className="max-w-xl mb-6">
              Trải nghiệm ngân hàng số hiện đại, an toàn và tiện lợi.
            </p>
            <button className="w-fit rounded-lg bg-[#1380ec] px-6 py-3 font-bold">
              Tải ứng dụng
            </button>
          </section>

          {/* ================= PRODUCTS ================= */}
          <section>
            <h2 className="text-2xl font-bold mb-6">
              Sản phẩm và dịch vụ
            </h2>

            {/* TABS */}
            <div className="flex gap-8 border-b mb-6">
              {[
                { key: "account", label: "Tài khoản" },
                { key: "card", label: "Thẻ" },
                { key: "loan", label: "Vay" },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`pb-3 font-bold text-sm ${
                    activeTab === tab.key
                      ? "border-b-4 border-[#1380ec]"
                      : "text-slate-400"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* CONTENT */}
            <div className="space-y-6">
              {products[activeTab].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-6 bg-white p-6 rounded-xl shadow-sm"
                >
                  <div className="flex-1 space-y-3">
                    <h3 className="text-lg font-bold">{item.title}</h3>
                    <p className="text-slate-600">{item.desc}</p>
                    <button className="rounded-lg bg-[#1380ec] px-4 py-2 text-sm text-white">
                      Xem chi tiết
                    </button>
                  </div>

                  <div
                    className="w-[360px] aspect-video rounded-lg bg-cover bg-center"
                    style={{ backgroundImage: `url(${item.img})` }}
                  />
                </div>
              ))}
            </div>
          </section>

          {/* ================= NEWS ================= */}
          <section>
            <h2 className="text-2xl font-bold mb-6">
              Tin tức & khuyến mãi
            </h2>

            <div className="grid grid-cols-3 gap-6">
              {[
                "Ưu đãi thẻ tín dụng",
                "Ngân hàng số 2025",
                "Tri ân khách hàng",
              ].map((title, i) => (
                <div key={i} className="space-y-3">
                  <div
                    className="aspect-video rounded-lg bg-cover bg-center"
                    style={{
                      backgroundImage:
                        'url("https://images.unsplash.com/photo-1526304640581-d334cdbbf45e")',
                    }}
                  />
                  <h4 className="font-bold">{title}</h4>
                  <p className="text-sm text-slate-600">
                    Khám phá các chương trình ưu đãi hấp dẫn.
                  </p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
