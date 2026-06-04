import { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Gizlilik Politikası - Virelix",
  description: "Virelix gizlilik politikası ve çerez kullanım esasları.",
};

export default function PrivacyPolicy() {
  return (
    <main className="bg-background text-on-surface font-body selection:bg-primary-container selection:text-white overflow-x-hidden min-h-screen">
      <Navbar />
      <div className="pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto relative z-10">
        <h1 className="font-headline text-4xl sm:text-5xl font-bold text-white leading-tight tracking-tighter mb-8">Gizlilik Politikası</h1>
        <div className="prose prose-invert prose-lg max-w-none text-slate-300">
          <p className="mb-6 text-sm text-primary">
            Son Güncelleme: 19 Mart 2026
          </p>
          <p className="mb-6 leading-relaxed">
            Virelix olarak, web sitemizi (virelix.com) ziyaret eden kullanıcılarımızın gizliliğine büyük önem vermekteyiz. Bu Gizlilik Politikası, ziyaretçilerimize ait kişisel verilerin nasıl toplandığı, kullanıldığı ve korunduğu hakkında bilgi vermek amacıyla hazırlanmıştır.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4 font-headline">1. Toplanan Bilgiler</h2>
          <p className="mb-6 leading-relaxed">
            Web sitemizi ziyaretiniz sırasında, hizmetlerimizi daha iyi sunabilmek amacıyla bazı temel bilgileri toplayabiliriz. Bu bilgiler arasında IP adresiniz, tarayıcı türünüz, ziyaret ettiğiniz sayfalar ve platformumuzda geçirdiğiniz süre gibi standart internet günlüğü bilgileri yer almaktadır. Ayrıca, iletişim formu aracılığıyla bize kendi isteğinizle sağladığınız ad, e-posta ve mesaj içerikleri de toplanabilir.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4 font-headline">2. Çerezler (Cookies) ve Üçüncü Taraf Araçlar</h2>
          <p className="mb-6 leading-relaxed">
            Sitemiz, kullanıcı deneyimini artırmak ve trafiği analiz etmek amacıyla çerezleri kullanır. Ayrıca sitemizde <strong>Google AdSense</strong> gibi üçüncü taraf reklam iş ortakları bulunabilir.
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Üçüncü taraf satıcılar (Google dahil), kullanıcıların web sitemize veya diğer web sitelerine yaptıkları önceki ziyaretlere dayalı olarak reklam yayınlamak üzere çerezleri kullanır.</li>
            <li>Google'ın reklam çerezlerini kullanması, Google ve iş ortaklarının sitemize ve/veya internetteki diğer sitelere yaptığınız ziyaretlere dayalı olarak size reklam sunmasına olanak tanır.</li>
            <li>Kullanıcılar, <a href="https://myadcenter.google.com/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Reklam Ayarları</a>'nı ziyaret ederek kişiselleştirilmiş reklamcılığı devre dışı bırakabilirler. Alternatif olarak, <a href="http://www.aboutads.info/choices/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">www.aboutads.info</a> adresini ziyaret ederek üçüncü taraf satıcıların kişiselleştirilmiş reklamcılık için çerez kullanımını devre dışı bırakabilirsiniz.</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4 font-headline">3. Bilgilerin Kullanımı</h2>
          <p className="mb-6 leading-relaxed">
            Toplanan bilgiler, web sitemizi optimize etmek, trendleri analiz etmek, kullanıcıların site içindeki hareketlerini takip etmek ve sizinle (izin verdiğiniz takdirde) iletişim kurmak amacıyla kullanılır. Bilgileriniz hiçbir şekilde izniniz olmadan satılmaz veya ticari amaçlarla üçüncü şahıslara devredilmez.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4 font-headline">4. Veri Güvenliği</h2>
          <p className="mb-6 leading-relaxed">
            Sistemlerimiz üzerinde toplanan verilerin yetkisiz erişime, değiştirilmeye veya imha edilmeye karşı korunması için endüstri standardı güvenlik önlemleri almaktayız. Ancak internet üzerinden yapılan veri aktarımlarının %100 güvenli olduğu garantisi verilemez.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4 font-headline">5. İletişim</h2>
          <p className="mb-6 leading-relaxed">
            Gizlilik Politikamız ile ilgili her türlü soru ve öneriniz için sitemizde yer alan iletişim bölümünden bizimle iletişime geçebilirsiniz.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
