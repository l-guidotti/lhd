"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Instagram, Mail, Phone, MapPin } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const message = `Olá! Meu nome é ${formData.name} vi seu site e gostaria de conversar sobre um projeto.
${formData.message}

*Email:* ${formData.email}
*Telefone:* ${formData.phone}`

    const encodedMessage = encodeURIComponent(message)
    const whatsappNumber = "5553984741363"

    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank")
  }

  return (
    <section id="contact" className="py-24 bg-black">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Content */}
          <div className="flex flex-col gap-8">
            <div>
              <span className="text-accent font-medium text-sm uppercase tracking-wider">
                Contato
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-medium text-white mt-4">
                Vamos conversar sobre seu projeto
              </h2>
              <p className="text-zinc-400 mt-4 leading-relaxed">
                Entre em contato para discutirmos como podemos transformar seus momentos
                especiais em memórias eternas.
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-6">
              <a
                href="https://www.instagram.com/lhdaudiovisual"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-white hover:text-accent transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Instagram className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-medium">Instagram</p>
                  <p className="text-sm text-zinc-400">@lhdaudiovisual</p>
                </div>
              </a>

              <a
                href="mailto:contato@lhdaudiovisual.com"
                className="flex items-center gap-4 text-white hover:text-accent transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm text-zinc-400">contato@lhdaudiovisual.com</p>
                </div>
              </a>

              <a
                href="tel:+5553984741363"
                className="flex items-center gap-4 text-white hover:text-accent transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Phone className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-medium">Telefone</p>
                  <p className="text-sm text-zinc-400">(53)98474-1363</p>
                </div>
              </a>

              <div className="flex items-center gap-4 text-white">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-medium">Localização</p>
                  <p className="text-sm text-zinc-400">Atendemos em todo o Brasil</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800">
            <h3 className="font-serif text-2xl font-medium text-white mb-6">
              Envie sua mensagem
            </h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-white">
                  Nome
                </label>
                <Input
                  id="name"
                  placeholder="Seu nome completo"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-black border-zinc-800 text-white placeholder:text-zinc-500"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-white">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-black border-zinc-800 text-white placeholder:text-zinc-500"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="text-sm font-medium text-white">
                  Telefone
                </label>
                <Input
                  id="phone"
                  placeholder="(00) 00000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-black border-zinc-800 text-white placeholder:text-zinc-500"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-white">
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  placeholder="Conte-nos sobre seu projeto..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-black border-zinc-800 text-white placeholder:text-zinc-500 resize-none"
                  required
                />
              </div>

              <Button
                type="submit"
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full py-6"
              >
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
