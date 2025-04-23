import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-sm shadow-sm">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-2xl font-bold text-emerald-600 hover:text-emerald-700 transition-colors">
                Color olo
              </Link>
            </div>
            <div className="hidden pl-10 sm:ml-6 sm:flex sm:space-x-8">
              <Link href="/science" className="text-gray-500 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300 text-xl font-medium">
                Science
              </Link>
              <Link href="/experience" className="text-gray-500 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300 text-xl font-medium">
                Experience
              </Link>
              <Link href="/applications" className="text-gray-500 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300 text-xl font-medium">
                Applications
              </Link>
              <Link href="/faq" className="text-gray-500 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300 text-xl font-medium">
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
} 