'use client'

export const Stats = () => {
  const stats = [
    { label: 'Gecikme', value: '0.02ms' },
    { label: 'Verimlilik', value: '14.2TB/s' },
    { label: 'Düğümler', value: '8.4k+' },
    { label: 'Çalışma Süresi', value: '%99.99' },
  ]

  return (
    <section className="relative z-20 px-6 md:px-12 -mt-20 md:-mt-32 max-w-[1920px] mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className="bg-surface-container-low p-8 rounded-xl border-l-4 border-primary-container glow-violet transition-transform hover:scale-105 duration-300"
          >
            <p className="text-on-surface-variant font-medium mb-1">{stat.label}</p>
            <h3 className="font-headline text-4xl font-bold text-foreground">{stat.value}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}
