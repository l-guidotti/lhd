import Image from "next/image"

const stats = [
  { value: "3+", label: "Anos de Experiência" },
  // { value: "200+", label: "Projetos Realizados" },
  { value: "150+", label: "Clientes Satisfeitos" },
]

export function About() {
  return (
    <section id="about" className="py-24 bg-black">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-zinc-900">
              <Image
                src="/images/perfil2.png"
                alt="LHD Audiovisual"
                fill
                className="object-cover"
              />
            </div>
            {/* Stats Card */}
            <div className="absolute -bottom-8 -right-8 bg-zinc-900 p-6 rounded-2xl shadow-lg border border-zinc-800">
              <div className="flex gap-8">
                {stats.slice(0, 2).map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="font-serif text-3xl font-semibold text-white">{stat.value}</p>
                    <p className="text-xs text-zinc-400 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-8">
            <div>
              <span className="text-accent font-medium text-sm uppercase tracking-wider">
                Sobre mim
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-medium text-white mt-4">
                Transformando momentos em arte visual
              </h2>
            </div>

            <div className="flex flex-col gap-4 text-zinc-400 leading-relaxed">
              <p>
                A LHD Audiovisual nasceu da paixão por contar histórias através de imagens.
                Combinamos técnica, criatividade e sensibilidade para capturar a essência
                de cada momento.
              </p>
              <p>
                Especializados em fotografia e vídeo para casamentos, ensaios, eventos
                corporativos e produções criativas, entregamos um trabalho autoral que
                reflete a personalidade única de cada cliente.
              </p>
              <p>
                Nossa missão é transformar suas memórias em obras de arte que você
                irá valorizar para sempre.
              </p>
            </div>

            {/* Stats Row */}
            {/* <div className="grid grid-cols-3 gap-6 pt-8 border-t border-zinc-800">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-serif text-3xl font-semibold text-white">{stat.value}</p>
                  <p className="text-sm text-zinc-400 mt-1">{stat.label}</p>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}
