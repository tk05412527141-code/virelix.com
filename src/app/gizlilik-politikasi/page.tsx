import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gizlilik Politikası - Virelix",
  description: "Virelix gizlilik politikası ve çerez kullanım esasları.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-space font-bold mb-8 text-primary">Gizlilik Politikası</h1>
        <div className="prose prose-invert prose-lg max-w-none text-white/70">
          <p className="mb-6">
            Son Güncelleme: 19 Mart 2026
          </p>
          <p className="mb-6">
            Virelix olarak, web sitemizi (virelix.com) ziyaret eden kullanıcılarımızın gizliliğine büyük önem vermekteyiz. Bu Gizlilik Politikası, ziyaretçilerimize ait kişisel verilerin nasıl toplandığı, kullanıldığı ve korunduğu hakkında bilgi vermek amacıyla hazırlanmıştır.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">1. Toplanan Bilgiler</h2>
          <p className="mb-6">
            Web sitemizi ziyaretiniz sırasında, hizmetlerimizi daha iyi sunabilmek amacıyla bazı temel bilgileri toplayabiliriz. Bu bilgiler arasında IP adresiniz, tarayıcı türünüz, ziyaret ettiğiniz sayfalar ve platformumuzda geçirdiğiniz süre gibi standart internet günlüğü bilgileri yer almaktadır. Ayrıca, iletişim formu aracılığıyla bize kendi isteğinizle sağladığınız ad, e-posta ve mesaj içerikleri de toplanabilir.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">2. Çerezler (Cookies) ve Üçüncü Taraf Araçlar</h2>
          <p className="mb-6">
            Sitemiz, kullanıcı deneyimini artırmak ve trafiği analiz etmek amacıyla çerezleri kullanır. Ayrıca sitemizde <strong>Google AdSense</strong> gibi üçüncü taraf reklam iş ortakları bulunabilir.
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2">Üçüncü taraf satıcılar (Google dahil), kullanıcıların web sitemize veya diğer web sitelerine yaptıkları önceki ziyaretlere dayalı olarak reklam yayınlamak üzere çerezleri kullanır.</li>
            <li className="mb-2">Google'ın reklam çerezlerini kullanması, Google ve iş ortaklarının sitemize ve/veya internetteki diğer sitelere yaptığınız ziyaretlere dayalı olarak size reklam sunmasına olanak tanır.</li>
            <li className="mb-2">Kullanıcılar, <a href="https://myadcenter.google.com/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Reklam Ayarları</a>'nı ziyaret ederek kişiselleştirilmiş reklamcılığı devre dışı bırakabilirler. Alternatif olarak, <a href="http://www.aboutads.info/choices/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">www.aboutads.info</a> adresini ziyaret ederek üçüncü taraf satıcıların kişiselleştirilmiş reklamcılık için çerez kullanımını devre dışı bırakabilirsiniz.</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">3. Bilgilerin Kullanımı</h2>
          <p className="mb-6">
            Toplanan bilgiler, web sitemizi optimize etmek, trendleri analiz etmek, kullanıcıların site içindeki hareketlerini takip etmek ve sizinle (izin verdiğiniz takdirde) iletişim kurmak amacıyla kullanılır. Bilgileriniz hiçbir şekilde izniniz olmadan satılmaz veya ticari amaçlarla üçüncü şahıslara devredilmez.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">4. Veri Güvenliği</h2>
          <p className="mb-6">
            Sistemlerimiz üzerinde toplanan verilerin yetkisiz erişime, değiştirilmeye veya imha edilmeye karşı korunması için endüstri standardı güvenlik önlemleri almaktayız. Ancak internet üzerinden yapılan veri aktarımlarının %100 güvenli olduğu garantisi verilemez.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">5. İletişim</h2>
          <p className="mb-6">
            Gizlilik Politikamız ile ilgili her türlü soru ve öneriniz için sitemizde yer alan iletişim bölümünden bizimle iletişime geçebilirsiniz.
          </p>
        </div>
      </div>
    </div>
  );
}
