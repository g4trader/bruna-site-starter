const WORDPRESS_URL = "https://brunamelgarejo.adv.br";
const POSTS_PER_PAGE = 10;

export interface WordPressPost {
  id: number;
  date: string;
  date_gmt: string;
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  excerpt: {
    rendered: string;
    protected: boolean;
  };
  author: number;
  featured_media: number;
  comment_status: string;
  ping_status: string;
  sticky: boolean;
  template: string;
  format: string;
  meta: Record<string, any>;
  categories: number[];
  tags: number[];
  _links: Record<string, any>;
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
      media_details?: {
        sizes?: {
          medium?: { source_url: string };
          large?: { source_url: string };
          "medium_large"?: { source_url: string };
          thumbnail?: { source_url: string };
          full?: { source_url: string };
        };
      };
    }>;
  };
}

export interface WordPressPostsResponse {
  posts: WordPressPost[];
  totalPages: number;
  totalPosts: number;
}

/**
 * Busca posts do WordPress via API REST
 */
export async function fetchWordPressPosts(
  page: number = 1,
  perPage: number = POSTS_PER_PAGE
): Promise<WordPressPostsResponse> {
  try {
    const response = await fetch(
      `${WORDPRESS_URL}/wp-json/wp/v2/posts?page=${page}&per_page=${perPage}&_embed=true&orderby=date&order=desc`,
      {
        next: { revalidate: 60 }, // Revalida a cada 60 segundos para pegar novos posts
      }
    );

    if (!response.ok) {
      throw new Error(`WordPress API error: ${response.status}`);
    }

    const posts: WordPressPost[] = await response.json();
    const totalPosts = parseInt(response.headers.get("x-wp-total") || "0", 10);
    const totalPages = parseInt(response.headers.get("x-wp-totalpages") || "1", 10);

    return {
      posts,
      totalPages,
      totalPosts,
    };
  } catch (error) {
    console.error("Error fetching WordPress posts:", error);
    return {
      posts: [],
      totalPages: 0,
      totalPosts: 0,
    };
  }
}

/**
 * Busca um post específico do WordPress pelo slug
 */
export async function fetchWordPressPost(slug: string): Promise<WordPressPost | null> {
  try {
    const response = await fetch(
      `${WORDPRESS_URL}/wp-json/wp/v2/posts?slug=${slug}&_embed=true`,
      {
        next: { revalidate: 60 },
      }
    );

    if (!response.ok) {
      throw new Error(`WordPress API error: ${response.status}`);
    }

    const posts: WordPressPost[] = await response.json();
    return posts.length > 0 ? posts[0] : null;
  } catch (error) {
    console.error("Error fetching WordPress post:", error);
    return null;
  }
}

/**
 * Converte um post do WordPress para o formato usado no site
 */
export function formatWordPressPost(post: WordPressPost) {
  // Extrai o texto do excerpt removendo tags HTML
  const excerptText = post.excerpt.rendered
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .trim();

  // Extrai a URL da imagem destacada
  let featuredImageUrl: string | undefined;
  if (post._embedded?.["wp:featuredmedia"]?.[0]) {
    const media = post._embedded["wp:featuredmedia"][0];
    // Prioriza tamanhos maiores, mas aceita qualquer tamanho disponível
    featuredImageUrl =
      media.media_details?.sizes?.large?.source_url ||
      media.media_details?.sizes?.["medium_large"]?.source_url ||
      media.media_details?.sizes?.medium?.source_url ||
      media.source_url;
  }

  return {
    id: post.id,
    slug: post.slug,
    title: post.title.rendered,
    summary: excerptText || undefined,
    content: post.content.rendered,
    date: post.date,
    link: post.link,
    featuredImage: featuredImageUrl,
  };
}

