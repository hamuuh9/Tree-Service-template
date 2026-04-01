"use client";

import { templateConfig } from "@/config/templateConfig";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-6">
              {templateConfig.business.name}
            </h3>
            <p className="text-gray-400 mb-6">
              Professional tree care services with {templateConfig.business.yearsExperience}+ years of experience. Licensed, insured, and committed to safety.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors duration-200"
              >
                <span>f</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors duration-200"
              >
                <span>t</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors duration-200"
              >
                <span>in</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "#" },
                { name: "Services", href: "#services" },
                { name: "About Us", href: "#about" },
                { name: "Service Area", href: "#area" },
                { name: "Reviews", href: "#reviews" },
                { name: "Contact", href: "#contact" },
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-green-400 transition-colors duration-200 flex items-center space-x-2"
                  >
                    <span className="text-green-500">→</span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {templateConfig.services.map((service) => (
                <li key={service.id}>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-green-400 transition-colors duration-200 flex items-center space-x-2"
                  >
                    <span className="text-green-500">•</span>
                    <span>{service.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="text-green-500 text-xl">📞</div>
                <div>
                  <p className="text-gray-400">Phone</p>
                  <a
                    href={`tel:${templateConfig.business.phone}`}
                    className="text-white font-semibold hover:text-green-400 transition-colors duration-200"
                  >
                    {templateConfig.business.phone}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="text-green-500 text-xl">✉️</div>
                <div>
                  <p className="text-gray-400">Email</p>
                  <a
                    href={`mailto:${templateConfig.business.email}`}
                    className="text-white font-semibold hover:text-green-400 transition-colors duration-200"
                  >
                    {templateConfig.business.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="text-green-500 text-xl">📍</div>
                <div>
                  <p className="text-gray-400">Location</p>
                  <p className="text-white font-semibold">
                    {templateConfig.business.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="text-green-500 text-xl">⏰</div>
                <div>
                  <p className="text-gray-400">Hours</p>
                  <p className="text-white font-semibold">
                    24/7 Emergency Service
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h4 className="text-xl font-bold mb-2">
                Need Emergency Tree Service?
              </h4>
              <p className="text-gray-400">
                We're available 24/7 for emergency tree removal and storm damage.
              </p>
            </div>
            <a
              href={`tel:${templateConfig.business.phone}`}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 hover:scale-105"
            >
              <span className="text-2xl">📞</span>
              <span>Call Now: {templateConfig.business.phone}</span>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © {currentYear} {templateConfig.business.name}. All Rights Reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-200">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}