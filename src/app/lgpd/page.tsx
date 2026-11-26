import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Seus Direitos (LGPD)",
  description: "Como exercer os seus direitos de titular de dados pessoais junto à Savá Seguros: acesso, correção, exclusão e mais.",
  path: "/lgpd",
});

const rights = [
  ["Confirmação e acesso", "Saber se tratamos dados seus e receber uma cópia deles."],
  ["Correção", "Atualizar dados incompletos, inexatos ou desatualizados."],
  ["Anonimização, bloqueio ou eliminação", "Para dados desnecessários, excessivos ou tratados em desconformidade com a lei."],
  ["Portabilidade", "Receber seus dados em formato estruturado para levar a outro fornecedor."],
  ["Eliminação de dados do consentimento", "Apagar dados tratados com base no seu consentimento, salvo exceções legais."],
  ["Informação sobre compartilhamento", "Saber com quais empresas e órgãos públicos compartilhamos seus dados."],
  ["Revogação do consentimento", "Retirar a autorização dada, como a de cookies de análise e marketing."],
  ["Oposição e revisão", "Opor-se a tratamentos irregulares e pedir revisão de decisões automatizadas."],
];

const mailto = `mailto:${site.email}?subject=${encodeURIComponent("Solicitação de titular (LGPD)")}`;

export default function Lgpd() {
  return (
    <LegalPage
      current="/lgpd"
      eyebrow="LGPD"
      title="Seus direitos sobre os seus dados"
      intro={
        <p>
          A Lei Geral de Proteção de Dados garante a você controle sobre as informações pessoais que a {site.name} trata. Veja
          quais são os seus direitos e como solicitá-los.
        </p>
      }
    >
      <h2>Direitos do titular</h2>
      <div className="my-6 grid gap-3 sm:grid-cols-2">
        {rights.map(([title, text]) => (
          <div key={title} className="rounded-xl border border-stone bg-white/50 p-5">
            <p className="font-head text-[0.98rem] font-medium tracking-tight text-ink">{title}</p>
            <p className="mt-1.5 text-sm leading-relaxed">{text}</p>
          </div>
        ))}
      </div>
      <p>Esses direitos estão previstos no art. 18 da Lei 13.709/2018.</p>

      <h2>Como fazer uma solicitação</h2>
      <ol>
        <li>
          Envie um e-mail para <a href={mailto}>{site.email}</a> com o assunto &ldquo;Solicitação de titular (LGPD)&rdquo;.
        </li>
        <li>Informe seu nome completo, CPF, a empresa vinculada (se houver) e qual direito deseja exercer.</li>
        <li>
          Para sua segurança, podemos pedir uma confirmação de identidade antes de atender. Nunca solicitamos senhas.
        </li>
      </ol>

      <h2>Prazos</h2>
      <p>
        Respondemos de imediato, em formato simplificado, à confirmação de existência ou ao acesso aos dados. A declaração completa
        é enviada em até 15 dias contados do pedido. Se alguma solicitação não puder ser atendida, por exemplo por obrigação legal
        de guarda, explicaremos o motivo.
      </p>

      <h2>Dados mantidos por seguradoras</h2>
      <p>
        Quando os dados também estiverem com seguradoras, operadoras ou administradoras parceiras, encaminharemos o seu pedido a
        elas e acompanharemos a resposta.
      </p>

      <h2>Encarregado e ANPD</h2>
      {/* [A CONFIRMAR] nome do encarregado (DPO) */}
      <p>
        Nosso encarregado pelo tratamento de dados atende pelo e-mail <a href={mailto}>{site.email}</a>. Se considerar que sua
        solicitação não foi atendida, você também pode recorrer à Autoridade Nacional de Proteção de Dados (ANPD) em{" "}
        <a href="https://www.gov.br/anpd" target="_blank" rel="noopener noreferrer">gov.br/anpd</a>.
      </p>
      <p>
        Para entender em detalhes como tratamos os dados, leia a <Link href="/politica-de-privacidade">política de privacidade</Link>.
      </p>

      <div className="mt-12 flex flex-col gap-5 rounded-2xl bg-navy-deep p-7 text-white md:flex-row md:items-center md:justify-between md:p-9">
        <div>
          <p className="font-head text-xl font-medium tracking-tight">Quer exercer algum direito?</p>
          <p className="mt-1.5 text-sm text-white/65">Escreva para o nosso encarregado. Respondemos dentro do prazo legal.</p>
        </div>
        <a
          href={mailto}
          className="inline-flex h-12 shrink-0 items-center self-start rounded-full bg-copper px-6 text-[0.9rem] font-medium text-white! no-underline! transition-colors hover:bg-copper-dark md:self-auto"
        >
          Enviar solicitação
        </a>
      </div>
    </LegalPage>
  );
}
