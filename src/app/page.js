'use client';

import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Image 
              src="/images/Group4.png" 
              alt="Company Logo" 
              width={40} 
              height={40} 
              className="rounded-full mr-2" 
            />
            <span className="text-xl font-bold text-gray-800">SuperEnergy</span>
          </div>
          {/* Navigation */}
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Our Projects</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Investors</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Sustainability</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Our Business</a>
          </nav>
          {/* Mobile Menu Button (hidden on desktop) */}
          <button className="md:hidden text-gray-600 hover:text-blue-600 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-[600px] flex items-center justify-center text-white"
        style={{ backgroundImage: 'url(/images/rocket.png)' }}>
        <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-extrabold mb-4 leading-tight">Welcome To The Super Energy Ltd.</h1>
          <p className="text-lg mb-8">
            As the world&apos;s largest green and clean energy specialist of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-full shadow-lg transition-colors duration-300">
            Contact us →
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4 py-16 -mt-24 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service Card 1 */}
          <div className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <Image 
              src="/images/11.jpg" 
              alt="Oil Extraction" 
              width={400} 
              height={192} 
              className="w-full h-48 object-cover rounded-t-lg" 
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-900">OIL EXTRACTION</h3>
              <p className="text-gray-600 text-sm">
                As the world&apos;s largest green and clean energy specialist of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.
              </p>
            </div>
          </div>
          {/* Service Card 2 */}
          <div className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <Image 
              src="/images/21.jpg" 
              alt="Pipelines Building" 
              width={400} 
              height={192} 
              className="w-full h-48 object-cover rounded-t-lg" 
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-900">PIPELINES BUILDING</h3>
              <p className="text-gray-600 text-sm">
                As the world&apos;s largest green and clean energy specialist of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.
              </p>
            </div>
          </div>
          {/* Service Card 3 */}
          <div className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <Image 
              src="/images/31.jpg" 
              alt="Oil Refinement" 
              width={400} 
              height={192} 
              className="w-full h-48 object-cover rounded-t-lg" 
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-900">OIL REFINEMENT</h3>
              <p className="text-gray-600 text-sm">
                As the world&apos;s largest green and clean energy specialist of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Projects Section */}
      <section className="bg-gray-900 py-16 mt-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-10 text-center">Our Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Project Card 1 */}
            <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <Image 
                src="/images/ccc.png" 
                alt="Frozen Trees In A Lake" 
                width={300} 
                height={192} 
                className="w-full h-48 object-cover rounded-t-lg" 
              />
              <div className="p-4">
                <h4 className="text-lg font-semibold text-white">Frozen Trees In A Lake</h4>
              </div>
            </div>
            {/* Project Card 2 */}
            <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <Image 
                src="/images/ddd.png" 
                alt="Frozen Trees In A Lake" 
                width={300} 
                height={192} 
                className="w-full h-48 object-cover rounded-t-lg" 
              />
              <div className="p-4">
                <h4 className="text-lg font-semibold text-white">Frozen Trees In A Lake</h4>
              </div>
            </div>
            {/* Project Card 3 */}
            <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <Image 
                src="/images/fff.png" 
                alt="Frozen Trees In A Lake" 
                width={300} 
                height={192} 
                className="w-full h-48 object-cover rounded-t-lg" 
              />
              <div className="p-4">
                <h4 className="text-lg font-semibold text-white">Frozen Trees In A Lake</h4>
              </div>
            </div>
            {/* Project Card 4 */}
            <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <Image 
                src="/images/eee.png" 
                alt="Frozen Trees In A Lake" 
                width={300} 
                height={192} 
                className="w-full h-48 object-cover rounded-t-lg" 
              />
              <div className="p-4">
                <h4 className="text-lg font-semibold text-white">Frozen Trees In A Lake</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Our Industry Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-10">About our industry</h2>
        <div className="flex flex-col lg:flex-row items-center lg:space-x-12">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <p className="text-gray-700 leading-relaxed mb-4">
              As the world&apos;s largest green and clean energy specialist of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              As the world&apos;s largest green and clean energy specialist of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.
            </p>
            <p className="text-gray-700 leading-relaxed">
              As the world&apos;s largest green and clean energy specialist of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.
            </p>
          </div>
          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Image 
              src="/images/bbb.png" 
              alt="Industry Image 1" 
              width={300} 
              height={256} 
              className="w-full h-64 object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300" 
            />
            <Image 
              src="/images/aaa.png" 
              alt="Industry Image 2" 
              width={300} 
              height={256} 
              className="w-full h-64 object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300" 
            />
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gray-200 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Got any Question?</h2>
          <p className="text-gray-700 mb-8">Reach out to us. Call us at +1 (347) 848-9847</p>
          <button className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-colors duration-300">
            Contact
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Headquarters */}
          <div>
            <h4 className="text-xl font-bold mb-4">Headquarters</h4>
            <p className="text-gray-400">
              1420 Eglinton Avenue East, Toronto, ON M4G 3S8, Canada
            </p>
            <p className="text-gray-400 mt-2">
              +1 (347) 848-9847
            </p>
            <p className="text-gray-400 mt-2">
              info@superenergy.com
            </p>
          </div>
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Projects</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
          {/* Follow Our Activities */}
          <div>
            <h4 className="text-xl font-bold mb-4">Follow Our Activities</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                {/* Placeholder for social icon */}
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1 15h2v-6h-2v6zm0-8h2V7h-2v2z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                {/* Placeholder for social icon */}
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1 15h2v-6h-2v6zm0-8h2V7h-2v2z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                {/* Placeholder for social icon */}
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1 15h2v-6h-2v6zm0-8h2V7h-2v2z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}