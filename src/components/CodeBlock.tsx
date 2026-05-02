import type { ReactNode } from "react";

export default function CodeBlock({ children }: { children: ReactNode }) {
  return (
    <pre className="my-4 overflow-x-auto rounded-lg bg-gray-900 px-5 py-4 text-sm leading-relaxed text-gray-100 font-mono">
      {children}
    </pre>
  );
}
