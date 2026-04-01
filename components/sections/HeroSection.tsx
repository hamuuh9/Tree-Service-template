"use client";

import { useEffect, useState } from "react";
import VideoBackground from "../effects/VideoBackground";
import { templateConfig } from "@/config/templateConfig";

export default function HeroSection() {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  if (!isMounted) {
    return <div className="min-h-screen bg-gray-900" />;
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <VideoBackground
        videoUrl="https://demo.wprise.co/TreeAce/wp-content/uploads/2025/01/video-of-trees.mp4"
        overlay={true}
      />
      
      <div className="relative z-10 container mx-auto px-4 text-center text-white pt-20 animate-fade-in">
        {/* Top Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <a
              href={`tel:${templateConfig.business.phone}`}
              className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/20 transition-colors"
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
          <div className="bg-green-500/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium animate-pulse">
            Schedule a Free Estimate
          </div>
        </div>

        {/* Main Hero Content */}
        <div className="max-w-4xl mx-auto animate-slide-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            {templateConfig.business.tagline}
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Favorite Tree Company for {templateConfig.business.yearsExperience}+ Years
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href={`tel:${templateConfig.business.phone}`}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 flex items-center space-x-2 hover:scale-105"
            >
              <span>📞</span>
              <span>{templateConfig.business.phone}</span>
            </a>
            
            <a
              href="#contact"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-green-800 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Contact Us
            </a>
          </div>

          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 max-w-2xl mx-auto animate-fade-in-up">
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
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-lg font-semibold text-lg transition-colors duration-300 flex items-center justify-center space-x-2 hover:scale-[1.02]"
              >
                <span>Make an Appointment</span>
                <span>→</span>
              </button>
            </form>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}