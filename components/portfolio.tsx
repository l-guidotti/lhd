"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const categories = ["Todos", "Casamentos", "Ensaios", "Vídeos", "Corporativo"]

const portfolioItems = [
  {
    id: 1,
    src: "/images/portfolio-5.jpg",
    alt: "Fotografia arquitetônica",
    category: "Ensaios",
  },
  {
    id: 5,
    src: "/images/portfolio-1.jpg",
    alt: "Fotografia de casamento",
    category: "Casamentos",
  },
  {
    id: 2,
    src: "/images/portfolio-2.jpg",
    alt: "Retrato cinemático",
    category: "Ensaios",
  },
  {
    id: 4,
    src: "/images/portfolio-4.jpg",
    alt: "Retrato corporativo",
    category: "Corporativo",
  },
  {
    id: 3,
    src: "/images/portfolio-3.jpg",
    alt: "Fotografia de moda",
    category: "Ensaios",
  },
  {
    id: 6,
    src: "/images/portfolio-6.jpg",
    alt: "Retrato de noiva",
    category: "Casamentos",
  },
]

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("Todos")

  const filteredItems = portfolioItems.filter(
    (item) => activeCategory === "Todos" || item.category === activeCategory
  )

  return (
    <section id="portfolio" className="py-24 bg-black">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-white">
            Trabalhos Recentes
          </h2>
          <Link
            href="#portfolio"
            className="group inline-flex items-center gap-2 text-white font-medium hover:text-zinc-300 transition-colors hidden md:flex"
          >
            Ver Todos
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-white text-black"
                  : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                className={`group relative overflow-hidden rounded-xl cursor-pointer ${
                  index === 0 && activeCategory === "Todos"
                    ? "row-span-2 aspect-[3/4]"
                    : "aspect-[4/5]"
                }`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  priority={index === 0}
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
              </motion.div>
            ))}
            
            {/* Fallback msg for empty categories (videos) */}
            {filteredItems.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-2 md:col-span-4 py-12 text-center text-zinc-500"
              >
                Nenhum trabalho encontrado para esta categoria.
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Additional CTA Row */}
        <div className="mt-4">
          <div className="hidden md:flex items-center justify-center bg-zinc-900 rounded-xl py-8 md:py-16 border border-zinc-800 w-full transition-all duration-300">
            <Link href="#contact" className="text-center p-6 w-full h-full flex flex-col items-center justify-center">
              <p className="font-serif text-2xl md:text-3xl text-white mb-3">
                Vamos criar algo incrível juntos?
              </p>
              <span className="text-zinc-400 text-sm flex items-center justify-center gap-2 group">
                Entre em contato
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
