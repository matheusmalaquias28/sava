import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Termos de Uso",
  description: "Condições de uso do site da Savá Seguros, corretora de seguros empresariais em Vitória, ES.",
  path: "/termos-de-uso",
});

// [A CONFIRMAR] texto revisado pelo jurídico da Savá
export default function Termos() {
  return (
    <LegalPage
      current="/termos-de-uso"
      eyebrow="Institucional"
      title="Termos de uso"
      intro={
        <p>
          Ao navegar pelo site da {site.name} você concorda com as condições abaixo. Se não concordar, recomendamos não utilizar o
          site.
        </p>
      }
    >
      <h2>1. Sobre o site</h2>
      <p>
        Este site é mantido pela {site.legalName}, CNPJ {site.cnpj}, corretora de seguros registrada na SUSEP. Ele apresenta as
        nossas soluções em seguros, benefícios e consórcio e oferece canais para você falar com a nossa equipe.
      </p>

      <h2>2. Conteúdo informativo</h2>
      <p>
        As informações sobre produtos têm caráter informativo e não constituem proposta, cotação ou contratação. Coberturas,
        condições, carências, franquias e valores dependem da análise de risco e das condições gerais de cada seguradora,
        operadora ou administradora, apresentadas formalmente antes da contratação.
      </p>
      <p>
        O registro do produto na SUSEP ou na ANS não implica recomendação ou incentivo à sua comercialização por parte desses
        órgãos.
      </p>

      <h2>3. Uso adequado</h2>
      <p>Ao usar o site, você se compromete a:</p>
      <ul>
        <li>Fornecer informações verdadeiras nos formulários e canais de contato;</li>
        <li>Não tentar acessar áreas restritas, interferir no funcionamento do site ou coletar dados de forma automatizada;</li>
        <li>Não usar o conteúdo para fins ilícitos ou que prejudiquem a {site.name} ou terceiros.</li>
      </ul>

      <h2>4. Propriedade intelectual</h2>
      <p>
        Marca, logotipo, textos, imagens, layout e demais elementos do site pertencem à {site.name} ou são usados com autorização.
        Logotipos de clientes e parceiros pertencem aos respectivos titulares. É proibido copiar, reproduzir ou distribuir esse
        conteúdo sem autorização prévia e por escrito.
      </p>

      <h2>5. Links externos</h2>
      <p>
        O site pode conter links para páginas de terceiros, como WhatsApp, redes sociais e seguradoras. Não nos responsabilizamos
        pelo conteúdo ou pelas práticas de privacidade desses sites.
      </p>

      <h2>6. Disponibilidade e responsabilidade</h2>
      <p>
        Trabalhamos para manter o site disponível e atualizado, mas não garantimos funcionamento ininterrupto ou livre de erros.
        Podemos alterar, suspender ou encerrar o site ou parte dele a qualquer momento, sem aviso prévio.
      </p>

      <h2>7. Privacidade</h2>
      <p>
        O tratamento de dados pessoais segue a nossa <Link href="/politica-de-privacidade">política de privacidade</Link> e a{" "}
        <Link href="/politica-de-cookies">política de cookies</Link>.
      </p>

      <h2>8. Alterações e foro</h2>
      <p>
        Estes termos podem ser atualizados a qualquer momento, e a versão vigente estará sempre nesta página. Eles são regidos pela
        legislação brasileira, e fica eleito o foro da comarca de Vitória, Espírito Santo, ressalvados os direitos do consumidor
        de demandar em seu domicílio.
      </p>
      <p>
        Dúvidas: <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </LegalPage>
  );
}
