'use client'
import Image from 'next/image'

export const Architecture = () => {
  return (
    <section className="py-24 md:py-32 bg-surface-container-low overflow-hidden">
      <div className="px-6 md:px-12 max-w-[1920px] mx-auto grid grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="col-span-12 lg:col-span-6 relative">
          <div className="aspect-square rounded-full border border-primary-container/20 absolute -inset-10 md:-inset-20 animate-[pulse_8s_infinite]"></div>
          <div className="aspect-square rounded-full border border-primary-container/10 absolute -inset-20 md:-inset-40 animate-[pulse_12s_infinite]"></div>
          <div className="relative bg-surface-container rounded-3xl overflow-hidden shadow-2xl group border border-white/5">
            <div className="aspect-[4/3] relative">
              {/* Image will be generated/updated later */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-container/20 to-transparent"></div>
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdig39TadpSajnq4PRLbzv3sU4tI4vWcgMLCEZh_h4bLG6NW5umU7zRIdgYuOVNctaPbHUOfYGiIxDMW1pCp8cXvvlAX6FRGOxv9VeI1ZsEilTVc3ZPpg7mkx0lELbSoxjK6UFy2ljNwuEHN49TIZPcK3_mukogS9B-WvHhTSRmDndPiqSnry8shvtRCjDuAdxFEwwsEoNii9GxTVNKWHnVzrOu9MwIZjVwvjgxc9UWY4x5vjawHw5P5ShGBoA3hx_bPkqp2VUDyI"
                alt="Nexus Core Architecture"
                fill
                className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
              />
            </div>
          </div>
        </div>
        
        <div className="col-span-12 lg:col-span-6">
          <span className="text-primary-container font-bold tracking-widest text-sm uppercase mb-4 block">Sistem Yapısı</span>
          <h2 className="font-headline text-4xl md:text-6xl font-bold text-foreground mt-4 mb-8 leading-tight">
            Mimari: Nexus Çekirdeği
          </h2>
          <p className="text-xl text-on-surface-variant mb-10 leading-relaxed">
            Nexus, küresel ölçekte dağıtılmış, otonom ve kendi kendini iyileştiren bir mimaridir. 
            Donanım seviyesinde optimizasyonlarla en karmaşık modelleri bile saniyeler içinde dağıtır.
          </p>
          
          <ul className="space-y-8">
            <li className="flex items-start gap-6">
              <div className="mt-1 w-8 h-8 bg-primary-container rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary-container/20">
                <span className="material-symbols-outlined text-white text-sm">check</span>
              </div>
              <div>
                <h5 className="text-foreground font-bold text-xl mb-2">Dağıtık Hesaplama</h5>
                <p className="text-on-surface-variant leading-relaxed">
                  Dünya çapında 8.000&apos;den fazla aktif düğümde paralel işlem gücü ve düşük gecikme süresi.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-6">
              <div className="mt-1 w-8 h-8 bg-primary-container rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary-container/20">
                <span className="material-symbols-outlined text-white text-sm">check</span>
              </div>
              <div>
                <h5 className="text-foreground font-bold text-xl mb-2">Dinamik Ölçeklendirme</h5>
                <p className="text-on-surface-variant leading-relaxed">
                  Talebe göre anlık kapasite artışı ve akıllı kaynak yönetimi ile maliyet optimizasyonu.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
