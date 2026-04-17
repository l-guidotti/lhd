import { Camera, Film, Heart, Building2 } from "lucide-react"

const services = [
  {
    icon: Heart,
    title: "Casamentos",
    description: "Capturamos cada detalhe do seu dia especial com elegância e emoção, criando memórias que durarão para sempre.",
  },
  {
    icon: Camera,
    title: "Ensaios",
    description: "Sessões fotográficas personalizadas que revelam sua essência e contam sua história de forma única.",
  },
  {
    icon: Film,
    title: "Video",
    description: "Produção audiovisual cinematográfica que transforma momentos em narrativas visuais emocionantes.",
  },
  {
    icon: Building2,
    title: "Corporativo",
    description: "Fotografia profissional para empresas, eventos corporativos e produções institucionais.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 bg-black">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Nossos Serviços
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-white mt-4">
            O que oferecemos
          </h2>
          <p className="text-zinc-400 mt-4">
            Serviços completos de fotografia e vídeo para eternizar seus momentos mais importantes.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-zinc-900 p-8 rounded-2xl border border-zinc-800 hover:border-accent/50 transition-all hover:shadow-lg"
            >
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <service.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-serif text-xl font-medium text-white mb-3">
                {service.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
