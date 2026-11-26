/** Dados estruturados (schema.org). Aceita um objeto ou uma lista que vira um @graph. */
export function JsonLd({ data }: { data: object | object[] }) {
  const json = Array.isArray(data) ? { "@context": "https://schema.org", "@graph": data } : data;
  return (
    <script
      type="application/ld+json"
      // Escapa "<" para que nenhum texto feche a tag script
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json).replace(/</g, "\\u003c") }}
    />
  );
}
