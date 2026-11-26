export const site = {
  name: "Savá Seguros",
  legalName: "Sava Adm e Corretagem de Seguros Ltda",
  cnpj: "52.537.451/0001-66",
  tagline: "Proteja o seu próximo movimento.",
  description:
    "Ecossistema de soluções em seguros, benefícios e consórcio para empresas. O family office da sua empresa: cotação em todas as seguradoras, negociação estratégica e gestão contínua no Espírito Santo.",
  url: "https://savaseguros.com.br",
  phoneDisplay: "(27) 99916-8796",
  phoneHref: "tel:+5527999168796",
  whatsapp: "5527999168796",
  // [A CONFIRMAR] e-mail oficial de atendimento
  email: "contato@savaseguros.com.br",
  address: {
    street: "Av. Nossa Sra. da Penha, 1830",
    complement: "3º e 5º andar",
    district: "Barro Vermelho",
    city: "Vitória",
    state: "ES",
    zip: "29057-565",
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Av.+Nossa+Sra.+da+Penha,+1830,+Barro+Vermelho,+Vit%C3%B3ria+-+ES",
  hours: "Segunda a sexta, 8h às 18h", // [A CONFIRMAR]
  // [A CONFIRMAR] links oficiais das redes
  social: {
    instagram: "https://www.instagram.com/savaseguros_/",
    linkedin: "https://www.linkedin.com/company/savaseguros",
  },
};

/** Cada linha de atendimento tem o seu WhatsApp. */
export const lines = {
  seguros: { label: "Seguros", service: "seguros para a minha empresa", whatsapp: "5527999168796", display: "(27) 99916-8796", tel: "tel:+5527999168796" },
  consorcio: { label: "Consórcio", service: "consórcio", whatsapp: "5527997579584", display: "(27) 99757-9584", tel: "tel:+5527997579584" },
} as const;
export type Line = keyof typeof lines;

export function lineFor(slug?: string | null): Line {
  return slug === "consorcio" ? "consorcio" : "seguros";
}

/** Mensagem padrão: deixa claro que o contato veio do site e qual serviço interessa. */
export function siteMessage(service: string) {
  return `Olá! Vim pelo site da Savá Seguros e tenho interesse em ${service}. Podem me ajudar?`;
}

export function whatsappLink(message?: string, line: Line = "seguros") {
  const text = message ?? siteMessage(lines[line].service);
  return `https://wa.me/${lines[line].whatsapp}?text=${encodeURIComponent(text)}`;
}

export const fullAddress = `${site.address.street}, ${site.address.complement}, ${site.address.district}, ${site.address.city} - ${site.address.state}, ${site.address.zip}`;

export const navLinks = [
  { label: "Soluções", href: "/solucoes" },
  { label: "Clientes", href: "/#clientes" },
  { label: "Método", href: "/#metodo" },
  { label: "Quem somos", href: "/#sobre" },
  { label: "Contato", href: "/contato" },
];
