"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function WhatsAppButton() {
  const whatsappNumber = "5553984741363"
  const message = "Olá! Vi seu portfólio e gostaria de conversar sobre um projeto audiovisual."
  const encodedMessage = encodeURIComponent(message)
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.5, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex items-center bg-[#2AA81A] text-white p-3 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.45)] hover:shadow-[0_8px_30px_rgba(37,211,102,0.7)] transition-all duration-300 group cursor-pointer border border-[#25D366]/20"
      title="Fale conosco no WhatsApp"
      aria-label="Fale conosco no WhatsApp"
    >
      <div className="relative w-10 h-10 flex items-center justify-center">
        <Image
          src="/images/whatsapp.png"
          alt="WhatsApp Logo"
          fill
          sizes="40px"
          className="object-contain"
        />
      </div>

      {/* Tooltip expansível no Hover */}
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-[200px] group-hover:px-3 font-sans font-bold text-sm tracking-wide transition-all duration-500 ease-in-out text-white select-none">
        Fale Conosco
      </span>
    </motion.a>
  )
}
