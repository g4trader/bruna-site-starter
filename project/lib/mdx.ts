
import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

type DocMeta = {
  title: string;
  date?: string;
  summary?: string;
  tags?: string[];
  draft?: boolean;
  slug: string;
};

const root = process.cwd();

export async function listMDX(dir: "publicacoes" | "blog"): Promise<DocMeta[]> {
  const contentDir = path.join(root, "content", dir);
  let files: string[] = [];
  try {
    files = await fs.readdir(contentDir);
  } catch {
    return [];
  }
  const out: DocMeta[] = [];
  for (const f of files) {
    if (!f.endsWith(".mdx")) continue;
    const slug = f.replace(/\.mdx$/, "");
    const raw = await fs.readFile(path.join(contentDir, f), "utf8");
    const { data } = matter(raw);
    out.push({
      title: data.title || slug,
      date: data.date || undefined,
      summary: data.summary || "",
      tags: data.tags || [],
      draft: !!data.draft,
      slug,
    });
  }
  // newest first
  return out.sort((a,b) => (b.date || "").localeCompare(a.date || ""));
}

export async function readMDX(dir: "publicacoes" | "blog", slug: string) {
  const file = path.join(root, "content", dir, `${slug}.mdx`);
  const raw = await fs.readFile(file, "utf8");
  const { data, content } = matter(raw);
  return { meta: { ...data, slug }, content };
}
