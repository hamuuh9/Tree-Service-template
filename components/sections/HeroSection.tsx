"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import VideoBackground from "../effects/VideoBackground";
import { templateConfig } from "@/config/templateConfig";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    // Register GSAP plugins only on client side
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }
    
    console.log("HeroSection mounted");
    // GSAP animations for hero text
    const tl = gsap.timeline({ delay: 1 });
    
    tl.from(".hero-tagline", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    })
    .from(".hero-title", {
      y: 60,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    }, "-=0.5")
    .from(".hero-subtitle", {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    }, "-=0.7")
    .from(".hero-cta", {
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.2,
      ease: "power3.out",
    }, "-=0.5")
    .from(".hero-form", {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    }, "-=0.4");

    // Cleanup
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Drone Video Background */}
      <VideoBackground
        videoUrl="https://demo.wprise.co/TreeAce/wp-content/uploads/2025/01/video-of-trees.mp4"
        overlay={true}
      />

      {/* Parallax Layer */}
      <motion.div
        className="absolute inset-0"
        style={{ y, opacity }}
      >
        {/* Floating Particles */}
        {templateConfig.animation.enableParticles && typeof window !== 'undefined' && (
          <div className="particles-container">
            {Array.from({ length: templateConfig.animation.particleCount }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-green-200/30 rounded-full"
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                }}
                animate={{
                  y: [null, Math.random() * -100 - 50],
                  x: [null, Math.random() * 50 - 25],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>
        )}
      </motion.div>

      {/* Hero Content */}
      <motion.div
        className="relative z-10 container mx-auto px-4 text-center text-white pt-20"
        style={{ opacity }}
      >
        {/* Top Bar */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center mb-8"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <a
              href={`tel:${templateConfig.business.phone}`}
              className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"
            >
              <span className="text-green-300">📞</span>
              <span className="font-semibold">{templateConfig.business.phone}</span>
            </a>
            <div className="flex space-x-2">
              <span className="bg-white/10 backdrop-blur-sm p-2 rounded-full">
                <img src="/images/google-badge.svg" alt="Google" className="w-6 h-6" />
              </span>
              <span className="bg-white/10 backdrop-blur-sm p-2 rounded-full">
                <img src="/images/facebook-badge.svg" alt="Facebook" className="w-6 h-6" />
              </span>
            </div>
          </div>
          <div className="hero-tagline">
            <span className="bg-green-500/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
              Schedule a Free Estimate
            </span>
          </div>
        </motion.div>

        {/* Main Hero Content */}
        <div className="max-w-4xl mx-auto">
          <motion.h1
            className="hero-title text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            data-text={templateConfig.business.tagline}
          >
            {templateConfig.business.tagline}
          </motion.h1>
          
          <motion.p
            className="hero-subtitle text-xl md:text-2xl mb-8 text-gray-200"
          >
            Favorite Tree Company for {templateConfig.business.yearsExperience}+ Years
          </motion.p>

          {/* CTA Buttons */}
          <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <motion.a
              href={`tel:${templateConfig.business.phone}`}
              className="btn-primary bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>📞</span>
              <span>{templateConfig.business.phone}</span>
            </motion.a>
            
            <motion.a
              href="#contact"
              className="btn-primary bg-transparent border-2 border-white hover:bg-white hover:text-green-800 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.a>
          </div>

          {/* Contact Form */}
          <motion.div
            className="hero-form bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 max-w-2xl mx-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <h3 className="text-2xl font-bold mb-4">
              Receive a free estimate. No strings attached.
            </h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name *"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 focus:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-400/50 text-white placeholder-gray-300"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 focus:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-400/50 text-white placeholder-gray-300"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="Email *"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 focus:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-400/50 text-white placeholder-gray-300"
                  required
                />
                <select className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 focus:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-400/50 text-white">
                  <option value="" className="text-gray-800">Select Service</option>
                  <option value="tree-removal" className="text-gray-800">Tree Removal</option>
                  <option value="tree-trimming" className="text-gray-800">Tree Trimming</option>
                  <option value="stump-grinding" className="text-gray-800">Stump Grinding</option>
                  <option value="emergency" className="text-gray-800">Emergency Service</option>
                </select>
              </div>
              <input
                type="text"
                placeholder="Service Address"
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 focus:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-400/50 text-white placeholder-gray-300"
              />
              <textarea
                placeholder="Message"
                rows={3}
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 focus:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-400/50 text-white placeholder-gray-300"
              />
              <motion.button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-lg font-semibold text-lg transition-colors duration-300 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Make an Appointment</span>
                <span>→</span>
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-white rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}