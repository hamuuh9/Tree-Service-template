"use client";

import { motion } from "framer-motion";
import { templateConfig } from "@/config/templateConfig";

export default function ServiceArea() {
  return (
    <section className="py-20 bg-gradient-to-b from-green-50 to-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-300/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
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
              <p>
                When you choose {templateConfig.business.name}, you're choosing a local partner committed to keeping your environment safe and beautiful. Contact us today to schedule your tree removal service!
              </p>
            </div>

            <motion.a
              href={`tel:${templateConfig.business.phone}`}
              className="btn-primary inline-flex items-center space-x-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-2xl">📞</span>
              <span>{templateConfig.business.phone}</span>
            </motion.a>
          </motion.div>

          {/* Right Content - Service Areas List */}
          <motion.div
            className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
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
                <motion.div
                  key={index}
                  className="flex items-center space-x-3 p-3 rounded-xl hover:bg-green-50 transition-colors duration-200 group"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="w-2 h-2 bg-green-500 rounded-full group-hover:scale-150 transition-transform duration-200" />
                  <span className="text-gray-700 font-medium group-hover:text-green-600 transition-colors duration-200">
                    {area}
                  </span>
                </motion.div>
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
          </motion.div>
        </div>

        {/* CTA Banner */}
        <motion.div
          className="mt-20 bg-gradient-to-r from-green-600 to-green-800 rounded-3xl p-12 text-center text-white relative overflow-hidden"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            }} />
          </div>

          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Get your free estimate today!
            </h3>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Contact us now for a no-obligation quote. Our team is ready to help you with all your tree care needs.
            </p>
            
            <motion.a
              href={`tel:${templateConfig.business.phone}`}
              className="btn-primary inline-flex items-center space-x-3 bg-white text-green-700 px-10 py-5 rounded-full text-xl font-bold transition-all duration-300 hover:bg-green-50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-3xl">📞</span>
              <span>{templateConfig.business.phone}</span>
            </motion.a>
          </div>

          {/* Animated Background Elements */}
          {templateConfig.animation.enableParticles && (
            <>
              <motion.div
                className="absolute top-10 left-10 text-6xl opacity-20"
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              >
                🌳
              </motion.div>
              <motion.div
                className="absolute bottom-10 right-10 text-6xl opacity-20"
                animate={{
                  y: [0, 20, 0],
                  rotate: [0, -10, 10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
              >
                🍃
              </motion.div>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}