"use client"

import { useEffect, useState } from "react"
import HeroShopee from "@/components/hero-shopee"
import HeroCuradoria from "@/components/hero-curadoria"
import CategoriasShopping from "@/components/categorias-shopping"

declare global {
  interface Window {
    fbq: any
    _fbq: any
    tetelEvent: any
  }
}

const SHOPEE_AFFILIATE_URL = "https://shopee.com.br"
const WHATSAPP_URL =
  "https://wa.me/5582999999999?text=Ol%C3%A1%2C%20Tetel!%20%F0%9F%91%8B%0AVim%20pelo%20Ecossistema%20TetelPontocom%2C%20pela%20LP%20Shopee."

type PageProps = {
  searchParams: { [key: string]: string | string[] | undefined }
}

function tetelEvent(eventName: string, params: Record<string, any> = {}) {
  if (typeof window === "undefined") return

  try {
    if (window.fbq) {
      window.fbq("trackCustom", eventName, {
        ...params,
        ecosystem: "TetelPontocom",
        pixel_id: "1305167264321996",
      })
    }
  } catch (err) {
    console.warn("Pixel TetelPontocom não executado", err)
  }
}

export default function Page({ searchParams }: PageProps) {
  const [fromTetel, setFromTetel] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href)
      const fromParam = url.searchParams.get("from")
      if (fromParam && fromParam.toLowerCase().includes("tetel")) {
        setFromTetel(true)
      }
    }
  }, [])

  useEffect(() => {
    tetelEvent("tetel_pageview")
  }, [])

  useEffect(() => {
    if (typeof window !== "undefined") {
      ;(window as any).tetelEvent = tetelEvent
    }
  }, [])

  return (
    <div className="relative w-full max-w-full overflow-x-hidden">
      <HeroShopee />

      {fromTetel && (
        <header className="w-full bg-gradient-to-r from-red-600 to-red-700 py-3 text-center text-white text-sm font-medium shadow-md">
          🎁 Você veio pelo TetelPontocom! Aproveite as ofertas exclusivas abaixo.
        </header>
      )}

      <main className="w-full flex flex-col bg-[#050607] text-white font-sans">
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1305167264321996&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        <section className="w-full py-16 md:py-20 bg-transparent">
          <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
            <h2 className="text-[26px] md:text-[34px] font-semibold mb-4">Comprar bem não é sorte. É curadoria.</h2>
            <p className="text-base md:text-lg text-white/80 leading-relaxed">
              Na internet, qualquer um mostra &quot;achadinho&quot;. Aqui, você encontra apenas aquilo que vale a pena.
              Nós investimos nosso tempo analisando, escolhendo e refinando para que você invista o seu vivendo.
            </p>
          </div>
        </section>

        <CategoriasShopping />

        <HeroCuradoria />

        <section className="w-full py-16 bg-black overflow-x-hidden">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-2xl font-semibold text-white mb-3">Benefícios por nível de participação</h2>

            <p className="text-white/70 mb-6">
              Conforme você utiliza a curadoria TetelPontocom, novos níveis de acesso são ativados. É uma jornada de
              clareza, progressão e experiência.
            </p>

            {/* Indicador */}
            <div className="text-sm text-white/50 mb-3">Arraste para o lado →</div>

            {/* Trilho horizontal */}
            <div
              className="
                flex gap-4
                overflow-x-auto scroll-smooth
                snap-x snap-mandatory
                [-webkit-overflow-scrolling:touch]
                pb-2
              "
            >
              {/* CARD 1 */}
              <div className="snap-start shrink-0 w-[86%] max-w-[320px]">
                <div className="bg-neutral-900 rounded-2xl p-6 shadow-md h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-orange-500/20 text-orange-400">
                      🎁
                    </span>
                    <span className="text-sm text-orange-400 font-medium">NÍVEL DE ENTRADA</span>
                  </div>

                  <h3 className="text-white font-semibold mb-2">Acesso inicial ao ecossistema</h3>

                  <p className="text-white/70 text-sm leading-relaxed">
                    Você inicia sua jornada pela curadoria, participa dos sorteios ativos e passa a comprar com mais
                    consciência e direcionamento.
                  </p>

                  <p className="text-white/50 text-xs mt-4">Entrada consciente para quem está começando.</p>
                </div>
              </div>

              {/* CARD 2 */}
              <div className="snap-start shrink-0 w-[86%] max-w-[320px]">
                <div className="bg-neutral-900 rounded-2xl p-6 shadow-md h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-yellow-500/20 text-yellow-400">
                      ⭐
                    </span>
                    <span className="text-sm text-yellow-400 font-medium">NÍVEL DE ACELERAÇÃO</span>
                  </div>

                  <h3 className="text-white font-semibold mb-2">Ativação do pacote de aceleração</h3>

                  <p className="text-white/70 text-sm leading-relaxed">
                    Você desbloqueia recursos de apoio para avançar com mais velocidade, utilizando atalhos conscientes
                    e estrutura.
                  </p>

                  <p className="text-white/50 text-xs mt-4">Inclui Minha IA Essencial e Faça Caixa Agora.</p>
                </div>
              </div>

              {/* CARD 3 */}
              <div className="snap-start shrink-0 w-[86%] max-w-[320px]">
                <div className="bg-neutral-900 rounded-2xl p-6 shadow-md h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-green-500/20 text-green-400">
                      🚀
                    </span>
                    <span className="text-sm text-green-400 font-medium">NÍVEL DE CONSOLIDAÇÃO</span>
                  </div>

                  <h3 className="text-white font-semibold mb-2">Consolidação de benefícios</h3>

                  <p className="text-white/70 text-sm leading-relaxed">
                    Você consolida sua posição no ecossistema e passa a acessar benefícios avançados e recorrentes.
                  </p>

                  <p className="text-white/50 text-xs mt-4">Benefícios progressivos conforme uso.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full overflow-x-hidden">
          <div className="w-full mx-auto px-4 flex justify-center">
            <div className="w-full max-w-[300px] md:max-w-4xl">
              <div className="w-full py-16 md:py-24 bg-transparent">
                <div className="w-full text-center">
                  <h2 className="text-[24px] md:text-[30px] font-semibold mb-4">Como funciona, na prática?</h2>
                  <p className="text-sm md:text-base text-white/80 mb-8">
                    Você compra normalmente pela Shopee. Depois, envia o comprovante para a TetelPontocom e participa
                    das recompensas conforme o valor total das suas compras.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left md:text-center mb-8">
                    <div className="w-full max-w-full bg-[#111111] border border-[#2A2A2A] rounded-2xl shadow-md overflow-hidden p-5">
                      <p className="text-xs uppercase tracking-wide text-white/60 mb-2">Passo 1</p>
                      <h3 className="text-sm md:text-base font-semibold mb-2">Compre usando nossos links</h3>
                      <p className="text-xs md:text-sm text-white/80 leading-relaxed">
                        Sempre que for comprar na Shopee, comece por esta página. Assim, a plataforma reconhece que você
                        veio da nossa curadoria.
                      </p>
                    </div>

                    <div className="w-full max-w-full bg-[#111111] border border-[#2A2A2A] rounded-2xl shadow-md overflow-hidden p-5">
                      <p className="text-xs uppercase tracking-wide text-white/60 mb-2">Passo 2</p>
                      <h3 className="text-sm md:text-base font-semibold mb-2">Envie o comprovante</h3>
                      <p className="text-xs md:text-sm text-white/80 leading-relaxed">
                        Depois que o pedido for confirmado, você tira um print da tela de comprovante ou da nota e envia
                        para a TetelPontocom pelo WhatsApp.
                      </p>
                    </div>

                    <div className="w-full max-w-full bg-[#111111] border border-[#2A2A2A] rounded-2xl shadow-md overflow-hidden p-5">
                      <p className="text-xs uppercase tracking-wide text-white/60 mb-2">Passo 3</p>
                      <h3 className="text-sm md:text-base font-semibold mb-2">Receba suas recompensas</h3>
                      <p className="text-xs md:text-sm text-white/80 leading-relaxed">
                        Nós organizamos suas compras, classificamos na faixa de recompensa correspondente e liberamos o
                        acesso aos benefícios para você.
                      </p>
                    </div>
                  </div>

                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      tetelEvent("tetel_chase", { channel: "whatsapp" })
                    }}
                    className="block w-full mt-6 py-3 rounded-full bg-[#22C55E] text-white text-sm font-medium text-center hover:bg-[#16a34a] transition-colors"
                  >
                    Enviar comprovante pelo WhatsApp
                  </a>

                  <p className="mt-4 text-xs md:text-sm text-white/60">
                    Guarde seus comprovantes. Quanto mais você aproveitar a Shopee por aqui, mais chances tem de
                    desbloquear benefícios dentro do Ecossistema TetelPontocom.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="w-full py-8 px-6 bg-black/40 text-center text-white/60 text-xs md:text-sm">
          <p>© 2025 TetelPontocom. Todos os direitos reservados.</p>
          <p className="mt-2 max-w-2xl mx-auto">
            Este site não é afiliado, patrocinado ou administrado pela Shopee. As ofertas, curadorias e recompensas são
            organizadas de forma independente pela TetelPontocom, usando os recursos públicos da plataforma.
          </p>
        </footer>
      </main>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => {
          tetelEvent("tetel_chase", { channel: "whatsapp_floating" })
        }}
        aria-label="Falar no WhatsApp"
        className="hidden md:flex fixed bottom-4 right-4 z-50 items-center justify-center w-14 h-14 rounded-full bg-[#22C55E] shadow-lg transition-transform hover:scale-105"
      >
        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>
    </div>
  )
}
