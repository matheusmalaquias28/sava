import type { SolutionDetail } from "./types";

// [A CONFIRMAR] revisão técnica da Savá: coberturas e exclusões variam por seguradora e apólice.
export const transporteEquipamentos: SolutionDetail = {
  metaTitle: "Seguro de Transporte, Carga e RCTR-C",
  metaDescription:
    "Seguro de transporte nacional e internacional, RCTR-C, RC-DC e máquinas e equipamentos, com apólice anual e averbação simples. Atendimento no ES.",
  heroTitle: "Seguro de Transporte, Cargas e Equipamentos",
  heroLead:
    "Mercadorias protegidas do embarque ao destino e equipamentos cobertos onde estiverem trabalhando, com apólices anuais e averbação simples para cada operação.",
  facts: [
    { value: "1 apólice anual", label: "cobre todos os embarques do período, com averbação de cada viagem" },
    { value: "RCTR-C", label: "é o seguro obrigatório para transportadores rodoviários de carga" },
    { value: "Porta a porta", label: "a cobertura pode acompanhar a carga do embarque ao destino final" },
  ],
  context: {
    eyebrow: "Por que contratar",
    title: "Uma carga perdida compromete muito mais do que a mercadoria.",
    paragraphs: [
      "Avarias, roubo de carga, acidentes na estrada e falhas de equipamentos geram prejuízos que se espalham por contratos, prazos e relacionamento com clientes. Para quem opera pelo Espírito Santo, porta de entrada logística do país, essa exposição é diária.",
      "Estruturamos apólices de acordo com as rotas, as mercadorias e as responsabilidades de cada elo da cadeia, para que o embarcador, o transportador e o dono do equipamento saibam exatamente o que está protegido.",
    ],
    image: {
      src: "/images/transporte-e-equipamentos-contexto.webp",
      alt: "Equipe de operação portuária verificando contêineres no terminal",
      label: "Profissionais de capacete e colete conferindo contêineres em um terminal portuário",
      scene:
        "At a container port terminal, two logistics professionals wearing white hard hats and high visibility vests checking a clipboard in front of stacked shipping containers, cranes in the background, overcast daylight.",
      orientation: "portrait",
    },
  },
  risks: {
    eyebrow: "Principais riscos",
    title: "O que mais gera perdas no transporte",
    intro: "Os riscos mudam com a rota, a mercadoria e o modal. Por isso cada apólice é desenhada para a operação real.",
    items: [
      { icon: "theft", title: "Roubo de carga", text: "Mercadorias de alto valor são alvo frequente, especialmente em rotas e horários de maior risco." },
      { icon: "truck", title: "Acidentes rodoviários", text: "Colisões, tombamentos e capotagens que danificam a carga e atrasam entregas." },
      { icon: "box", title: "Avarias e manuseio", text: "Danos na carga e descarga, no armazenamento ou por acondicionamento inadequado." },
      { icon: "gear", title: "Quebra de equipamentos", text: "Máquinas e equipamentos danificados em operação, transporte ou montagem." },
    ],
  },
  timeline: {
    eyebrow: "Na prática",
    title: "Do embarque à indenização da carga",
    intro: "Veja como funciona a proteção de uma carga, do registro da viagem até o pagamento em caso de sinistro.",
    cta: "Estruturar a minha apólice",
    items: [
      { time: "Antes da viagem", title: "Averbação do embarque", text: "Cada embarque é registrado na apólice anual, de forma simples e integrada ao seu fluxo de documentos.", covered: "Apólice anual com averbação" },
      { time: "Durante o trajeto", title: "Gerenciamento de risco", text: "Rastreamento, escolta e regras de rota previstas no plano de gerenciamento de risco reduzem a exposição.", covered: "Condições do gerenciamento de risco" },
      { time: "Hora 0", title: "Ocorrência", text: "Em caso de acidente, roubo ou avaria, a ocorrência é comunicada imediatamente à seguradora e à Savá.", covered: "Abertura do sinistro pela Savá" },
      { time: "Primeiros dias", title: "Vistoria e regulação", text: "O regulador avalia a carga, os documentos fiscais e as circunstâncias do evento.", covered: "Acompanhamento técnico da regulação" },
      { time: "Conclusão", title: "Indenização", text: "A carga é indenizada conforme o valor declarado e as condições da apólice.", covered: "Transporte nacional, RCTR-C ou RC-DC" },
    ],
  },
  coverage: {
    eyebrow: "Coberturas",
    title: "O que as apólices protegem",
    intro: "Embarcadores, transportadores e donos de equipamentos têm responsabilidades diferentes. Cada um precisa da apólice certa.",
    columns: [
      {
        tag: "Mercadorias",
        title: "Transporte e cargas",
        items: [
          { title: "Transporte nacional", text: "Proteção da mercadoria do embarcador em viagens dentro do Brasil, por qualquer modal." },
          { title: "Importação e exportação", text: "Cobertura internacional da carga, com opções porta a porta." },
          { title: "RCTR-C", text: "Responsabilidade do transportador rodoviário por danos à carga em acidentes." },
          { title: "RC-DC", text: "Responsabilidade do transportador por roubo e desaparecimento da carga." },
          { title: "Armazenagem em trânsito", text: "Período em que a carga permanece em armazéns durante a operação." },
        ],
      },
      {
        tag: "Ativos operacionais",
        title: "Máquinas e equipamentos",
        items: [
          { title: "Equipamentos móveis", text: "Máquinas pesadas, empilhadeiras e equipamentos em uso em obras e operações." },
          { title: "Riscos de engenharia", text: "Obras civis, instalações e montagens durante a execução." },
          { title: "Equipamentos de terceiros", text: "Máquinas locadas ou cedidas sob responsabilidade da empresa." },
          { title: "Lucros cessantes de equipamentos", text: "Perda de receita quando um equipamento crítico fica parado." },
        ],
      },
    ],
    note: "A contratação de RCTR-C e RC-DC é exigida por lei e por contratantes. Verificamos as exigências de cada contrato.",
  },
  checklist: {
    eyebrow: "Análise de risco",
    title: "O que a seguradora avalia na sua operação",
    text: "O preço da apólice depende da mercadoria, das rotas e das medidas de proteção. Organizamos essas informações para obter as melhores condições.",
    items: [
      "Tipo de mercadoria e valor médio por embarque",
      "Rotas, regiões e horários de circulação",
      "Plano de gerenciamento de risco: rastreamento e escolta",
      "Acondicionamento, embalagem e amarração da carga",
      "Perfil das transportadoras e motoristas",
      "Histórico de perdas dos últimos anos",
    ],
    image: {
      src: "/images/transporte-e-equipamentos-checklist.webp",
      alt: "Operador prendendo cintas de amarração em paletes dentro de caminhão",
      label: "Operador prendendo cintas de amarração em paletes dentro de um baú de caminhão",
      scene:
        "Inside the cargo area of a truck, a worker in a navy uniform and work gloves tightening yellow ratchet straps over shrink wrapped pallets, warehouse loading dock light behind.",
      orientation: "landscape",
    },
  },
  steps: {
    title: "Da análise das rotas à apólice em quatro etapas",
    items: [
      { title: "Mapeamento da operação", text: "Entendemos mercadorias, rotas, modais e responsabilidades contratuais." },
      { title: "Desenho das apólices", text: "Definimos coberturas, limites por embarque e regras de gerenciamento de risco." },
      { title: "Cotação especializada", text: "Levamos a operação às seguradoras com carteira de transportes e comparamos condições." },
      { title: "Averbação e sinistros", text: "Apoiamos a rotina de averbação e acompanhamos cada ocorrência até a indenização." },
    ],
  },
  audience: {
    title: "Para quem é",
    text: "Empresas que embarcam, transportam ou dependem de máquinas e equipamentos para entregar resultado.",
    image: {
      src: "/images/transporte-e-equipamentos-publico.webp",
      alt: "Empilhadeira movimentando paletes em centro de distribuição",
      label: "Empilhadeira movimentando paletes em um centro de distribuição bem organizado",
      scene:
        "A forklift operator in a navy uniform moving a pallet of boxed goods inside a large, organized distribution center with tall racks, daylight from skylights.",
      orientation: "landscape",
    },
  },
  exclusions: {
    title: "O que normalmente fica de fora",
    text: "Transparência desde a cotação. Estas são exclusões comuns, e cada apólice tem as suas condições.",
    items: [
      "Embarques não averbados dentro do prazo",
      "Descumprimento do plano de gerenciamento de risco",
      "Embalagem inadequada ou vício próprio da mercadoria",
      "Atrasos e perdas de mercado sem dano à carga",
      "Mercadorias proibidas ou sem documentação fiscal",
    ],
  },
  faq: [
    { q: "O seguro do transportador cobre a minha carga?", a: "Não totalmente. O RCTR-C e o RC-DC protegem a responsabilidade do transportador em situações específicas. O embarcador precisa do seguro de transporte para proteger a própria mercadoria." },
    { q: "Existe apólice anual para vários embarques?", a: "Sim. A apólice anual cobre todos os embarques do período, e cada viagem é averbada de forma simples." },
    { q: "Máquinas alugadas podem ser seguradas?", a: "Sim. Equipamentos de terceiros sob sua responsabilidade podem ser incluídos, o que é comum em contratos de locação." },
    { q: "Como funciona a averbação?", a: "É o registro de cada embarque na apólice, normalmente feito a partir dos documentos fiscais. Ajudamos a integrar esse processo à rotina da empresa." },
    { q: "Importação e exportação têm cobertura?", a: "Sim. Há apólices específicas para transporte internacional, com coberturas porta a porta conforme o Incoterm negociado." },
    { q: "O que é gerenciamento de risco?", a: "São as regras de proteção exigidas pela seguradora, como rastreamento, escolta e horários de circulação. Cumpri-las é condição para a cobertura de roubo." },
  ],
};
