import type { SolutionDetail } from "./types";

// [A CONFIRMAR] revisão técnica da Savá: coberturas e exclusões variam por seguradora e apólice.
export const responsabilidadeCivil: SolutionDetail = {
  metaTitle: "Seguro de Responsabilidade Civil Empresarial",
  metaDescription:
    "Seguro de responsabilidade civil geral, empregador, profissional, obras e produtos, com limites que atendem contratos, clientes e licitações.",
  heroTitle: "Responsabilidade Civil para empresas",
  heroLead:
    "Um acidente com cliente, uma falha em produto ou um dano em obra não precisam sair do caixa da empresa. A apólice de RC assume a defesa e as indenizações.",
  facts: [
    { value: "Contratos", label: "clientes e licitações exigem cada vez mais apólices de RC com limites definidos" },
    { value: "Defesa", label: "custos de advogados e perícias incluídos nas coberturas" },
    { value: "Terceiros", label: "danos materiais, corporais e morais, conforme a contratação" },
  ],
  context: {
    eyebrow: "Por que contratar",
    title: "Um único processo pode consumir anos de lucro.",
    paragraphs: [
      "Acidentes com clientes, prestadores ou vizinhos, falhas em produtos e danos causados durante obras geram processos longos e caros. Sem cobertura, a indenização e a defesa saem direto do caixa.",
      "Analisamos as atividades e os contratos da empresa, inclusive as exigências de clientes e editais, para estruturar apólices com limites adequados e cláusulas que realmente atendem às obrigações assumidas.",
    ],
    image: {
      src: "/images/responsabilidade-civil-contexto.webp",
      alt: "Engenheiro e técnico de segurança revisando projeto em canteiro de obras",
      label: "Engenheiro e técnico de segurança de capacete revisando um projeto em canteiro de obras",
      scene:
        "On a building construction site, a civil engineer and a safety technician wearing white hard hats and high visibility vests reviewing large printed plans together, concrete structure and scaffolding behind, overcast daylight.",
      orientation: "portrait",
    },
  },
  risks: {
    eyebrow: "Principais riscos",
    title: "Situações que geram reclamações",
    intro: "Toda atividade empresarial gera exposição a terceiros. O que muda é a intensidade e o tipo de dano.",
    items: [
      { icon: "user", title: "Acidentes com terceiros", text: "Clientes, visitantes e prestadores que se ferem nas instalações ou nas operações da empresa." },
      { icon: "box", title: "Falhas em produtos", text: "Produtos defeituosos que causam danos a consumidores ou a outras empresas." },
      { icon: "building", title: "Danos em obras", text: "Danos a imóveis vizinhos, redes públicas e pessoas durante a execução de obras." },
      { icon: "water", title: "Danos ambientais", text: "Vazamentos e contaminações com custos de limpeza e indenizações." },
    ],
  },
  timeline: {
    eyebrow: "Na prática",
    title: "Da reclamação à indenização",
    intro: "Veja como a apólice de RC atua quando um terceiro reclama de um dano causado pela empresa.",
    cta: "Revisar as nossas exigências",
    items: [
      { time: "Início", title: "Reclamação do terceiro", text: "Um cliente, vizinho ou parceiro comunica um dano ou ingressa com uma ação.", covered: "Aviso imediato pela Savá" },
      { time: "Primeiros dias", title: "Sem assumir culpa", text: "A empresa não deve reconhecer responsabilidade ou fazer acordos sem a anuência da seguradora.", covered: "Orientação da Savá" },
      { time: "Análise", title: "Regulação", text: "A seguradora apura o evento, os danos e a responsabilidade da empresa.", covered: "Acompanhamento técnico" },
      { time: "Durante o processo", title: "Defesa", text: "Advogados e peritos atuam na defesa, com custos cobertos pela apólice.", covered: "Custos de defesa" },
      { time: "Conclusão", title: "Indenização", text: "Acordos ou condenações são pagos pela seguradora até o limite contratado.", covered: "Danos materiais, corporais e morais" },
    ],
  },
  coverage: {
    eyebrow: "Coberturas",
    title: "As modalidades de RC",
    intro: "Cada atividade tem uma exposição diferente. Combinamos as modalidades necessárias em uma estrutura coerente com os contratos.",
    columns: [
      {
        tag: "Operações",
        title: "RC geral",
        items: [
          { title: "RC operações", text: "Danos a terceiros decorrentes das atividades e instalações da empresa." },
          { title: "RC empregador", text: "Acidentes de trabalho com colaboradores, complementando o INSS." },
          { title: "RC obras", text: "Danos a terceiros e vizinhos durante a execução de obras civis." },
          { title: "RC eventos", text: "Danos a público e participantes em feiras, eventos e ações promocionais." },
        ],
      },
      {
        tag: "Produtos e serviços",
        title: "RC específica",
        items: [
          { title: "RC produtos", text: "Danos causados por produtos fabricados ou comercializados, no Brasil e no exterior." },
          { title: "RC profissional", text: "Prejuízos a clientes por erros técnicos na prestação de serviços." },
          { title: "RC ambiental", text: "Poluição súbita ou gradual, com custos de limpeza e indenizações." },
          { title: "Recall", text: "Custos de retirada de produtos do mercado, quando contratado." },
        ],
      },
    ],
    note: "Limites e franquias são definidos a partir da atividade, do faturamento e das exigências contratuais.",
  },
  checklist: {
    eyebrow: "Análise de risco",
    title: "O que avaliamos antes de cotar",
    text: "A apólice precisa refletir a atividade real e cumprir o que foi prometido em contrato. Estes são os pontos que levantamos.",
    items: [
      "Atividades, locais e tipo de público atendido",
      "Exigências de contratos, clientes e editais",
      "Faturamento e número de colaboradores",
      "Produtos fabricados e mercados atendidos",
      "Histórico de reclamações e processos",
      "Limites e franquias exigidos ou desejados",
    ],
    image: {
      src: "/images/responsabilidade-civil-checklist.webp",
      alt: "Trabalhador com cinto de segurança em andaime de obra",
      label: "Trabalhador com cinto de segurança e capacete trabalhando em um andaime de obra",
      scene:
        "A construction worker wearing a white hard hat and a full safety harness clipped to a scaffold, working carefully on a building facade, blue sky and concrete structure, realistic safety equipment.",
      orientation: "landscape",
    },
  },
  steps: {
    title: "Do contrato à apólice em quatro etapas",
    items: [
      { title: "Leitura dos contratos", text: "Identificamos exigências de clientes e editais e as exposições da atividade." },
      { title: "Desenho das coberturas", text: "Definimos modalidades, limites e franquias adequados." },
      { title: "Cotação e emissão", text: "Comparamos seguradoras e emitimos com agilidade para não atrasar contratos." },
      { title: "Acompanhamento", text: "Apoiamos a empresa em cada reclamação até a solução." },
    ],
  },
  audience: {
    title: "Para quem é",
    text: "Empresas que recebem público, executam obras, fabricam produtos ou prestam serviços a terceiros.",
    image: {
      src: "/images/responsabilidade-civil-publico.webp",
      alt: "Equipe montando auditório para evento corporativo",
      label: "Equipe organizando cadeiras e palco em um auditório para um evento corporativo",
      scene:
        "Event staff in navy polo shirts arranging rows of chairs and setting up a small stage in a bright corporate auditorium with wood paneling before an event, calm preparation.",
      orientation: "landscape",
    },
  },
  exclusions: {
    title: "O que normalmente fica de fora",
    text: "Transparência desde a cotação. Estas são exclusões comuns, e cada apólice tem as suas condições.",
    items: [
      "Danos a bens da própria empresa, cobertos no seguro empresarial",
      "Multas e penalidades contratuais",
      "Atos dolosos e descumprimento intencional de normas",
      "Danos conhecidos antes da contratação",
      "Atividades não declaradas na proposta",
    ],
  },
  faq: [
    { q: "Meu contrato exige seguro de RC. Vocês emitem rapidamente?", a: "Sim. Com as informações da empresa e do contrato, emitimos a apólice com agilidade para não atrasar o início dos trabalhos." },
    { q: "RC profissional é o mesmo que E&O?", a: "São equivalentes. Ambos protegem contra reclamações por erros ou omissões na prestação de serviços profissionais." },
    { q: "A apólice cobre danos morais?", a: "Pode cobrir, quando a cobertura de danos morais é contratada e o dano moral decorre de um evento coberto." },
    { q: "RC empregador substitui o seguro de acidentes do INSS?", a: "Não. Ele complementa, cobrindo indenizações que a empresa venha a pagar por acidentes de trabalho com culpa reconhecida." },
    { q: "Posso ter uma apólice para várias obras?", a: "Sim. Construtoras podem contratar apólices que cobrem diversas obras, com regras de inclusão ao longo da vigência." },
    { q: "Produtos exportados têm cobertura?", a: "Sim, desde que contratada a extensão para o exterior, com limites compatíveis com os mercados atendidos." },
  ],
};
