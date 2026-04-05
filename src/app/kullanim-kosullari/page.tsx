import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kullanım Koşulları - Virelix",
  description: "Virelix web sitesi kullanım koşulları.",
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-space font-bold mb-8 text-primary">Kullanım Koşulları</h1>
        <div className="prose prose-invert prose-lg max-w-none text-white/70">
          <p className="mb-6">
            Son Güncelleme: 19 Mart 2026
          </p>
          <p className="mb-6">
            Lütfen Virelix ("biz", "bize" veya "bizim") tarafından işletilen virelix.com web sitesini ("Hizmet") kullanmadan önce bu Kullanım Koşullarını ("Koşullar", "Kullanım Koşulları") dikkatlice okuyun.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">1. Koşulların Kabulü</h2>
          <p className="mb-6">
            Hizmete erişerek veya Hizmeti kullanarak, bu Koşullara bağlı kalmayı kabul edersiniz. Koşulların herhangi bir kısmını kabul etmiyorsanız, Hizmete erişemezsiniz.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">2. Fikri Mülkiyet Hakları</h2>
          <p className="mb-6">
            Hizmet ve orijinal sürümü, özellikleri ve işlevleri, Virelix'in münhasır mülkiyetindedir ve öyle kalacaktır. Sitede yer alan tüm içerik, tasarım, metin, grafik ve diğer materyaller uluslararası telif hakkı ve fikri mülkiyet yasaları tarafından korunmaktadır. Sitede bulunan materyaller önceden yazılı izin alınmaksızın çoğaltılamaz, dağıtılamaz veya kopyalanamaz.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">3. Diğer Web Sitelerine Bağlantılar</h2>
          <p className="mb-6">
            Hizmetimiz, Virelix'in sahibi olmadığı veya kontrol etmediği üçüncü taraf web sitelerine veya hizmetlerine bağlantılar içerebilir. Sitemizde yayınlanan üçüncü taraf reklamları da (Google AdSense gibi) dış bağlantılara sahiptir. Virelix, herhangi bir üçüncü taraf web sitesinin veya hizmetinin içeriği, gizlilik politikaları veya uygulamaları üzerinde kontrole sahip değildir ve bunlar için hiçbir sorumluluk kabul etmez.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">4. Sorumluluğun Sınırlandırılması</h2>
          <p className="mb-6">
            Virelix, bu web sitesinin kullanımından veya kullanılamamasından kaynaklanan hiçbir doğrudan veya dolaylı maddi/manevi zarardan sorumlu tutulamaz. Hizmet "olduğu gibi" sağlanmaktadır. Sitenin kesintisiz veya hatasız olacağı garanti edilmemektedir.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">5. Değişiklikler</h2>
          <p className="mb-6">
            Tamamen kendi takdirimize bağlı olarak, bu Koşulları herhangi bir zamanda değiştirme veya yenileme hakkımızı saklı tutarız. Sitede yapılan herhangi bir değişiklik, yayımlandığı andan itibaren geçerli olur. Değişiklikler yürürlüğe girdikten sonra Hizmetimize erişmeye veya onu kullanmaya devam ederek, revize edilmiş koşullara bağlı kalmayı kabul etmiş olursunuz.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">6. İletişim</h2>
          <p className="mb-6">
            Bu Koşullar hakkında herhangi bir sorunuz varsa, lütfen web sitemizin iletişim formunu kullanarak bizimle bağlantı kurun.
          </p>
        </div>
      </div>
    </div>
  );
}
