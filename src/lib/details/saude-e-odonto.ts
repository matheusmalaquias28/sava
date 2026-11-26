import type { SolutionDetail } from "./types";

// [A CONFIRMAR] revisão técnica da Savá: regras de operadoras, carências e reajustes seguem a ANS e cada contrato.
export const saudeOdonto: SolutionDetail = {
  metaTitle: "Plano de Saúde Empresarial em Vitória, ES",
  metaDescription:
    "Plano de saúde e odontológico empresarial com estudo de rede, gestão de sinistralidade e negociação de reajustes. A partir de 2 vidas, em Vitória, ES.",
  heroTitle: "Planos de Saúde e Odontológicos empresariais",
  heroLead:
    "O benefício mais valorizado pelos colaboradores, gerido com dados para que a rede seja adequada e o reajuste não comprometa o resultado da empresa.",
  facts: [
    { value: "2 vidas", label: "já permitem contratar plano empresarial em muitas operadoras" },
    { value: "Anual", label: "é o ciclo de reajuste, que negociamos com base na sinistralidade" },
    { value: "ANS", label: "regula os planos e garante coberturas mínimas obrigatórias" },
  ],
  context: {
    eyebrow: "Por que contratar com gestão",
    title: "Plano de saúde sem gestão é reajuste acima da inflação.",
    paragraphs: [
      "O plano de saúde costuma ser o segundo maior custo com pessoas. Sem acompanhamento, a sinistralidade sobe, o reajuste chega alto e a empresa fica entre cortar o benefício ou comprometer o resultado.",
      "Comparamos operadoras e redes, acompanhamos a utilização ao longo do ano e chegamos à renovação com dados na mesa. No dia a dia, atendemos os colaboradores para que o RH não vire central de reclamações.",
    ],
    image: {
      src: "/images/saude-e-odonto-contexto.webp",
      alt: "Diretora de RH e consultor comparando propostas de planos de saúde",
      label: "Diretora de RH e consultor comparando propostas de planos de saúde em uma mesa de reunião",
      scene:
        "A woman HR director in her 50s and a male consultant in a light blazer sitting side by side at a meeting table comparing printed proposals and a laptop with simple charts, calm discussion, bright office.",
      orientation: "portrait",
    },
  },
  risks: {
    eyebrow: "Desafios do benefício",
    title: "O que pressiona o custo do plano",
    intro: "O custo do plano é resultado da utilização e do contrato. Entender esses fatores é o primeiro passo para controlá-lo.",
    items: [
      { icon: "chart", title: "Reajustes elevados", text: "A combinação de inflação médica e sinistralidade alta gera reajustes acima da inflação geral." },
      { icon: "heart", title: "Sinistralidade alta", text: "Poucos casos de alto custo podem desequilibrar o contrato de uma empresa inteira." },
      { icon: "building", title: "Rede inadequada", text: "Rede que não atende onde os colaboradores estão gera insatisfação e uso ineficiente." },
      { icon: "user", title: "Atendimento ao colaborador", text: "Dúvidas sobre carência, reembolso e autorizações sobrecarregam o RH." },
    ],
  },
  timeline: {
    eyebrow: "Na prática",
    title: "Um ano de gestão do benefício",
    intro: "A gestão do plano não acontece só na renovação. Veja como acompanhamos o contrato ao longo do ano.",
    cta: "Analisar o meu plano",
    items: [
      { time: "Mês 1", title: "Implantação", text: "Cadastro das vidas, carteirinhas e orientação aos colaboradores sobre rede, carências e reembolso.", covered: "Implantação acompanhada" },
      { time: "Todo mês", title: "Atendimento", text: "Resolvemos autorizações, reembolsos e dúvidas dos colaboradores junto à operadora.", covered: "Atendimento ao colaborador" },
      { time: "Trimestral", title: "Sinistralidade", text: "Acompanhamos a utilização e identificamos casos que exigem gestão ou programas de saúde.", covered: "Relatórios de utilização" },
      { time: "Pré-renovação", title: "Estudo de mercado", text: "Comparamos o contrato atual com outras operadoras e preparamos os argumentos da negociação.", covered: "Estudo comparativo" },
      { time: "Renovação", title: "Negociação do reajuste", text: "Negociamos com dados e, quando faz sentido, conduzimos a migração para outra operadora.", covered: "Negociação ou migração" },
    ],
  },
  coverage: {
    eyebrow: "Soluções",
    title: "O que entregamos",
    intro: "Planos e serviços combinados de acordo com o perfil das vidas, a região e o orçamento da empresa.",
    columns: [
      {
        tag: "Planos",
        title: "Saúde e odontologia",
        items: [
          { title: "Planos de saúde empresariais", text: "Ambulatorial, hospitalar e obstetrícia, com abrangência regional ou nacional." },
          { title: "Planos odontológicos", text: "Prevenção, tratamentos e urgências com rede ampla e baixo custo por vida." },
          { title: "Coparticipação", text: "Modelos que reduzem a mensalidade e estimulam o uso consciente." },
          { title: "Reembolso", text: "Livre escolha de profissionais com reembolso, conforme o plano." },
          { title: "Telemedicina", text: "Consultas online que agilizam o atendimento e reduzem custos." },
        ],
      },
      {
        tag: "Gestão",
        title: "Sustentabilidade do benefício",
        items: [
          { title: "Estudo de rede credenciada", text: "Hospitais, laboratórios e clínicas onde os colaboradores realmente estão." },
          { title: "Gestão de sinistralidade", text: "Acompanhamento da utilização e ações para equilibrar o contrato." },
          { title: "Negociação de reajustes", text: "Renovação conduzida com dados e comparação de mercado." },
          { title: "Programas de saúde", text: "Ações preventivas e acompanhamento de crônicos para reduzir custos." },
        ],
      },
    ],
    note: "Coberturas mínimas seguem o Rol de Procedimentos da ANS. Carências e regras de portabilidade dependem de cada contrato.",
  },
  checklist: {
    eyebrow: "Análise do perfil",
    title: "O que avaliamos para escolher o plano",
    text: "O plano ideal depende de quem vai usá-lo e de onde. Estes são os pontos que analisamos antes de cotar.",
    items: [
      "Perfil etário das vidas e dependentes",
      "Rede desejada: hospitais, laboratórios e especialidades",
      "Abrangência regional ou nacional",
      "Acomodação em enfermaria ou apartamento",
      "Modelo de coparticipação adequado ao orçamento",
      "Histórico de utilização do contrato atual",
    ],
    image: {
      src: "/images/saude-e-odonto-checklist.webp",
      alt: "Médica atendendo paciente em consultório",
      label: "Médica atendendo um paciente em consultório claro e acolhedor",
      scene:
        "A female doctor in a white coat listening attentively to a middle-aged male patient seated across her desk in a bright, calm consultation room with light wood furniture and a plant.",
      orientation: "landscape",
    },
  },
  steps: {
    title: "Do estudo de rede à renovação negociada",
    items: [
      { title: "Diagnóstico das vidas", text: "Levantamos perfil, localização e histórico de utilização." },
      { title: "Estudo de rede e planos", text: "Comparamos operadoras, redes e modelos de coparticipação." },
      { title: "Implantação", text: "Conduzimos a contratação ou a migração, com orientação aos colaboradores." },
      { title: "Gestão contínua", text: "Atendimento no dia a dia e acompanhamento da sinistralidade até a renovação." },
    ],
  },
  audience: {
    title: "Para quem é",
    text: "Empresas que querem oferecer um plano de qualidade sem perder o controle do custo ano após ano.",
    image: {
      src: "/images/saude-e-odonto-publico.webp",
      alt: "Colaboradora em consulta de telemedicina pelo notebook",
      label: "Colaboradora fazendo uma consulta de telemedicina pelo notebook em um ambiente de trabalho",
      scene:
        "A young professional woman in a navy blouse sitting at a desk in a bright office, smiling slightly during a video consultation on her laptop, the screen showing a blurred doctor, plants in the background.",
      orientation: "landscape",
    },
  },
  exclusions: {
    title: "Pontos de atenção",
    text: "Transparência desde a cotação. Estes pontos variam entre operadoras e contratos.",
    items: [
      "Carências para novos beneficiários, conforme o contrato",
      "Cobertura parcial temporária para doenças preexistentes",
      "Procedimentos fora do Rol da ANS sem previsão contratual",
      "Atendimento fora da área de abrangência contratada",
      "Reembolso limitado aos valores da tabela do plano",
    ],
  },
  faq: [
    { q: "Qual o número mínimo de vidas para um plano empresarial?", a: "Muitas operadoras aceitam contratos a partir de 2 vidas, com regras específicas para pequenas empresas." },
    { q: "Vocês ajudam a reduzir o reajuste?", a: "Sim. Acompanhamos a sinistralidade, preparamos a negociação com dados e comparamos o contrato com o mercado antes da renovação." },
    { q: "É possível migrar de operadora sem perder carências?", a: "Em muitos casos, sim. A portabilidade e as negociações de aproveitamento de carência dependem das regras da ANS e da operadora." },
    { q: "Plano odontológico pode ser contratado separado?", a: "Sim. O plano odontológico pode ser contratado sozinho ou junto com o de saúde, com custo por vida bem acessível." },
    { q: "Dependentes podem ser incluídos?", a: "Sim. Cônjuges e filhos podem ser incluídos, com custeio pela empresa, pelo colaborador ou compartilhado." },
    { q: "Coparticipação vale a pena?", a: "Pode reduzir bastante a mensalidade e estimular o uso consciente. Avaliamos o perfil de utilização para definir percentuais que façam sentido." },
  ],
};
