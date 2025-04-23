export default function Applications() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center bg-white/80 backdrop-blur-sm p-8 rounded-lg">
          <h2 className="text-base text-emerald-600 font-semibold tracking-wide uppercase">Applications</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            The Future of Olo
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-700 lg:mx-auto">
            Exploring the potential applications and implications of this revolutionary color discovery.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div className="relative bg-white/80 backdrop-blur-sm p-6 rounded-lg">
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-emerald-500 text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="ml-16">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Medical Applications</h3>
                <p className="mt-2 text-base text-gray-700">
                  Potential for color blindness correction and retinal disease treatment through targeted cone cell stimulation.
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
                <h3 className="text-lg leading-6 font-medium text-gray-900">Enhanced Vision</h3>
                <p className="mt-2 text-base text-gray-700">
                  Development of artificial tetrachromacy through sustained stimulation and brain training.
                </p>
              </div>
            </div>

            <div className="relative bg-white/80 backdrop-blur-sm p-6 rounded-lg">
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-emerald-500 text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <div className="ml-16">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Virtual Reality</h3>
                <p className="mt-2 text-base text-gray-700">
                  Integration with VR/AR systems to create immersive experiences with expanded color perception.
                </p>
              </div>
            </div>

            <div className="relative bg-white/80 backdrop-blur-sm p-6 rounded-lg">
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-emerald-500 text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <div className="ml-16">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Art and Design</h3>
                <p className="mt-2 text-base text-gray-700">
                  New possibilities in artistic expression and design through expanded color perception capabilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 