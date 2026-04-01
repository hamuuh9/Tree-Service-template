"use client";

import { templateConfig } from "@/config/templateConfig";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ServiceArea from "@/components/sections/ServiceArea";
import Testimonials from "@/components/sections/Testimonials";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <div id="services">
        <ServicesSection />
      </div>
      <div id="about">
        <WhyChooseUs />
      </div>
      <div id="area">
        <ServiceArea />
      </div>
      <div id="reviews">
        <Testimonials />
      </div>
      <Footer />
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <a
          href={`tel:${templateConfig.business.phone}`}
          className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:bg-green-700 transition-colors duration-200"
        >
          <span className="text-2xl">📞</span>
        </a>
      </div>
    </main>
  );
}