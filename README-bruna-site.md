# Site — Bruna Melgarejo Advocacia Criminal

Este repositório contém a estrutura de conteúdo inicial (MDX) e diretrizes para o site da **Bruna Melgarejo Rosa**, advogada criminalista e professora de Direito Penal e Processo Penal.

## Como usar estes arquivos
- Copie a pasta `content/` para o seu projeto Next.js (App Router) com **Contentlayer** (ou MDX nativo).
- Garanta que as rotas `/publicacoes` e `/blog` estejam configuradas para ler estes arquivos.
- As páginas Home, Sobre, Atuação, Publicações, Blog e Contato devem consumir estes conteúdos.
- Todos os textos seguem linguagem informativa e ética, sem promessa de resultado.

## Estrutura sugerida
```
/content
  /publicacoes
    - rdd-pacote-anticrime.mdx
    - liberdade-imprensa-corpo-feminino.mdx
    - discurso-odio-performatividade.mdx
  /blog
    - audiencia-de-custodia-entenda-o-que-esperar.mdx
    - medidas-cautelares-guia-pratico-para-familiares.mdx
```
> **Observação**: os MDX são autorais e derivados de pautas acadêmicas e profissionais da advogada. Ajuste o tom conforme necessário.

## Wireframe (Home)
O arquivo `wireframe-home-bruna.png` ilustra a hierarquia visual das seções da Home, com foco em **autoridade** e **captação de leads**:
1. **Header fixo** (logo, navegação, CTA “Agendar Consulta”).  
2. **Hero** com título institucional, subtítulo e CTAs (Agendar / WhatsApp).  
3. **Áreas de Atuação** (cards).  
4. **Por que nos escolher** (pilares: estratégia, ética, sensibilidade).  
5. **Publicações & Pesquisa** (cards com sumarização).  
6. **Na Mídia** (embeds YouTube responsivos).  
7. **FAQ** (acordeão).  
8. **CTA final** + **Rodapé** com contatos e LGPD.

## Contatos (exibição no site)
- **OAB/RS 115.891**
- **Telefone/WhatsApp:** (51) 98163-5522
- **E-mail:** bruna@brunamelgarejo.adv.br
- **Site:** www.brunamelgarejo.adv.br

## LGPD e Ética
- Os formulários devem conter consentimento explícito (checkbox) e finalidade clara.
- Evitar linguagem que prometa resultados; adotar tom informativo e responsável.

## Próximos passos
1. Integrar formulários (RHF + Zod) e API routes (Vercel Functions).
2. Conectar Resend (e-mail) e Vercel KV ou Postgres para leads.
3. Implementar SEO técnico (next-seo, sitemap, OG).
4. Publicar na Vercel.
