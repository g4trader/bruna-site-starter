# Site Bruna Melgarejo Advocacia Criminal

Site institucional moderno e responsivo para a advogada criminalista Bruna Melgarejo Rosa, desenvolvido com Next.js 14, TypeScript, Tailwind CSS e shadcn/ui.

## 🚀 Tecnologias

- **Next.js 14** (App Router) - Framework React
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **shadcn/ui** - Componentes UI
- **Framer Motion** - Animações (preparado)
- **Zod** - Validação de formulários
- **React Hook Form** - Gerenciamento de formulários
- **Resend** - Envio de e-mails
- **next-mdx-remote** - Renderização de MDX
- **Lucide Icons** - Ícones

## 📁 Estrutura do Projeto

```
project/
├── app/                    # App Router (Next.js 14)
│   ├── (site)/            # Rotas públicas
│   │   ├── page.tsx       # Home
│   │   ├── sobre/         # Sobre
│   │   ├── atuacao/       # Áreas de atuação
│   │   ├── publicacoes/   # Publicações acadêmicas
│   │   ├── blog/          # Blog
│   │   ├── contato/       # Contato
│   │   └── politica-de-privacidade/ # LGPD
│   ├── api/               # API Routes
│   │   ├── lead/          # POST /api/lead
│   │   └── newsletter/    # POST /api/newsletter
│   ├── og/                # Open Graph images
│   ├── sitemap.ts         # Sitemap dinâmico
│   └── robots.ts          # Robots.txt
├── components/            # Componentes React
│   ├── Header.tsx         # Cabeçalho
│   ├── Footer.tsx         # Rodapé
│   ├── LeadForm.tsx       # Formulário de lead
│   ├── ContactForm.tsx    # Formulário de contato
│   ├── NewsletterForm.tsx # Newsletter
│   ├── YouTubeEmbed.tsx   # Embed de vídeos
│   ├── FAQ.tsx            # FAQ interativo
│   ├── PublicationCard.tsx # Card de publicação
│   ├── PracticeAreaCard.tsx # Card de área
│   ├── WhatsAppFloat.tsx  # Botão flutuante WhatsApp
│   ├── SchemaOrg.tsx      # JSON-LD Schema.org
│   └── ui.tsx             # Componentes UI base
├── lib/                   # Utilitários
│   ├── email.ts           # Configuração Resend
│   ├── mdx.ts             # Processamento MDX
│   ├── seo.ts             # SEO metadata
│   ├── site.ts            # Configurações do site
│   └── validators.ts      # Schemas Zod
├── content/               # Conteúdo MDX
│   ├── publicacoes/       # Publicações acadêmicas
│   └── blog/              # Artigos do blog
└── styles/                # Estilos globais
```

## 🛠️ Setup e Desenvolvimento

### Pré-requisitos

- Node.js 18+ ou Bun
- pnpm (recomendado) ou npm/yarn

### Instalação

1. Clone o repositório:
```bash
git clone <repo-url>
cd bruna-site-starter/project
```

2. Instale as dependências:
```bash
pnpm install
```

3. Configure as variáveis de ambiente:
```bash
cp .env.example .env.local
```

Edite `.env.local` com suas credenciais:
- `RESEND_API_KEY` - Chave da API do Resend
- `MAIL_FROM` - E-mail remetente (deve ser verificado no Resend)
- `NOTIFY_TO` - E-mail para receber notificações de leads
- `NEXT_PUBLIC_SITE_URL` - URL do site em produção

4. Execute o servidor de desenvolvimento:
```bash
pnpm dev
```

Acesse [http://localhost:3000](http://localhost:3000)

## 📝 Conteúdo

### Editar Conteúdo

#### Publicações e Blog
Adicione arquivos `.mdx` em:
- `content/publicacoes/` - Para publicações acadêmicas
- `content/blog/` - Para artigos do blog

Formato do frontmatter:
```mdx
---
title: "Título da Publicação"
date: 2025-01-15
summary: "Resumo curto da publicação"
tags: ["Direito Penal", "Processo Penal"]
draft: false
---

Conteúdo em Markdown/MDX...
```

#### Dados de Contato
Edite os dados de contato em:
- `app/page.tsx` - Hero section
- `components/Footer.tsx` - Rodapé
- `app/sobre/page.tsx` - Página Sobre
- `components/SchemaOrg.tsx` - Schema.org JSON-LD

**Dados atuais:**
- OAB/RS: 115.891
- Telefone/WhatsApp: (51) 98163-5522
- E-mail: bruna@brunamelgarejo.adv.br
- Site: brunamelgarejo.adv.br

## 🚢 Deploy

### Vercel (Recomendado)

1. Conecte seu repositório no [Vercel](https://vercel.com)
2. Configure as variáveis de ambiente:
   - `RESEND_API_KEY`
   - `MAIL_FROM`
   - `NOTIFY_TO`
   - `NEXT_PUBLIC_SITE_URL`
3. Deploy automático a cada push

### Build Manual

```bash
pnpm build
pnpm start
```

## 🎨 Design System

### Paleta de Cores

- **Azul petróleo** (`#0F172A`) - `brand-dark` - Fundos e headings
- **Azul profundo** (`#1E293B`) - `brand-ink` - Textos principais
- **Dourado sutil** (`#C9A227`) - `brand-gold` - Destaques e CTAs
- **Cinza** (`#E2E8F0`) - `brand-line` - Bordas

### Tipografia

- **Serif** - Títulos (Georgia, serif)
- **Sans-serif** - Textos (system-ui, sans-serif)

## 📧 Formulários

### Lead Form
- Nome completo
- E-mail
- Telefone/WhatsApp
- Mensagem (breve descrição do caso)
- Consentimento LGPD (obrigatório)
- Honeypot (anti-spam)

### Contact Form
- Mesmos campos do Lead Form
- Preferência de horário (opcional)

### Newsletter
- E-mail
- Consentimento LGPD (obrigatório)
- Honeypot (anti-spam)

## 🔒 Segurança e LGPD

- ✅ Validação server-side com Zod
- ✅ Honeypot anti-spam
- ✅ Consentimento explícito LGPD
- ✅ Política de Privacidade completa
- ✅ Sem promessas de resultado (conforme ética OAB)
- ✅ Sanitização de entradas

## 📊 SEO

- ✅ Metadata dinâmica por página
- ✅ Sitemap.xml automático
- ✅ Robots.txt configurado
- ✅ Open Graph images
- ✅ JSON-LD Schema.org (LegalService, Person)
- ✅ URLs semânticas e canônicas

## 🧪 Testes

Execute os testes:
```bash
pnpm lint
pnpm build
```

## 📄 Licença

Todos os direitos reservados. © 2025 Bruna Melgarejo Advocacia Criminal.

## 📞 Suporte

Para dúvidas sobre o site ou suporte técnico, entre em contato através do e-mail institucional.

---

**Desenvolvido com ❤️ para promover justiça, garantir direitos e transformar realidades.**

