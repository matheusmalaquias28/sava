import { existsSync } from "node:fs";
import path from "node:path";
import Image from "next/image";

/**
 * Imagem com placeholder: enquanto o arquivo não existir em /public, mostra um
 * bloco neutro com a descrição da foto prevista (útil para montar páginas
 * antes das imagens finais).
 */
export function MediaSlot({
  src,
  alt,
  label,
  sizes,
  className = "",
  priority,
}: {
  src: string;
  alt: string;
  label: string;
  sizes: string;
  className?: string;
  priority?: boolean;
}) {
  const exists = existsSync(path.join(process.cwd(), "public", src));
  return (
    <div className={`relative overflow-hidden bg-sand ${className}`}>
      {exists ? (
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 border border-dashed border-ink/15 p-6 text-center">
          <svg viewBox="0 0 24 24" className="size-7 text-ink/30" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden>
            <rect x="3" y="4.5" width="18" height="15" rx="2" />
            <circle cx="9" cy="10" r="1.8" />
            <path d="m4 18 5-5 4 4 3-3 4 4" />
          </svg>
          <p className="max-w-[16rem] text-xs leading-relaxed text-muted">{label}</p>
          <p className="font-mono text-[0.65rem] text-ink/35">{src}</p>
        </div>
      )}
    </div>
  );
}
