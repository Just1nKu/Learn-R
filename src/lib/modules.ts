import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "src/content/modules");

export type ModuleFrontmatter = {
  title: string;
  description: string;
  order: number;
  duration: string;
};

export type Module = ModuleFrontmatter & { slug: string };

export function getModules(): Module[] {
  const files = fs.readdirSync(contentDir).filter((f) => /\.mdx?$/.test(f));
  return files
    .map((file) => {
      const slug = file.replace(/\.mdx?$/, "");
      const source = fs.readFileSync(path.join(contentDir, file), "utf8");
      const { data } = matter(source);
      return { slug, ...(data as ModuleFrontmatter) };
    })
    .sort((a, b) => a.order - b.order);
}

export function getModuleContent(slug: string): { frontmatter: ModuleFrontmatter; content: string } {
  const filePath = path.join(contentDir, `${slug}.mdx`);
  const source = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(source);
  return { frontmatter: data as ModuleFrontmatter, content };
}
