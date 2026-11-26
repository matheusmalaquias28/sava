import type { Metadata, Viewport } from "next";
import "./globals.css";
import { gotham, montserrat, revans } from "./fonts";
import { site } from "@/lib/site";
import { siteJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Preloader } from "@/components/Preloader";
import { Motion } from "@/components/Motion";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { CookieConsent } from "@/components/CookieConsent";
import { consentBootScript } from "@/lib/consent";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Savá Seguros | Seguros Empresariais em Vitória, ES",
    template: "%s | Savá Seguros",
  },
  description:
    "Corretora de seguros empresariais em Vitória, ES. Seguro empresarial, frota, saúde, vida, cyber, D&O e consórcio com cotação em todas as seguradoras.",
  applicationName: site.name,
  authors: [{ name: site.legalName, url: site.url }],
  creator: site.name,
  publisher: site.legalName,
  category: "Seguros",
  formatDetection: { telephone: false, email: false, address: false },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: site.name,
    url: "/",
    title: "Savá Seguros | Proteja o seu próximo movimento",
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Savá Seguros | Proteja o seu próximo movimento",
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION } }
    : {}),
};

export const viewport: Viewport = {
  themeColor: "#0d1733",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${gotham.variable} ${montserrat.variable} ${revans.variable}`}>
      <head>
        {/* Consent Mode v2: tudo negado até o visitante escolher. Tags de terceiros entram depois deste script. */}
        <script dangerouslySetInnerHTML={{ __html: consentBootScript }} />
      </head>
      <body className="min-h-full overflow-x-clip">
        <JsonLd data={siteJsonLd()} />
        <Preloader />
        <Motion />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
        <CookieConsent />
      </body>
    </html>
  );
}
