"use client";

import { templateConfig } from "@/config/templateConfig";

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-green-600">Reviews</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our customers have to say about our services.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {templateConfig.testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Quote Icon */}
              <div className="text-5xl text-green-200 mb-4">"</div>
              
              {/* Testimonial Content */}
              <p className="text-gray-700 mb-6 line-clamp-4">
                {testimonial.content}
              </p>

              {/* Author Info */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              
              {/* Star Rating */}
              <div className="flex space-x-1 mt-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: "⭐", number: "4.9", label: "Average Rating" },
            { icon: "👍", number: "1000+", label: "Happy Customers" },
            { icon: "🏆", number: "50+", label: "5-Star Reviews" },
            { icon: "💯", number: "99%", label: "Satisfaction Rate" },
          ].map((item, index) => (
            <div
              key={index}
              className="text-center bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <div className="text-3xl font-bold text-green-600 mb-2">
                {item.number}
              </div>
              <div className="text-gray-600 font-medium">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}