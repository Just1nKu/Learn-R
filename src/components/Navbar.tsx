import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          <Link href="/" className="text-lg font-semibold text-gray-900 hover:text-blue-600">
            Learn R
          </Link>
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/modules"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              Modules
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
