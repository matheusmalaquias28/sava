import type { Metadata } from "next";
import Link from "next/link";
import { CookiePreferencesButton } from "@/components/CookieConsent";
import { pageMetadata } from "@/lib/seo";
import { LegalPage, LegalTable } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Política de Cookies",
  description: "Quais cookies o site da Savá Seguros utiliza, para quê, e como gerenciar as suas preferências de privacidade.",
  path: "/politica-de-cookies",
});

// [A CONFIRMAR] revisar a tabela quando GTM, GA4 ou Meta Pixel forem instalados
export default function Cookies() {
  return (
    <LegalPage
      current="/politica-de-cookies"
      eyebrow="Cookies"
      title="Política de cookies"
      intro={
        <p>
          Usamos cookies para o site funcionar bem e, apenas com a sua autorização, para entender como ele é usado e medir nossas
          campanhas. Aqui você vê cada categoria e pode mudar a sua escolha quando quiser.
        </p>
      }
    >
      <h2>1. O que são cookies</h2>
      <p>
        Cookies são pequenos arquivos que o site grava no seu navegador para lembrar informações entre uma página e outra ou
        entre visitas. Tecnologias parecidas, como o armazenamento local (localStorage) e pixels, seguem as mesmas regras desta
        política.
      </p>

      <h2>2. Categorias que utilizamos</h2>
      <h3>Necessários</h3>
      <p>
        Essenciais para o funcionamento e a segurança do site, incluindo o registro da sua escolha sobre cookies. Não dependem de
        consentimento e não podem ser desativados.
      </p>
      <h3>Desempenho e análise</h3>
      <p>
        Mostram, de forma agregada, quantas pessoas visitam o site, de onde vêm e quais páginas acessam. Ajudam a melhorar o
        conteúdo. Só são ativados se você autorizar.
      </p>
      <h3>Marketing</h3>
      <p>
        Permitem medir o resultado de anúncios e exibir campanhas da {site.name} mais relevantes em outras plataformas, como
        Google e Meta. Só são ativados se você autorizar.
      </p>

      <h2>3. Lista de cookies</h2>
      <LegalTable
        head={["Nome", "Categoria", "Finalidade", "Duração"]}
        rows={[
          ["sava-consent", "Necessário", "Guarda a sua escolha sobre cookies (armazenamento local)", "Até ser alterada"],
          ["googtrans", "Necessário", "Guarda o idioma escolhido (PT/EN). Só é criado se você pedir a versão em inglês", "Sessão"],
          ["_ga, _ga_*", "Análise", "Google Analytics: distingue visitantes e sessões", "Até 2 anos"],
          ["_gcl_au", "Marketing", "Google Ads: mede conversões de anúncios", "3 meses"],
          ["_fbp", "Marketing", "Meta: mede e otimiza anúncios no Facebook e Instagram", "3 meses"],
        ]}
      />
      <p>
        Os cookies de análise e marketing listados só são gravados depois do seu consentimento e quando a ferramenta
        correspondente estiver ativa no site.
      </p>

      <h2>4. Como gerenciar</h2>
      <p>Você pode rever a sua escolha a qualquer momento, aqui ou pelo link no rodapé de todas as páginas:</p>
      <div className="my-6">
        <CookiePreferencesButton className="inline-flex h-11 items-center rounded-full bg-navy px-6 text-[0.85rem] font-medium text-white transition-colors hover:bg-navy-deep" />
      </div>
      <p>
        Também é possível apagar ou bloquear cookies nas configurações do seu navegador. Bloquear os cookies necessários pode
        fazer algumas partes do site deixarem de funcionar.
      </p>

      <h2>5. Mais informações</h2>
      <p>
        Para saber como tratamos dados pessoais de forma geral, leia a{" "}
        <Link href="/politica-de-privacidade">política de privacidade</Link>. Dúvidas podem ser enviadas para{" "}
        <a href={`mailto:${site.email}?subject=Cookies`}>{site.email}</a>.
      </p>
    </LegalPage>
  );
}
