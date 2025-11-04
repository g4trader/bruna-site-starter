
import Script from "next/script";

type LegalServiceProps = {
  name: string;
  url: string;
  email: string;
  telephone: string;
  oab: string;
};

export default function SchemaOrg({ name, url, email, telephone, oab }: LegalServiceProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": name,
    "url": url,
    "email": email,
    "telephone": telephone,
    "areaServed": "Brazil",
    "founder": {
      "@type": "Person",
      "name": "Bruna Melgarejo Rosa",
      "jobTitle": "Advogada Criminalista e Professora",
      "knowsAbout": ["Direito Penal", "Processo Penal"]
    },
    "identifier": [ { "@type": "PropertyValue", "name": "OAB", "value": oab } ]
  };
  return <Script id="schema-legalservice" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
