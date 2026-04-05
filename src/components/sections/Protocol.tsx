'use client'

export const Protocol = () => {
  const features = [
    {
      icon: 'lock_open',
      title: 'Sıfır Bilgi Kanıtı',
      desc: 'Veri gizliliğinden ödün vermeden sistem doğruluğunu kanıtlayan matematiksel kesinlik ve şeffaflık.'
    },
    {
      icon: 'groups',
      title: 'Mutabakat Odaklı Eğitim',
      desc: 'Modellerin topluluk onaylı ve manipülasyona kapalı bir şekilde eğitilmesini sağlayan merkezi olmayan ağ yapısı.'
    },
    {
      icon: 'grid_guides',
      title: 'Değişmez Güvenlik Rayları',
      desc: 'Protokol düzeyinde entegre edilmiş etik ve güvenlik sınırları ile sarsılmaz güven ve sürdürülebilirlik.'
    }
  ]

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 max-w-[1920px] mx-auto">
      <div className="text-center mb-16 md:mb-24">
        <span className="text-primary-container font-bold tracking-widest text-sm uppercase mb-4 block">Standartlar</span>
        <h2 className="font-headline text-4xl md:text-6xl font-bold text-foreground mt-4 leading-tight">Protokolümüz</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="bg-surface-container-low p-10 md:p-12 rounded-[2.5rem] border border-white/5 hover:bg-surface-container transition-all duration-500 hover:-translate-y-2 group"
          >
            <div className="w-20 h-20 bg-primary-container/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
              <span className="material-symbols-outlined text-primary-container text-5xl">{feature.icon}</span>
            </div>
            <h4 className="font-headline text-3xl font-bold text-foreground mb-6 leading-tight">{feature.title}</h4>
            <p className="text-on-surface-variant text-lg leading-relaxed">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
