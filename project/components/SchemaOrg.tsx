interface SchemaOrgProps {
  name: string;
  url: string;
  email: string;
  telephone: string;
  oab: string;
}

export default function SchemaOrg({ name, url, email, telephone, oab }: SchemaOrgProps) {
  const legalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": name,
    "url": url,
    "email": email,
    "telephone": telephone,
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
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Bruna Melgarejo Rosa",
    "jobTitle": "Advogada Criminalista",
    "email": email,
    "telephone": telephone,
    "url": url,
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

