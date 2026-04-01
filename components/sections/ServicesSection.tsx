"use client";

import { templateConfig } from "@/config/templateConfig";

export default function ServicesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-green-50 to-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-green-900/10 to-transparent" />
      
      {/* Floating Leaves - CSS only */}
      {templateConfig.animation.enableParticles && (
        <div className="absolute inset-0">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="absolute text-4xl opacity-20 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            >
              🍃
            </div>
          ))}
        </div>
      )}

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div
          className="text-center mb-16 animate-fade-in-up"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-green-600">{templateConfig.business.name}</span> Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional tree care services tailored to meet all your needs. From removal to maintenance, we've got you covered.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templateConfig.services.map((service, index) => (
            <div
              key={service.id}
              className="service-card group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-8xl transition-transform duration-300 group-hover:scale-110">
                  {service.icon}
                </div>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
              </div>

              {/* Service Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {service.description}
                </p>
                
                {/* Learn More Button */}
                <button className="text-green-600 font-semibold flex items-center space-x-2 group-hover:text-green-700 transition-colors duration-300">
                  <span>Learn More</span>
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <a
            href={`tel:${templateConfig.business.phone}`}
            className="inline-flex items-center space-x-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            <span className="text-2xl">📞</span>
            <span>{templateConfig.business.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
}