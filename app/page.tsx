import Image from "next/image";
import ScienceContent from "@/components/ScienceContent";
import ColorMixingGame from '@/components/ColorMixingGame';
import Link from 'next/link';
export default function Home() {
  return (
    <div>
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Discover the</span>
              <span className="block text-emerald-600">New Color olo</span>
            </h1>
            <p className="mt-3 text-gray-700 text-lg max-w-xl lg:mx-0">
              Scientists have discovered a revolutionary new color olo that challenges our understanding of human vision. Experience the future of color perception.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/science" className="px-8 py-3 text-white bg-emerald-600 hover:bg-emerald-700 rounded-md text-lg font-medium">
                Learn More
              </Link>
              <Link href="/experience" className="px-8 py-3 text-emerald-700 bg-white/80 hover:bg-white rounded-md text-lg font-medium">
                Experience Olo
              </Link>
            </div>
          </div>
          <div className="flex">
            <ColorMixingGame />
          </div>
        </div>
      </section>

      <ScienceContent />

      {/* Features Section */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-emerald-600 font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              A Revolutionary Discovery
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-700 lg:mx-auto">
              Olo represents a breakthrough in color science and human perception.
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {/* Feature cards with white semi-transparent background */}
              <div className="relative bg-white/80 backdrop-blur-sm p-6 rounded-lg">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-emerald-500 text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div className="ml-16">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Scientific Breakthrough</h3>
                  <p className="mt-2 text-base text-gray-700">
                    Discover how scientists achieved this revolutionary color through precise laser stimulation of M-type cone cells.
                  </p>
                </div>
              </div>

              <div className="relative bg-white/80 backdrop-blur-sm p-6 rounded-lg">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-emerald-500 text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <div className="ml-16">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Unique Visual Experience</h3>
                  <p className="mt-2 text-base text-gray-700">
                    Experience a color beyond the visible spectrum, described as "blue-green but beyond all known saturation."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
