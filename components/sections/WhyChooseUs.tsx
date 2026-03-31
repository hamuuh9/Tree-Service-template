"use client";

import { motion } from "framer-motion";
import { templateConfig } from "@/config/templateConfig";

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232E7D32' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

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
              Why Choose <span className="text-green-600">{templateConfig.business.name}</span>
            </h2>
            
            <div className="text-gray-600 text-lg mb-8 space-y-4">
              <p>
                Professional Tree Service You Can Depend On
              </p>
              <p>
                At {templateConfig.business.name}, we provide professional tree removal services to help you maintain a safe, healthy, and beautiful landscape. Whether you're dealing with a hazardous tree, need to clear space for construction, or want to improve your yard's aesthetic, our experienced team is here to handle the job with precision and care.
              </p>
              <p>
                Founded on the principles of professionalism and customer satisfaction, {templateConfig.business.name} takes pride in delivering tailored solutions for every client. From routine maintenance to emergency tree removal, we approach every project with precision and care, ensuring the highest standards of safety and quality.
              </p>
            </div>

            <motion.a
              href="#contact"
              className="btn-primary inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.a>
          </motion.div>

          {/* Right Content - Trust Badges */}
          <div className="grid grid-cols-2 gap-6">
            {templateConfig.trustBadges.map((badge, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 group"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  y: -5,
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {badge.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {badge.text}
                </h3>
                <div className="w-12 h-1 bg-green-500 mx-auto rounded-full group-hover:w-16 transition-all duration-300" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {[
            { number: `${templateConfig.business.yearsExperience}+`, label: "Years Experience" },
            { number: "5000+", label: "Trees Removed" },
            { number: "1000+", label: "Happy Customers" },
            { number: "24/7", label: "Emergency Service" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="text-4xl md:text-5xl font-bold text-green-600 mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  type: "spring",
                  stiffness: 100,
                  delay: index * 0.1 
                }}
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}