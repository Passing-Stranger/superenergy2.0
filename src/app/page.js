'use client';

import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-sm py-4 relative z-30">
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
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-orange-500 hover:text-orange-600 transition-colors duration-300 font-medium">Home</a>
            <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors duration-300">Our Projects</a>
            <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors duration-300">Investors</a>
            <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors duration-300">Sustainability</a>
            <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors duration-300">Our Business</a>
          </nav>
          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-600 hover:text-orange-500 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-[70vh] flex items-center justify-start"
        style={{ backgroundImage: 'url(/images/rocket.png)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white">
              Welcome To The<br />Super Energy ltd.
            </h1>
            <p className="text-lg mb-8 text-white leading-relaxed">
              The official plug for all your renewable resources made with love with people who knows how - The natives!!
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-md shadow-lg transition-colors duration-300 flex items-center">
              Contact us →
            </button>
            
            {/* Social Icons */}
            <div className="flex space-x-4 mt-8">
              <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300 cursor-pointer">
                <span className="text-white text-sm font-bold">f</span>
              </div>
              <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300 cursor-pointer">
                <span className="text-white text-sm font-bold">in</span>
              </div>
              <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300 cursor-pointer">
                <span className="text-white text-sm font-bold">@</span>
              </div>
              <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300 cursor-pointer">
                <span className="text-white text-sm font-bold">ig</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Dots Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
          <div className="w-3 h-3 bg-white bg-opacity-50 rounded-full"></div>
          <div className="w-3 h-3 bg-white bg-opacity-50 rounded-full"></div>
          <div className="w-3 h-3 bg-white bg-opacity-50 rounded-full"></div>
          <div className="w-3 h-3 bg-white bg-opacity-50 rounded-full"></div>
        </div>
      </section>

      {/* Services Section - Overlapping Cards */}
      <section className="relative -mt-24 z-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 justify-center">
            {/* Service Card 1 */}
            <div className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 max-w-sm">
              <Image 
                src="/images/11.jpg" 
                alt="Oil Extraction" 
                width={400} 
                height={200} 
                className="w-full h-48 object-cover" 
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-3 text-gray-900">OIL EXTRACTION</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  As the world&apos;s largest green and clean energy specialist of the printing and typesetting industry. Lorem Ipsum has been the industry.
                </p>
              </div>
            </div>
            
            {/* Service Card 2 */}
            <div className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 max-w-sm">
              <Image 
                src="/images/21.jpg" 
                alt="Pipelines Building" 
                width={400} 
                height={200} 
                className="w-full h-48 object-cover" 
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-3 text-gray-900">PIPELINES BUILDING</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  As the world&apos;s largest green and clean energy specialist of the printing and typesetting industry. Lorem has been the industry.
                </p>
              </div>
            </div>
            
            {/* Service Card 3 */}
            <div className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 max-w-sm">
              <Image 
                src="/images/31.jpg" 
                alt="Oil Refinement" 
                width={400} 
                height={200} 
                className="w-full h-48 object-cover" 
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-3 text-gray-900">OIL REFINEMENT</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  As the world&apos;s largest green and clean energy specialist of the printing and typesetting industry. Lorem has been the industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Projects Section */}
      <section className="bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-10">
            <h2 className="text-4xl font-bold text-white">Our Projects</h2>
            <div className="ml-4 w-16 h-1 bg-orange-500"></div>
          </div>
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Large Project Cards */}
            <div className="flex flex-col lg:flex-row gap-8 lg:w-2/3">
              {/* Project Card 1 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 flex-1">
                <Image 
                  src="/images/ccc.png" 
                  alt="Frozen Trees In A Lake" 
                  width={400} 
                  height={250} 
                  className="w-full h-64 object-cover" 
                />
                <div className="p-4 text-center">
                  <h4 className="text-lg font-semibold text-gray-900">Frozen Trees In A Lake</h4>
                  <p className="text-sm text-gray-600 mt-1">DESIGN • INTERIOR OFFICE</p>
                </div>
              </div>
              {/* Project Card 2 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 flex-1">
                <Image 
                  src="/images/ddd.png" 
                  alt="Frozen Trees In A Lake" 
                  width={400} 
                  height={250} 
                  className="w-full h-64 object-cover" 
                />
                <div className="p-4 text-center">
                  <h4 className="text-lg font-semibold text-gray-900">Frozen Trees In A Lake</h4>
                  <p className="text-sm text-gray-600 mt-1">DESIGN • INTERIOR OFFICE</p>
                </div>
              </div>
            </div>
            {/* Right Side Projects */}
            <div className="flex flex-col gap-8 lg:w-1/3">
              {/* Project Card 3 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <Image 
                  src="/images/fff.png" 
                  alt="Frozen Trees In A Lake" 
                  width={300} 
                  height={150} 
                  className="w-full h-32 object-cover" 
                />
                <div className="p-4 text-center">
                  <h4 className="text-lg font-semibold text-gray-900">Frozen Trees In A Lake</h4>
                  <p className="text-sm text-gray-600 mt-1">DESIGN • INTERIOR OFFICE</p>
                </div>
              </div>
              {/* Project Card 4 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <Image 
                  src="/images/eee.png" 
                  alt="Frozen Trees In A Lake" 
                  width={300} 
                  height={150} 
                  className="w-full h-32 object-cover" 
                />
                <div className="p-4 text-center">
                  <h4 className="text-lg font-semibold text-gray-900">Frozen Trees In A Lake</h4>
                  <p className="text-sm text-gray-600 mt-1">DESIGN • INTERIOR OFFICE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Our Industry Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-10">About our industry</h2>
        <div className="flex flex-col lg:flex-row items-start lg:space-x-12">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <p className="text-gray-700 leading-relaxed mb-4">
              As the world&apos;s largest green and clean energy specialist of the printing and typesetting industry. Lorem has been the industry. As the world&apos;s largest green and clean energy specialist of the printing and typesetting industry. Lorem has been the industry.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              As the world&apos;s largest green and clean energy specialist of the printing and typesetting industry. Lorem has been the industry. As the world&apos;s largest green and clean energy specialist of the printing and typesetting industry. Lorem has been the industry.
            </p>
            <p className="text-gray-700 leading-relaxed">
              As the world&apos;s largest green and clean energy specialist of the printing and typesetting industry. Lorem has been the industry. As the world&apos;s largest green and clean energy specialist of the printing and typesetting industry. Lorem has been the industry. As the world&apos;s largest green and clean energy specialist of the printing and typesetting industry. As the world&apos;s largest green.
            </p>
          </div>
          <div className="lg:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Image 
                src="/images/bbb.png" 
                alt="Industry Image 1" 
                width={300} 
                height={250} 
                className="w-full h-60 object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300" 
              />
              <Image 
                src="/images/aaa.png" 
                alt="Industry Image 2" 
                width={300} 
                height={250} 
                className="w-full h-60 object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-2/3 mb-8 lg:mb-0">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Got any Question?</h2>
              <p className="text-gray-700 mb-4">Reach out to us . Call us at: +1 (347) 849-9047</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-4 py-3 border border-r-0 border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button className="bg-gray-900 hover:bg-gray-700 text-white font-bold px-6 py-3 rounded-r-md transition-colors duration-300">
                  Contact us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 relative bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/rocket.png)' }}>
        <div className="absolute inset-0 bg-gray-900 bg-opacity-80"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* About Us */}
            <div>
              <h4 className="text-xl font-bold mb-4 text-orange-500">ABOUT</h4>
              <h5 className="text-lg font-semibold mb-4">Headquarters</h5>
              <div className="space-y-2 text-gray-300">
                <p className="flex items-center">
                  <span className="mr-2">📞</span>
                  +234-90-7884903 • +234-90-2272840
                </p>
                <p className="flex items-center">
                  <span className="mr-2">✉️</span>
                  team@superenergy.ng
                </p>
                <p className="flex items-center">
                  <span className="mr-2">🌐</span>
                  www.superenergy.ng
                </p>
              </div>
            </div>
            
            {/* Locations */}
            <div>
              <h4 className="text-xl font-bold mb-4 text-orange-500">LOCATIONS</h4>
              <div className="text-gray-300">
                <p className="flex items-center mb-2">
                  <span className="mr-2">📍</span>
                  PLOT 1430 GARKI STREET, OFF TIAMIYU SAVAGE STREET, VICTORIA
                </p>
                <p className="ml-6">ISLAND, LAGOS, NIGERIA</p>
              </div>
            </div>
            
            {/* Get In Touch */}
            <div>
              <h4 className="text-xl font-bold mb-4 text-orange-500">GET IN TOUCH</h4>
              <h5 className="text-lg font-semibold mb-4">Follow Our Activities</h5>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-orange-600 transition-colors duration-300">
                  <span className="text-white font-bold">f</span>
                </div>
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-orange-600 transition-colors duration-300">
                  <span className="text-white font-bold">@</span>
                </div>
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-orange-600 transition-colors duration-300">
                  <span className="text-white font-bold">in</span>
                </div>
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-orange-600 transition-colors duration-300">
                  <span className="text-white font-bold">ig</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}