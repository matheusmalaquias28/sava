import type { SolutionDetail } from "./types";

// [A CONFIRMAR] revisão técnica da Savá: coberturas e exclusões variam por seguradora e apólice.
export const sociosExecutivos: SolutionDetail = {
  metaTitle: "Seguro para Sócios e Executivos",
  metaDescription:
    "Carro do dono, residência de alto padrão, vida e sucessão de sócios e executivos em um atendimento concierge. Todas as apólices em um só contato.",
  heroTitle: "Proteção para Sócios e Executivos",
  heroLead:
    "Carro, casa, vida e patrimônio da família reunidos em um único ponto de contato, com a mesma estratégia que a Savá aplica à sua empresa.",
  facts: [
    { value: "1 contato", label: "para todas as apólices pessoais e da família" },
    { value: "Antecipadas", label: "as renovações são revisadas antes do vencimento, sem surpresas" },
    { value: "Família", label: "cônjuge e filhos atendidos no mesmo relacionamento" },
  ],
  context: {
    eyebrow: "Por que contratar",
    title: "Quem cuida da empresa raramente tem tempo para cuidar das próprias apólices.",
    paragraphs: [
      "Seguros espalhados entre vários corretores, vencimentos esquecidos e coberturas que não acompanharam o crescimento do patrimônio são a realidade de muitos empresários.",
      "Reunimos tudo em um atendimento concierge: revisamos o que existe, corrigimos lacunas, cuidamos das renovações e, quando algo acontece, resolvemos por você.",
    ],
    image: {
      src: "/images/socios-e-executivos-contexto.webp",
      alt: "Casal de empresários revisando documentos com consultor na sala de casa",
      label: "Casal de empresários revisando documentos com um consultor na sala de estar de casa",
      scene:
        "In an elegant, bright living room with a wooden coffee table, a couple in their 50s in smart casual clothes reviewing documents with a consultant in a navy blazer seated across from them, relaxed and trusting atmosphere.",
      orientation: "portrait",
    },
  },
  risks: {
    eyebrow: "O que está em jogo",
    title: "Riscos que afetam o patrimônio pessoal",
    intro: "O patrimônio de quem empreende cresce rápido. As apólices precisam acompanhar esse ritmo.",
    items: [
      { icon: "truck", title: "Veículos de alto valor", text: "Roubo, colisão e danos a terceiros com carros que exigem coberturas e assistências diferenciadas." },
      { icon: "home", title: "Residência e conteúdo", text: "Incêndio, roubo e danos elétricos em casas com bens, obras de arte e equipamentos de valor." },
      { icon: "scale", title: "Responsabilidade civil", text: "Danos causados a terceiros pela família, por animais ou por funcionários da casa." },
      { icon: "heart", title: "Vida e sucessão", text: "Proteção da renda familiar e liquidez para custos de inventário e sucessão." },
    ],
  },
  timeline: {
    eyebrow: "Na prática",
    title: "Como funciona o atendimento concierge",
    intro: "Um relacionamento contínuo, com a Savá cuidando de tudo ao longo do ano.",
    cta: "Organizar as minhas apólices",
    items: [
      { time: "Início", title: "Diagnóstico patrimonial", text: "Levantamos veículos, imóveis, bens de valor, dependentes e apólices existentes.", covered: "Revisão completa das apólices" },
      { time: "Primeiro mês", title: "Consolidação", text: "Corrigimos lacunas, ajustamos valores e concentramos as apólices em um único ponto de contato.", covered: "Coberturas alinhadas ao patrimônio" },
      { time: "Ao longo do ano", title: "Ajustes", text: "Novo carro, mudança de casa ou viagem: atualizamos as apólices sem burocracia.", covered: "Endossos e novas apólices" },
      { time: "Antes do vencimento", title: "Renovações", text: "Revisamos cada renovação com antecedência e comparamos o mercado.", covered: "Renovação negociada" },
      { time: "Se algo acontecer", title: "Sinistro resolvido", text: "Cuidamos do aviso, da documentação e do acompanhamento até a solução.", covered: "Gestão de sinistros pela Savá" },
    ],
  },
  coverage: {
    eyebrow: "Coberturas",
    title: "O que protegemos",
    intro: "Apólices individuais escolhidas para cada bem e cada pessoa, administradas em conjunto.",
    columns: [
      {
        tag: "Patrimônio",
        title: "Bens da família",
        items: [
          { title: "Carro do dono", text: "Veículos de sócios e diretores com coberturas para alto valor e assistência premium." },
          { title: "Residencial alto padrão", text: "Imóveis principais e de veraneio, com conteúdo e bens de valor." },
          { title: "Objetos de valor", text: "Joias, obras de arte e coleções com cobertura específica." },
          { title: "Embarcações e aeronaves", text: "Cascos, responsabilidade civil e ocupantes." },
        ],
      },
      {
        tag: "Pessoas",
        title: "Vida e responsabilidade",
        items: [
          { title: "Vida individual", text: "Capital para proteger a renda da família e honrar compromissos." },
          { title: "Planejamento sucessório", text: "Liquidez para custos de inventário e organização da sucessão." },
          { title: "Responsabilidade civil familiar", text: "Danos causados a terceiros por membros da família ou animais." },
          { title: "Seguro viagem", text: "Despesas médicas e assistência em viagens nacionais e internacionais." },
        ],
      },
    ],
    note: "Cada bem é avaliado individualmente para garantir que o valor segurado acompanhe o patrimônio real.",
  },
  checklist: {
    eyebrow: "Diagnóstico",
    title: "O que levantamos no primeiro encontro",
    text: "Um retrato completo do patrimônio da família permite eliminar lacunas e pagar apenas pelo necessário.",
    items: [
      "Veículos e principais condutores da família",
      "Imóveis, conteúdo e bens de alto valor",
      "Apólices vigentes e datas de vencimento",
      "Dependentes e beneficiários",
      "Patrimônio, holding e planejamento sucessório",
      "Rotina de viagens e atividades de lazer",
    ],
    image: {
      src: "/images/socios-e-executivos-checklist.webp",
      alt: "Executivo fechando a porta de um carro em garagem residencial",
      label: "Executivo fechando a porta de um carro sedan escuro na garagem de casa",
      scene:
        "A man in his 40s in a navy suit closing the door of a dark executive sedan inside a clean, modern residential garage with wood paneling, morning light coming through a side window.",
      orientation: "landscape",
    },
  },
  steps: {
    title: "Do diagnóstico ao atendimento contínuo",
    items: [
      { title: "Conversa inicial", text: "Entendemos a família, o patrimônio e as preocupações principais." },
      { title: "Revisão das apólices", text: "Analisamos o que existe e apontamos lacunas e sobreposições." },
      { title: "Cotação e consolidação", text: "Comparamos o mercado e concentramos tudo em um único relacionamento." },
      { title: "Concierge contínuo", text: "Ajustes, renovações e sinistros resolvidos pela Savá." },
    ],
  },
  audience: {
    title: "Para quem é",
    text: "Sócios, executivos e famílias empresárias que querem o patrimônio pessoal tão bem cuidado quanto a empresa.",
    image: {
      src: "/images/socios-e-executivos-publico.webp",
      alt: "Fachada de residência moderna de alto padrão durante o dia",
      label: "Fachada de uma residência moderna de alto padrão em um dia claro",
      scene:
        "Exterior of a modern high-end Brazilian house with concrete, glass and wood facade, tropical landscaping and a clean driveway, bright daytime with soft clouds.",
      orientation: "landscape",
    },
  },
  exclusions: {
    title: "O que normalmente fica de fora",
    text: "Transparência desde a cotação. Estas são exclusões comuns, e cada apólice tem as suas condições.",
    items: [
      "Bens de valor não declarados individualmente",
      "Condutores não informados com perfil diferente do declarado",
      "Desgaste natural e falta de manutenção",
      "Imóveis desocupados por longos períodos sem aviso",
      "Doenças preexistentes não declaradas no seguro de vida",
    ],
  },
  faq: [
    { q: "O que é o seguro de carro do dono?", a: "É a proteção dos veículos utilizados por sócios e diretores, que pode ser estruturada pela empresa ou na pessoa física, sempre com coberturas compatíveis com veículos de alto valor." },
    { q: "Vocês atendem também a família do executivo?", a: "Sim. Organizamos as apólices de cônjuges e filhos no mesmo atendimento, o que simplifica a gestão e pode reduzir custos." },
    { q: "Posso transferir apólices que já tenho?", a: "Sim. Na renovação, assumimos a gestão e comparamos as condições atuais com todo o mercado." },
    { q: "Seguro de vida ajuda no planejamento sucessório?", a: "Sim. A indenização não entra no inventário e garante liquidez para impostos e custos do processo, evitando a venda apressada de bens." },
    { q: "Obras de arte e joias podem ser seguradas?", a: "Podem, com apólices específicas e avaliação dos bens. Assim a indenização reflete o valor real de cada peça." },
    { q: "Atendem imóveis em outras cidades?", a: "Sim. Casas de veraneio e imóveis em outros estados podem ser incluídos no mesmo relacionamento." },
  ],
};
