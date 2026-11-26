import Image from "next/image";
import { instagramPosts, postImage, postUrl } from "@/lib/instagram";
import { site } from "@/lib/site";
import { Button, Label } from "../Button";
import { Instagram } from "../Icons";

const handle = "@" + site.social.instagram.replace(/\/$/, "").split("/").pop();

export function InstagramFeed() {
  const posts = instagramPosts;

  return (
    <section id="instagram" className="scroll-mt-24 py-24 md:py-32">
      <div className="container-x">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div data-reveal>
              <Label>Instagram</Label>
            </div>
            <h2 data-reveal data-delay="0.05" className="mt-5 text-[2rem] leading-[1.12] md:text-[2.8rem]">
              Acompanhe a Savá no dia a dia
            </h2>
            <p data-reveal data-delay="0.1" className="mt-4 leading-relaxed text-muted">
              Conteúdos sobre seguros, benefícios e proteção patrimonial para empresas, direto do nosso perfil{" "}
              <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" className="font-medium text-navy hover:text-copper-dark">
                {handle}
              </a>
              .
            </p>
          </div>
          <div data-reveal data-delay="0.15">
            <Button href={site.social.instagram} variant="outline">Seguir no Instagram</Button>
          </div>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-4">
          {posts.map((p, i) => (
            <li key={p.code} data-reveal data-delay={(i % 4) * 0.06}>
              <a
                href={postUrl(p)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Post do Instagram: ${p.caption.slice(0, 80)}`}
                className="group relative block aspect-[4/5] overflow-hidden rounded-2xl bg-sand ring-1 ring-ink/10"
              >
                <Image
                  src={postImage(p)}
                  alt=""
                  fill
                  sizes="(min-width:1024px) 25vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-[var(--ease-out-quint)] group-hover:scale-105"
                />
                {p.isVideo && (
                  <span className="absolute right-3 top-3 grid size-8 place-items-center rounded-full bg-navy-deep/60 text-white backdrop-blur-sm transition-opacity duration-500 group-hover:opacity-0">
                    <svg viewBox="0 0 24 24" className="ml-0.5 size-3.5" fill="currentColor" aria-hidden>
                      <path d="M7 4.5v15l12-7.5z" />
                    </svg>
                  </span>
                )}
                <span className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-navy-deep/90 via-navy-deep/40 to-transparent p-4 text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100 md:p-5">
                  <Instagram className="mb-auto ml-auto size-5" />
                  <span className="line-clamp-4 text-[0.82rem] leading-snug text-white/90">{p.caption}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
