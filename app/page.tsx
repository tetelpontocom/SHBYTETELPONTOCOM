"use client"

// app/page.tsx
// TetelPontocom — Curadoria Shopee (LP Curadoria)
// Iteração Persuasão + UX (card inteiro clicável, microcopy persuasiva, sem duplicidade "Achadinhos")
// V0 Free Safe Mode ✅
//
// + Pixel Meta + Evento de Intenção Real
// Evento: ShopeeClick (trackCustom)
// Upgrade path (V0 Pro): GTM + Advanced Matching + CAPI

import { useEffect } from "react"
import type React from "react"

const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || "SEU_PIXEL_ID_AQUI"

const LINKS = {
  // CTAs PRINCIPAIS (sempre este link)
  shopeeMain: "https://s.shopee.com.br/8AP48CmyxJ",

  // Links base (já convertidos)
  catTecnologia: "https://s.shopee.com.br/7fSo5SM4H1",
  catBemEstar: "https://s.shopee.com.br/10vuHeBleE",
  catMercado: "https://s.shopee.com.br/805ecxvo7h",
  catPapelaria: "https://s.shopee.com.br/7pmDgk2YOy",

  // Categorias fixas (já convertidas)
  catAchadinhos: "https://s.shopee.com.br/1BG7BsNCTi",
  catModa: "https://s.shopee.com.br/9fEfJrdDec",
  catClubeBeleza: "https://s.shopee.com.br/2VlUmnO0aO",
  catClubePet: "https://s.shopee.com.br/5q1wl2qh7D",
  catAutoMoto: "https://s.shopee.com.br/40aIZlqe0d",
  catClubeBebe: "https://s.shopee.com.br/5fiWYwH4c4",

  // WhatsApp (neutro: dúvida OU comprovante)
  whatsapp:
    "https://wa.me/5582999176900?text=Ol%C3%A1%21%20Vim%20pela%20curadoria%20TetelPontocom%20na%20Shopee.%0AQuero%20tirar%20uma%20d%C3%BAvida%20%2F%20enviar%20um%20comprovante.%20%F0%9F%99%82",
}

/* =========================================================
   META PIXEL (V0 Free Safe Mode)
   - não usa window/document fora do useEffect
   - track PageView + trackCustom ShopeeClick
========================================================= */

function initMetaPixel(pixelId: string) {
  if (!pixelId || pixelId === "SEU_PIXEL_ID_AQUI") return
  if ((window as any).fbq) return
  ;((f: any, b: Document, e: string, v: string, n?: any, t?: any, s?: any) => {
    if (f.fbq) return
    n = f.fbq = () => {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
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
    s.parentNode!.insertBefore(t, s)
  })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js")
  ;(window as any).fbq("init", pixelId)
  ;(window as any).fbq("track", "PageView")
}

function trackShopeeClick(payload: Record<string, any>) {
  if (!(window as any).fbq) return
  ;(window as any).fbq("trackCustom", "ShopeeClick", payload)
}

// Shopee: manter mesma aba tende a reduzir quebra de sessão em mobile.
// WhatsApp: abrir nova aba é ok (não é link de atribuição).
function ButtonLink({
  href,
  children,
  variant = "primary",
  openInNewTab = false,
  className = "",
}: {
  href: string
  children: React.ReactNode
  variant?: "primary" | "secondary" | "ghost"
  openInNewTab?: boolean
  className?: string
}) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-offset-2"
  const styles =
    variant === "primary"
      ? "bg-zinc-900 text-white hover:bg-zinc-800 focus:ring-zinc-900"
      : variant === "secondary"
        ? "bg-white text-zinc-900 border border-zinc-200 hover:bg-zinc-50 focus:ring-zinc-300"
        : "bg-transparent text-zinc-900 hover:bg-zinc-100 focus:ring-zinc-300"

  return (
    <a
      href={href}
      target={openInNewTab ? "_blank" : "_self"}
      rel={openInNewTab ? "noopener noreferrer" : undefined}
      className={`${base} ${styles} ${className}`}
    >
      {children}
    </a>
  )
}

function MiniBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-zinc-200 bg-white/70 px-3 py-1 text-xs font-medium text-zinc-600">
      {children}
    </span>
  )
}

function MicroTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-orange-50 px-2.5 py-1 text-[11px] font-semibold text-orange-700 ring-1 ring-orange-100">
      {children}
    </span>
  )
}

