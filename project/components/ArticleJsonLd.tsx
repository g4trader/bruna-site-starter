interface ArticleJsonLdProps {
  type?: "Article" | "BlogPosting";
  url: string;
  title: string;
  description?: string;
  image?: string;
  publishedTime?: string;
  modifiedTime?: string;
  keywords?: string[];
  authorName: string;
  publisherName: string;
  publisherLogo?: string;
}

export default function ArticleJsonLd({
  type = "Article",
  url,
  title,
  description,
  image,
  publishedTime,
  modifiedTime,
  keywords,
  authorName,
  publisherName,
  publisherLogo,
}: ArticleJsonLdProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": type,
    mainEntityOfPage: url,
    headline: title,
    name: title,
    description,
    image,
    datePublished: publishedTime,
    dateModified: modifiedTime || publishedTime,
    author: {
      "@type": "Person",
      name: authorName,
    },
    publisher: {
      "@type": "Organization",
      name: publisherName,
      ...(publisherLogo
        ? {
            logo: {
              "@type": "ImageObject",
              url: publisherLogo,
            },
          }
        : {}),
    },
    keywords,
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}


