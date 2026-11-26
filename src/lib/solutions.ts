export type CategoryId = "patrimonio" | "pessoas" | "riscos" | "crescimento";

export const categories: Record<
  CategoryId,
  { label: string; description: string }
> = {
  patrimonio: {
    label: "Patrimônio & Operação",
    description: "Estrutura, frota, cargas e equipamentos protegidos para a operação não parar.",
  },
  pessoas: {
    label: "Pessoas & Benefícios",
    description: "Benefícios que retêm talentos e cuidam de quem faz a empresa acontecer.",
  },
  riscos: {
    label: "Riscos & Responsabilidades",
    description: "Proteção para decisões, contratos, dados e reputação da companhia.",
  },
  crescimento: {
    label: "Crescimento Patrimonial",
    description: "Alavancagem planejada para expandir patrimônio sem juros.",
  },
};

export type Solution = {
  slug: string;
  title: string;
  menuTitle: string;
  category: CategoryId;
  icon: IconName;
  image: string;
  imageAlt: string;
  headline: string;
  lead: string;
  summary: string;
  highlights: string[];
  challenge: { title: string; text: string };
  approach: { title: string; text: string };
  coverages: { title: string; text: string }[];
  audience: string[];
  benefits: { title: string; text: string }[];
  faq: { q: string; a: string }[];
};

export type IconName =
  | "building"
  | "truck"
  | "ship"
  | "people"
  | "heart"
  | "crown"
  | "shield"
  | "gavel"
  | "scale"
  | "contract"
  | "chart";

