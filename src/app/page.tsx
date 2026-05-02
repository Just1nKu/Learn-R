import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-4 py-24 text-center">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        Learn R Programming
      </h1>
      <p className="mt-4 max-w-xl text-lg text-gray-500">
        A structured curriculum covering R fundamentals through biomedical data
        analysis — with runnable examples at every step.
      </p>
      <div className="mt-8 flex gap-4">
        <Link
          href="/modules"
          className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
        >
          Browse Modules
        </Link>
        <Link
          href="/modules/01-basics"
          className="rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
        >
          Start Learning
        </Link>
      </div>
    </div>
  );
}
