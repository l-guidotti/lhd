import { Check } from "lucide-react"

const pricingPlans = [
  {
    name: "Ensaio Fotográfico",
    price: "R$ 499",
    description: "Sessão de fotos ideal para retratos pessoais, casais ou gestantes.",
    features: [
      "2 horas de sessão",
      "Local à escolha do cliente",
      "30 fotos tratadas em alta resolução",
      "Galeria online exclusiva",
      "Entrega em até 7 dias úteis",
    ],
  },
  {
    name: "Cobertura de Eventos",
    price: "R$ 1.299",
    popular: true,
    description: "Cobertura completa para aniversários, formaturas e eventos corporativos.",
    features: [
      "Até 4 horas de cobertura",
      "1 Fotógrafo",
      "100+ fotos tratadas em alta resolução",
      "Mini clipe (Reels/TikTok)",
      "Galeria online exclusiva",
      "Entrega em até 15 dias úteis",
    ],
  },
  {
    name: "Casamento",
    price: "Sob Consulta",
    description: "Eternize o dia mais importante da sua vida com nossa equipe completa.",
    features: [
      "Cobertura fotográfica completa (Making of até a festa)",
      "Videomakers + Filme do casamento",
      "Álbum fotográfico premium",
      "Ensaio pré-wedding incluso",
      "Entrega em Pendrive personalizado",
      "Filmagens aéreas com Drone",
    ],
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-black">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Investimento
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-white mt-4">
            Planos e Valores
          </h2>
          <p className="text-zinc-400 mt-4 leading-relaxed">
            Escolha o pacote ideal para a sua necessidade. Se precisar de algo customizado,
            estamos à disposição para montar uma proposta exclusiva.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col p-8 rounded-3xl bg-zinc-900 border ${plan.popular ? "border-accent shadow-xl shadow-accent/10 scale-100 lg:scale-[1.02] z-10" : "border-zinc-800"
                }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider">
                  Mais Escolhido
                </div>
              )}
              <div className="mb-8">
                <h3 className="font-serif text-2xl font-medium text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed min-h-[40px]">
                  {plan.description}
                </p>
              </div>
              <div className="mb-8">
                <span className="text-4xl font-serif font-semibold text-white">
                  {plan.price}
                </span>
                {plan.price !== "Sob Consulta" && (
                  <span className="text-zinc-400 ml-2">/ inicial</span>
                )}
              </div>
              <ul className="flex flex-col gap-4 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent shrink-0" />
                    <span className="text-zinc-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`text-center py-3 px-6 rounded-full font-medium transition-colors ${plan.popular
                    ? "bg-accent text-white hover:bg-accent/90"
                    : "bg-white/10 text-white hover:bg-white/20"
                  }`}
              >
                Solicitar Orçamento
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
