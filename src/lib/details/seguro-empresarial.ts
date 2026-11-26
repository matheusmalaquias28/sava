import type { SolutionDetail } from "./types";

// [A CONFIRMAR] revisão técnica da Savá: coberturas e exclusões variam por seguradora e apólice.
export const seguroEmpresarial: SolutionDetail = {
  metaTitle: "Seguro Empresarial em Vitória, ES",
  metaDescription:
    "Seguro empresarial sob medida para sede, estoque, máquinas e lucros cessantes. Cotação em todas as seguradoras e sinistro acompanhado em Vitória, ES.",
  heroTitle: "Seguro Empresarial sob medida",
  heroLead:
    "Sede, estoques, máquinas e a própria operação protegidos em uma apólice desenhada a partir do risco real do seu negócio, e não de um pacote de prateleira.",
  facts: [
    { value: "Todas", label: "as seguradoras do mercado cotadas para o mesmo desenho de coberturas" },
    { value: "1 apólice", label: "pode reunir vários endereços, galpões e filiais da empresa" },
    { value: "24h", label: "de assistência emergencial na maior parte das apólices empresariais" },
  ],
  context: {
    eyebrow: "Por que contratar",
    title: "O prejuízo de um sinistro raramente para no prédio.",
    paragraphs: [
      "Um incêndio, um alagamento ou um curto-circuito danificam instalações, mas o maior impacto costuma vir depois: estoque perdido, máquinas paradas, clientes sem entrega e despesas fixas que continuam chegando.",
      "Por isso o seguro empresarial começa por entender como a sua empresa fatura. A partir daí definimos valores, coberturas e o período de lucros cessantes que realmente sustentam a retomada.",
    ],
    image: {
      src: "/images/seguro-empresarial-contexto.webp",
      alt: "Gestor de operações e consultor percorrendo o galpão da empresa com um tablet",
      label: "Gestor de operações e consultor percorrendo corredores de um galpão com estoque, revisando dados em um tablet",
      scene:
        "Inside a clean, well organized warehouse with tall shelving and boxed inventory, an operations manager in a navy polo and a consultant in a light blazer walking down the aisle reviewing data on a tablet, talking calmly.",
      orientation: "portrait",
    },
  },
  risks: {
    eyebrow: "Principais riscos",
    title: "O que mais gera sinistro em empresas",
    intro: "Boa parte dos sinistros vem de eventos comuns, que poderiam estar cobertos com o desenho certo da apólice.",
    items: [
      { icon: "fire", title: "Incêndio e explosão", text: "Perda total ou parcial de instalações, máquinas e estoque, muitas vezes com a operação parada por meses." },
      { icon: "bolt", title: "Danos elétricos", text: "Oscilações e curtos que queimam equipamentos, quadros elétricos e sistemas essenciais." },
      { icon: "water", title: "Vendaval e alagamento", text: "Telhados danificados, água no estoque e equipamentos comprometidos depois de chuvas fortes." },
      { icon: "theft", title: "Roubo e furto qualificado", text: "Mercadorias, equipamentos e valores levados com arrombamento ou violência." },
    ],
  },
  timeline: {
    eyebrow: "Na prática",
    title: "Do sinistro à retomada da operação",
    intro: "Veja o caminho de um sinistro empresarial e como a Savá acompanha cada etapa até a indenização.",
    cta: "Revisar a minha apólice",
    items: [
      { time: "Hora 0", title: "Ocorrência e acionamento", text: "A empresa aciona a assistência 24h para conter o dano e avisa a Savá, que abre o sinistro com a seguradora.", covered: "Assistência emergencial e abertura do sinistro" },
      { time: "Primeiras horas", title: "Proteção e registros", text: "O local é protegido para evitar novos danos e são feitos fotos, boletim de ocorrência e laudos quando necessários.", covered: "Orientação da Savá sobre documentos" },
      { time: "Primeiros dias", title: "Vistoria e regulação", text: "O regulador da seguradora avalia os danos, levanta valores e confere a documentação apresentada.", covered: "Acompanhamento técnico da regulação" },
      { time: "Semanas seguintes", title: "Indenização dos bens", text: "Prédio, máquinas, estoque e demais bens são indenizados conforme os limites contratados.", covered: "Coberturas de danos materiais" },
      { time: "Durante a parada", title: "Receita protegida", text: "Enquanto a operação se recupera, a perda de lucro e as despesas fixas são cobertas pelo período contratado.", covered: "Lucros cessantes e despesas fixas" },
    ],
  },
  coverage: {
    eyebrow: "Coberturas",
    title: "O que a apólice protege",
    intro: "A cobertura básica protege contra incêndio, raio e explosão. As demais são escolhidas de acordo com a operação e os riscos de cada endereço.",
    columns: [
      {
        tag: "Patrimônio",
        title: "Bens da empresa",
        items: [
          { title: "Incêndio, raio e explosão", text: "Cobertura básica para prédio, máquinas, móveis e estoque." },
          { title: "Danos elétricos", text: "Equipamentos e instalações danificados por variação de tensão ou curto-circuito." },
          { title: "Vendaval, granizo e alagamento", text: "Danos causados por eventos da natureza ao prédio e ao conteúdo." },
          { title: "Roubo e furto qualificado", text: "Bens e mercadorias subtraídos com arrombamento ou violência." },
          { title: "Quebra de máquinas", text: "Pane mecânica ou elétrica de equipamentos essenciais à produção." },
          { title: "Vidros, letreiros e anúncios", text: "Quebra acidental de vitrines, fachadas e comunicação visual." },
        ],
      },
      {
        tag: "Operação e terceiros",
        title: "Continuidade e responsabilidade",
        items: [
          { title: "Lucros cessantes", text: "Lucro líquido e despesas fixas durante a paralisação causada por um evento coberto." },
          { title: "Despesas fixas", text: "Salários, aluguel e contas que continuam chegando enquanto a empresa está parada." },
          { title: "Responsabilidade civil do estabelecimento", text: "Danos causados a clientes, visitantes e vizinhos dentro do imóvel." },
          { title: "Recomposição de documentos", text: "Custos para refazer registros, projetos e arquivos perdidos no sinistro." },
        ],
      },
    ],
    note: "Valores em risco devem ser atualizados periodicamente. Bens segurados abaixo do valor real podem sofrer redução proporcional na indenização.",
  },
  checklist: {
    eyebrow: "Análise de risco",
    title: "O que define uma boa apólice empresarial",
    text: "Antes de cotar, levantamos as informações que a seguradora usa para precificar o risco. Quanto mais preciso o desenho, menor a chance de lacunas e maior o poder de negociação.",
    items: [
      "Valores atualizados de prédio, máquinas, móveis e estoque",
      "Proteção contra incêndio: extintores, hidrantes, sprinklers e AVCB",
      "Segurança patrimonial: alarme, câmeras e vigilância",
      "Atividade exercida e materiais armazenados em cada endereço",
      "Histórico de sinistros dos últimos anos",
      "Período de indenização necessário para retomar a operação",
    ],
    image: {
      src: "/images/seguro-empresarial-checklist.webp",
      alt: "Técnico inspecionando sistema de combate a incêndio em instalação industrial",
      label: "Técnico com prancheta inspecionando extintores e hidrante em uma instalação industrial limpa",
      scene:
        "A safety technician in a navy work jacket holding a clipboard, inspecting a red fire extinguisher and a fire hose cabinet mounted on a clean concrete wall inside a modern industrial facility.",
      orientation: "landscape",
    },
  },
  steps: {
    title: "Do mapeamento de riscos à apólice em quatro etapas",
    items: [
      { title: "Visita e mapeamento", text: "Conhecemos os endereços, a operação e os ativos que sustentam o faturamento da empresa." },
      { title: "Desenho das coberturas", text: "Definimos valores em risco, coberturas adicionais e o período de lucros cessantes." },
      { title: "Cotação em todas as seguradoras", text: "Levamos o mesmo desenho ao mercado e comparamos preço, franquias e condições." },
      { title: "Gestão e sinistros", text: "Acompanhamos endossos, renovações e cada sinistro até a indenização." },
    ],
  },
  audience: {
    title: "Para quem é",
    text: "Empresas que têm instalações, estoques ou equipamentos dos quais dependem para produzir, vender ou atender.",
    image: {
      src: "/images/seguro-empresarial-publico.webp",
      alt: "Funcionários trabalhando em oficina de produção com máquinas",
      label: "Pequena indústria com funcionários operando máquinas em um ambiente de produção organizado",
      scene:
        "A small, tidy manufacturing workshop with two workers in navy uniforms operating industrial machinery, wooden pallets and finished products in the background, daylight from high windows.",
      orientation: "landscape",
    },
  },
  exclusions: {
    title: "O que normalmente fica de fora",
    text: "Transparência desde a cotação. Estas são exclusões comuns, e cada apólice tem as suas condições.",
    items: [
      "Desgaste natural, corrosão e falta de manutenção",
      "Furto simples, sem vestígios de arrombamento",
      "Bens não declarados ou fora dos endereços segurados",
      "Danos causados por obras e reformas sem comunicação",
      "Perdas por atos intencionais do segurado",
    ],
  },
  faq: [
    { q: "O seguro empresarial cobre a parada da operação?", a: "Sim, desde que a apólice tenha cobertura de lucros cessantes ou despesas fixas. Ela indeniza a perda de lucro e os custos fixos durante o período contratado após um evento coberto." },
    { q: "Consigo segurar mais de um endereço na mesma apólice?", a: "Sim. É possível reunir matriz, filiais e galpões em uma única apólice, com valores e coberturas definidos para cada local." },
    { q: "Como é definido o valor em risco?", a: "Pelo valor de reposição dos bens: quanto custaria reconstruir o prédio e comprar novamente máquinas, móveis e estoque. Ajudamos a levantar esses valores para evitar subseguro." },
    { q: "O estoque varia muito ao longo do ano. Como fica?", a: "Existem formas de ajustar o valor do estoque, como coberturas com declarações periódicas. Avaliamos a sazonalidade da empresa para escolher a melhor estrutura." },
    { q: "Máquinas alugadas ou de terceiros podem entrar na apólice?", a: "Podem, desde que estejam sob responsabilidade da empresa e sejam declaradas. É comum em contratos de locação e comodato." },
    { q: "O que fazer logo após um sinistro?", a: "Acionar a assistência para conter o dano, avisar a Savá, registrar fotos e boletim de ocorrência quando for o caso, e não descartar bens danificados antes da vistoria." },
  ],
};
