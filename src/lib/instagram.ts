/**
 * Posts do Instagram da Savá (@savaseguros_) exibidos na home.
 * Lista fixa, coletada do perfil em 25/11/2026. Para trocar: salve a imagem em
 * public/images/instagram/<código>.webp (o código é o trecho final do link do
 * post) e edite a lista abaixo. Originais em Sava/imagens-originais/instagram.
 */

export type InstagramPost = {
  code: string;
  caption: string;
  isVideo?: boolean;
};

export const instagramPosts: InstagramPost[] = [
  {
    code: "DeHe0i5lghT",
    caption: "Pergunta honesta: quantas pessoas diferentes cuidam hoje da proteção da sua empresa?",
  },
  {
    code: "DbGzFIYiIWP",
    isVideo: true,
    caption:
      "Toda evolução pede um novo nome. A Savá nasce da experiência de quem já protegeu centenas de empresas, e da decisão de fazer isso com ainda mais intenção, estrutura e identidade.",
  },
  {
    code: "DgInXzwo5fR",
    caption:
      "Em junho de 2026, o estado chegou a mais de 299 mil participantes ativos em consórcio, crescimento de 17,7% em relação ao ano anterior.",
  },
  {
    code: "DfrmZAzFl_h",
    caption:
      "Os três homens que foram pra Lua não tinham seguro de vida. O que eles montaram no lugar é uma das histórias mais engenhosas de gestão de risco que existem.",
  },
  {
    code: "DfcZpoDmrOn",
    caption:
      "O consórcio encerra 2026 mostrando que deixou de ser uma decisão pontual para ocupar cada vez mais espaço no planejamento financeiro de pessoas e empresas.",
  },
  {
    code: "DfaN-aSGm4B",
    caption:
      "A maioria das empresas tem cinco pessoas diferentes cuidando de pedaços da mesma coisa, e nenhuma delas olha o conjunto.",
  },
  {
    code: "DfW4BzZlqMM",
    caption: "Em mais de dez anos nessa profissão, é sempre a mesma coisa: ninguém lembra do corretor enquanto está tudo certo.",
  },
  {
    code: "DfVb7CVFo2z",
    caption:
      "Seu plano de saúde foi contratado pelo CNPJ, mas atende apenas pessoas da sua família? Essa composição pode fazer diferença na análise dos reajustes.",
  },
];

export function postUrl(p: InstagramPost) {
  return `https://www.instagram.com/${p.isVideo ? "reel" : "p"}/${p.code}/`;
}

export function postImage(p: InstagramPost) {
  return `/images/instagram/${p.code}.webp`;
}
