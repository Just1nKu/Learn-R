import Link from "next/link";
import type { Module } from "@/lib/modules";

export default function LessonCard({ module }: { module: Module }) {
  return (
    <Link
      href={`/modules/${module.slug}`}
      className="group block rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:border-blue-400 hover:shadow-md transition-all"
    >
      <div className="mb-2 flex items-center gap-3">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-700">
          {module.order}
        </span>
        <h2 className="text-base font-semibold text-gray-900 group-hover:text-blue-600">
          {module.title}
        </h2>
        <span className="ml-auto text-xs text-gray-400">{module.duration}</span>
      </div>
      <p className="text-sm text-gray-500 leading-relaxed">{module.description}</p>
    </Link>
  );
}
