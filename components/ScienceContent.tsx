import Link from 'next/link';

export default function ScienceContent() {
  return (
    <div className="py-8 bg-olo">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* What is Color olo */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">What is Color olo?</h2>
          <div className="prose prose-xl text-gray-700">
            <p>
              Color olo is a newly discovered color that humans have never naturally seen before. It has been described as an <a href="https://www.smithsonianmag.com/smart-news/scientists-say-theyve-discovered-a-new-color-an-unprecedented-hue-only-ever-seen-by-five-people-180986473/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700">intensely saturated teal color</a> that does not exist within our normal visible spectrum. This color is unique because it cannot be produced by any natural light source or conventional color display technology. Color olo represents a truly novel color experience that occurs when only the medium-wavelength (M) cone cells in the human retina are stimulated in isolation, without activating the other types of cone cells.
            </p>
            <p>
              The name "olo" derives from binary code (010), reflecting selective activation of M-cones (0 for L/S, 1 for M).
            </p>
          </div>
        </section>

        {/* Discovery Process */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">How was Color olo Discovered?</h2>
          <div className="prose prose-xl text-gray-700">
            <p>
              Researchers at UC Berkeley and the University of Washington used a device called Oz to stimulate individual M-cones (green-sensitive retinal cells). Key steps:
            </p>
            <ul className="list-disc pl-6 text-xl">
              <li>Retinal mapping: Adaptive optics identified M-cone locations.</li>
              <li>Laser targeting: A 532 nm laser delivered microsecond pulses to M-cones while compensating for eye movements.</li>
              <li>Validation: Participants matched olo to monochromatic colors only after desaturating it with white light, proving it lies beyond natural color boundaries.</li>
            </ul>
            <p>
              Five subjects (including researchers) experienced olo under lab conditions.
            </p>
            <p>
            The findings published in the journal <a href="https://www.science.org/doi/10.1126/sciadv.adu1052" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700">Science Advances</a>, have been described by the study's co-author, Prof Ren Ng from the University of California, as "remarkable".
            </p>
          </div>
        </section>

        {/* M-type Cone Cell Stimulation */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">How are M-cones selectively activated with lasers?</h2>
          <div className="prose prose-xl text-gray-700">
            <p>
              The <a href="https://www.nature.com/articles/d41586-025-01252-3" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700">Oz system</a> combines:
            </p>
            <ul className="list-disc pl-6 text-xl">
              <li>Adaptive optics: High-resolution retinal imaging to pinpoint M-cones.</li>
              <li>Real-time eye tracking: Compensates for micro-movements to maintain laser accuracy.</li>
              <li>Spectral-spatial decoupling: Laser pulses (532 nm) stimulate only M-cones, avoiding overlapping activation of L/S-cones.</li>
            </ul>
            <p>
              Natural light always activates multiple cone types due to overlapping spectral sensitivities.
            </p>
          </div>
        </section>

        {/* Natural Light Limitation */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Why Natural Light Cannot Produce Color olo</h2>
          <div className="prose prose-xl text-gray-700">
            <p>
              Natural light wavelengths overlap the sensitivity curves of L (red), M (green), and S (blue) cones. Activating M-cones alone is impossible because:
            </p>
            <ul className="list-disc pl-6 text-xl">
              <li>Spectral overlap: M-cones respond to green (~530 nm) but also partially to adjacent wavelengths detected by L/S-cones.</li>
              <li>Broadband light: Sunlight or artificial light contains multiple wavelengths, triggering mixed cone responses.</li>
            </ul>
            <p>
              Only lasers can isolate M-cone stimulation by focusing on a narrow wavelength and precise retinal targeting.
            </p>
          </div>
        </section>

        {/* olo's Nature */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Is color olo Just "hyper-saturated green"?</h2>
          <div className="prose prose-xl text-gray-700">
            <p>
              This is debated:
            </p>
            <ul className="list-disc pl-6 text-xl">
              <li>Critics (e.g., <a href="https://www.city.ac.uk/about/people/academics/john-barbur" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700">John Barbur</a>, University of London): olo is an extreme green, not a new hue, as its chromaticity aligns with existing blue-green hues.</li>
              <li>Supporters: olo represents a novel neural signal. Natural vision never isolates M-cone activation, making olo a unique perceptual experience.</li>
            </ul>
            <p>
              The distinction hinges on whether "new color" requires a new hue or merely a new neural signal combination.
            </p>
          </div>
        </section>

        {/* Applications */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Potential Applications of Color olo</h2>
          <div className="prose prose-xl text-gray-700">
            <p>
              The discovery of olo opens up several fascinating potential applications:
            </p>
            <ul className="list-disc pl-6 text-xl">
              <li><strong>Enhanced Color Displays:</strong> Future display technologies might leverage similar techniques to expand the color gamut beyond what is currently possible, creating richer visual experiences.</li>
              <li><strong>Neurological Research:</strong> olo provides a unique tool for understanding color processing in the brain, potentially offering insights into conditions like color blindness and synesthesia.</li>
              <li><strong>Vision Science Advancement:</strong> The technique used to produce olo could help researchers better understand the fundamentals of human visual perception and how the brain interprets signals from photoreceptors.</li>
              <li><strong>Medical Diagnostics:</strong> The ability to selectively stimulate specific cone cells could lead to more precise tests for retinal function and earlier detection of certain eye diseases.</li>
              <li><strong>Artistic Expression:</strong> If methods to experience olo become more accessible, it could open entirely new dimensions in visual art and design, allowing artists to work with previously impossible colors.</li>
            </ul>
            <p>
              Though these applications remain largely theoretical at this stage, the discovery of olo represents a significant breakthrough in our understanding of human color perception and the physiological limits of what we can see.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
} 