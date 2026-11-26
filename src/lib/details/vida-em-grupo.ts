import type { SolutionDetail } from "./types";

// [A CONFIRMAR] revisão técnica da Savá: coberturas e exclusões variam por seguradora e apólice.
export const vidaEmGrupo: SolutionDetail = {
  metaTitle: "Seguro de Vida em Grupo para Empresas",
  metaDescription:
    "Seguro de vida em grupo conforme a convenção coletiva, com gestão mensal de vidas e apoio às famílias. Cotação em todas as seguradoras. Vitória, ES.",
  heroTitle: "Seguro de Vida em Grupo",
  heroLead:
    "Proteção para quem faz a empresa acontecer, em conformidade com a convenção coletiva e com uma gestão que não dá trabalho ao RH.",
  facts: [
    { value: "CCT", label: "muitas convenções coletivas exigem seguro de vida para os colaboradores" },
    { value: "Mensal", label: "é a movimentação de vidas, com inclusões e exclusões acompanhadas" },
    { value: "Fora do inventário", label: "a indenização vai direto aos beneficiários, sem passar por inventário" },
  ],
  context: {
    eyebrow: "Por que contratar",
    title: "Um benefício que protege a família e a empresa.",
    paragraphs: [
      "Quando a convenção coletiva exige seguro de vida, contratar a apólice errada ou deixar de incluir colaboradores expõe a empresa a passivos trabalhistas. E, no momento mais difícil, a família espera um amparo rápido.",
      "Desenhamos capitais e coberturas que atendem à convenção e geram valor real para o time. Depois cuidamos da movimentação mensal e acompanhamos as famílias em cada sinistro.",
    ],
    image: {
      src: "/images/vida-em-grupo-contexto.webp",
      alt: "Gestora de RH apresentando benefícios a colaboradores em sala de reunião",
      label: "Gestora de RH conversando com colaboradores sobre benefícios em uma sala de reunião clara",
      scene:
        "In a bright meeting room, a friendly HR manager in her 40s in a beige blazer talks with three employees of different ages seated around a table, printed benefit materials on the table, warm and attentive atmosphere.",
      orientation: "portrait",
    },
  },
  risks: {
    eyebrow: "O que está em jogo",
    title: "Situações que o seguro de vida ampara",
    intro: "Imprevistos atingem pessoas de todas as idades. O seguro garante amparo financeiro quando a renda é interrompida.",
    items: [
      { icon: "heart", title: "Morte natural ou acidental", text: "Indenização aos beneficiários para manter o padrão de vida da família." },
      { icon: "user", title: "Invalidez", text: "Amparo quando um acidente ou doença impede o colaborador de trabalhar." },
      { icon: "clock", title: "Doenças graves", text: "Antecipação de recursos no diagnóstico, para custear tratamento e adaptação." },
      { icon: "scale", title: "Passivo trabalhista", text: "Descumprir a convenção coletiva pode gerar indenizações cobradas da empresa." },
    ],
  },
  timeline: {
    eyebrow: "Na prática",
    title: "Do aviso de sinistro ao pagamento",
    intro: "No momento mais delicado, a família precisa de orientação clara. Veja como a Savá conduz cada etapa.",
    cta: "Revisar o seguro do time",
    items: [
      { time: "Primeiro contato", title: "Aviso à empresa", text: "A família ou o RH comunica o ocorrido à Savá, que passa a conduzir o processo com cuidado e discrição.", covered: "Atendimento dedicado à família" },
      { time: "Primeiros dias", title: "Documentação orientada", text: "Enviamos a lista exata de documentos e ajudamos a reunir tudo o que a seguradora vai pedir.", covered: "Orientação da Savá" },
      { time: "Análise", title: "Avaliação da seguradora", text: "A seguradora analisa o pedido com base na apólice e nos documentos apresentados.", covered: "Acompanhamento junto à seguradora" },
      { time: "Até 30 dias", title: "Pagamento", text: "Com a documentação completa, a indenização é paga aos beneficiários no prazo das regras da SUSEP.", covered: "Morte, invalidez ou doenças graves" },
      { time: "Depois", title: "Assistências", text: "Quando contratadas, assistências como auxílio funeral e cesta básica apoiam a família.", covered: "Assistências complementares" },
    ],
  },
  coverage: {
    eyebrow: "Coberturas",
    title: "O que a apólice protege",
    intro: "A cobertura básica é a de morte. As demais são combinadas de acordo com a convenção coletiva e a política de benefícios da empresa.",
    columns: [
      {
        tag: "Coberturas principais",
        title: "Proteção ao colaborador",
        items: [
          { title: "Morte natural e acidental", text: "Indenização aos beneficiários, com possibilidade de capital maior em caso de acidente." },
          { title: "Invalidez por acidente", text: "Indenização total ou parcial conforme o grau da invalidez." },
          { title: "Invalidez por doença", text: "Amparo quando a doença impede o exercício de atividades." },
          { title: "Doenças graves", text: "Antecipação de capital no diagnóstico de doenças previstas na apólice." },
          { title: "Diárias por incapacidade", text: "Valor diário durante o afastamento temporário." },
        ],
      },
      {
        tag: "Assistências",
        title: "Apoio à família",
        items: [
          { title: "Cônjuge e filhos", text: "Extensão de cobertura para dependentes, quando contratada." },
          { title: "Auxílio funeral", text: "Organização e custeio do funeral, inclusive para dependentes." },
          { title: "Cesta básica", text: "Apoio mensal à família por período determinado após o sinistro." },
          { title: "Assistências de bem-estar", text: "Serviços como orientação psicológica, nutricional e jurídica." },
        ],
      },
    ],
    note: "Capitais podem ser fixos para todos ou proporcionais ao salário, conforme a convenção e a política da empresa.",
  },
  checklist: {
    eyebrow: "Desenho da apólice",
    title: "O que definimos antes de cotar",
    text: "Um bom seguro de vida em grupo atende à convenção, cabe no orçamento e é fácil de administrar. Por isso levantamos estes pontos antes de ir ao mercado.",
    items: [
      "Exigências da convenção coletiva de cada categoria",
      "Número de vidas e distribuição por faixa etária",
      "Capital segurado fixo ou múltiplo salarial",
      "Coberturas adicionais e assistências desejadas",
      "Forma de custeio: empresa, colaborador ou compartilhado",
      "Atividades e funções de maior risco",
    ],
    image: {
      src: "/images/vida-em-grupo-checklist.webp",
      alt: "Mãos preenchendo formulário de benefícios sobre a mesa",
      label: "Mãos assinando um formulário de adesão a benefícios sobre uma mesa de madeira clara",
      scene:
        "Close-up of a person's hands signing a printed benefits enrollment form with a pen on a light wood desk, a cup of coffee and a pair of glasses beside it, soft window light, no readable text.",
      orientation: "landscape",
    },
  },
  steps: {
    title: "Da análise da convenção à gestão mensal",
    items: [
      { title: "Leitura da convenção", text: "Identificamos as obrigações de cada categoria e os riscos de descumprimento." },
      { title: "Desenho do benefício", text: "Definimos capitais, coberturas e assistências com o RH." },
      { title: "Cotação em todas as seguradoras", text: "Comparamos preço, coberturas e qualidade de atendimento a sinistros." },
      { title: "Gestão mensal", text: "Cuidamos das movimentações de vidas e apoiamos as famílias nos sinistros." },
    ],
  },
  audience: {
    title: "Para quem é",
    text: "Empresas que querem cumprir a convenção coletiva com segurança e oferecer um benefício que o time valoriza.",
    image: {
      src: "/images/vida-em-grupo-publico.webp",
      alt: "Colaboradores conversando em área de convivência da empresa",
      label: "Grupo diverso de colaboradores conversando em uma área de convivência da empresa",
      scene:
        "A diverse group of employees in casual work clothes and a few in navy uniforms chatting and smiling in a bright company break area with wooden tables and plants.",
      orientation: "landscape",
    },
  },
  exclusions: {
    title: "O que normalmente fica de fora",
    text: "Transparência desde a cotação. Estas são exclusões comuns, e cada apólice tem as suas condições.",
    items: [
      "Doenças preexistentes não declaradas, conforme a apólice",
      "Suicídio nos dois primeiros anos de vigência",
      "Atos intencionais e participação em crimes",
      "Colaboradores não informados na movimentação mensal",
      "Esportes e atividades de risco excluídos na apólice",
    ],
  },
  faq: [
    { q: "O seguro de vida em grupo é obrigatório?", a: "Não por lei geral, mas muitas convenções coletivas exigem. Nesses casos, a empresa que não contrata pode responder pela indenização." },
    { q: "Cooperados podem ser incluídos?", a: "Sim. Há apólices específicas para cooperativas, com regras de adesão adequadas aos cooperados." },
    { q: "Existe número mínimo de vidas?", a: "Algumas seguradoras aceitam grupos pequenos, a partir de poucas vidas. As condições variam conforme o tamanho do grupo." },
    { q: "Sócios e diretores podem entrar na mesma apólice?", a: "Sim, inclusive com capitais diferenciados, desde que previstos nas regras da apólice." },
    { q: "Como funcionam as inclusões de novos colaboradores?", a: "Mensalmente a empresa informa admissões e desligamentos, e a fatura é ajustada. Cuidamos dessa rotina com o RH." },
    { q: "A indenização entra no inventário?", a: "Não. O capital do seguro de vida é pago diretamente aos beneficiários indicados e não integra a herança." },
  ],
};
