import LessonCard from "@/components/LessonCard";
import { getModules } from "@/lib/modules";

export const metadata = {
  title: "Modules — Learn R",
};

export default function ModulesPage() {
  const modules = getModules();
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900">Modules</h1>
      <p className="mt-2 text-gray-500">
        Work through each module in order, or jump to any topic.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {modules.map((mod) => (
          <LessonCard key={mod.slug} module={mod} />
        ))}
      </div>
    </div>
  );
}
