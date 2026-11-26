import type { SolutionDetail } from "./types";

// [A CONFIRMAR] revisão técnica da Savá: coberturas e exclusões variam por seguradora e apólice.
export const seguroFrota: SolutionDetail = {
  metaTitle: "Seguro de Frota para Empresas no ES",
  metaDescription:
    "Seguro de frota leve e pesada com gestão completa: cotação em todas as seguradoras, inclusão ágil de veículos, assistência 24h e sinistro acompanhado.",
  heroTitle: "Seguro de Frota com gestão completa",
  heroLead:
    "Carros, utilitários e caminhões protegidos em uma só gestão, com movimentações rápidas no dia a dia e sinistros acompanhados até o veículo voltar a rodar.",
  facts: [
    { value: "1 gestão", label: "para toda a frota, de carros executivos a caminhões pesados" },
    { value: "24h", label: "de assistência, guincho e socorro mecânico em todo o país" },
    { value: "Todas", label: "as seguradoras comparadas a cada renovação, com base na sinistralidade" },
  ],
  context: {
    eyebrow: "Por que contratar",
    title: "Veículo parado é contrato atrasado.",
    paragraphs: [
      "Para quem depende da frota, um acidente custa duas vezes: o reparo e os dias sem o veículo na rua. Some a isso renovações caras, burocracia para incluir veículos e sinistros que se arrastam.",
      "Com a gestão da Savá, a frota fica em uma estrutura única, as movimentações acontecem sem atrito e cada sinistro tem alguém acompanhando de perto, do aviso à liberação do veículo.",
    ],
    image: {
      src: "/images/seguro-frota-contexto.webp",
      alt: "Gestor de frota conversando com motorista ao lado de vans de entrega",
      label: "Gestor de frota conversando com um motorista ao lado de vans brancas de entrega no pátio",
      scene:
        "In a company vehicle yard, a fleet manager in a navy jacket holding a tablet talks with a delivery driver in uniform next to a row of clean white delivery vans, morning light, relaxed and professional.",
      orientation: "portrait",
    },
  },
  risks: {
    eyebrow: "Principais riscos",
    title: "O que mais tira veículos de circulação",
    intro: "Frotas rodam muito mais do que um carro particular. A exposição a acidentes e danos a terceiros é diária.",
    items: [
      { icon: "truck", title: "Colisões e acidentes", text: "Danos ao veículo da empresa e tempo parado na oficina, com impacto direto nas entregas." },
      { icon: "theft", title: "Roubo e furto", text: "Perda do veículo e, muitas vezes, da carga ou dos equipamentos que estavam nele." },
      { icon: "scale", title: "Danos a terceiros", text: "Indenizações por danos materiais e corporais causados a outros veículos, pessoas e propriedades." },
      { icon: "user", title: "Condutores e passageiros", text: "Acidentes com motoristas e ocupantes, que exigem amparo rápido e adequado." },
    ],
  },
  timeline: {
    eyebrow: "Na prática",
    title: "Do acidente ao veículo de volta à rua",
    intro: "Veja como funciona um sinistro de frota com a Savá acompanhando cada etapa.",
    cta: "Cotar a minha frota",
    items: [
      { time: "Hora 0", title: "Acidente e socorro", text: "O motorista aciona a assistência 24h para guincho e atendimento no local e avisa a empresa.", covered: "Assistência 24h e guincho" },
      { time: "Mesmo dia", title: "Aviso de sinistro", text: "A Savá abre o sinistro com a seguradora e orienta sobre boletim de ocorrência e fotos.", covered: "Abertura e orientação da Savá" },
      { time: "Primeiros dias", title: "Vistoria e oficina", text: "O veículo passa por vistoria e segue para uma oficina referenciada ou escolhida pela empresa.", covered: "Casco: colisão, incêndio e roubo" },
      { time: "Durante o reparo", title: "Operação mantida", text: "Quando contratado, o carro reserva mantém a equipe rodando enquanto o veículo é consertado.", covered: "Carro reserva" },
      { time: "Conclusão", title: "Terceiros e liberação", text: "Danos causados a terceiros são indenizados e o veículo é liberado, ou indenizado em caso de perda total.", covered: "RCF-V e indenização integral" },
    ],
  },
  coverage: {
    eyebrow: "Coberturas",
    title: "O que a apólice protege",
    intro: "Cada veículo pode ter um conjunto de coberturas, de acordo com o uso e o valor. Tudo administrado em uma única gestão.",
    columns: [
      {
        tag: "Veículos da empresa",
        title: "Danos à frota",
        items: [
          { title: "Casco", text: "Colisão, incêndio, roubo e furto do veículo, com indenização parcial ou integral." },
          { title: "Assistência 24 horas", text: "Guincho, socorro mecânico, chaveiro e apoio em todo o território nacional." },
          { title: "Carro reserva", text: "Veículo substituto durante o reparo ou após roubo, pelo período contratado." },
          { title: "Equipamentos e acessórios", text: "Baús, implementos, rastreadores e equipamentos instalados no veículo." },
          { title: "Vidros, faróis e retrovisores", text: "Reparo ou troca com franquia reduzida, sem afetar a classe de bônus." },
        ],
      },
      {
        tag: "Terceiros e pessoas",
        title: "Responsabilidade e ocupantes",
        items: [
          { title: "RCF-V danos materiais", text: "Danos causados a veículos e propriedades de terceiros." },
          { title: "RCF-V danos corporais", text: "Indenizações por lesões causadas a terceiros em acidentes." },
          { title: "Danos morais", text: "Reclamações de terceiros por danos morais decorrentes do acidente." },
          { title: "APP para ocupantes", text: "Morte ou invalidez de motoristas e passageiros em acidentes." },
        ],
      },
    ],
    note: "Para frotas pesadas, é possível incluir coberturas específicas para implementos e carrocerias.",
  },
  checklist: {
    eyebrow: "Análise de risco",
    title: "O que pesa no preço da frota",
    text: "A seguradora precifica a frota pelo uso e pelo histórico. Organizamos essas informações para mostrar o melhor perfil possível e negociar condições.",
    items: [
      "Tipo, idade e valor dos veículos",
      "Perfil de uso, regiões de circulação e rotas",
      "Rastreamento e telemetria instalados",
      "Perfil e treinamento dos condutores",
      "Local de pernoite e guarda dos veículos",
      "Histórico de sinistros da frota",
    ],
    image: {
      src: "/images/seguro-frota-checklist.webp",
      alt: "Motorista consultando tablet de rastreamento na cabine de um caminhão",
      label: "Cabine de caminhão com tablet de rastreamento e telemetria fixado no painel",
      scene:
        "Inside a modern truck cabin, a driver's hand touching a tablet mounted on the dashboard showing a simple map interface with no readable text, steering wheel in the foreground, highway softly visible through the windshield.",
      orientation: "landscape",
    },
  },
  steps: {
    title: "Da planilha de veículos à frota sob gestão",
    items: [
      { title: "Levantamento da frota", text: "Organizamos veículos, uso, condutores e o histórico de sinistros." },
      { title: "Desenho das coberturas", text: "Definimos coberturas por categoria de veículo, sem pagar pelo que não precisa." },
      { title: "Cotação em todas as seguradoras", text: "Negociamos com base na sinistralidade e comparamos preço e assistências." },
      { title: "Gestão do dia a dia", text: "Inclusões, exclusões e sinistros resolvidos por um atendimento dedicado." },
    ],
  },
  audience: {
    title: "Para quem é",
    text: "Empresas que dependem de veículos para entregar, prestar serviços ou deslocar equipes e executivos.",
    image: {
      src: "/images/seguro-frota-publico.webp",
      alt: "Caminhões e vans de empresa estacionados em pátio logístico",
      label: "Pátio logístico com caminhões e vans de empresa estacionados lado a lado",
      scene:
        "A logistics yard in the morning with a neat row of white trucks and vans parked side by side, a warehouse building behind, clear sky, clean asphalt.",
      orientation: "landscape",
    },
  },
  exclusions: {
    title: "O que normalmente fica de fora",
    text: "Transparência desde a cotação. Estas são exclusões comuns, e cada apólice tem as suas condições.",
    items: [
      "Condutor sem habilitação válida para a categoria",
      "Direção sob efeito de álcool ou drogas",
      "Uso diferente do declarado, como transporte remunerado",
      "Desgaste, falhas mecânicas e falta de manutenção",
      "Veículos não incluídos na apólice no momento do sinistro",
    ],
  },
  faq: [
    { q: "A partir de quantos veículos vale um seguro de frota?", a: "Muitas seguradoras aceitam frotas a partir de poucos veículos. O ganho real vem da gestão única e da negociação com base no histórico da frota." },
    { q: "Posso incluir veículos ao longo da vigência?", a: "Sim. Inclusões e exclusões são feitas por endosso durante a vigência, com cobrança ou devolução proporcional." },
    { q: "Vocês atendem frotas pesadas?", a: "Sim. Atendemos caminhões, cavalos mecânicos e implementos, com coberturas específicas para o transporte de carga." },
    { q: "O seguro cobre qualquer motorista da empresa?", a: "Em geral, a apólice de frota cobre condutores habilitados autorizados pela empresa. Cada seguradora tem regras próprias, que verificamos na contratação." },
    { q: "Como a sinistralidade afeta a renovação?", a: "Frotas com muitos sinistros tendem a ter reajustes maiores. Acompanhamos o histórico durante o ano e propomos ações para melhorar o perfil antes da renovação." },
    { q: "Carros de executivos podem ficar na mesma apólice?", a: "Podem, com coberturas adequadas a veículos de maior valor. Também é possível tratá-los separadamente, quando for mais vantajoso." },
  ],
};
