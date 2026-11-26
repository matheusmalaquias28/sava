import type { SolutionDetail } from "./types";

// [A CONFIRMAR] revisão técnica da Savá: coberturas e exclusões variam por seguradora e apólice.
export const seguroCyber: SolutionDetail = {
  metaTitle: "Seguro Cyber para Empresas",
  metaDescription:
    "Seguro cyber com resposta a incidentes 24h, ransomware, vazamento de dados, lucros cessantes e defesa em processos da LGPD. Cotação especializada.",
  heroTitle: "Seguro Cyber para empresas",
  heroLead:
    "Quando um ataque acontece, cada hora conta. O seguro cyber coloca peritos, advogados e recursos financeiros à disposição da sua empresa para conter o incidente, recuperar a operação e responder a clientes e à ANPD.",
  facts: [
    { value: "2%", label: "do faturamento é o teto da multa da LGPD por infração, limitada a R$ 50 milhões" },
    { value: "3 dias úteis", label: "é o prazo para comunicar à ANPD um incidente com risco relevante aos titulares" },
    { value: "24h", label: "por dia a central de resposta da seguradora fica disponível para acionamento" },
  ],
  context: {
    eyebrow: "Por que contratar",
    title: "Não é questão de se a sua empresa vai sofrer um incidente. É de quando.",
    paragraphs: [
      "Ataques digitais atingem empresas de todos os portes e setores. Além da operação parada, um incidente gera custos que pegam a empresa despreparada: perícia, advogados, notificação de clientes, multas da LGPD e o desgaste com a reputação.",
      "O seguro cyber transfere esse impacto financeiro para a seguradora e, principalmente, entrega uma equipe especializada pronta para agir no momento em que a sua empresa mais precisa.",
    ],
    image: {
      src: "/images/cyber-resposta.webp",
      alt: "Equipe de uma empresa reunida com especialistas analisando um incidente de segurança",
      label: "Equipe reunida com especialistas analisando um incidente de segurança em sala de reunião",
      scene:
        "Inside a modern corporate meeting room, three professionals around a light wood table reviewing an incident report: a woman IT manager in her 40s pointing at a laptop, a man in a navy suit taking notes, a younger analyst holding printed documents. Serious, focused, calm.",
      orientation: "portrait",
    },
  },
  risks: {
    eyebrow: "Principais ameaças",
    title: "Os riscos que mais param empresas hoje",
    intro: "A maior parte dos incidentes começa de forma simples: um e-mail convincente, uma senha fraca ou um sistema desatualizado.",
    items: [
      { icon: "lock", title: "Ransomware", text: "Sistemas e arquivos criptografados por criminosos, com pedido de resgate e operação parada até a recuperação." },
      { icon: "mail", title: "Phishing e fraude por e-mail", text: "Contas corporativas invadidas ou falsificadas para desviar pagamentos e obter acesso a dados sensíveis." },
      { icon: "database", title: "Vazamento de dados", text: "Exposição de dados de clientes, pacientes ou colaboradores, com obrigação de notificar e risco de processos." },
      { icon: "user", title: "Erro humano e acesso indevido", text: "Um clique errado, uma senha reutilizada ou um ex-colaborador com acesso ativo abrem a porta para o incidente." },
    ],
  },
  timeline: {
    eyebrow: "Na prática",
    title: "Do primeiro minuto à última indenização",
    intro: "Veja como um incidente se desenrola e em que momento cada cobertura entra para proteger a sua empresa.",
    cta: "Avaliar a minha empresa",
    items: [
      { time: "Hora 0", title: "Detecção e acionamento", text: "A empresa identifica o ataque e liga para a central de emergência da apólice, disponível 24 horas.", covered: "Central de resposta a incidentes" },
      { time: "Primeiras horas", title: "Contenção e perícia", text: "Especialistas forenses isolam o problema, preservam evidências e descobrem a origem e a extensão do ataque.", covered: "Perícia forense e consultoria jurídica" },
      { time: "Primeiros dias", title: "Recuperação da operação", text: "Sistemas e dados são restaurados. O período de paralisação gera perda de receita e custos extras.", covered: "Restauração de dados e lucros cessantes" },
      { time: "Até 3 dias úteis", title: "Notificações obrigatórias", text: "Quando há dados pessoais envolvidos, a ANPD e os titulares afetados precisam ser comunicados.", covered: "Custos de notificação e assessoria LGPD" },
      { time: "Semanas seguintes", title: "Reputação e reclamações", text: "Clientes, parceiros e imprensa reagem. Podem surgir processos de terceiros e procedimentos administrativos.", covered: "Gestão de crise, defesa e indenizações" },
    ],
  },
  coverage: {
    eyebrow: "Coberturas",
    title: "O que a apólice protege",
    intro: "Uma apólice cyber combina coberturas para os prejuízos da sua empresa e para as reclamações de terceiros. Limites e sublimites são definidos no diagnóstico.",
    columns: [
      {
        tag: "Primeira parte",
        title: "Danos à sua empresa",
        items: [
          { title: "Resposta a incidentes", text: "Central 24h, peritos forenses, advogados especializados e consultoria técnica desde o primeiro contato." },
          { title: "Restauração de dados e sistemas", text: "Custos para recuperar, recriar ou restaurar dados e softwares afetados pelo ataque." },
          { title: "Extorsão cibernética", text: "Negociação com os criminosos e despesas relacionadas, nas condições previstas em apólice e na lei." },
          { title: "Interrupção de negócios", text: "Lucro líquido perdido e despesas extras enquanto os sistemas estão fora do ar." },
          { title: "Notificação de titulares", text: "Comunicação aos afetados, central de atendimento e monitoramento quando necessário." },
          { title: "Gestão de crise e reputação", text: "Assessoria de imprensa e comunicação para reduzir o impacto na marca." },
        ],
      },
      {
        tag: "Responsabilidade civil",
        title: "Reclamações de terceiros",
        items: [
          { title: "Responsabilidade por dados", text: "Reclamações de clientes, pacientes e parceiros por vazamento ou uso indevido de dados." },
          { title: "Segurança de rede", text: "Danos a terceiros causados por vírus transmitido ou ataque originado na sua rede." },
          { title: "Processos administrativos", text: "Defesa perante ANPD, Procon e outros órgãos, e multas quando seguráveis por lei." },
          { title: "Responsabilidade de mídia", text: "Reclamações por conteúdo publicado em canais digitais, como violação de marca ou difamação." },
        ],
      },
    ],
    note: "Coberturas adicionais, como fraude por engenharia social e falha de fornecedores de tecnologia, podem ser incluídas conforme a seguradora.",
  },
  checklist: {
    eyebrow: "Subscrição",
    title: "O que as seguradoras avaliam",
    text: "Antes de emitir a apólice, a seguradora analisa os controles de segurança da empresa. Quanto mais maduros, melhores as condições. A Savá orienta a sua equipe de TI em cada ponto.",
    items: [
      "Autenticação em dois fatores no e-mail e nos acessos remotos",
      "Backup frequente, com cópia isolada da rede e teste de restauração",
      "Antivírus gerenciado ou EDR nas estações e servidores",
      "Sistemas e equipamentos atualizados, sem versões sem suporte",
      "Treinamento recorrente da equipe contra phishing",
      "Plano de resposta a incidentes com responsáveis definidos",
    ],
    image: {
      src: "/images/cyber-controles.webp",
      alt: "Profissional de TI acessando o computador com chave de segurança física",
      label: "Profissional de TI usando chave de segurança física (autenticação em dois fatores) no notebook",
      scene:
        "Close-up of a professional's hands plugging a small black hardware security key into the USB-C port of a silver laptop on a light oak desk, navy sweater sleeve, ceramic coffee cup and closed notebook nearby, laptop screen softly out of focus with a plain login screen.",
      orientation: "landscape",
    },
  },
  steps: {
    title: "Da análise de risco à apólice em quatro etapas",
    items: [
      { title: "Diagnóstico", text: "Entendemos a operação, os dados que a empresa trata e a dependência dos sistemas para faturar." },
      { title: "Questionário com a TI", text: "Preenchemos com a sua equipe o questionário técnico das seguradoras, apontando o que melhorar antes." },
      { title: "Cotação especializada", text: "Levamos o risco às seguradoras com carteira cyber e comparamos limites, sublimites e franquias." },
      { title: "Apólice e plano de resposta", text: "Entregamos a apólice com o passo a passo de acionamento e os contatos de emergência à mão." },
    ],
  },
  audience: {
    title: "Para quem é",
    text: "Toda empresa que depende de sistemas para faturar ou que guarda dados de clientes, pacientes e colaboradores.",
    image: {
      src: "/images/cyber-setores.webp",
      alt: "Recepção de clínica com atendente cadastrando dados de paciente no computador",
      label: "Recepção de clínica ou escritório com atendente cadastrando dados de cliente no computador",
      scene:
        "Modern medical clinic reception, a receptionist in light blue scrubs typing patient registration data on a desktop computer at a white counter, a patient seen partially from behind, light wood and beige interior, small plant on the counter.",
      orientation: "landscape",
    },
  },
  exclusions: {
    title: "O que normalmente fica de fora",
    text: "Transparência desde a cotação. Estas são exclusões comuns, e cada apólice tem as suas condições.",
    items: [
      "Incidentes já conhecidos antes da contratação",
      "Falhas de infraestrutura externa, como energia e telecomunicações",
      "Melhorias de sistema além da restauração ao estado anterior",
      "Atos de guerra e eventos de escala nacional, conforme a apólice",
      "Multas e penalidades não seguráveis pela legislação brasileira",
    ],
  },
  faq: [
    { q: "Minha empresa é pequena, preciso de seguro cyber?", a: "Sim. Empresas menores são alvos frequentes justamente por terem menos camadas de proteção, e um único incidente pode comprometer meses de faturamento." },
    { q: "O seguro paga o resgate de um ransomware?", a: "As apólices cobrem custos de resposta e recuperação e, em algumas condições, despesas de extorsão. Cada caso segue a apólice e a legislação vigente, e a decisão é tomada com os especialistas da seguradora." },
    { q: "Preciso ter uma estrutura de TI robusta para contratar?", a: "Não necessariamente. As seguradoras avaliam controles mínimos, como backup e autenticação em dois fatores, e orientamos sua equipe nessa preparação." },
    { q: "Fraude de pagamento por e-mail falso está coberta?", a: "Depende da apólice. A fraude por engenharia social costuma ser uma cobertura adicional, com limite próprio. Avaliamos se faz sentido para o seu fluxo financeiro." },
    { q: "Quanto custa um seguro cyber?", a: "O prêmio depende do faturamento, do setor, do volume de dados tratados e dos controles de segurança. Empresas com boas práticas costumam conseguir condições melhores." },
    { q: "O que fazer no momento de um ataque?", a: "Ligar para a central de emergência indicada na apólice antes de qualquer ação. Desligar equipamentos ou negociar por conta própria pode destruir evidências e prejudicar a cobertura." },
  ],
};
