
import type { Metadata } from "next";
import { siteMetadata, siteUrl } from "./site";

const ogImage = `${siteUrl}/api/og`;

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteMetadata.title,
    template: siteMetadata.titleTemplate,
  },
  description: siteMetadata.description,
  keywords: siteMetadata.keywords,
  authors: [{ name: siteMetadata.founder }],
  creator: siteMetadata.founder,
  publisher: siteMetadata.legalName,
  applicationName: siteMetadata.shortName,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  referrer: "origin-when-cross-origin",
  alternates: {
    canonical: siteUrl,
    languages: {
      "pt-BR": siteUrl,
    },
  },
  openGraph: {
    type: "website",
    locale: siteMetadata.locale,
    url: siteUrl,
    siteName: siteMetadata.title,
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: siteMetadata.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: [ogImage],
  },
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" },
      { url: "/logo.svg", type: "image/svg+xml" },
    ],
    apple: "/logo.png",
  },
  manifest: "/site.webmanifest",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
};
