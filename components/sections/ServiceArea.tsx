"use client";

import { templateConfig } from "@/config/templateConfig";

export default function ServiceArea() {
  return (
    <section className="py-20 bg-gradient-to-b from-green-50 to-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Service Area
            </h2>
            
            <div className="text-gray-600 text-lg mb-8 space-y-4">
              <p>
                At {templateConfig.business.name}, we proudly serve the vibrant neighborhoods of {templateConfig.business.serviceArea}, delivering expert tree removal services that prioritize safety, efficiency, and customer satisfaction.
              </p>
              <p>
                Whether you're in Manhattan, Brooklyn, Queens, the Bronx, or Staten Island, our experienced team is ready to help with all your tree care needs.
              </p>
              <p>
                From bustling urban streets to serene residential areas, no tree removal challenge is too big or small for {templateConfig.business.name}. We understand the unique landscape of NYC, ensuring that our services align with local regulations and the specific needs of your property.
              </p>
            </div>

            <a
              href={`tel:${templateConfig.business.phone}`}
              className="inline-flex items-center space-x-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              <span className="text-2xl">📞</span>
              <span>{templateConfig.business.phone}</span>
            </a>
          </div>

          {/* Right Content - Service Areas List */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Areas We Serve
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                "Manhattan",
                "Brooklyn",
                "Queens",
                "Bronx",
                "Staten Island",
                "Long Island",
                "New Jersey",
                "Westchester",
              ].map((area, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-3 rounded-xl hover:bg-green-50 transition-colors duration-200 group"
                >
                  <div className="w-2 h-2 bg-green-500 rounded-full group-hover:scale-150 transition-transform duration-200" />
                  <span className="text-gray-700 font-medium group-hover:text-green-600 transition-colors duration-200">
                    {area}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-green-50 rounded-2xl">
              <div className="flex items-center space-x-4">
                <div className="text-4xl">📍</div>
                <div>
                  <h4 className="font-bold text-gray-900">Service Address</h4>
                  <p className="text-gray-600">{templateConfig.business.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-20 bg-gradient-to-r from-green-600 to-green-800 rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Get your free estimate today!
            </h3>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Contact us now for a no-obligation quote. Our team is ready to help you with all your tree care needs.
            </p>
            
            <a
              href={`tel:${templateConfig.business.phone}`}
              className="inline-flex items-center space-x-3 bg-white text-green-700 px-10 py-5 rounded-full text-xl font-bold transition-all duration-300 hover:bg-green-50 hover:scale-105"
            >
              <span className="text-3xl">📞</span>
              <span>{templateConfig.business.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}