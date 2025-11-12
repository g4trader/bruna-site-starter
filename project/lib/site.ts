
const defaultUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://brunamelgarejo.adv.br").replace(/\/$/, "");

export const siteMetadata = {
  name: "Bruna Melgarejo Advocacia Criminal",
  legalName: "Bruna Melgarejo Advocacia Criminal",
  shortName: "Bruna Melgarejo",
  founder: "Bruna Melgarejo Rosa",
  url: defaultUrl,
  locale: "pt_BR",
  title: "Bruna Melgarejo Advocacia Criminal",
  titleTemplate: "%s | Bruna Melgarejo",
  description:
    "Advocacia Criminal estratégica, humana e técnica em Porto Alegre • Defesa Penal, investigação defensiva e consultoria ética com abordagem humana e sigilosa.",
  keywords: [
    "advocacia criminal",
    "advogada criminalista",
    "direito penal",
    "processo penal",
    "defesa penal",
    "consultoria jurídica",
    "Porto Alegre",
  ],
  email: "bruna@brunamelgarejo.adv.br",
  phone: "+55-51-98163-5522",
  address: {
    locality: "Porto Alegre",
    region: "RS",
    country: "BR",
  },
  social: {
    whatsapp: "https://wa.me/5551981635522",
    instagram: "https://www.instagram.com/brunamelgarejoadv/",
    linkedin: "https://www.linkedin.com/in/bruna-melgarejo/",
  },
  logo: `${defaultUrl}/logo.png`,
};

export const siteUrl = siteMetadata.url;
