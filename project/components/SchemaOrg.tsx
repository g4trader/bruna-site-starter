interface SchemaOrgProps {
  name: string;
  url: string;
  email: string;
  telephone: string;
  oab: string;
  logo?: string;
  sameAs?: string[];
}

export default function SchemaOrg({ name, url, email, telephone, oab, logo, sameAs }: SchemaOrgProps) {
  const legalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name,
    url,
    email,
    telephone,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Porto Alegre",
      "addressRegion": "RS",
      "addressCountry": "BR",
    },
    "areaServed": {
      "@type": "Country",
      "name": "Brasil",
    },
    "serviceType": "Advocacia Criminal",
    ...(logo ? { logo } : {}),
    ...(sameAs && sameAs.length > 0 ? { sameAs } : {}),
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Bruna Melgarejo Rosa",
    jobTitle: "Advogada Criminalista",
    email,
    telephone,
    url,
    "identifier": {
      "@type": "PropertyValue",
      "name": "OAB/RS",
      "value": oab,
    },
    "worksFor": {
      "@type": "LegalService",
      "name": name,
      "url": url,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
    </>
  );
}

