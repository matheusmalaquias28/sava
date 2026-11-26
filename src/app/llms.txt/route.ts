import { solutions } from "@/lib/solutions";
import { getSolutionDetail } from "@/lib/details";
import { fullAddress, lines, site } from "@/lib/site";

/** Resumo do site para buscadores e assistentes de IA (padrão llms.txt). */
export function GET() {
  const body = [
    `# ${site.name}`,
    "",
    `> ${site.description}`,
    "",
    `${site.legalName}, CNPJ ${site.cnpj}. Corretora de seguros registrada na SUSEP, com sede em ${fullAddress}.`,
    "",
    "## Soluções",
    ...solutions.map((s) => `- [${s.title}](${site.url}/solucoes/${s.slug}): ${getSolutionDetail(s.slug)?.metaDescription ?? s.summary}`),
    "",
    "## Contato",
    ...Object.values(lines).map((l) => `- WhatsApp ${l.label.toLowerCase()}: ${l.display}`),
    `- E-mail: ${site.email}`,
    `- Contato: ${site.url}/contato`,
    "",
    "## Institucional",
    `- [Política de privacidade](${site.url}/politica-de-privacidade)`,
    `- [Termos de uso](${site.url}/termos-de-uso)`,
    "",
  ].join("\n");
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
