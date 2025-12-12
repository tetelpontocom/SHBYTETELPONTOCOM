"use client"

import { useEffect, useState } from "react"
import { Gift, Heart, Star } from "lucide-react"
import HeroShopee from "@/components/hero-shopee"

declare global {
  interface Window {
    fbq: any
    _fbq: any
  }
}

// 🔗 PONTO ÚNICO DO SEU LINK DE AFILIADO SHOPEE
// Troque aqui pelo link oficial da curadoria Shopee (com seu código de afiliado)
const SHOPEE_AFFILIATE_URL = "https://shopee.com.br"

export default function LPShopee() {
  const [fromTetel, setFromTetel] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Função para inicializar o Meta Pixel
      const initFacebookPixel = () => {
        const f = window as any
        const b = document
        const e = "script"
        const v = "https://connect.facebook.net/en_US/fbevents.js"

        if (f.fbq) return
        const n: any = (f.fbq = () => {
          n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
        })
        if (!f._fbq) f._fbq = n
        n.push = n
        n.loaded = true
        n.version = "2.0"
        n.queue = []
        const t = b.createElement(e) as HTMLScriptElement
        t.async = true
        t.src = v
        const s = b.getElementsByTagName(e)[0]
        s.parentNode?.insertBefore(t, s)
      }

      initFacebookPixel()
      window.fbq("init", "1305167264321996")
      window.fbq("track", "PageView")
    }

    // Disparo de pageview TetelPontocom
    try {
      window?.postMessage({ event: "tetel_pageview", page: "lp_shopee" }, "*")
    } catch (e) {
      console.log("Pixel não carregado ainda")
    }
  }, [])

  const handleCTAClick = (action: string) => {
    // Tracking de eventos
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Lead", { action })
    }
  }

  useEffect(() => {
    if (typeof window === "undefined") return

    try {
      const referrer = document.referrer || ""
      const params = new URLSearchParams(window.location.search)
      const origem = (params.get("origem") || "").toLowerCase()

      if (referrer.includes("tetel.online") || origem.includes("tetelpontocom")) {
        setFromTetel(true)
      }
    } catch (e) {
      console.log("Não foi possível detectar origem TetelPontocom", e)
    }
  }, [])

  return (
    <main className="w-full flex flex-col bg-[#0d0d0d] text-white font-sans">
      {/* Meta Pixel noscript fallback */}
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=1305167264321996&ev=PageView&noscript=1"
        />
      </noscript>

      {/* HERO CINEMATOGRÁFICA */}
      <HeroShopee />

      {fromTetel && (
        <header className="w-full bg-black/80 border-b border-white/10">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-2 text-xs md:text-sm">
            <span className="opacity-80">Você está em uma página do Ecossistema TetelPontocom.</span>
            <a
              href="https://tetelpontocom.tetel.online"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:underline"
            >
              Voltar para TetelPontocom →
            </a>
          </div>
        </header>
      )}

      {/* SEÇÃO: PRODUTOS RECOMENDADOS */}
      <section className="w-full py-14 md:py-20 bg-transparent">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <h2 className="text-center text-[28px] md:text-[36px] font-semibold text-white mb-12">
            Produtos Recomendados
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="group flex flex-col p-5 rounded-2xl bg-[#111111] border border-[#2A2A2A] hover:border-[#3D3D3D] hover:shadow-lg transition-all duration-200"
              >
                <div className="w-full h-40 bg-[#1A1A1A] rounded-xl mb-4 overflow-hidden flex items-center justify-center">
                  <img
                    src={`/produtos/produto${i}.png`}
                    alt={`Produto ${i}`}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <span className="text-sm md:text-base font-medium text-[#E5E7EB] group-hover:text-white transition-colors duration-200">
                  Produto {i}
                </span>
                <span className="text-[#10B981] font-semibold mt-2">R$ {(19.9 * i).toFixed(2)}</span>
                <a
                  href={SHOPEE_AFFILIATE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleCTAClick(`produto_${i}`)}
                  className="mt-4 w-full py-2 text-sm font-medium text-white bg-[#F97316] rounded-xl hover:bg-[#fb7a24] transition-colors duration-200 text-center"
                >
                  Ver na Shopee
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO: OFERTAS DO DIA */}
      <section className="w-full py-14 md:py-20 bg-transparent">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <h2 className="text-center text-[28px] md:text-[36px] font-semibold text-white mb-12">Ofertas do Dia</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="group flex flex-col p-5 rounded-2xl bg-[#111111] border border-[#2A2A2A] hover:border-[#3D3D3D] hover:shadow-lg transition-all duration-200"
              >
                <div className="w-full h-40 bg-[#1A1A1A] rounded-xl mb-4 overflow-hidden flex items-center justify-center">
                  <img
                    src={`/ofertas/oferta${i}.png`}
                    alt={`Oferta ${i}`}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <span className="text-sm md:text-base text-[#E5E7EB] font-medium group-hover:text-white transition-colors duration-200">
                  Oferta {i}
                </span>
                <span className="text-[#10B981] font-semibold mt-2">R$ {(9.9 * i).toFixed(2)}</span>
                <button className="mt-4 w-full py-2 text-sm font-medium text-white bg-[#F97316] rounded-xl hover:bg-[#fb7a24] transition-colors duration-200">
                  Ver na Shopee
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOCO 1 - Banner Institucional TetelPontocom */}
      <section className="w-full py-20 bg-transparent">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-[32px] md:text-[40px] font-semibold text-white leading-tight mb-6">
            Comprar Bem Não é Sorte.
            <br />É Curadoria.
          </h2>
          <p className="text-[#D1D5DB] text-lg md:text-xl leading-relaxed mb-10">
            Na internet, qualquer um mostra "achadinho". Aqui, você encontra apenas aquilo que vale a pena. Nós
            investimos nosso tempo analisando, escolhendo e refinando para que você invista o seu vivendo.
          </p>
        </div>
      </section>

      {/* BLOCO 2 - Categorias Oficiais TetelPontocom */}
      <section className="w-full py-16 bg-transparent">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-[28px] md:text-[36px] font-semibold text-white text-center mb-4">
            Comece pelo que Você Procura
          </h2>
          <p className="text-center text-[#D1D5DB] text-sm md:text-base mb-10">
            Categorias criadas para orientar suas escolhas, não para confundir.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { nome: "Tecnologia", link: "#" },
              { nome: "Casa & Cozinha", link: "#" },
              { nome: "Beleza & Cuidado", link: "#" },
              { nome: "Roupas & Estilo", link: "#" },
              { nome: "Acessórios", link: "#" },
              { nome: "Promoções do Dia", link: "#" },
              { nome: "Cupons Disponíveis", link: "#" },
              { nome: "Mais Vendidos", link: "#" },
            ].map((cat) => (
              <a
                key={cat.nome}
                href={cat.link}
                className="group flex flex-col items-center bg-[#111] border border-[#2A2A2A] hover:border-[#3D3D3D] rounded-2xl p-6 transition-all"
              >
                <div className="w-20 h-20 bg-[#1A1A1A] rounded-xl mb-4"></div>
                <span className="text-[#E5E7EB] group-hover:text-white font-medium text-center">{cat.nome}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* BLOCO 3 - Cupons do Dia */}
      <section className="w-full py-20 bg-transparent">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-[28px] md:text-[36px] font-semibold text-white mb-6">Pague Menos Pelo Mesmo Produto</h2>
          <p className="text-[#D1D5DB] text-base md:text-lg leading-relaxed mb-10">
            Não precisa garimpar, não precisa tentar a sorte. Os melhores descontos do dia estão reunidos aqui. Com um
            clique, você reduz o preço — sem reduzir o valor.
          </p>
          <a
            href="#"
            className="px-8 sm:px-10 py-3 rounded-full bg-[#F97316] text-white font-medium text-sm sm:text-base hover:bg-[#fb7a24] transition-colors whitespace-nowrap"
          >
            Ver Cupons
          </a>
        </div>
      </section>

      {/* BLOCO 4 - Ofertas Relâmpago */}
      <section className="w-full py-20 bg-transparent">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-[28px] md:text-[36px] font-semibold text-white mb-6">
            As Maiores Baixas de Preço do Dia
          </h2>
          <p className="text-[#D1D5DB] text-base md:text-lg leading-relaxed mb-10">
            Produtos que despencaram de preço nas últimas horas. Atualizados automaticamente pela Shopee — você só
            aproveita.
          </p>
          <a
            href="#"
            className="px-8 sm:px-10 py-3 rounded-full bg-[#F97316] text-white font-medium text-sm sm:text-base hover:bg-[#fb7a24] transition-colors whitespace-nowrap"
          >
            Ver Ofertas
          </a>
        </div>
      </section>

      {/* BLOCO 5 - Tendências do Dia */}
      <section className="w-full py-20 bg-transparent">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-[28px] md:text-[36px] font-semibold text-white mb-6">O Que Está em Alta Agora</h2>
          <p className="text-[#D1D5DB] text-base md:text-lg leading-relaxed mb-10">
            Produtos que estão se destacando hoje. A Shopee atualiza. A TetelPontocom seleciona. Você aproveita.
          </p>
          <a
            href="#"
            className="px-8 sm:px-10 py-3 rounded-full bg-[#F97316] text-white font-medium text-sm sm:text-base hover:bg-[#fb7a24] transition-colors whitespace-nowrap"
          >
            Ver Tendências
          </a>
        </div>
      </section>

      {/* BLOCO 6 - CTA Institucional Premium */}
      <section className="w-full py-24 bg-transparent">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-[30px] md:text-[40px] font-semibold text-white mb-6 leading-tight">
            Quando Comprar Fica Simples,
            <br />a Economia Acontece sem Esforço.
          </h2>
          <p className="text-[#D1D5DB] text-lg leading-relaxed mb-12">
            Continue explorando seleções inteligentes e oportunidades reais. A TetelPontocom filtra. A Shopee entrega.
            Você ganha.
          </p>
          <a
            href="#"
            className="px-10 py-3 rounded-full bg-[#F97316] text-white font-medium text-base hover:bg-[#fb7a24] transition-colors"
          >
            Explorar Agora
          </a>
        </div>
      </section>

      {/* BLOCO 1 - Seleção Especial TetelPontocom */}
      <section className="w-full py-20 bg-transparent">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-[28px] md:text-[36px] font-semibold text-white mb-6">Seleção Especial TetelPontocom</h2>
          <p className="text-[#D1D5DB] text-base md:text-lg leading-relaxed mb-10">
            Uma curadoria feita à mão, com produtos selecionados para quem busca praticidade, estilo e preço justo. Tudo
            escolhido com o cuidado e a experiência TetelPontocom.
          </p>
          <div className="flex justify-center">
            <a
              href="#"
              className="px-8 sm:px-10 py-3 rounded-full bg-[#F97316] text-white font-medium text-sm sm:text-base hover:bg-[#fb7a24] transition-colors whitespace-nowrap"
            >
              Ver Seleção
            </a>
          </div>
        </div>
      </section>

      {/* BLOCO 2 - Vantagens TetelPontocom */}
      <section className="w-full py-20 bg-transparent">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-center text-[28px] md:text-[36px] font-semibold text-white mb-12">
            Por que Comprar com Curadoria TetelPontocom?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <div>
              <h3 className="text-white text-lg font-semibold mb-3">Seleção Inteligente</h3>
              <p className="text-[#D1D5DB] text-sm leading-relaxed">
                Testamos, analisamos e escolhemos produtos que realmente valem a pena — sem enrolação e sem confusão.
              </p>
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold mb-3">Preço que Compensa</h3>
              <p className="text-[#D1D5DB] text-sm leading-relaxed">
                Escolhemos sempre o melhor equilíbrio entre custo e benefício, com ofertas reais e recomendadas.
              </p>
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold mb-3">Experiência Segura</h3>
              <p className="text-[#D1D5DB] text-sm leading-relaxed">
                Links oficiais, produtos confiáveis, e uma navegação limpa criada no padrão TetelPontocom.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCO 3 - CTA Intermediário Premium */}
      <section className="w-full py-20 bg-transparent">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-[28px] md:text-[36px] font-semibold text-white mb-6">
            Encontre Produtos Que Fazem Sentido
          </h2>
          <p className="text-[#D1D5DB] text-base md:text-lg leading-relaxed mb-10">
            Continue explorando nossas curadorias e descubra itens que realmente ajudam seu dia a dia — com segurança,
            critério e bom gosto.
          </p>
          <a
            href="#"
            className="px-8 sm:px-10 py-3 rounded-full bg-[#F97316] text-white font-medium text-sm sm:text-base hover:bg-[#fb7a24] transition-colors whitespace-nowrap"
          >
            Continuar Explorando
          </a>
        </div>
      </section>

      {/* BLOCO 4 - Depoimento Institucional TetelPontocom */}
      <section className="w-full py-20 bg-transparent">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-[26px] md:text-[32px] font-semibold text-white mb-8">A Experiência Faz Diferença</h2>
          <p className="text-[#D1D5DB] text-base md:text-lg leading-relaxed italic mb-10">
            "A curadoria TetelPontocom não escolhe só produtos. Ela escolhe soluções. Escolhe o que realmente funciona.
            Testado, comparado e validado com cuidado."
          </p>
          <p className="text-[#9CA3AF] text-sm">— TetelPontocom, Seleção Oficial</p>
        </div>
      </section>

      {/* BLOCO 5 - Explorar Mais Categorias */}
      <section className="w-full py-20 bg-transparent">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-[28px] md:text-[36px] font-semibold text-white mb-6">Explorar Mais Categorias</h2>
          <p className="text-[#D1D5DB] text-base md:text-lg leading-relaxed mb-10">
            Continue descobrindo produtos selecionados, ofertas reais e itens que combinam com o seu estilo e com o seu
            dia a dia.
          </p>
          <a
            href="#"
            className="px-8 sm:px-10 py-3 rounded-full bg-[#F97316] text-white font-medium text-sm sm:text-base hover:bg-[#fb7a24] transition-colors whitespace-nowrap"
          >
            Ver Todas as Categorias
          </a>
        </div>
      </section>

      {/* SEÇÃO: RECOMPENSAS */}
      <section
        id="recompensas"
        className="w-full py-20 px-6 bg-gradient-to-br from-orange-500 to-orange-600 text-black"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
              Ganhe Recompensas Exclusivas tetelpontocom
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow hover:-translate-y-1 transform duration-300">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold">Até R$ 50</h3>
                <Gift className="w-8 h-8 text-orange-500" />
              </div>
              <p className="text-black/70 leading-relaxed">
                Envie o comprovante via WhatsApp e participe do sorteio de prêmios oficiais tetelpontocom.
              </p>
              <div className="mt-6 pt-6 border-t border-black/10">
                <span className="text-sm font-semibold text-orange-600">SORTEIO MENSAL</span>
              </div>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow hover:-translate-y-1 transform duration-300 ring-4 ring-orange-300">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold">R$ 50 a R$ 100</h3>
                <Star className="w-8 h-8 text-orange-500" />
              </div>
              <p className="text-black/70 leading-relaxed">Envie o comprovante e receba acesso ao MinhaIA Essencial.</p>
              <div className="mt-6 pt-6 border-t border-black/10">
                <span className="text-sm font-semibold text-orange-600">ACESSO IMEDIATO</span>
              </div>
            </div>
            <div className="p-8 bg-gradient-to-br from-orange-600 to-orange-700 text-white rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow hover:-translate-y-1 transform duration-300">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold">Acima de R$ 100</h3>
                <Heart className="w-8 h-8" />
              </div>
              <p className="leading-relaxed opacity-90">
                Receba o MinhaIA Premium + Faça Caixa Agora totalmente grátis.
              </p>
              <div className="mt-6 pt-6 border-t border-white/20">
                <span className="text-sm font-semibold">PACOTE COMPLETO VIP</span>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-black/80 text-sm mb-4">
              *Recompensas válidas para compras realizadas através dos links desta página
            </p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section id="cta" className="w-full py-20 px-6 text-center bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
            Compre Inteligente. Economize de Verdade.
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed text-pretty">
            Aproveite ofertas selecionadas com garantia de qualidade e receba recompensas exclusivas.
          </p>
          <a
            href={SHOPEE_AFFILIATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleCTAClick("cta_final")}
            className="inline-block px-12 py-4 text-lg font-bold text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 rounded-full shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300"
          >
            Começar Compras Agora
          </a>
          <p className="mt-8 text-sm text-white/60">
            Parceria oficial com a Shopee • Compra 100% segura • Recompensas exclusivas
          </p>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="w-full py-12 px-6 bg-black/50 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm text-white/60 mb-4">
            © 2025 TetelPontocom • Curadoria Shopee • Todos os direitos reservados
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-xs text-white/50">
            <a href="#" className="hover:text-white/80 transition-colors">
              Sobre
            </a>
            <a href="#" className="hover:text-white/80 transition-colors">
              Como Funciona
            </a>
            <a href="#" className="hover:text-white/80 transition-colors">
              Contato
            </a>
            <a href="#" className="hover:text-white/80 transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="hover:text-white/80 transition-colors">
              Privacidade
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
