"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Play, Pause, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const categories = ["Todos", "Casamentos", "Ensaios", "Corporativo", "Eventos", "Outros"]

const portfolioItems = [
  {
    id: 1,
    src: "/images/lhd1.jpeg",
    alt: "Fotografia",
    category: "Ensaios",
  },
  {
    id: 5,
    vimeoId: "1185174901",
    alt: "PEDRO 1 ANO - FINAL",
    category: "Outros",
  },
  {
    id: 15,
    vimeoId: "1185185249",
    alt: "ALBERTO PESKE",
    category: "Eventos",
  },
  {
    id: 4,
    vimeoId: "1185174978",
    alt: "PEDRO 1 ANO",
    category: "Outros",
  },
  {
    id: 3,
    vimeoId: "1185179543",
    alt: "IMERSÃO",
    category: "Eventos",
  },
  {
    id: 6,
    vimeoId: "1185179594",
    alt: "OPEN HOUSE",
    category: "Eventos",
  },
  {
    id: 7,
    vimeoId: "1185174810",
    alt: "ZABALETA TRANSFORMA",
    category: "Outros",
  },
  {
    id: 8,
    vimeoId: "1185179698",
    alt: "WANDEC_AJUST.",
    category: "Eventos",
  },
  {
    id: 9,
    vimeoId: "1185179643",
    alt: "VIDEO 2 BENTO mp4",
    category: "Eventos",
  },
  {
    id: 10,
    vimeoId: "1185185179",
    alt: "FORMATURA PEDRO",
    category: "Eventos",
  },
  {
    id: 11,
    vimeoId: "1185336190",
    alt: "TEASER AIKO E EVELLIN",
    category: "Casamentos",
  },
  {
    id: 12,
    vimeoId: "1185336242",
    alt: "AIKO E EVELLIN",
    category: "Casamentos",
  },
]

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("Todos")
  const [selectedItem, setSelectedItem] = useState<typeof portfolioItems[0] | null>(null)

  const [vimeoPlaying, setVimeoPlaying] = useState<boolean>(true)
  const vimeoIframeRef = useRef<HTMLIFrameElement>(null)

  const toggleVimeoPlayPause = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (vimeoIframeRef.current) {
      if (vimeoPlaying) {
        vimeoIframeRef.current.contentWindow?.postMessage(JSON.stringify({ method: 'pause' }), '*')
        setVimeoPlaying(false)
      } else {
        vimeoIframeRef.current.contentWindow?.postMessage(JSON.stringify({ method: 'play' }), '*')
        setVimeoPlaying(true)
      }
    }
  }

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
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
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
                onClick={() => {
                  setSelectedItem(item)
                  if (item.vimeoId) {
                    setVimeoPlaying(false)
                  }
                }}
                className={`group relative overflow-hidden rounded-xl cursor-pointer ${index === 0 && activeCategory === "Todos"
                  ? "row-span-2 aspect-[3/4]"
                  : "aspect-[4/5]"
                  }`}
              >
                <>
                  <Image
                    src={item.vimeoId ? `https://vumbnail.com/${item.vimeoId}.jpg` : item.src!}
                    alt={item.alt}
                    fill
                    priority={index === 0}
                    unoptimized={!!item.vimeoId}
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Play Button Overlay se for Vídeo */}
                  {item.vimeoId && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/30 transition-colors duration-300">
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 text-white group-hover:scale-110 group-hover:bg-white group-hover:text-black transition-all duration-300 shadow-xl">
                        <Play className="w-6 h-6 md:w-8 md:h-8 ml-1 fill-current" />
                      </div>
                    </div>
                  )}

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  {/* Category Label */}
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <span className="text-white text-sm font-medium">
                      {item.category}
                    </span>
                  </div>
                </>
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
        {/* Modal Overlay */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md bg-black/95"
              onClick={() => setSelectedItem(null)}
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-6 right-6 text-white hover:text-zinc-300 z-50 p-2 bg-black/20 rounded-full transition-colors"
                aria-label="Cerrar"
              >
                <X className="w-8 h-8" />
              </button>

              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-5xl md:h-[80vh] h-[60vh] rounded-2xl overflow-hidden bg-black flex items-center justify-center shadow-2xl"
              >
                {selectedItem.vimeoId ? (
                  <div className="absolute inset-0 w-full h-full group/video cursor-pointer" onClick={toggleVimeoPlayPause}>
                    <iframe
                      ref={vimeoIframeRef}
                      src={`https://player.vimeo.com/video/${selectedItem.vimeoId}?autoplay=0&title=0&byline=0&portrait=0&controls=0&badge=0&autopause=0&player_id=0&app_id=58479&api=1`}
                      title={selectedItem.alt}
                      allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      className="absolute inset-0 w-full h-full border-0 bg-black pointer-events-none"
                    />

                    <div
                      className={`absolute inset-0 z-20 flex items-center justify-center transition-all duration-300 ${vimeoPlaying ? 'opacity-0 group-hover/video:opacity-100 bg-black/20' : 'opacity-100 bg-black/50'}`}
                    >
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 text-white hover:scale-110 hover:bg-white hover:text-black transition-all duration-300 shadow-xl">
                        {vimeoPlaying ? (
                          <Pause className="w-6 h-6 md:w-8 md:h-8 fill-current" />
                        ) : (
                          <Play className="w-6 h-6 md:w-8 md:h-8 ml-1 fill-current" />
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Image
                    src={selectedItem.src!}
                    alt={selectedItem.alt}
                    fill
                    className="object-contain"
                  />
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
