"use client";

import { motion } from "framer-motion";
import { templateConfig } from "@/config/templateConfig";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232E7D32' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
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
                <span className="text-white">f</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors duration-200"
              >
                <span className="text-white">t</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors duration-200"
              >
                <span className="text-white">in</span>
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
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
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
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
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
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
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          className="py-8 border-t border-gray-800"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h4 className="text-xl font-bold mb-2">
                Need Emergency Tree Service?
              </h4>
              <p className="text-gray-400">
                We're available 24/7 for emergency tree removal and storm damage.
              </p>
            </div>
            <motion.a
              href={`tel:${templateConfig.business.phone}`}
              className="btn-primary bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-2xl">📞</span>
              <span>Call Now: {templateConfig.business.phone}</span>
            </motion.a>
          </div>
        </motion.div>

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

      {/* Decorative Elements */}
      {templateConfig.animation.enableParticles && (
        <>
          <motion.div
            className="absolute top-20 right-10 text-4xl opacity-10"
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
            }}
          >
            🌳
          </motion.div>
          <motion.div
            className="absolute bottom-20 left-10 text-4xl opacity-10"
            animate={{
              y: [0, 10, 0],
              rotate: [0, -5, 5, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
            }}
          >
            🍃
          </motion.div>
        </>
      )}
    </footer>
  );
}