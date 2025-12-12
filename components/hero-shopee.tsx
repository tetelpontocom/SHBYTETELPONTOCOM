"use client"

import { useState, useEffect } from "react"

const heroFrames = [
  "/images/hero-shopee-frame-1.jpg",
  "/images/hero-shopee-frame-2.jpg",
  "/images/hero-shopee-frame-3.jpg",
  "/images/hero-shopee-frame-4.jpg",
  "/images/hero-shopee-frame-5.jpg",
]

export default function HeroShopee() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroFrames.length)
    }, 3500)

    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="hero"
      className="w-full min-h-[85vh] md:min-h-[92vh] lg:min-h-[100vh] flex flex-col items-center justify-center relative overflow-hidden"
    >
      {heroFrames.map((frame, index) => (
        <div
          key={frame}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            current === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={frame || "/placeholder.svg"}
            alt={`Shopee Hero ${index + 1}`}
            className="hero-image w-full h-full object-cover object-center md:object-[center_20%]"
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-white mb-6">
          Clique. Economize. Ganhe
          <br />
          Recompensas Exclusivas.
        </h1>

        <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto mb-10">
          Aproveite as melhores ofertas da Shopee. Aqui, cada compra gera vantagens reais, bônus premium e acesso aos
          produtos oficiais da tetelpontocom.
        </p>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/70 rounded-full"></div>
        </div>
      </div>
    </section>
  )
}
