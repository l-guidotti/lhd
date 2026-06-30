import Image from "next/image"
import Link from "next/link"
import { ArrowDown, ArrowUpRight } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-20 overflow-hidden bg-gradient-to-b from-black via-black to-[#ce1141]/15">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-24 relative">
        {/* Floating Top Dates */}
        <div className="absolute top-0 md:top-4 left-6 right-6 lg:left-8 lg:right-8 flex justify-between items-center text-white/50 font-sans font-bold tracking-[0.4em] text-[10px] sm:text-xs z-30 uppercase pointer-events-none">
          <span>DESDE</span>
          <span>2023</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-8">
            {/* Scroll Indicator - Desktop Only */}
            <div className="hidden lg:flex items-center gap-3 text-zinc-400">
              <span className="font-serif text-sm tracking-wide -rotate-90 origin-left translate-y-16">
                Role para baixo
              </span>
              <ArrowDown className="h-4 w-4 mt-24" />
            </div>

            {/* Main Heading Text/Image */}
            <div className="mt-8 lg:mt-0 relative w-full flex justify-center lg:justify-start z-20">
              <div className="relative w-full max-w-2xl">
                <Image
                  src="/images/fundo-sf1.PNG"
                  alt="Narrativas em Movimento"
                  width={800}
                  height={400}
                  className="w-full h-auto object-contain drop-shadow-[0_0_20px_rgba(206,17,65,0.3)] hover:drop-shadow-[0_0_30px_rgba(206,17,65,0.6)] transition-all duration-500"
                  priority
                />
              </div>
            </div>

            {/* Description */}
            <p className="max-w-md text-zinc-400 leading-relaxed">
              Aproveite a oportunidade de eternizar momentos que você vai guardar para sempre.
              Por que ser comum quando você pode ser extraordinário?
            </p>

            {/* CTA Button */}
            <div className="flex items-center justify-center lg:justify-start gap-6 w-full mt-2">
              <Link
                href="#contact-form"
                className="group inline-flex items-center justify-center gap-1.5 bg-[#FB0119] text-white rounded-full w-28 h-28 md:w-32 md:h-32 hover:bg-[#d50015] transition-all hover:scale-105 border border-transparent hover:border-[#FB0119]/50 shadow-[0_0_15px_rgba(251,1,25,0.4)] hover:shadow-[0_0_25px_rgba(251,1,25,0.7)] p-2"
              >
                <span className="font-sans font-black uppercase tracking-wide text-[10px] md:text-xs">Orçamento</span>
                <ArrowUpRight className="h-3 w-3 md:h-4 md:w-4 stroke-[3] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
              </Link>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-zinc-900">
              <Image
                src="/images/perfil3.jpeg"
                alt="LHD Audiovisual - Fotografo profissional"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -top-8 -left-8 w-32 h-32 border border-[#ce1141]/40 rounded-full" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#ce1141]/10 rounded-full" />
          </div>
        </div>
      </div>

      {/* Background Decorative Element */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#ce1141]/5 rounded-full blur-3xl -z-10" />
    </section>
  )
}
