
import type { Metadata } from "next";

export const defaultMetadata: Metadata = {
  title: {
    default: "Bruna Melgarejo Advocacia Criminal",
    template: "%s | Bruna Melgarejo"
  },
  description: "Advocacia Criminal estratégica, humana e técnica em Porto Alegre.",
  robots: { index: true, follow: true },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    title: "Bruna Melgarejo Advocacia Criminal",
    description: "Estratégia, ética e sensibilidade para garantir direitos e transformar realidades.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://",
    images: [{ url: "/api/og", width: 1200, height: 630, alt: "Bruna Melgarejo" }]
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://example.com")
};
