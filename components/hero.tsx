import Image from "next/image"
import Link from "next/link"
import { ArrowDown, ArrowUpRight } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-20 overflow-hidden bg-black">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-24">
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

            {/* Main Heading */}
            <div className="mt-8 lg:mt-0">
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium leading-tight text-white">
                Capturando
                <br />
                suas{" "}
                <span className="text-accent italic">Memórias</span>
                <br />
                Eternas.
              </h1>
            </div>

            {/* Description */}
            <p className="max-w-md text-zinc-400 leading-relaxed">
              Aproveite a oportunidade de eternizar momentos que você vai guardar para sempre.
              Por que ser comum quando você pode ser extraordinário?
            </p>

            {/* CTA Button */}
            <div className="flex items-center gap-6">
              <Link
                href="#contact-form"
                className="group inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground rounded-full w-32 h-32 text-sm font-medium hover:bg-primary/90 transition-all hover:scale-105"
              >
                <span className="font-serif text-lg">Orçamento</span>
                <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-zinc-900">
              <Image
                src="/images/perfil2.PNG"
                alt="LHD Audiovisual - Fotografo profissional"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -top-8 -left-8 w-32 h-32 border border-zinc-800/50 rounded-full" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/10 rounded-full" />
          </div>
        </div>
      </div>

      {/* Background Decorative Element */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />
    </section>
  )
}
