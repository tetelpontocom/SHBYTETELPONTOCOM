"use client"

// TetelPontocom — LP Shopee | Modelo 3 Produtos (Ajustado)
// V0 Free Safe Mode
// Pixel preservado
// Build: 2025-01-20

import { useEffect, useCallback } from "react"

const META_PIXEL_ID = "1305167264321996"

// === Pixel ===
function ensureMetaPixel(pixelId: string) {
  try {
    const w = window as any
    if (w.fbq && w._fbq_initialized) return

    if (!w.fbq) {
      ;((f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) => {
        if (f.fbq) return
        n = f.fbq = (...args: any[]) => {
          n.callMethod ? n.callMethod.apply(n, args) : n.queue.push(args)
        }
        if (!f._fbq) f._fbq = n
        n.push = n
        n.loaded = true
        n.version = "2.0"
        n.queue = []
        t = b.createElement(e)
        t.async = true
        t.src = v
        s = b.getElementsByTagName(e)[0]
        s?.parentNode?.insertBefore(t, s)
      })(w, document, "script", "https://connect.facebook.net/en_US/fbevents.js")
    }

    w._fbq_initialized = true
    w.fbq("init", pixelId)
    w.fbq("track", "PageView")
  } catch {}
}

function trackShopeeClick(product: string, href: string) {
  try {
    const w = window as any
    if (!w?.fbq) return
    w.fbq("trackCustom", "ShopeeClick", {
      product,
      href,
      page: "lp-3-produtos-ajustada",
    })
  } catch {}
}

// === Produtos ===
// Produto 0 = âncora (produto do dia)
const PRODUCTS = [
  {
    name: "Kit 5 Toalhas Gigantes – Alta Absorção",
    price: "R$ 108",
    href: "https://s.shopee.com.br/W0YLB9bTz",
    badge: "⭐ Melhor custo-benefício hoje",
    featured: true,
  },
  {
    name: "Kit 2 Pijamas Amamentação (Baby Doll)",
    price: "R$ 65,90",
    href: "https://s.shopee.com.br/Lh88sAEow",
    badge: "🔥 Alta procura",
  },
  {
    name: "Aspirador de Pó Portátil 2 em 1",
    price: "R$ 79,99",
    href: "https://s.shopee.com.br/1BGF8P7483",
    badge: "⚡ Escolha prática",
  },
]

export default function Page() {
  useEffect(() => {
    ensureMetaPixel(META_PIXEL_ID)
  }, [])

  const onClick = useCallback((name: string, href: string) => {
    trackShopeeClick(name, href)
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-50 to-white text-zinc-900 flex flex-col items-center">
      {/* Headline */}
      <section className="w-full max-w-xl px-4 pt-14 text-center">
        <span className="inline-block rounded-full bg-zinc-100 px-4 py-1 text-xs font-semibold text-zinc-700">
          Seleção atual • atualizada hoje
        </span>

        <h1 className="mt-4 text-3xl font-extrabold tracking-tight">
          Três escolhas certas.
          <br /> Você decide direto na Shopee.
        </h1>

        <p className="mt-4 text-sm text-zinc-600">
          Produtos escolhidos por desempenho e procura real.
          <br />
          Clique, confira e finalize na Shopee.
        </p>
      </section>

      {/* Produtos */}
      <section className="w-full max-w-xl px-4 mt-8 space-y-3">
        {PRODUCTS.map((p) => (
          <a
            key={p.href}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => onClick(p.name, p.href)}
            className={`flex items-center justify-between gap-3 rounded-xl border px-4 py-3 transition
              ${
                p.featured
                  ? "border-zinc-900 bg-zinc-50"
                  : "border-zinc-200 bg-white"
              }`}
          >
            <div className="min-w-0">
              <span className="block text-[11px] font-medium text-zinc-500 mb-0.5">
                {p.badge}
              </span>

              <h2 className="text-sm font-semibold leading-snug text-zinc-900">
                {p.name}
              </h2>

              <div className="mt-0.5 text-sm text-zinc-600">{p.price}</div>
            </div>

            <div className="shrink-0">
              <span
                className={`inline-flex items-center rounded-lg px-3 py-1.5 text-xs font-semibold
                  ${
                    p.featured
                      ? "bg-zinc-900 text-white"
                      : "bg-zinc-800 text-white"
                  }`}
              >
                Conferir →
              </span>
            </div>
          </a>
        ))}
      </section>

      {/* CTA final */}
      <section className="w-full max-w-xl px-4 mt-12 pb-24 text-center">
        <p className="text-xs text-zinc-500">
          Curadoria independente • Os produtos podem mudar conforme disponibilidade
        </p>
      </section>
    </main>
  )
}
