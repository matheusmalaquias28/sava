import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { LegalPage, LegalTable } from "@/components/LegalPage";
import { fullAddress, site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Política de Privacidade",
  description: "Como a Savá Seguros coleta, usa, compartilha e protege dados pessoais, em conformidade com a LGPD.",
  path: "/politica-de-privacidade",
});

// [A CONFIRMAR] texto revisado pelo jurídico da Savá
export default function Privacidade() {
  return (
    <LegalPage
      current="/politica-de-privacidade"
      eyebrow="LGPD"
      title="Política de privacidade"
      intro={
        <p>
          Esta política explica, de forma direta, quais dados pessoais a {site.name} trata, para quê, com quem compartilha e
          como você exerce os seus direitos previstos na Lei Geral de Proteção de Dados (Lei 13.709/2018).
        </p>
      }
    >
      <h2>1. Quem é o controlador</h2>
      <p>
        <strong>{site.legalName}</strong>, inscrita no CNPJ {site.cnpj}, com sede na {fullAddress}, corretora de seguros
        registrada na SUSEP, é a controladora dos dados pessoais tratados neste site e nos nossos canais de atendimento.
      </p>

      <h2>2. Dados que coletamos</h2>
      <h3>Informados por você</h3>
      <ul>
        <li>Nome, empresa, cargo, telefone/WhatsApp e e-mail enviados pelo formulário de contato ou pelos canais de atendimento;</li>
        <li>
          Informações necessárias para cotação e contratação, como dados cadastrais da empresa, de sócios, colaboradores,
          beneficiários, veículos, imóveis ou bens a serem segurados;
        </li>
        <li>Mensagens e documentos que você nos envia durante o atendimento.</li>
      </ul>
      <h3>Coletados automaticamente</h3>
      <ul>
        <li>Dados técnicos de navegação, como endereço IP, tipo de dispositivo, navegador e páginas visitadas;</li>
        <li>
          Cookies e tecnologias semelhantes, conforme as categorias que você autorizar. Veja a{" "}
          <Link href="/politica-de-cookies">política de cookies</Link>.
        </li>
      </ul>
      <p>
        Em alguns produtos, como seguros de vida, saúde e benefícios, pode ser necessário tratar <strong>dados pessoais
        sensíveis</strong> (por exemplo, informações de saúde). Esse tratamento acontece somente quando indispensável para a
        cotação, contratação ou execução do seguro, com as salvaguardas exigidas pela LGPD.
      </p>

      <h2>3. Para que usamos os dados</h2>
      <LegalTable
        head={["Finalidade", "Base legal (LGPD)"]}
        rows={[
          ["Responder ao seu contato e apresentar propostas", "Procedimentos preliminares a contrato, a seu pedido (art. 7º, V)"],
          ["Cotar, contratar, renovar e administrar apólices, benefícios e consórcios", "Execução de contrato (art. 7º, V)"],
          ["Atender a sinistros e solicitações durante a vigência", "Execução de contrato (art. 7º, V)"],
          ["Cumprir obrigações da SUSEP, fiscais e de prevenção à lavagem de dinheiro", "Obrigação legal ou regulatória (art. 7º, II)"],
          ["Defender direitos em processos judiciais, administrativos ou arbitrais", "Exercício regular de direitos (art. 7º, VI)"],
          ["Enviar conteúdos e ofertas relacionados aos serviços já contratados", "Legítimo interesse (art. 7º, IX), com opção de descadastro"],
          ["Medir audiência e campanhas por cookies não essenciais", "Consentimento (art. 7º, I)"],
        ]}
      />

      <h2>4. Com quem compartilhamos</h2>
      <p>Não vendemos dados pessoais. O compartilhamento acontece apenas quando necessário, com:</p>
      <ul>
        <li>Seguradoras, operadoras de saúde e odontologia e administradoras de consórcio, para cotação e contratação;</li>
        <li>Prestadores de serviço que nos apoiam, como hospedagem, sistemas de gestão, comunicação e assistência;</li>
        <li>Ferramentas de análise e publicidade, somente se você autorizar os cookies correspondentes;</li>
        <li>Autoridades públicas, quando houver obrigação legal ou ordem judicial.</li>
      </ul>
      <p>
        Alguns desses fornecedores podem armazenar dados fora do Brasil. Nesses casos, a transferência internacional segue as
        hipóteses do art. 33 da LGPD e as normas da ANPD.
      </p>

      <h2>5. Por quanto tempo guardamos</h2>
      <p>
        Mantemos os dados pelo tempo necessário para cumprir as finalidades acima. Dados de contatos que não viraram contrato são
        mantidos por até 2 anos. Dados de apólices e contratos são guardados durante a vigência e pelos prazos legais e
        regulatórios aplicáveis, inclusive prescricionais. Depois disso, são eliminados ou anonimizados.
      </p>

      <h2>6. Como protegemos</h2>
      <p>
        Adotamos medidas técnicas e administrativas para proteger os dados contra acessos não autorizados, perda ou alteração,
        como conexão criptografada (HTTPS), controle de acesso por perfil e contratos de confidencialidade com colaboradores e
        parceiros. Se ocorrer um incidente de segurança relevante, comunicaremos a ANPD e os titulares afetados, conforme a lei.
      </p>

      <h2>7. Seus direitos</h2>
      <p>
        Você pode, a qualquer momento, confirmar se tratamos seus dados, acessá-los, corrigi-los, pedir anonimização, bloqueio ou
        eliminação, solicitar portabilidade, saber com quem foram compartilhados e revogar o consentimento. Veja como exercer cada
        um deles na página <Link href="/lgpd">Seus direitos (LGPD)</Link>.
      </p>

      <h2>8. Encarregado pelo tratamento de dados</h2>
      {/* [A CONFIRMAR] nome do encarregado (DPO) e e-mail dedicado */}
      <p>
        Dúvidas, solicitações ou reclamações sobre dados pessoais podem ser enviadas ao nosso encarregado pelo e-mail{" "}
        <a href={`mailto:${site.email}?subject=Privacidade%20e%20LGPD`}>{site.email}</a>.
      </p>

      <h2>9. Crianças e adolescentes</h2>
      <p>
        Este site não é direcionado a menores de 18 anos. Dados de crianças e adolescentes, como dependentes em planos de saúde ou
        seguros de vida, são tratados apenas no melhor interesse deles e com autorização do responsável legal.
      </p>

      <h2>10. Alterações desta política</h2>
      <p>
        Podemos atualizar esta política para refletir mudanças nos nossos serviços ou na legislação. A data da última atualização
        fica sempre indicada no topo da página.
      </p>
    </LegalPage>
  );
}
