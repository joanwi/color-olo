'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white/80 backdrop-blur-sm shadow-sm relative">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex flex-1">
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
          
          {/* 汉堡菜单按钮 */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">打开主菜单</span>
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* 移动端菜单 */}
        <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden absolute left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg z-50`}>
          <div className="pt-2 pb-3 space-y-1">
            <Link 
              href="/science" 
              className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Science
            </Link>
            <Link 
              href="/experience" 
              className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Experience
            </Link>
            <Link 
              href="/applications" 
              className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Applications
            </Link>
            <Link 
              href="/faq" 
              className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              FAQ
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
} 