import type { MDXComponents } from "mdx/types";
import CodeBlock from "@/components/CodeBlock";

const components: MDXComponents = {
  pre: ({ children }) => <CodeBlock>{children}</CodeBlock>,
  h1: ({ children }) => (
    <h1 className="text-3xl font-bold text-gray-900 mb-4 mt-8">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-2xl font-semibold text-gray-800 mb-3 mt-6">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">{children}</h3>
  ),
  p: ({ children }) => (
    <p className="text-gray-700 leading-7 mb-4">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="list-disc list-inside mb-4 space-y-1 text-gray-700">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal list-inside mb-4 space-y-1 text-gray-700">{children}</ol>
  ),
  code: ({ children }) => (
    <code className="bg-gray-100 text-rose-600 px-1.5 py-0.5 rounded text-sm font-mono">
      {children}
    </code>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-blue-400 pl-4 italic text-gray-600 my-4">
      {children}
    </blockquote>
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
