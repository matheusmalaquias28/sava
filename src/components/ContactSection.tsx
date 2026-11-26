import { fullAddress, lineFor, lines, site, whatsappLink } from "@/lib/site";
import { whatsappForSolution } from "@/lib/whatsapp";
import { ContactForm } from "./ContactForm";
import { Label } from "./Button";
import { Mail, Phone, Pin, WhatsApp } from "./Icons";

export function ContactSection({
  title = "Fale com um especialista da Savá",
  text = "Conte o momento da sua empresa. Um especialista retorna com um diagnóstico e os próximos passos, sem compromisso.",
  defaultSolution,
  id = "contato",
}: {
  title?: string;
  text?: string;
  defaultSolution?: string;
  id?: string;
}) {
  const line = lines[lineFor(defaultSolution)];
  const items = [
    { icon: WhatsApp, label: `WhatsApp ${line.label.toLowerCase()}`, value: line.display, href: defaultSolution ? whatsappForSolution(defaultSolution) : whatsappLink() },
    { icon: Phone, label: "Telefone", value: line.display, href: line.tel },
    { icon: Mail, label: "E-mail", value: site.email, href: `mailto:${site.email}` },
    { icon: Pin, label: "Escritório", value: fullAddress, href: site.mapsUrl },
  ];
  return (
    <section id={id} className="scroll-mt-24 py-24 md:py-32">
      <div className="container-x">
        <div className="grid gap-4 lg:grid-cols-[0.85fr_1.15fr]">
          <div data-reveal className="flex flex-col justify-between rounded-3xl bg-navy-deep p-8 text-white md:p-10">
            <div>
              <Label tone="light">Contato</Label>
              <h2 className="mt-5 text-[2rem] leading-[1.1] md:text-[2.6rem]">{title}</h2>
              <p className="mt-5 max-w-md leading-relaxed text-white/65">{text}</p>
            </div>
            <ul className="mt-12 divide-y divide-white/10 border-y border-white/10">
              {items.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="group flex items-start gap-4 py-4"
                  >
                    <c.icon className="mt-0.5 size-[18px] shrink-0 text-copper" />
                    <span className="min-w-0">
                      <span className="block text-xs text-white/50">{c.label}</span>
                      <span className="mt-0.5 block break-words text-[0.95rem] text-white transition-colors group-hover:text-copper-soft">
                        {c.value}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div data-reveal data-delay="0.1" className="rounded-3xl bg-sand p-6 md:p-10">
            <h3 className="text-xl">Solicite um contato</h3>
            <p className="mt-1.5 text-sm text-muted">Respondemos em horário comercial.</p>
            <div className="mt-7">
              <ContactForm defaultSolution={defaultSolution} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
