"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Play, Pause, X, ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useIsMobile } from "@/hooks/use-mobile"

const categories = ["Todos", "Casamentos", "Corporativo", "Eventos", "Outros"]

type PortfolioItem = {
  id: number
  vimeoId?: string
  src?: string
  alt: string
  category: string
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 5,
    vimeoId: "1185174901",
    src: "https://i.vimeocdn.com/video/2148520799-2b1ba7577f0bb85bcd5e8478666b23e9d6beacd966f3c117c662ee4668558aac-d_640?region=us",
    alt: "PEDRO 1 ANO - FINAL",
    category: "Outros",
  },
  {
    id: 15,
    vimeoId: "1185185249",
    src: "https://i.vimeocdn.com/video/2148534629-c54c1fa75f7e3f69171a0b00853b1c03142bb3674a50a418bcf5ec65b7027714-d_640?region=us",
    alt: "ALBERTO PESKE",
    category: "Eventos",
  },
  {
    id: 4,
    vimeoId: "1185174978",
    src: "https://i.vimeocdn.com/video/2148520906-df3f9c704cb3e4e78317f2761ffe72da83eb0ce434c07d3660fd92a541e5727f-d_640?region=us",
    alt: "PEDRO 1 ANO",
    category: "Outros",
  },
  {
    id: 3,
    vimeoId: "1185179543",
    src: "https://i.vimeocdn.com/video/2148526959-e6dc12b4e85dad160d384a487426e7bcdbd036b94ca129159756caee2f73fe84-d_640?region=us",
    alt: "IMERSÃO",
    category: "Eventos",
  },
  {
    id: 6,
    vimeoId: "1185179594",
    src: "https://i.vimeocdn.com/video/2148527906-c47966ac61021023dc8e3e1b0248d13e6537195d2b3c9e37841eb2ab452e4eaa-d_640?region=us",
    alt: "OPEN HOUSE",
    category: "Eventos",
  },
  {
    id: 7,
    vimeoId: "1185174810",
    src: "https://i.vimeocdn.com/video/2148520711-ec23d4a41c712fa5a220d9eaf07aa0bce5aec22715a880613aa81c173052b3e3-d_640?region=us",
    alt: "ZABALETA TRANSFORMA",
    category: "Outros",
  },
  {
    id: 8,
    vimeoId: "1185179698",
    src: "https://i.vimeocdn.com/video/2148527126-e6d761eac8e224a8ffaa93a8d5060c37f1b26ec8e1ffa3f2de6bba884b27b381-d_640?region=us",
    alt: "WANDEC_AJUST.",
    category: "Eventos",
  },
  {
    id: 9,
    vimeoId: "1185179643",
    src: "https://i.vimeocdn.com/video/2148527070-09ec49c2255a1b7b5cc363c8f4018d501c88fad0b2ed8bb595b5f8d4dec826e7-d_640?region=us",
    alt: "VIDEO 2 BENTO mp4",
    category: "Eventos",
  },
  {
    id: 10,
    vimeoId: "1185185179",
    src: "https://i.vimeocdn.com/video/2148534544-56bffd9a1c44ec1e1441d9fdef6cee525f36904824cecbaed33eb72b83feefeb-d_640?region=us",
    alt: "FORMATURA PEDRO",
    category: "Eventos",
  },
  {
    id: 11,
    vimeoId: "1185336190",
    src: "https://i.vimeocdn.com/video/2148733875-18491533a4a5b24c02b2fbe1a3850ed1a4b46b28980f967164239854bc7433b7-d_640?region=us",
    alt: "TEASER AIKO E EVELLIN",
    category: "Casamentos",
  },
  {
    id: 12,
    vimeoId: "1185336242",
    src: "https://i.vimeocdn.com/video/2148733945-07b324dcebc07ca85d60a223af09bc9349ffb30499756357c729bfde31766b4d-d_640?region=us",
    alt: "AIKO E EVELLIN",
    category: "Casamentos",
  },
]

function PortfolioCard({
  item,
  index
}: {
  item: PortfolioItem
  index: number
}) {
  const isMobile = useIsMobile()
  const [isInView, setIsInView] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isMobile) {
      setIsInView(false)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      {
        rootMargin: "200px",
        threshold: 0.01,
      }
    )

    const currentRef = containerRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [isMobile])

  return (
    <div ref={containerRef} className="w-full h-full relative">
      {item.vimeoId && isInView && !isMobile ? (
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden bg-zinc-900 group-hover:scale-110 transition-transform duration-500">
          <iframe
            src={`https://player.vimeo.com/video/${item.vimeoId}?background=1&autoplay=1&loop=1&muted=1`}
            allow="autoplay; fullscreen; picture-in-picture"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{
              width: '300%',
              height: '300%'
            }}
          />
        </div>
      ) : item.src ? (
        <Image
          src={item.src}
          alt={item.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
          priority={index === 0}
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      ) : (
        <div className="absolute inset-0 bg-zinc-900" />
      )}

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
    </div>
  )
}

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

  const handlePrevious = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (!selectedItem) return
    const currentIndex = filteredItems.findIndex(item => item.id === selectedItem.id)
    if (currentIndex > 0) {
      setSelectedItem(filteredItems[currentIndex - 1])
    } else {
      setSelectedItem(filteredItems[filteredItems.length - 1])
    }
  }

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (!selectedItem) return
    const currentIndex = filteredItems.findIndex(item => item.id === selectedItem.id)
    if (currentIndex < filteredItems.length - 1) {
      setSelectedItem(filteredItems[currentIndex + 1])
    } else {
      setSelectedItem(filteredItems[0])
    }
  }

  return (
    <section id="portfolio" className="py-12 md:py-24 bg-[#1F030A]">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
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
                className="group relative overflow-hidden rounded-xl cursor-pointer aspect-[4/5]"
              >
                <PortfolioCard item={item} index={index} />
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
                aria-label="Fechar"
              >
                <X className="w-8 h-8" />
              </button>

              <button
                onClick={handlePrevious}
                className="absolute left-4 md:left-12 text-white hover:text-zinc-300 z-50 p-2 bg-black/20 hover:bg-black/40 rounded-full transition-all"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-8 h-8 md:w-10 md:h-10" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-4 md:right-12 text-white hover:text-zinc-300 z-50 p-2 bg-black/20 hover:bg-black/40 rounded-full transition-all"
                aria-label="Próximo"
              >
                <ChevronRight className="w-8 h-8 md:w-10 md:h-10" />
              </button>

              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-5xl md:h-[80vh] h-[60vh] rounded-2xl overflow-hidden bg-black flex items-center justify-center shadow-2xl"
              >
                {selectedItem.vimeoId ? (
                  <div className="absolute inset-0 w-full h-full group/video">
                    <iframe
                      src={`https://player.vimeo.com/video/${selectedItem.vimeoId}?autoplay=1&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479`}
                      title={selectedItem.alt}
                      allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      className="absolute inset-0 w-full h-full border-0 bg-black"
                    />
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
