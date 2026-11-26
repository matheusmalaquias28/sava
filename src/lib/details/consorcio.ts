import type { SolutionDetail } from "./types";

// [A CONFIRMAR] revisão técnica da Savá: regras variam por administradora e grupo.
export const consorcio: SolutionDetail = {
  metaTitle: "Consórcio para Empresas: Imóveis e Frota",
  metaDescription:
    "Consórcio de imóveis, veículos e pesados com estratégia de lances para empresas: renove a frota e construa patrimônio sem juros de financiamento.",
  heroTitle: "Consórcio e Alavancagem Patrimonial",
  heroLead:
    "Renove a frota, conquiste a sede própria e construa uma carteira de imóveis com crédito planejado, sem os juros de um financiamento.",
  facts: [
    { value: "Sem juros", label: "o custo é a taxa de administração, diluída ao longo do prazo" },
    { value: "À vista", label: "a carta de crédito dá poder de negociação de compra à vista" },
    { value: "Lance", label: "é a estratégia para antecipar a contemplação" },
  ],
  context: {
    eyebrow: "Por que contratar",
    title: "Crescer com patrimônio, não com juros.",
    paragraphs: [
      "Financiamentos e linhas de crédito tradicionais comprometem o fluxo de caixa com juros elevados. Para empresas e empresários que pensam no longo prazo, o consórcio é uma forma mais eficiente de alavancar patrimônio.",
      "Entendemos seus objetivos, desenhamos uma estratégia com cotas, prazos e lances, e acompanhamos cada assembleia até a contemplação e o uso da carta de crédito.",
    ],
    image: {
      src: "/images/consorcio-contexto.webp",
      alt: "Empresário conhecendo imóvel comercial com consultor",
      label: "Empresário e consultor visitando um imóvel comercial vazio e bem iluminado",
      scene:
        "A business owner in his 40s in a light shirt and a consultant in a navy blazer walking through an empty, bright commercial office space with large windows and concrete floors, discussing plans, daylight.",
      orientation: "portrait",
    },
  },
  risks: {
    eyebrow: "Para que serve",
    title: "Objetivos que o consórcio realiza",
    intro: "Com planejamento, o consórcio vira uma ferramenta de crescimento, não só de compra.",
    items: [
      { icon: "truck", title: "Renovar a frota", text: "Troca planejada de veículos leves e pesados sem descapitalizar a operação." },
      { icon: "building", title: "Sede própria", text: "Sair do aluguel e transformar despesa em patrimônio da empresa." },
      { icon: "home", title: "Carteira de imóveis", text: "Construir renda com imóveis adquiridos ao longo do tempo." },
      { icon: "gear", title: "Máquinas e equipamentos", text: "Expandir a capacidade produtiva com crédito de pesados." },
    ],
  },
  timeline: {
    eyebrow: "Na prática",
    title: "Do planejamento à carta de crédito na mão",
    intro: "Veja as etapas de um consórcio bem planejado e como a Savá acompanha cada uma.",
    cta: "Simular a minha estratégia",
    items: [
      { time: "Início", title: "Planejamento", text: "Definimos o objetivo, o valor de crédito, o prazo e a parcela que cabe no caixa.", covered: "Estratégia desenhada pela Savá" },
      { time: "Adesão", title: "Escolha dos grupos", text: "Selecionamos administradoras e grupos com histórico de contemplações adequado.", covered: "Análise de grupos" },
      { time: "Todo mês", title: "Assembleias", text: "Acompanhamos sorteios e lances, avisando sobre as melhores oportunidades.", covered: "Acompanhamento das assembleias" },
      { time: "Contemplação", title: "Lance ou sorteio", text: "Com a estratégia de lances, a contemplação pode ser antecipada.", covered: "Estratégia de lances" },
      { time: "Uso do crédito", title: "Compra à vista", text: "A carta de crédito é usada para comprar o bem, com poder de negociação de quem paga à vista.", covered: "Apoio na liberação do crédito" },
    ],
  },
  coverage: {
    eyebrow: "Soluções",
    title: "O que estruturamos",
    intro: "Diferentes tipos de consórcio e estratégias combinados para cada objetivo.",
    columns: [
      {
        tag: "Tipos de crédito",
        title: "Consórcios",
        items: [
          { title: "Imóveis", text: "Residenciais, comerciais, terrenos e construção." },
          { title: "Veículos leves", text: "Carros e utilitários para a frota ou uso pessoal." },
          { title: "Pesados", text: "Caminhões, máquinas agrícolas e equipamentos." },
          { title: "Serviços", text: "Reformas, obras e outros serviços, conforme a administradora." },
        ],
      },
      {
        tag: "Estratégia",
        title: "Alavancagem planejada",
        items: [
          { title: "Estratégia de lances", text: "Lance livre, fixo ou embutido para antecipar a contemplação." },
          { title: "Várias cotas", text: "Distribuição em grupos e prazos diferentes para contemplações escalonadas." },
          { title: "Carta de crédito como alavanca", text: "Uso planejado do crédito para compra, quitação ou expansão." },
          { title: "Planejamento sucessório", text: "Construção de patrimônio para a próxima geração." },
        ],
      },
    ],
    note: "Consórcio não é investimento com rentabilidade garantida. As regras de contemplação e uso do crédito seguem o contrato de cada grupo.",
  },
  checklist: {
    eyebrow: "Planejamento",
    title: "O que definimos antes de entrar no grupo",
    text: "Um consórcio bem-sucedido começa com números claros. Estes são os pontos que alinhamos com você.",
    items: [
      "Objetivo do crédito e prazo desejado para usar o bem",
      "Valor da parcela compatível com o fluxo de caixa",
      "Recursos disponíveis para lances",
      "Administradora autorizada pelo Banco Central",
      "Histórico de contemplações dos grupos",
      "Taxa de administração e fundo de reserva",
    ],
    image: {
      src: "/images/consorcio-checklist.webp",
      alt: "Consultor e cliente fazendo planejamento financeiro com calculadora",
      label: "Consultor e cliente fazendo planejamento financeiro com calculadora e caderno na mesa",
      scene:
        "Close view of a desk where a consultant and a client plan finances together, hands with a pen pointing at a notebook with simple handwritten numbers, a calculator and coffee cups on light wood, soft window light, no readable text.",
      orientation: "landscape",
    },
  },
  steps: {
    title: "Do objetivo à contemplação",
    items: [
      { title: "Diagnóstico", text: "Entendemos objetivos, prazos e capacidade de pagamento." },
      { title: "Estratégia", text: "Definimos cotas, grupos e plano de lances." },
      { title: "Adesão", text: "Escolhemos as administradoras e formalizamos as cotas." },
      { title: "Acompanhamento", text: "Seguimos cada assembleia até a contemplação e a compra do bem." },
    ],
  },
  audience: {
    title: "Para quem é",
    text: "Empresas e empresários que querem crescer com patrimônio e planejamento, sem pagar juros de financiamento.",
    image: {
      src: "/images/consorcio-publico.webp",
      alt: "Edifício comercial moderno visto de baixo",
      label: "Edifício comercial moderno com fachada de vidro e madeira visto da calçada",
      scene:
        "A modern mid-rise commercial building with glass and warm wood facade seen from the sidewalk, trees in front, clear daytime sky, clean urban street in Brazil.",
      orientation: "landscape",
    },
  },
  exclusions: {
    title: "Pontos de atenção",
    text: "Transparência desde o início. Estes pontos fazem parte de qualquer consórcio.",
    items: [
      "A contemplação por sorteio não tem data garantida",
      "Desistência devolve valores conforme as regras do grupo",
      "Parcelas são reajustadas pelo índice previsto em contrato",
      "Uso do crédito exige análise de garantias pela administradora",
      "Taxa de administração e fundo de reserva compõem o custo",
    ],
  },
  faq: [
    { q: "Consórcio é um bom negócio para empresas?", a: "Para quem pode planejar a compra, sim. Sem juros, o custo total tende a ser bem menor que o de um financiamento, e a carta de crédito permite negociar como comprador à vista." },
    { q: "Como funciona a estratégia de lances?", a: "O lance é uma oferta de antecipação de parcelas que aumenta a chance de contemplação. Definimos valores e momentos com base no histórico de cada grupo." },
    { q: "Posso usar o consórcio para trocar a frota?", a: "Sim. Com várias cotas em grupos diferentes, é possível planejar a renovação escalonada dos veículos." },
    { q: "Existe lance embutido?", a: "Em muitos grupos, sim. Parte da própria carta de crédito pode ser usada como lance, conforme as regras da administradora." },
    { q: "O que acontece se eu desistir?", a: "Os valores pagos são devolvidos conforme as regras do contrato e da legislação, normalmente quando a cota é contemplada ou ao fim do grupo." },
    { q: "A carta de crédito pode quitar um financiamento?", a: "Em muitos casos, sim. É possível usar o crédito para quitar o financiamento de um bem da mesma natureza, conforme a administradora." },
  ],
};
