'use client'
import Image from 'next/image'

export const CTA = () => {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 max-w-[1920px] mx-auto text-center">
      <div className="relative bg-gradient-to-br from-primary-container to-[#5a00c6] rounded-[3rem] p-12 md:p-24 overflow-hidden border border-white/10 shadow-2xl shadow-primary-container/20">
        {/* Background Image/Aura */}
        <div className="absolute inset-0 opacity-30 pointer-events-none mix-blend-overlay scale-110">
          <Image 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBcXAEtiHo5ZTbZ5ah_iOJSN6ip6nfCLfnUYUWjof5kxIQgWWnz7udZQ9_ahzULD_uGB4Ur6CWh5362iZXlrSXs7WDhnmbj8TehY1UTahrENfDC8TtSTSnHd0Rpwnrj0TqdewCsY-Nn5gnr2cd8gBa-HDccDnrSNJGGf5-24mvtOYErIoP_1zle77NrZ5rzPFr8bnlQN1390CwHC3dSIGhCF3x3olpiEonU4CBg5_NW8AAXmu-sI37omwkgLsau840hmx4OQOb1mQ"
            alt="Küresel Veri Ağı"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#121027]/40 to-transparent"></div>
        
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
