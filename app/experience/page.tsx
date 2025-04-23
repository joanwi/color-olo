export default function Experience() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center bg-white/80 backdrop-blur-sm p-8 rounded-lg">
          <h2 className="text-base text-emerald-600 font-semibold tracking-wide uppercase">Experience</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Witnessing Olo
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-700 lg:mx-auto">
            Discover how people describe their experience of seeing this revolutionary new color.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div className="relative bg-white/80 backdrop-blur-sm p-6 rounded-lg">
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-emerald-500 text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <div className="ml-16">
                <h3 className="text-lg leading-6 font-medium text-gray-900">First Impressions</h3>
                <p className="mt-2 text-base text-gray-700">
                  "It's like seeing a color that shouldn't exist - a blue-green that's beyond all known saturation levels."
                </p>
              </div>
            </div>

            <div className="relative bg-white/80 backdrop-blur-sm p-6 rounded-lg">
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-emerald-500 text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div className="ml-16">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Emotional Impact</h3>
                <p className="mt-2 text-base text-gray-700">
                  "The experience was both exhilarating and slightly disorienting - like discovering a new sense."
                </p>
              </div>
            </div>

            <div className="relative bg-white/80 backdrop-blur-sm p-6 rounded-lg">
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-emerald-500 text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="ml-16">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Safety First</h3>
                <p className="mt-2 text-base text-gray-700">
                  "The Oz Vision System made the experience completely safe, with constant monitoring and precise control."
                </p>
              </div>
            </div>

            <div className="relative bg-white/80 backdrop-blur-sm p-6 rounded-lg">
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-emerald-500 text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="ml-16">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Future Possibilities</h3>
                <p className="mt-2 text-base text-gray-700">
                  "This discovery opens up incredible possibilities for color perception and visual experiences."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 