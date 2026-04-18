"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const portfolioItems = [
  {
    id: 1,
    src: "/images/portfolio-5.jpg",
    alt: "Fotografia arquitetonica",
    category: "Ensaio",
  },
  {
    id: 2,
    src: "/images/portfolio-2.jpg",
    alt: "Retrato cinematico",
    category: "Lifestyle",
  },
  {
    id: 3,
    src: "/images/portfolio-3.jpg",
    alt: "Fotografia de moda",
    category: "Moda",
  },
  {
    id: 4,
    src: "/images/portfolio-4.jpg",
    alt: "Retrato corporativo",
    category: "Corporativo",
  },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-black">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-white">
            Trabalhos Recentes
          </h2>
          <Link
            href="#portfolio"
            className="group inline-flex items-center gap-2 text-white font-medium hover:text-zinc-300 transition-colors"
          >
            Ver Todos
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-xl cursor-pointer ${index === 0 ? "row-span-2 aspect-[3/4]" : "aspect-[4/5]"
                }`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Category Label */}
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-sm font-medium">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Row */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          <div className="group relative overflow-hidden rounded-xl cursor-pointer aspect-[4/3]">
            <Image
              src="/images/portfolio-1.jpg"
              alt="Fotografia de casamento"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-sm font-medium">Casamentos</span>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-xl cursor-pointer aspect-[4/3]">
            <Image
              src="/images/portfolio-6.jpg"
              alt="Retrato de noiva"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-sm font-medium">Eventos</span>
            </div>
          </div>
          <div className="hidden md:flex items-center justify-center bg-zinc-900 rounded-xl aspect-[4/3] border border-zinc-800">
            <Link href="#contact" className="text-center p-6">
              <p className="font-serif text-2xl text-white mb-2">
                Vamos criar algo incrível juntos?
              </p>
              <span className="text-zinc-400 text-sm">Entre em contato</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
