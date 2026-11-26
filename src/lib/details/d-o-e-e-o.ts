import type { SolutionDetail } from "./types";

// [A CONFIRMAR] revisão técnica da Savá: coberturas e exclusões variam por seguradora e apólice.
export const doEo: SolutionDetail = {
  metaTitle: "Seguro D&O e E&O para Empresas",
  metaDescription:
    "Seguro D&O protege o patrimônio pessoal de diretores e conselheiros. E&O ampara a empresa por erros profissionais. Cotação com seguradoras especializadas.",
  heroTitle: "D&O e E&O",
  heroLead:
    "Decisões de gestão e serviços prestados podem virar processos. D&O protege o patrimônio pessoal de quem administra, e E&O ampara a empresa por falhas profissionais.",
  facts: [
    { value: "CPF", label: "administradores podem responder com bens pessoais por atos de gestão" },
    { value: "Defesa", label: "custos com advogados são pagos durante o processo, não só no final" },
    { value: "Retroativa", label: "a cobertura pode alcançar atos anteriores à contratação, conforme a apólice" },
  ],
  context: {
    eyebrow: "Por que contratar",
    title: "Uma decisão tomada hoje pode virar processo daqui a anos.",
    paragraphs: [
      "Diretores e conselheiros respondem pessoalmente por atos de gestão em ações trabalhistas, tributárias, ambientais, societárias e de consumidores. Bloqueios de bens podem atingir o patrimônio da família antes mesmo do julgamento.",
      "Empresas que prestam serviços técnicos, por sua vez, podem ser cobradas por um erro ou omissão que causou prejuízo ao cliente. D&O e E&O transferem esses custos para a seguradora e garantem defesa qualificada.",
    ],
    image: {
      src: "/images/d-o-e-e-o-contexto.webp",
      alt: "Reunião de conselho em sala de diretoria",
      label: "Diretores e conselheiros reunidos em uma sala de diretoria discutindo documentos",
      scene:
        "A board meeting in a refined boardroom with a long dark wood table, five directors of mixed gender in their 40s to 60s in business attire discussing printed reports, large window with city view in soft daylight.",
      orientation: "portrait",
    },
  },
  risks: {
    eyebrow: "Principais exposições",
    title: "De onde vêm as reclamações",
    intro: "Reclamações podem partir de sócios, credores, órgãos públicos, colaboradores ou clientes.",
    items: [
      { icon: "scale", title: "Ações trabalhistas e tributárias", text: "Redirecionamento de dívidas e responsabilização pessoal de administradores." },
      { icon: "user", title: "Conflitos societários", text: "Reclamações de sócios, investidores e credores sobre decisões de gestão." },
      { icon: "building", title: "Órgãos reguladores", text: "Processos administrativos e investigações de agências e órgãos públicos." },
      { icon: "document", title: "Erros profissionais", text: "Falhas técnicas, atrasos e omissões em serviços prestados a clientes." },
    ],
  },
  timeline: {
    eyebrow: "Na prática",
    title: "Da notificação à defesa custeada",
    intro: "Veja como a apólice atua quando um administrador ou a empresa recebe uma reclamação.",
    cta: "Avaliar a nossa exposição",
    items: [
      { time: "Início", title: "Reclamação recebida", text: "O administrador ou a empresa recebe uma notificação, citação ou intimação.", covered: "Aviso imediato à seguradora pela Savá" },
      { time: "Primeiros dias", title: "Análise de cobertura", text: "A seguradora avalia a reclamação e confirma o enquadramento na apólice.", covered: "Acompanhamento técnico da Savá" },
      { time: "Durante o processo", title: "Defesa custeada", text: "Os honorários de advogados e custas são adiantados ao longo do processo.", covered: "Custos de defesa" },
      { time: "Se houver bloqueio", title: "Patrimônio preservado", text: "Despesas pessoais básicas podem ser custeadas durante bloqueios judiciais de bens.", covered: "Bloqueio de bens e despesas pessoais" },
      { time: "Conclusão", title: "Acordo ou condenação", text: "Indenizações e acordos aprovados pela seguradora são pagos até o limite contratado.", covered: "Indenizações e acordos" },
    ],
  },
  coverage: {
    eyebrow: "Coberturas",
    title: "O que cada apólice protege",
    intro: "D&O e E&O são complementares: um protege as pessoas que decidem, o outro protege a empresa pelo serviço que entrega.",
    columns: [
      {
        tag: "D&O",
        title: "Administradores",
        items: [
          { title: "Custos de defesa", text: "Honorários, custas e perícias em processos judiciais e administrativos." },
          { title: "Indenizações e acordos", text: "Valores devidos a terceiros por atos de gestão." },
          { title: "Bloqueio de bens", text: "Despesas pessoais durante a indisponibilidade do patrimônio." },
          { title: "Gerenciamento de crise", text: "Assessoria de comunicação em situações de exposição pública." },
          { title: "Cônjuges e herdeiros", text: "Extensão para reclamações que atinjam familiares por atos do administrador." },
        ],
      },
      {
        tag: "E&O",
        title: "Serviços profissionais",
        items: [
          { title: "Erros e omissões", text: "Prejuízos financeiros causados a clientes por falhas no serviço." },
          { title: "Responsabilidade contratual", text: "Reclamações por descumprimento involuntário de obrigações técnicas." },
          { title: "Custos de defesa", text: "Advogados e peritos em reclamações de clientes." },
          { title: "Perda de documentos", text: "Custos para recompor documentos e dados de clientes." },
        ],
      },
    ],
    note: "As apólices funcionam em base de reclamação: vale a apólice vigente quando a reclamação é apresentada, respeitada a data de retroatividade.",
  },
  checklist: {
    eyebrow: "Subscrição",
    title: "O que as seguradoras avaliam",
    text: "Linhas financeiras exigem análise detalhada. Preparamos as informações para apresentar a empresa da melhor forma ao mercado.",
    items: [
      "Estrutura societária e órgãos de administração",
      "Demonstrações financeiras e nível de endividamento",
      "Histórico de processos e reclamações",
      "Setor de atuação e exposição regulatória",
      "Planos de captação, fusões ou aquisições",
      "Contratos e escopo dos serviços prestados",
    ],
    image: {
      src: "/images/d-o-e-e-o-checklist.webp",
      alt: "Advogada revisando contrato com caneta sobre a mesa",
      label: "Advogada revisando um contrato impresso com caneta em uma mesa de escritório",
      scene:
        "A woman lawyer in her 40s in a dark blazer reviewing a printed contract with a pen at a wooden desk, reading glasses, law books softly blurred on shelves behind, calm concentration, no readable text.",
      orientation: "landscape",
    },
  },
  steps: {
    title: "Da análise de exposição à apólice",
    items: [
      { title: "Mapeamento", text: "Entendemos estrutura societária, atividades e contratos da empresa." },
      { title: "Questionário de subscrição", text: "Preparamos as informações com o jurídico e o financeiro." },
      { title: "Cotação especializada", text: "Levamos o risco às seguradoras de linhas financeiras e comparamos limites e condições." },
      { title: "Apoio em sinistros", text: "Acompanhamos cada reclamação junto à seguradora e aos advogados." },
    ],
  },
  audience: {
    title: "Para quem é",
    text: "Empresas com diretoria, conselho ou sócios investidores, e prestadores de serviços técnicos e consultivos.",
    image: {
      src: "/images/d-o-e-e-o-publico.webp",
      alt: "Executivos apertando as mãos após reunião de negócios",
      label: "Dois executivos apertando as mãos após uma reunião de negócios em escritório",
      scene:
        "Two executives, a man and a woman in business attire, shaking hands after a meeting in a modern office with glass walls and warm wood, colleagues softly blurred in the background.",
      orientation: "landscape",
    },
  },
  exclusions: {
    title: "O que normalmente fica de fora",
    text: "Transparência desde a cotação. Estas são exclusões comuns, e cada apólice tem as suas condições.",
    items: [
      "Atos dolosos e fraudes comprovadas",
      "Fatos conhecidos antes da contratação e não informados",
      "Ganhos ou vantagens pessoais indevidas",
      "Multas não seguráveis pela legislação",
      "Danos corporais e materiais, cobertos em RC geral",
    ],
  },
  faq: [
    { q: "Qual a diferença entre D&O e E&O?", a: "O D&O protege o patrimônio pessoal de administradores por atos de gestão. O E&O protege a empresa contra reclamações de clientes por erros ou omissões profissionais." },
    { q: "Empresas de capital fechado precisam de D&O?", a: "Sim. Administradores de empresas fechadas também respondem por atos de gestão, especialmente em questões trabalhistas, tributárias e ambientais." },
    { q: "O seguro cobre atos anteriores à contratação?", a: "Pode cobrir, por meio da data de retroatividade definida na apólice, desde que os fatos não fossem conhecidos na contratação." },
    { q: "Quem está protegido pelo D&O?", a: "Diretores, conselheiros e gestores com poder de decisão, inclusive ex-administradores, conforme a definição da apólice." },
    { q: "O E&O é o mesmo que RC profissional?", a: "São equivalentes. O nome E&O é mais usado para empresas de serviços, como tecnologia, engenharia e consultorias." },
    { q: "A empresa pode pagar o D&O dos administradores?", a: "Sim. A apólice é contratada pela empresa em benefício dos administradores e é uma ferramenta importante para atrair bons executivos." },
  ],
};
