// CATEGORIAS — LP SHOPPING
// TetelPontocom | Bloco de categorias visuais com imagens

const categorias = [
  {
    nome: "Tecnologia & Acessórios",
    subtitulo: "com ofertas relâmpago ativas",
    imagem: "/images/lp-shopee-categoria-tecnologia-acessorios.jpg",
    link: "https://s.shopee.com.br/7pmDgk2YOy",
    ctaTexto: "Ver Ofertas Relâmpago",
    ctaLink: "https://s.shopee.com.br/6AdzhoVzpj",
  },
  {
    nome: "Bem-estar & Saúde",
    subtitulo: "inclui cupons de desconto",
    imagem: "/images/lp-shopee-categoria-casa-cozinha.jpg",
    link: "https://s.shopee.com.br/9UuRg0dl4e",
    ctaTexto: "Ver Cupons Disponíveis",
    ctaLink: "https://s.shopee.com.br/1LYjx9ioHG",
  },
  {
    nome: "Presentes & Ideias Criativas",
    subtitulo: "achadinhos e descobertas do dia",
    imagem: "/images/lp-shopee-categoria-presentes.jpg",
    link: "https://s.shopee.com.br/3qG4vpkP4v",
    ctaTexto: "Ver Achadinhos do Dia",
    ctaLink: "https://s.shopee.com.br/2VkhLRajVR",
  },
  {
    nome: "Volta às Aulas",
    subtitulo: "economize com cupons ativos",
    imagem: "/images/lp-shopee-categoria-volta-as-aulas.jpg",
    link: "https://s.shopee.com.br/5fhj7KaC0U",
    ctaTexto: "Ver Cupons Ativos",
    ctaLink: "https://s.shopee.com.br/1gBaM4502H",
  },
]

export default function CategoriasShopping() {
  return (
    <section className="w-full max-w-full overflow-x-hidden">
      <div className="w-full max-w-[100%] mx-auto px-4 flex justify-center">
        <div className="w-full max-w-[420px] md:max-w-6xl">
          <div className="w-full bg-neutral-950 py-20">
            <h2 className="text-white text-3xl font-semibold mb-10 text-center">Comece pelo que você procura</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {categorias.map((cat, index) => (
                <div key={index} className="w-full max-w-full rounded-2xl overflow-hidden bg-neutral-900 shadow-md">
                  <a
                    href={cat.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group hover:opacity-90 transition-opacity"
                  >
                    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-black/40 flex items-center justify-center">
                      <img
                        src={cat.imagem || "/placeholder.svg"}
                        alt={cat.nome}
                        className="max-h-full max-w-[85%] md:max-w-[90%] object-contain"
                      />
                    </div>

                    <div className="p-6 pb-4">
                      <h3 className="text-white text-xl font-medium mb-2">{cat.nome}</h3>
                      <p className="text-sm opacity-75 text-white/70">{cat.subtitulo}</p>
                    </div>
                  </a>

                  <div className="px-6 pb-6">
                    <a
                      href={cat.ctaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full px-4 py-2.5 rounded-lg bg-orange-500/10 border border-orange-500/30 text-orange-400 text-sm font-medium hover:bg-orange-500/20 hover:border-orange-500/50 transition-all"
                    >
                      {cat.ctaTexto} →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