export const solutions: Solution[] = [
  {
    slug: "seguro-empresarial",
    title: "Seguro Empresarial",
    menuTitle: "Seguro Empresarial",
    category: "patrimonio",
    icon: "building",
    image: "/images/empresarial.webp",
    imageAlt: "Centro industrial e logístico moderno ao entardecer no Espírito Santo",
    headline: "O patrimônio da sua empresa, blindado contra o imprevisto.",
    lead: "Estruturamos uma apólice sob medida para sede, estoques, máquinas e operação, com coberturas desenhadas a partir do risco real do seu negócio.",
    summary: "Proteção sob medida para prédios, estoques, máquinas e lucros cessantes.",
    highlights: ["Incêndio e danos elétricos", "Lucros cessantes", "Roubo e vendaval"],
    challenge: {
      title: "Apólices genéricas deixam lacunas caras",
      text: "A maioria das empresas descobre no pior momento que a apólice contratada não cobria a parada da operação, o equipamento crítico ou o estoque daquele mês. Seguro empresarial comprado como produto de prateleira costuma proteger pouco e custar caro.",
    },
    approach: {
      title: "Diagnóstico de riscos antes da cotação",
      text: "Mapeamos ativos, processos e exposições da sua operação, definimos limites e coberturas adequadas e só então levamos o desenho a todas as seguradoras do mercado. O resultado é uma apólice coerente com o tamanho do seu risco, no melhor preço disponível.",
    },
    coverages: [
      { title: "Incêndio, raio e explosão", text: "Cobertura básica para estrutura física, instalações e conteúdo." },
      { title: "Danos elétricos", text: "Proteção para máquinas, equipamentos e sistemas contra curto-circuito e oscilações." },
      { title: "Lucros cessantes", text: "Garante o fluxo de caixa e as despesas fixas enquanto a operação se recupera de um sinistro." },
      { title: "Roubo e furto qualificado", text: "Bens, mercadorias e equipamentos protegidos contra subtração." },
      { title: "Vendaval, granizo e alagamento", text: "Proteção contra eventos climáticos cada vez mais frequentes." },
      { title: "Responsabilidade civil do estabelecimento", text: "Danos causados a terceiros dentro das suas instalações." },
      { title: "Quebra de máquinas", text: "Reparo ou reposição de equipamentos essenciais à produção." },
      { title: "Vidros, letreiros e anúncios", text: "Coberturas complementares para fachada e comunicação visual." },
    ],
    audience: ["Indústrias", "Centros logísticos", "Comércio e varejo", "Escritórios e sedes corporativas", "Clínicas e serviços", "Construtoras"],
    benefits: [
      { title: "Coberturas sem lacunas", text: "Desenho técnico a partir do risco real, não de um pacote padrão." },
      { title: "Melhor preço do mercado", text: "Cotação simultânea em todas as seguradoras e negociação ativa." },
      { title: "Sinistro acompanhado", text: "Um especialista Savá conduz o processo do aviso à indenização." },
    ],
    faq: [
      { q: "O seguro empresarial cobre a parada da operação?", a: "Sim, com a cobertura de lucros cessantes. Ela indeniza o lucro que deixou de entrar e as despesas fixas durante o período de recuperação após um sinistro coberto." },
      { q: "Consigo segurar mais de um endereço na mesma apólice?", a: "Sim. Estruturamos apólices multilocais, com limites por unidade, o que simplifica a gestão e costuma reduzir o custo total." },
      { q: "Como é definido o valor em risco?", a: "Fazemos o levantamento dos ativos junto com a sua equipe para evitar subseguro, que reduz a indenização, ou superseguro, que encarece o prêmio sem necessidade." },
    ],
  },
  {
    slug: "seguro-frota",
    title: "Seguro de Frota",
    menuTitle: "Seguro de Frota",
    category: "patrimonio",
    icon: "truck",
    image: "/images/frota.webp",
    imageAlt: "Frota corporativa de caminhões e vans brancas alinhadas em pátio logístico",
    headline: "Sua frota rodando. Seu custo sob controle.",
    lead: "Gestão completa do seguro de frotas leves e pesadas, com cotação em todas as seguradoras, inclusão e exclusão ágil de veículos e acompanhamento de sinistros.",
    summary: "Frotas leves e pesadas com gestão ágil, assistência 24h e sinistro acompanhado.",
    highlights: ["Frotas leves e pesadas", "Assistência 24h", "Gestão de inclusões"],
    challenge: {
      title: "Cada veículo parado é receita perdida",
      text: "Frota mal segurada gera custo duplo: o prejuízo do evento e o tempo de veículo fora de operação. Somam-se a isso renovações caras, burocracia para incluir veículos e sinistros que se arrastam por semanas.",
    },
    approach: {
      title: "Uma central de frota para a sua empresa",
      text: "Concentramos toda a frota em uma gestão única, analisamos histórico de sinistralidade e negociamos com todas as seguradoras. Cuidamos das movimentações do dia a dia e acompanhamos cada sinistro até o veículo voltar a rodar.",
    },
    coverages: [
      { title: "Casco (colisão, incêndio, roubo)", text: "Cobertura compreensiva para o veículo, com opção de valor de mercado ou determinado." },
      { title: "RCF-V: danos a terceiros", text: "Danos materiais, corporais e morais causados a terceiros." },
      { title: "APP para ocupantes", text: "Acidentes pessoais para motoristas e passageiros." },
      { title: "Assistência 24 horas", text: "Guincho, socorro mecânico, chaveiro e suporte em todo o Brasil." },
      { title: "Carro reserva", text: "Mantém a operação enquanto o veículo segurado está em reparo." },
      { title: "Equipamentos e acessórios", text: "Implementos, carrocerias e acessórios instalados." },
    ],
    audience: ["Transportadoras", "Construtoras e engenharia", "Distribuidoras", "Prestadores de serviço com equipes externas", "Locadoras", "Empresas com carros executivos"],
    benefits: [
      { title: "Uma só apólice, uma só gestão", text: "Toda a frota centralizada com relatórios e vencimentos organizados." },
      { title: "Movimentação sem burocracia", text: "Inclusões e exclusões de veículos tratadas pela nossa equipe." },
      { title: "Sinistralidade sob gestão", text: "Análise de histórico para negociar renovações mais inteligentes." },
    ],
    faq: [
      { q: "A partir de quantos veículos vale um seguro de frota?", a: "Em geral, a partir de 5 veículos já é possível estruturar uma apólice de frota, com condições melhores do que seguros individuais." },
      { q: "Posso incluir veículos ao longo da vigência?", a: "Sim. As inclusões e exclusões são feitas por endosso, com cobrança proporcional ao período, e a nossa equipe cuida de todo o processo." },
      { q: "Vocês atendem frotas pesadas?", a: "Sim. Trabalhamos com caminhões, cavalos mecânicos, implementos e máquinas rodoviárias, além das frotas leves." },
    ],
  },
  {
    slug: "transporte-e-equipamentos",
    title: "Transporte, Cargas e Equipamentos",
    menuTitle: "Transporte e Equipamentos",
    category: "patrimonio",
    icon: "ship",
    image: "/images/transporte.webp",
    imageAlt: "Porto de contêineres em Vitória com navio sendo carregado ao pôr do sol",
    headline: "Do porto ao cliente, sua mercadoria protegida em cada trecho.",
    lead: "Seguros de transporte nacional e internacional, responsabilidade do transportador e máquinas e equipamentos para operações que não podem parar.",
    summary: "Cargas nacionais e internacionais, RCTR-C e máquinas e equipamentos.",
    highlights: ["Transporte nacional e internacional", "RCTR-C e RC-DC", "Máquinas e equipamentos"],
    challenge: {
      title: "A carga circula, o risco também",
      text: "Avarias, roubo de carga, acidentes e falhas de equipamentos geram prejuízos que impactam contratos e prazos. Para quem opera no Espírito Santo, porta de entrada logística do país, a exposição é diária.",
    },
    approach: {
      title: "Apólices que acompanham o fluxo da sua operação",
      text: "Estruturamos apólices anuais com averbação simplificada, cobrindo embarques, armazenagem e equipamentos em uso. Ajustamos coberturas e franquias ao seu perfil de rotas e mercadorias.",
    },
    coverages: [
      { title: "Transporte nacional", text: "Mercadorias em trânsito rodoviário, ferroviário, aéreo ou aquaviário." },
      { title: "Importação e exportação", text: "Cobertura porta a porta em operações internacionais." },
      { title: "RCTR-C", text: "Responsabilidade civil obrigatória do transportador rodoviário de cargas." },
      { title: "RC-DC", text: "Desaparecimento de carga por roubo ou furto durante o transporte." },
      { title: "Máquinas e equipamentos", text: "Equipamentos móveis e estacionários contra danos acidentais." },
      { title: "Riscos de engenharia", text: "Obras civis, instalação e montagem de equipamentos." },
    ],
    audience: ["Importadores e exportadores", "Transportadoras", "Indústrias", "Tradings", "Locadoras de máquinas", "Construtoras"],
    benefits: [
      { title: "Averbação simples", text: "Processos digitais para registrar embarques sem travar a operação." },
      { title: "Coberturas por rota e mercadoria", text: "Condições ajustadas ao perfil real dos seus embarques." },
      { title: "Suporte em avarias", text: "Orientação imediata e regulação de sinistro acompanhada." },
    ],
    faq: [
      { q: "O seguro do transportador cobre a minha carga?", a: "Nem sempre. O RCTR-C protege o transportador em casos específicos. Para garantir o valor integral da mercadoria, o ideal é o embarcador ter seu próprio seguro de transporte." },
      { q: "Existe apólice anual para vários embarques?", a: "Sim. A apólice aberta permite averbar cada embarque ao longo do ano, com taxa negociada e gestão simplificada." },
      { q: "Máquinas alugadas podem ser seguradas?", a: "Sim. Estruturamos coberturas para equipamentos próprios, locados ou cedidos a terceiros." },
    ],
  },
  {
    slug: "vida-em-grupo",
    title: "Seguro de Vida em Grupo",
    menuTitle: "Vida em Grupo",
    category: "pessoas",
    icon: "people",
    image: "/images/vida.webp",
    imageAlt: "Equipe de profissionais brasileiros sorrindo e colaborando em escritório",
    headline: "Cuidar de quem faz a empresa acontecer também é estratégia.",
    lead: "Seguro de vida em grupo para colaboradores, cooperados e sócios, com atendimento a convenções coletivas e coberturas que geram valor real para o time.",
    summary: "Proteção para colaboradores e cooperados, com atendimento às convenções coletivas.",
    highlights: ["Atende CCT", "Cooperados e colaboradores", "Assistências inclusas"],
    challenge: {
      title: "Obrigação legal ou benefício de verdade?",
      text: "Muitas convenções coletivas exigem seguro de vida, e cumprir a obrigação com a apólice errada expõe a empresa a passivos trabalhistas. Ao mesmo tempo, um bom seguro de vida é um dos benefícios mais valorizados por quem trabalha com você.",
    },
    approach: {
      title: "Conformidade e valor percebido",
      text: "Analisamos as convenções coletivas aplicáveis, desenhamos capitais e coberturas adequadas e comparamos todas as seguradoras. Cuidamos da movimentação mensal de vidas e damos suporte às famílias em caso de sinistro.",
    },
    coverages: [
      { title: "Morte natural e acidental", text: "Capital segurado pago aos beneficiários." },
      { title: "Invalidez por acidente ou doença", text: "Indenização em caso de invalidez permanente total ou parcial." },
      { title: "Doenças graves", text: "Antecipação de capital em diagnósticos cobertos." },
      { title: "Auxílio funeral", text: "Assistência completa para a família no momento mais difícil." },
      { title: "Cesta básica e assistências", text: "Benefícios complementares exigidos por muitas convenções." },
      { title: "Diárias por incapacidade", text: "Renda durante afastamentos temporários por acidente." },
    ],
    audience: ["Empresas com CCT", "Cooperativas", "Indústrias", "Empresas de tecnologia", "Varejo e serviços", "Sócios e diretoria"],
    benefits: [
      { title: "Conformidade com a CCT", text: "Evite passivos trabalhistas com coberturas aderentes à convenção." },
      { title: "Gestão mensal de vidas", text: "Inclusões e exclusões feitas de forma simples e rastreável." },
      { title: "Atendimento à família", text: "Acompanhamento humano e próximo em caso de sinistro." },
    ],
    faq: [
      { q: "O seguro de vida em grupo é obrigatório?", a: "Depende da convenção coletiva da categoria. Muitas exigem, com capitais mínimos definidos. Fazemos essa análise para você." },
      { q: "Cooperados podem ser incluídos?", a: "Sim. Estruturamos apólices específicas para cooperativas, cobrindo os cooperados e, se desejado, seus familiares." },
      { q: "Existe número mínimo de vidas?", a: "As condições variam por seguradora. Há soluções a partir de poucas vidas, com custo por pessoa bastante acessível." },
    ],
  },
  {
    slug: "saude-e-odonto",
    title: "Planos de Saúde e Odontológicos",
    menuTitle: "Saúde e Odonto",
    category: "pessoas",
    icon: "heart",
    image: "/images/saude.webp",
    imageAlt: "Médico atendendo colaboradora em clínica moderna",
    headline: "O benefício mais desejado, com o custo mais bem negociado.",
    lead: "Planos de saúde e odontológicos empresariais com estudo de rede, gestão de sinistralidade e negociação de reajustes para manter o benefício sustentável.",
    summary: "Planos empresariais com gestão de sinistralidade e negociação de reajustes.",
    highlights: ["Estudo de rede", "Gestão de sinistralidade", "Negociação de reajuste"],
    challenge: {
      title: "Reajustes que comprometem o orçamento",
      text: "O plano de saúde costuma ser o segundo maior custo com pessoas. Sem gestão, os reajustes anuais crescem acima da inflação e a empresa se vê entre cortar o benefício ou comprometer o resultado.",
    },
    approach: {
      title: "Gestão ativa do benefício",
      text: "Comparamos operadoras e redes credenciadas, acompanhamos a sinistralidade ao longo do ano e chegamos à renovação com dados para negociar. Também cuidamos do atendimento aos colaboradores no dia a dia.",
    },
    coverages: [
      { title: "Planos de saúde empresariais", text: "Ambulatorial, hospitalar e com obstetrícia, em diferentes acomodações." },
      { title: "Planos odontológicos", text: "Prevenção, tratamento e especialidades para o time e dependentes." },
      { title: "Estudo de rede credenciada", text: "Hospitais, laboratórios e médicos alinhados à realidade dos colaboradores." },
      { title: "Coparticipação inteligente", text: "Modelos que equilibram custo e uso consciente do plano." },
      { title: "Telemedicina", text: "Atendimento remoto que reduz idas desnecessárias ao pronto-socorro." },
      { title: "Programas de saúde", text: "Ações preventivas que reduzem a sinistralidade no médio prazo." },
    ],
    audience: ["PMEs a partir de 2 vidas", "Médias e grandes empresas", "Holdings e grupos familiares", "Sócios e diretoria", "Empresas em expansão", "Cooperativas"],
    benefits: [
      { title: "Reajustes negociados", text: "Chegamos à renovação com dados e alternativas reais de mercado." },
      { title: "Rede adequada", text: "Plano compatível com onde seus colaboradores vivem e se tratam." },
      { title: "Atendimento ao colaborador", text: "Suporte para autorizações, reembolsos e dúvidas do time." },
    ],
    faq: [
      { q: "Qual o número mínimo de vidas para um plano empresarial?", a: "Algumas operadoras aceitam contratos a partir de 2 vidas, com CNPJ ativo. As condições melhoram conforme o número de beneficiários." },
      { q: "Vocês ajudam a reduzir o reajuste?", a: "Sim. Acompanhamos a sinistralidade, propomos ajustes de modelo e levamos a negociação com propostas concorrentes em mãos." },
      { q: "É possível migrar de operadora sem perder carências?", a: "Na maioria dos casos, sim, por meio de compra de carência negociada com a nova operadora." },
    ],
  },
  {
    slug: "socios-e-executivos",
    title: "Proteção para Sócios e Executivos",
    menuTitle: "Sócios e Executivos",
    category: "pessoas",
    icon: "crown",
    image: "/images/executivos.webp",
    imageAlt: "Empresário caminhando até sedã premium na garagem de casa moderna",
    headline: "O family office da sua empresa também cuida de você.",
    lead: "Carro do dono, residência, vida e patrimônio pessoal de sócios e executivos organizados em um atendimento concierge, com a mesma estratégia aplicada à empresa.",
    summary: "Carro do dono, residência, vida e patrimônio pessoal em atendimento concierge.",
    highlights: ["Carro do dono", "Residencial alto padrão", "Vida individual"],
    challenge: {
      title: "Patrimônio pessoal disperso e desprotegido",
      text: "Quem lidera uma empresa raramente tem tempo para cuidar das próprias apólices. O resultado são seguros espalhados em vários corretores, vencimentos esquecidos e coberturas que não acompanham o patrimônio.",
    },
    approach: {
      title: "Concierge patrimonial",
      text: "Reunimos todas as apólices pessoais e da família em um único ponto de contato, revisamos coberturas e cuidamos de renovações e sinistros. Você ganha tempo e a certeza de que tudo está protegido.",
    },
    coverages: [
      { title: "Carro do dono", text: "Seguro auto para veículos de sócios e diretores, inclusive premium e blindados." },
      { title: "Residencial alto padrão", text: "Casas, apartamentos e imóveis de veraneio com conteúdo e obras de arte." },
      { title: "Vida individual e sucessão", text: "Proteção financeira para a família e apoio ao planejamento sucessório." },
      { title: "Responsabilidade civil familiar", text: "Danos causados a terceiros pela família ou funcionários domésticos." },
      { title: "Embarcações e aeronaves", text: "Coberturas para bens de lazer de alto valor." },
      { title: "Seguro viagem", text: "Proteção internacional para negócios e lazer." },
    ],
    audience: ["Sócios e acionistas", "Diretores e C-levels", "Famílias empresárias", "Profissionais liberais", "Holdings patrimoniais", "Executivos expatriados"],
    benefits: [
      { title: "Um único ponto de contato", text: "Todas as apólices da família com um especialista dedicado." },
      { title: "Coberturas que acompanham o patrimônio", text: "Revisão periódica para evitar subseguro." },
      { title: "Discrição e agilidade", text: "Atendimento reservado, no seu tempo e onde você estiver." },
    ],
    faq: [
      { q: "O que é o seguro de carro do dono?", a: "É a proteção dos veículos utilizados por sócios e diretores, que pode ser estruturada pela empresa ou na pessoa física, sempre com coberturas compatíveis com veículos de alto valor." },
      { q: "Vocês atendem também a família do executivo?", a: "Sim. Organizamos as apólices de cônjuges e filhos no mesmo atendimento, o que simplifica a gestão e pode reduzir custos." },
      { q: "Posso transferir apólices que já tenho?", a: "Sim. Na renovação, assumimos a gestão e comparamos as condições atuais com todo o mercado." },
    ],
  },
  {
    slug: "seguro-cyber",
    title: "Seguro Cyber",
    menuTitle: "Seguro Cyber",
    category: "riscos",
    icon: "shield",
    image: "/images/cyber.webp",
    imageAlt: "Especialista em segurança digital monitorando telas em centro de operações",
    headline: "Quando o ataque acontece, a resposta precisa vir em minutos.",
    lead: "Proteção financeira e suporte técnico especializado contra ataques hackers, ransomware e vazamento de dados, em conformidade com a LGPD.",
    summary: "Ransomware, vazamento de dados e LGPD com resposta a incidentes 24h.",
    highlights: ["Ransomware", "Vazamento de dados", "Resposta a incidentes 24h"],
    challenge: {
      title: "Não é questão de se, é de quando",
      text: "Ataques digitais crescem todos os anos e atingem empresas de todos os portes. Além da operação parada, um incidente gera custos com perícia, notificação de titulares, multas da LGPD e danos à reputação.",
    },
    approach: {
      title: "Proteção financeira e técnica",
      text: "Avaliamos a maturidade de segurança da sua empresa, preparamos o questionário de subscrição com a sua equipe de TI e negociamos a apólice com as seguradoras especializadas em cyber. Em um incidente, você aciona uma equipe de resposta pronta para agir.",
    },
    coverages: [
      { title: "Resposta a incidentes", text: "Peritos forenses, advogados e especialistas acionados imediatamente." },
      { title: "Extorsão e ransomware", text: "Custos de negociação e recuperação após sequestro de dados." },
      { title: "Interrupção de negócios", text: "Lucro perdido durante a indisponibilidade dos sistemas." },
      { title: "Responsabilidade por dados", text: "Reclamações de terceiros por vazamento de informações." },
      { title: "Multas e processos LGPD", text: "Defesa em processos administrativos, quando seguráveis." },
      { title: "Gestão de crise e reputação", text: "Assessoria de comunicação para proteger a marca." },
    ],
    audience: ["Empresas de tecnologia", "E-commerce e varejo digital", "Clínicas e saúde", "Indústrias conectadas", "Escritórios de serviços", "Qualquer empresa que trata dados pessoais"],
    benefits: [
      { title: "Equipe de resposta 24h", text: "Especialistas acionados no momento do incidente." },
      { title: "Conformidade com a LGPD", text: "Suporte para cumprir obrigações de notificação e defesa." },
      { title: "Subscrição orientada", text: "Ajudamos sua TI a preparar a empresa para a melhor condição." },
    ],
    faq: [
      { q: "Minha empresa é pequena, preciso de seguro cyber?", a: "Sim. Empresas menores são alvos frequentes justamente por terem menos camadas de proteção, e um único incidente pode comprometer meses de faturamento." },
      { q: "O seguro paga o resgate de um ransomware?", a: "As apólices cobrem custos de resposta e recuperação e, em algumas condições, despesas de extorsão. Cada caso segue a apólice e a legislação vigente." },
      { q: "Preciso ter uma estrutura de TI robusta para contratar?", a: "Não necessariamente. As seguradoras avaliam controles mínimos, como backup e autenticação em dois fatores, e orientamos sua equipe nessa preparação." },
    ],
  },
  {
    slug: "d-o-e-e-o",
    title: "D&O e E&O",
    menuTitle: "D&O e E&O",
    category: "riscos",
    icon: "gavel",
    image: "/images/do.webp",
    imageAlt: "Reunião de conselho de administração liderada por executiva",
    headline: "Liderança segura para decidir com coragem.",
    lead: "D&O protege o patrimônio pessoal de administradores. E&O ampara a empresa contra erros e omissões profissionais. Juntos, preservam decisões, contratos e reputação.",
    summary: "Patrimônio de administradores e erros profissionais protegidos.",
    highlights: ["Diretores e conselheiros", "Erros e omissões", "Custos de defesa"],
    challenge: {
      title: "Decisões de gestão podem atingir o patrimônio pessoal",
      text: "Administradores respondem pessoalmente por atos de gestão em ações trabalhistas, tributárias, ambientais e societárias. Prestadores de serviço, por sua vez, podem ser cobrados por falhas técnicas que geram prejuízo a clientes.",
    },
    approach: {
      title: "Proteção desenhada para a governança da empresa",
      text: "Mapeamos a estrutura societária, os órgãos de administração e as atividades de risco, e negociamos com as seguradoras especializadas em linhas financeiras para obter limites e condições adequadas.",
    },
    coverages: [
      { title: "D&O: custos de defesa", text: "Honorários advocatícios em processos contra administradores." },
      { title: "D&O: indenizações e acordos", text: "Pagamentos decorrentes de atos de gestão." },
      { title: "Bloqueio de bens", text: "Custos para manutenção de despesas pessoais em caso de penhora online." },
      { title: "E&O: erros profissionais", text: "Reclamações de clientes por falhas na prestação de serviços." },
      { title: "Responsabilidade contratual", text: "Prejuízos financeiros causados a terceiros por omissão." },
      { title: "Gerenciamento de crise", text: "Assessoria para preservar a imagem da empresa e dos executivos." },
    ],
    audience: ["Diretores e conselheiros", "Empresas com sócios investidores", "Empresas de tecnologia", "Consultorias e engenharia", "Startups em captação", "Empresas em processo de M&A"],
    benefits: [
      { title: "Patrimônio pessoal preservado", text: "Gestores protegidos para decidir com segurança." },
      { title: "Atração de talentos", text: "D&O é requisito para conselheiros e executivos experientes." },
      { title: "Reputação protegida", text: "Suporte jurídico e de crise desde o primeiro momento." },
    ],
    faq: [
      { q: "Qual a diferença entre D&O e E&O?", a: "O D&O protege pessoas físicas que ocupam cargos de gestão por atos de administração. O E&O protege a empresa contra reclamações por erros ou omissões na prestação de serviços profissionais." },
      { q: "Empresas de capital fechado precisam de D&O?", a: "Sim. Administradores de empresas limitadas e de capital fechado também respondem pessoalmente em diversas esferas, como trabalhista e tributária." },
      { q: "O seguro cobra atos anteriores à contratação?", a: "Muitas apólices oferecem cobertura de retroatividade, que deve ser negociada na contratação. Orientamos a melhor estratégia para o seu caso." },
    ],
  },
  {
    slug: "responsabilidade-civil",
    title: "Responsabilidade Civil",
    menuTitle: "Responsabilidade Civil",
    category: "riscos",
    icon: "scale",
    image: "/images/rc.webp",
    imageAlt: "Engenheira com capacete analisando projeto em canteiro de obras",
    headline: "Danos a terceiros não podem virar um passivo da sua empresa.",
    lead: "Coberturas de responsabilidade civil geral, profissional, de obras e de produtos, para que um acidente ou falha não comprometa o caixa e a reputação do negócio.",
    summary: "RC geral, profissional, de obras e produtos para danos a terceiros.",
    highlights: ["RC geral e de operações", "RC profissional", "RC de obras e produtos"],
    challenge: {
      title: "Um único evento pode gerar uma indenização milionária",
      text: "Acidentes com clientes, prestadores ou vizinhos, falhas em produtos e danos causados em obras resultam em processos longos e caros. Sem cobertura, o valor sai direto do caixa.",
    },
    approach: {
      title: "Cobertura alinhada aos contratos",
      text: "Analisamos as atividades e os contratos da empresa, inclusive exigências de clientes e licitações, e estruturamos apólices com limites adequados e cláusulas que realmente atendem às obrigações assumidas.",
    },
    coverages: [
      { title: "RC operações", text: "Danos materiais e corporais causados a terceiros na atividade da empresa." },
      { title: "RC empregador", text: "Acidentes de trabalho com responsabilidade da empresa." },
      { title: "RC profissional", text: "Erros na prestação de serviços técnicos e consultivos." },
      { title: "RC obras", text: "Danos a vizinhos e terceiros durante a execução de obras." },
      { title: "RC produtos", text: "Danos causados por produtos fabricados ou comercializados." },
      { title: "RC ambiental", text: "Poluição súbita e gradual com custos de remediação." },
    ],
    audience: ["Construtoras e engenharia", "Indústrias", "Prestadores de serviços", "Empresas de tecnologia", "Eventos e entretenimento", "Saúde e clínicas"],
    benefits: [
      { title: "Contratos atendidos", text: "Apólices adequadas às exigências de clientes e editais." },
      { title: "Defesa jurídica", text: "Custos de defesa incluídos nas coberturas." },
      { title: "Caixa preservado", text: "Indenizações pagas pela seguradora, não pela operação." },
    ],
    faq: [
      { q: "Meu contrato exige seguro de RC. Vocês emitem rapidamente?", a: "Sim. Analisamos as cláusulas exigidas e cotamos com as seguradoras para emitir no prazo do contrato." },
      { q: "RC profissional é o mesmo que E&O?", a: "São coberturas muito próximas. O termo E&O é mais usado em linhas financeiras e serviços corporativos, enquanto RC profissional é comum para profissões regulamentadas." },
      { q: "A apólice cobre danos morais?", a: "Sim, desde que a cobertura de danos morais seja contratada. Recomendamos incluí-la na maioria dos casos." },
    ],
  },
  {
    slug: "seguro-garantia",
    title: "Seguro Garantia",
    menuTitle: "Seguro Garantia",
    category: "riscos",
    icon: "contract",
    image: "/images/garantia.webp",
    imageAlt: "Executivos assinando contrato com caneta tinteiro em mesa de madeira",
    headline: "Garanta contratos sem imobilizar o seu capital.",
    lead: "Seguro garantia para licitações, contratos privados, processos judiciais e obrigações aduaneiras, substituindo fianças bancárias e depósitos com custo menor.",
    summary: "Licitações, contratos e judicial sem comprometer limite bancário.",
    highlights: ["Licitante e executante", "Judicial e trabalhista", "Libera limite bancário"],
    challenge: {
      title: "Garantias que travam o crescimento",
      text: "Fianças bancárias consomem limite de crédito e depósitos judiciais imobilizam caixa. Para empresas que disputam contratos e licitações, isso limita a capacidade de crescer.",
    },
    approach: {
      title: "Capacidade de garantia estruturada",
      text: "Cadastramos a sua empresa nas principais seguradoras de garantia, ampliamos o limite de crédito disponível e emitimos apólices com agilidade sempre que surge uma nova oportunidade.",
    },
    coverages: [
      { title: "Garantia do licitante", text: "Participação em concorrências públicas e privadas." },
      { title: "Executante construtor e fornecedor", text: "Garante a execução de obras, serviços e fornecimentos." },
      { title: "Adiantamento de pagamento", text: "Protege valores antecipados pelo contratante." },
      { title: "Garantia judicial", text: "Substitui depósitos e penhoras em processos cíveis e fiscais." },
      { title: "Judicial trabalhista e recursal", text: "Substitui o depósito recursal na Justiça do Trabalho." },
      { title: "Garantia aduaneira", text: "Regimes especiais junto à Receita Federal." },
    ],
    audience: ["Construtoras e engenharia", "Empresas que disputam licitações", "Fornecedores de grandes contratos", "Empresas com passivo judicial", "Importadores", "Tecnologia e serviços"],
    benefits: [
      { title: "Caixa e crédito livres", text: "Não consome limite bancário nem imobiliza recursos." },
      { title: "Emissão ágil", text: "Limites pré-aprovados para responder a novas oportunidades." },
      { title: "Custo competitivo", text: "Taxas geralmente inferiores às de fianças bancárias." },
    ],
    faq: [
      { q: "O seguro garantia é aceito em licitações públicas?", a: "Sim. A Lei 14.133/2021 prevê o seguro garantia como modalidade de garantia em contratações públicas." },
      { q: "Quanto tempo leva a emissão?", a: "Com o cadastro aprovado, muitas apólices são emitidas no mesmo dia. O primeiro cadastro costuma levar alguns dias, conforme a documentação." },
      { q: "Posso substituir um depósito judicial que já fiz?", a: "Em muitos casos, sim. O seguro garantia judicial pode substituir depósitos e penhoras, liberando o valor para o caixa, mediante aceitação do juízo." },
    ],
  },
  {
    slug: "consorcio",
    title: "Consórcio e Alavancagem Patrimonial",
    menuTitle: "Consórcio",
    category: "crescimento",
    icon: "chart",
    image: "/images/consorcio.webp",
    imageAlt: "Torres residenciais e comerciais na orla de Vitória ao pôr do sol",
    headline: "Cresça o patrimônio com estratégia, não com juros.",
    lead: "Estruturamos toda a sua alavancagem patrimonial com consórcio para que você cresça de forma consistente: renove a frota, construa uma carteira de imóveis e expanda a operação.",
    summary: "Imóveis, frota e veículos pesados com alavancagem planejada e sem juros.",
    highlights: ["Imóveis", "Frota e veículos pesados", "Sem juros"],
    challenge: {
      title: "Crescer financiando custa caro",
      text: "Financiamentos e linhas de crédito tradicionais comprometem o fluxo de caixa com juros elevados. Para empresas e empresários que pensam no longo prazo, existe um caminho mais eficiente.",
    },
    approach: {
      title: "Planejamento patrimonial com consórcio",
      text: "Entendemos seus objetivos de expansão, desenhamos uma estratégia com cotas, prazos e estratégias de lance, e acompanhamos cada contemplação. É crescimento planejado, com custo muito inferior ao de um financiamento.",
    },
    coverages: [
      { title: "Consórcio de imóveis", text: "Sede própria, galpões, salas comerciais e carteira de imóveis para renda." },
      { title: "Consórcio de veículos", text: "Renovação de frota leve e carros executivos." },
      { title: "Consórcio de pesados", text: "Caminhões, máquinas agrícolas e equipamentos de construção." },
      { title: "Estratégia de lances", text: "Planejamento para antecipar contemplações com inteligência." },
      { title: "Carta de crédito como alavanca", text: "Uso estratégico de cartas contempladas para novos investimentos." },
      { title: "Planejamento sucessório", text: "Construção de patrimônio para a próxima geração." },
    ],
    audience: ["Empresas que vão renovar a frota", "Investidores em imóveis", "Empresas que querem sede própria", "Transportadoras", "Agronegócio", "Famílias empresárias"],
    benefits: [
      { title: "Sem juros", text: "Apenas taxa de administração diluída ao longo do prazo." },
      { title: "Poder de compra à vista", text: "Carta de crédito com força de negociação de pagamento à vista." },
      { title: "Estratégia acompanhada", text: "Um especialista ao seu lado do planejamento à contemplação." },
    ],
    faq: [
      { q: "Consórcio é um bom negócio para empresas?", a: "Para quem planeja aquisições futuras, sim. O custo total costuma ser bem inferior ao de um financiamento e o consórcio preserva as linhas de crédito da empresa." },
      { q: "Como funciona a estratégia de lances?", a: "Analisamos o histórico de cada grupo e definimos o momento e o percentual de lance mais adequados, incluindo o uso de lance embutido quando faz sentido." },
      { q: "Posso usar o consórcio para trocar a frota?", a: "Sim. É uma das formas mais eficientes de renovar frotas leves e pesadas de maneira escalonada e previsível." },
    ],
  },
];

export function getSolution(slug: string) {
  return solutions.find((s) => s.slug === slug);
}

export function solutionsByCategory() {
  return (Object.keys(categories) as CategoryId[]).map((id) => ({
    id,
    ...categories[id],
    items: solutions.filter((s) => s.category === id),
  }));
}
