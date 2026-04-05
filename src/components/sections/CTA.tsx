'use client'

export const CTA = () => {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 max-w-[1920px] mx-auto text-center">
      <div className="relative glass-panel rounded-[3rem] p-12 md:p-24 overflow-hidden border border-white/10 shadow-2xl glow-violet">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-container/20 to-transparent opacity-50"></div>
        
        <div className="relative z-10 space-y-8">
          <h2 className="font-headline text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter leading-none">
            Geleceği Başlatın
          </h2>
          <p className="text-white/90 text-xl md:text-2xl max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
            Virelix ile merkezi olmayan zeka devrimine bugün katılın. En düşük gecikme ve en yüksek güvenlikle projelerinizi ölçeklendirin.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 pt-4">
            <button className="w-full sm:w-auto px-12 py-5 bg-white text-primary-container rounded-2xl font-bold text-xl hover:scale-105 transition-transform shadow-xl shadow-black/10">
              Kayıt Ol
            </button>
            <button className="w-full sm:w-auto px-12 py-5 border-2 border-white/60 text-white rounded-2xl font-bold text-xl hover:bg-white/10 transition-all backdrop-blur-sm">
              Bize Ulaşın
            </button>
          </div>
        </div>

        {/* Decorative Light Elements */}
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary-container/40 rounded-full blur-[100px] animate-pulse delay-700"></div>
      </div>
    </section>
  )
}
