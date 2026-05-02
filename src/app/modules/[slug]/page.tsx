import { MDXRemote } from "next-mdx-remote/rsc";
import { getModules, getModuleContent } from "@/lib/modules";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return getModules().map((m) => ({ slug: m.slug }));
}

export const dynamicParams = false;

export default async function LessonPage(props: PageProps<"/modules/[slug]">) {
  const { slug } = await props.params;

  let frontmatter, content;
  try {
    ({ frontmatter, content } = getModuleContent(slug));
  } catch {
    notFound();
  }

  const modules = getModules();
  const idx = modules.findIndex((m) => m.slug === slug);
  const prev = modules[idx - 1];
  const next = modules[idx + 1];

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-6 flex items-center gap-3 text-sm text-gray-500">
        <Link href="/modules" className="hover:text-gray-700">Modules</Link>
        <span>/</span>
        <span className="text-gray-700">{frontmatter!.title}</span>
        <span className="ml-auto">{frontmatter!.duration}</span>
      </div>
      <article className="prose prose-gray max-w-none">
        <MDXRemote source={content!} />
      </article>
      <nav className="mt-12 flex justify-between border-t border-gray-200 pt-6 text-sm">
        {prev ? (
          <Link href={`/modules/${prev.slug}`} className="text-blue-600 hover:underline">
            ← {prev.title}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link href={`/modules/${next.slug}`} className="text-blue-600 hover:underline">
            {next.title} →
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </div>
  );
}