function Icon({
  name,
}: {
  name: "bolt" | "shield" | "tag" | "paper" | "sparkle" | "paw" | "shirt" | "car" | "baby" | "deal"
}) {
  const common = "h-5 w-5"

  if (name === "bolt")
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M13 2 3 14h8l-1 8 11-14h-8l0-6Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    )

  if (name === "shield")
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 2 20 6v6c0 5-3.4 9.4-8 10-4.6-.6-8-5-8-10V6l8-4Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    )

  if (name === "tag")
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M20 13 13 20a2 2 0 0 1-2.8 0L3 12V4h8l9 9Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path d="M7.5 7.5h.01" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
      </svg>
    )

  if (name === "paper")
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M7 3h7l3 3v15a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path d="M14 3v4h4" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    )

  if (name === "sparkle")
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 2l1.2 5.1L18 8.3l-4.4 2.7L12 16l-1.6-5L6 8.3l4.8-1.2L12 2Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M4 14l.7 2.1L7 17l-2.3.9L4 20l-.7-2.1L1 17l2.3-.9L4 14Z"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
      </svg>
    )

  if (name === "paw")
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 14c-3 0-6 2-6 5 0 2 2 3 6 3s6-1 6-3c0-3-3-5-6-5Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path d="M8 10c0 1-.7 2-1.6 2S5 11 5 10s.7-2 1.4-2S8 9 8 10Z" stroke="currentColor" strokeWidth="1.4" />
        <path d="M19 10c0 1-.7 2-1.4 2S16 11 16 10s.7-2 1.4-2S19 9 19 10Z" stroke="currentColor" strokeWidth="1.4" />
        <path d="M11 7c0 1-.8 2-1.7 2S7.6 8 7.6 7 8.4 5 9.3 5 11 6 11 7Z" stroke="currentColor" strokeWidth="1.4" />
        <path d="M16.4 7c0 1-.8 2-1.7 2S13 8 13 7s.8-2 1.7-2 1.7 1 1.7 2Z" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    )

  if (name === "shirt")
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M8 4 6 6 3 7l2 5 2-1v10h10V11l2 1 2-5-3-1-2-2"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path d="M8 4c1 2 7 2 8 0" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    )

  if (name === "car")
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M5 16l1-6 2-3h8l2 3 1 6" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M4 16h16v4H4v-4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M7 20v1M17 20v1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    )

  if (name === "baby")
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 21a8 8 0 1 0-8-8 8 8 0 0 0 8 8Z" stroke="currentColor" strokeWidth="1.6" />
        <path d="M9.5 10.5h.01M14.5 10.5h.01" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
        <path d="M9 14c1 1 2 1.5 3 1.5S14 15 15 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M12 5c1.2 0 2 .8 2 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    )

  // deal
  return (
    <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M20 7l-8 13L4 12l3-5h13Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M7 7h13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

/**
 * Card inteiro clicável:
 * - link envolve todo o container
 * - seta vira reforço visual (não o único clique)
 * - sem usar onClick/window fora de useEffect (V0 Free Safe Mode)
 */
function CategoryCard({
  title,
  desc,
  href,
  icon,
  cta,
  tag,
}: {
  title: string
  desc: string
  href: string
  icon: "bolt" | "shield" | "tag" | "paper" | "sparkle" | "paw" | "shirt" | "car" | "baby" | "deal"
  cta: string
  tag?: string
}) {
  return (
    <a
      href={href}
      target="_self"
      className="group block rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:shadow-md hover:-translate-y-[1px] focus:outline-none focus:ring-2 focus:ring-orange-200 focus:ring-offset-2"
      aria-label={`${title} - abrir na Shopee`}
    >
      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-700 ring-1 ring-orange-100">
          <Icon name={icon} />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-base font-semibold text-zinc-900">{title}</h3>
                {tag ? <MicroTag>{tag}</MicroTag> : null}
              </div>
              <p className="mt-1 text-sm text-zinc-600">{desc}</p>
            </div>

            {/* seta como reforço visual */}
            <span
              className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-600 transition group-hover:bg-zinc-50 group-hover:text-zinc-900"
              aria-hidden="true"
              title="Abrir"
            >
              →
            </span>
          </div>

          <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-zinc-900">
            {cta} <span aria-hidden>↗</span>
          </div>
        </div>
      </div>
    </a>
  )
}

export default function Page() {
  useEffect(() => {
    // Pixel bootstrap + PageView
    initMetaPixel(META_PIXEL_ID)

    // Captura de intenção real: qualquer saída para Shopee
    function handleClick(e: MouseEvent) {
      const target = e.target as HTMLElement | null
      if (!target) return

      const anchor = target.closest("a") as HTMLAnchorElement | null
      if (!anchor) return

      const href = anchor.href || ""
      if (!href.includes("shopee.")) return

      // label: tenta pegar texto do link/card/botão, sem quebrar nada
      const rawLabel = (anchor.innerText || anchor.getAttribute("aria-label") || "").trim()
      const label = rawLabel ? rawLabel.slice(0, 100) : "shopee_outbound"

      trackShopeeClick({
        url: href,
        label,
        source: "curadoria",
        campaign_phase: "shopee_fase2_trafego",
      })
    }

    document.addEventListener("click", handleClick)
    return () => document.removeEventListener("click", handleClick)
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50/50 via-white to-white text-zinc-900">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-zinc-200 bg-white/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
          <div className="flex items-center gap-3">
            <img
              src="/images/tetelpontocom-simbolo-overlay.png"
              alt="TetelPontocom"
              className="h-9 w-9 object-contain"
            />
            <div className="leading-tight">
              <div className="text-sm font-semibold">TetelPontocom</div>
              <div className="text-xs text-zinc-500">Curadoria Shopee</div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <ButtonLink href={LINKS.shopeeMain} variant="primary">
              Ver seleções na Shopee
            </ButtonLink>
            <ButtonLink href={LINKS.whatsapp} variant="secondary" openInNewTab>
              Falar no WhatsApp
            </ButtonLink>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pt-10 md:px-6 md:pt-14">
        <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm md:p-10">
          <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-orange-200/35 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 -left-24 h-72 w-72 rounded-full bg-orange-100/60 blur-3xl" />

          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="relative">
              <div className="flex flex-wrap items-center gap-2">
                <MiniBadge>Curadoria oficial</MiniBadge>
                <MiniBadge>Atalho para a Shopee</MiniBadge>
                <MiniBadge>Sem custo extra</MiniBadge>
              </div>

              <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-zinc-900 md:text-4xl">
                Clique, compre na Shopee e pronto.
                <br className="hidden md:block" />A curadoria é o atalho.
              </h1>

              <p className="mt-4 text-sm leading-relaxed text-zinc-600 md:text-base">
                Use os botões desta página para entrar na Shopee pela curadoria e finalize a compra normalmente.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={LINKS.shopeeMain} variant="primary" className="w-full sm:w-auto">
                  Ir para a Shopee agora →
                </ButtonLink>
                <ButtonLink href={LINKS.whatsapp} variant="secondary" className="w-full sm:w-auto" openInNewTab>
                  Dúvida ou comprovante (WhatsApp)
                </ButtonLink>
              </div>

              <p className="mt-4 text-xs text-zinc-500">
                Dica rápida: depois de abrir pela curadoria, tente finalizar sem &quot;trocar de caminho&quot; no meio
                da compra.
              </p>
            </div>

            <div className="relative rounded-2xl border border-zinc-200 bg-gradient-to-br from-zinc-50 to-white p-6">
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold">Entrada pela curadoria</div>
                <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-700 ring-1 ring-orange-100">
                  Shopee
                </span>
              </div>

              <div className="mt-5 space-y-3">
                <div className="h-10 w-full rounded-xl bg-white shadow-sm ring-1 ring-zinc-200" />
                <div className="h-10 w-5/6 rounded-xl bg-white shadow-sm ring-1 ring-zinc-200" />
                <div className="h-10 w-4/6 rounded-xl bg-white shadow-sm ring-1 ring-zinc-200" />
              </div>

              <div className="mt-6 rounded-2xl border border-zinc-200 bg-white p-4">
                <div className="text-sm font-semibold">Ação principal</div>
                <div className="mt-1 text-xs text-zinc-600">Clique no botão e finalize sua compra normalmente.</div>
                <div className="mt-3 h-10 w-2/3 rounded-xl bg-zinc-900" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categorias */}
      <section className="mx-auto mt-12 max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold tracking-wide text-zinc-500">Curadoria prática</p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-900 md:text-3xl">
            Escolha um atalho e vá direto
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-600 md:text-base">
            Clique no card inteiro (não só na seta) e entre na Shopee pela categoria.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {/* Impulso vs Exploração (remove duplicidade "Achadinhos") */}
          <CategoryCard
            title="Achadinhos do Dia"
            tag="Mais clicados"
            desc="Garimpo rápido do que está valendo a pena agora (sem perder tempo)."
            href={LINKS.catAchadinhos}
            icon="deal"
            cta="Abrir achadinhos"
          />

          <CategoryCard
            title="Explorar a Shopee"
            tag="Visão geral"
            desc="Ofertas e categorias amplas pra navegar quando você quer procurar com calma."
            href={LINKS.catMercado}
            icon="tag"
            cta="Explorar agora"
          />

          {/* Fixas/anual (microcopy persuasiva leve) */}
          <CategoryCard
            title="Moda"
            tag="Renove sem gastar"
            desc="Roupas, calçados e acessórios com custo-benefício e variedade."
            href={LINKS.catModa}
            icon="shirt"
            cta="Ver moda"
          />

          <CategoryCard
            title="Clube da Beleza"
            tag="Custo-benefício"
            desc="Skincare, cabelo, maquiagem e perfumaria — escolha com mais acerto."
            href={LINKS.catClubeBeleza}
            icon="sparkle"
            cta="Ver beleza"
          />

          <CategoryCard
            title="Clube Pet"
            tag="Pro seu pet"
            desc="Ração, acessórios e cuidados — prático e direto ao que importa."
            href={LINKS.catClubePet}
            icon="paw"
            cta="Ver pet"
          />

          <CategoryCard
            title="Clube do Bebê"
            tag="Essenciais"
            desc="Itens úteis do bebê com praticidade — sem errar na escolha."
            href={LINKS.catClubeBebe}
            icon="baby"
            cta="Ver bebê"
          />

          <CategoryCard
            title="Auto e Moto"
            tag="Resolve rápido"
            desc="Acessórios e itens do dia a dia do veículo — útil e sem enrolação."
            href={LINKS.catAutoMoto}
            icon="car"
            cta="Ver auto e moto"
          />

          {/* Bases que continuam úteis */}
          <CategoryCard
            title="Tecnologia & Acessórios"
            tag="Úteis do dia a dia"
            desc="Eletrônicos e utilidades — atalho pra achar o que resolve."
            href={LINKS.catTecnologia}
            icon="bolt"
            cta="Abrir tecnologia"
          />

          <CategoryCard
            title="Bem-estar & Saúde"
            tag="Vida prática"
            desc="Esporte & fitness e itens de cuidado — quando fizer sentido pra você."
            href={LINKS.catBemEstar}
            icon="shield"
            cta="Ver bem-estar"
          />

          <CategoryCard
            title="Papelaria & Organização"
            tag="Organize-se"
            desc="Itens para estudar, planejar e manter tudo em ordem."
            href={LINKS.catPapelaria}
            icon="paper"
            cta="Abrir papelaria"
          />
        </div>

        {/* CTA reforço (meio) */}
        <div className="mt-8 flex flex-col items-center justify-between gap-3 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm md:flex-row">
          <div>
            <div className="text-sm font-semibold">Quer ir direto ao ponto?</div>
            <div className="mt-1 text-sm text-zinc-600">Entre na Shopee pela curadoria e finalize sua compra.</div>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <ButtonLink href={LINKS.shopeeMain} variant="primary" className="w-full sm:w-auto">
              Ver seleções na Shopee →
            </ButtonLink>
            <ButtonLink href={LINKS.whatsapp} variant="secondary" className="w-full sm:w-auto" openInNewTab>
              Falar no WhatsApp
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <section className="mx-auto mt-10 max-w-6xl px-4 pb-24 md:px-6 md:pb-28">
        <footer className="rounded-3xl border border-zinc-200 bg-white p-6 text-center text-xs text-zinc-500 shadow-sm">
          <div className="font-semibold text-zinc-800">TetelPontocom</div>
          <div className="mt-2">
            Este site não é afiliado, patrocinado ou administrado pela Shopee. As ofertas e curadorias são organizadas
            de forma independente pela TetelPontocom usando recursos públicos da plataforma.
          </div>
          <div className="mt-3">© {new Date().getFullYear()} TetelPontocom. Todos os direitos reservados.</div>
        </footer>
      </section>

      {/* Barra fixa mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-zinc-200 bg-white/95 backdrop-blur md:hidden">
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3">
          <ButtonLink href={LINKS.shopeeMain} variant="primary" className="w-full">
            Ir para a Shopee agora →
          </ButtonLink>
        </div>
      </div>

      {/* Upgrade path (V0 Pro) */}
      {/*
        Upgrade path (V0 Pro):
        - Instrumentar eventos de clique (Pixel Universal Tetel / analytics)
        - A/B test de microcopy por categoria
        - Miniaturas (banners) hospedadas em /public para cada card (rápido e estável)
      */}
    </main>
  )
}
