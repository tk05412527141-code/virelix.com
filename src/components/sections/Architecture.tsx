'use client'

export const Architecture = () => {
  return (
    <section className="py-24 md:py-32 overflow-hidden bg-transparent">
      <div className="px-6 md:px-12 max-w-[1920px] mx-auto grid grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="col-span-12 lg:col-span-6">
          <div className="glass-panel p-8 md:p-12 rounded-[2rem] border border-white/10 glow-violet relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-container/10 to-transparent opacity-50"></div>
            <div className="relative z-10">
              <span className="material-symbols-outlined text-primary-container text-6xl mb-6">dynamic_form</span>
              <h3 className="text-4xl font-bold text-white mb-6 font-headline">Nexus Altyapısı</h3>
              <p className="text-on-surface-variant text-lg leading-relaxed">
                Nexus, küresel ölçekte dağıtılmış, otonom ve kendi kendini iyileştiren bir mimaridir. 
                Statik sunucular yerine dinamik sinirsel düğümler üzerinde çalışır.
              </p>
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
