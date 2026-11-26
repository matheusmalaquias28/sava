import { lineFor, siteMessage, whatsappLink } from "./site";
import { getSolution } from "./solutions";

/** Link de WhatsApp para uma solução: número da linha certa + mensagem com o nome do serviço. */
export function whatsappForSolution(slug: string) {
  const s = getSolution(slug);
  return whatsappLink(s ? siteMessage(s.title) : undefined, lineFor(slug));
}

/** Para botões globais (header, menu, botão flutuante): usa o serviço da página atual, se houver. */
export function whatsappForPath(pathname: string) {
  const slug = pathname.match(/^\/solucoes\/([^/?#]+)/)?.[1];
  return slug && getSolution(slug) ? whatsappForSolution(slug) : whatsappLink();
}
