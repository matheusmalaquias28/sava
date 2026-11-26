import type { SolutionDetail } from "./types";

// [A CONFIRMAR] revisão técnica da Savá: condições variam por seguradora, edital e processo.
export const seguroGarantia: SolutionDetail = {
  metaTitle: "Seguro Garantia para Licitações e Contratos",
  metaDescription:
    "Seguro garantia para licitações, contratos, processos judiciais e aduaneiros. Substitui fiança bancária e depósito judicial com emissão ágil.",
  heroTitle: "Seguro Garantia",
  heroLead:
    "Garanta licitações, contratos e processos judiciais sem imobilizar caixa nem consumir limite bancário, com apólices emitidas no ritmo das oportunidades.",
  facts: [
    { value: "Sem fiança", label: "o seguro garantia preserva o limite de crédito bancário da empresa" },
    { value: "Lei 14.133", label: "prevê o seguro garantia como modalidade aceita em licitações públicas" },
    { value: "CPC", label: "equipara o seguro garantia judicial ao dinheiro para garantir execuções" },
  ],
  context: {
    eyebrow: "Por que contratar",
    title: "Garantia não precisa custar o caixa da empresa.",
    paragraphs: [
      "Fianças bancárias consomem limite de crédito e depósitos judiciais imobilizam recursos que poderiam financiar a operação. Para quem disputa contratos e licitações, isso limita a capacidade de crescer.",
      "O seguro garantia substitui essas modalidades com custo competitivo. Cadastramos a empresa nas principais seguradoras, ampliamos o limite disponível e emitimos as apólices sempre que surge uma nova oportunidade.",
    ],
    image: {
      src: "/images/seguro-garantia-contexto.webp",
      alt: "Engenheiros revisando documentos em obra de infraestrutura",
      label: "Engenheiros de capacete revisando documentos em uma grande obra de infraestrutura",
      scene:
        "Two civil engineers, a man and a woman, wearing white hard hats and navy jackets, reviewing a folder of documents at a large road infrastructure construction site with heavy machinery in the distance, daylight.",
      orientation: "portrait",
    },
  },
  risks: {
    eyebrow: "Quando é exigido",
    title: "Situações em que a garantia é necessária",
    intro: "Contratantes públicos e privados exigem garantias para assegurar que as obrigações serão cumpridas.",
    items: [
      { icon: "document", title: "Licitações", text: "Garantia de proposta para participar e de execução para assinar o contrato." },
      { icon: "building", title: "Contratos de obras e fornecimento", text: "Garantia de cumprimento, adiantamentos e manutenção corretiva." },
      { icon: "scale", title: "Processos judiciais", text: "Garantia de execuções fiscais, trabalhistas e cíveis sem depósito em dinheiro." },
      { icon: "box", title: "Operações aduaneiras", text: "Garantia de tributos em regimes especiais de importação." },
    ],
  },
  timeline: {
    eyebrow: "Na prática",
    title: "Do cadastro à apólice emitida",
    intro: "Com a empresa cadastrada nas seguradoras, a emissão acompanha o ritmo das oportunidades.",
    cta: "Cadastrar a minha empresa",
    items: [
      { time: "Antes da oportunidade", title: "Cadastro e limite", text: "A seguradora analisa os dados financeiros e aprova um limite de crédito para a empresa.", covered: "Cadastro em várias seguradoras" },
      { time: "Edital ou contrato", title: "Análise da exigência", text: "Conferimos modalidade, valor, prazo e cláusulas exigidas pelo contratante.", covered: "Leitura do edital pela Savá" },
      { time: "Em poucas horas", title: "Emissão da apólice", text: "Com o limite aprovado, a apólice é emitida e enviada no formato exigido.", covered: "Emissão ágil" },
      { time: "Durante o contrato", title: "Vigência e endossos", text: "Prorrogações e alterações de valor são feitas por endosso conforme o contrato evolui.", covered: "Gestão de endossos" },
      { time: "Se houver inadimplência", title: "Indenização ao contratante", text: "A seguradora indeniza o segurado e busca o ressarcimento junto ao tomador.", covered: "Garantia da obrigação" },
    ],
  },
  coverage: {
    eyebrow: "Modalidades",
    title: "As principais garantias",
    intro: "Cada contrato pede uma modalidade. Atendemos todas a partir do mesmo cadastro.",
    columns: [
      {
        tag: "Contratos",
        title: "Licitações e contratos",
        items: [
          { title: "Garantia do licitante", text: "Assegura a manutenção da proposta e a assinatura do contrato." },
          { title: "Executante construtor", text: "Garante a execução de obras conforme o contrato." },
          { title: "Executante fornecedor e prestador", text: "Garante o fornecimento de bens e a prestação de serviços." },
          { title: "Adiantamento de pagamento", text: "Protege valores pagos antecipadamente pelo contratante." },
          { title: "Retenção e manutenção", text: "Substitui retenções contratuais e garante a manutenção corretiva." },
        ],
      },
      {
        tag: "Judicial e aduaneira",
        title: "Processos e tributos",
        items: [
          { title: "Garantia judicial cível", text: "Garante execuções e recursos em processos cíveis." },
          { title: "Garantia judicial fiscal", text: "Garante execuções fiscais sem depósito em dinheiro." },
          { title: "Judicial trabalhista e recursal", text: "Substitui o depósito recursal em processos trabalhistas." },
          { title: "Garantia aduaneira", text: "Garante tributos suspensos em regimes aduaneiros especiais." },
        ],
      },
    ],
    note: "A aceitação da garantia judicial depende do juízo e das regras do tribunal. Verificamos os requisitos de cada caso.",
  },
  checklist: {
    eyebrow: "Análise de crédito",
    title: "O que a seguradora avalia",
    text: "O seguro garantia é uma operação de crédito. Organizamos as informações financeiras para conseguir o maior limite e a melhor taxa.",
    items: [
      "Balanço patrimonial e demonstração de resultados",
      "Faturamento e nível de endividamento",
      "Experiência técnica e acervo de contratos executados",
      "Edital, minuta de contrato ou decisão judicial",
      "Histórico de cumprimento de obrigações",
      "Estrutura societária e garantias dos sócios, quando exigidas",
    ],
    image: {
      src: "/images/seguro-garantia-checklist.webp",
      alt: "Diretor financeiro analisando demonstrativos impressos",
      label: "Diretor financeiro analisando demonstrativos financeiros impressos com gráficos simples",
      scene:
        "A finance director in his 50s with rolled shirt sleeves analyzing printed financial statements with simple bar charts at a tidy desk, calculator and laptop beside him, bright office, no readable text.",
      orientation: "landscape",
    },
  },
  steps: {
    title: "Do cadastro à garantia sempre disponível",
    items: [
      { title: "Levantamento financeiro", text: "Reunimos demonstrações e informações técnicas da empresa." },
      { title: "Cadastro nas seguradoras", text: "Apresentamos a empresa a várias seguradoras para ampliar o limite total." },
      { title: "Emissão sob demanda", text: "Emitimos cada apólice conforme o edital, contrato ou processo." },
      { title: "Gestão das apólices", text: "Controlamos vigências, endossos e baixas ao fim das obrigações." },
    ],
  },
  audience: {
    title: "Para quem é",
    text: "Empresas que disputam licitações, executam grandes contratos ou precisam garantir processos judiciais.",
    image: {
      src: "/images/seguro-garantia-publico.webp",
      alt: "Guindaste sobre edifício em construção",
      label: "Guindaste sobre um edifício em construção em um dia claro",
      scene:
        "A tower crane above a modern building under construction with concrete floors and scaffolding, workers small in the distance, clear daytime sky with soft clouds.",
      orientation: "landscape",
    },
  },
  exclusions: {
    title: "Pontos de atenção",
    text: "Transparência desde a cotação. Estes pontos variam entre seguradoras e contratos.",
    items: [
      "A apólice garante o contratante, não substitui o cumprimento do contrato",
      "Alterações contratuais precisam ser informadas por endosso",
      "Multas não previstas na apólice podem não ser cobertas",
      "A seguradora tem direito de ressarcimento contra o tomador",
      "Garantias judiciais dependem da aceitação do juízo",
    ],
  },
  faq: [
    { q: "O seguro garantia é aceito em licitações públicas?", a: "Sim. A Lei 14.133/2021 prevê o seguro garantia como uma das modalidades de garantia em contratações públicas." },
    { q: "Quanto tempo leva a emissão?", a: "Com o cadastro e o limite aprovados, a emissão costuma levar poucas horas. O cadastro inicial pode levar alguns dias." },
    { q: "Posso substituir um depósito judicial que já fiz?", a: "Em muitos casos, sim. O seguro garantia judicial pode substituir depósitos, liberando o caixa, conforme a decisão do juízo." },
    { q: "Quanto custa o seguro garantia?", a: "O custo é uma taxa sobre o valor garantido, que varia com o risco da empresa, a modalidade e o prazo. Costuma ser menor que o de uma fiança bancária." },
    { q: "O seguro garantia compromete meu limite no banco?", a: "Não. O limite é concedido pela seguradora, preservando as linhas de crédito bancárias da empresa." },
    { q: "Quem é o segurado e quem é o tomador?", a: "O segurado é quem exige a garantia, como o órgão público ou o contratante. O tomador é a empresa que contrata a apólice para garantir a sua obrigação." },
  ],
};
