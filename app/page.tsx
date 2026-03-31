"use client";

import dynamic from "next/dynamic";
import { templateConfig } from "@/config/templateConfig";
import ErrorBoundary from "@/components/ErrorBoundary";

// Dynamic imports for better performance and to avoid SSR issues
const HeroSection = dynamic(() => {
  console.log("Loading HeroSection...");
  return import("@/components/sections/HeroSection");
}, {
  ssr: false,
  loading: () => <div className="min-h-screen bg-gray-900" />,
});

const ServicesSection = dynamic(() => import("@/components/sections/ServicesSection"), {
  ssr: false,
  loading: () => <div className="min-h-screen bg-gray-100" />,
});

const WhyChooseUs = dynamic(() => import("@/components/sections/WhyChooseUs"), {
  ssr: false,
  loading: () => <div className="min-h-screen bg-white" />,
});

const ServiceArea = dynamic(() => import("@/components/sections/ServiceArea"), {
  ssr: false,
  loading: () => <div className="min-h-screen bg-gray-50" />,
});

const Testimonials = dynamic(() => import("@/components/sections/Testimonials"), {
  ssr: false,
  loading: () => <div className="min-h-screen bg-gray-50" />,
});

const Footer = dynamic(() => import("@/components/sections/Footer"), {
  ssr: false,
  loading: () => <div className="min-h-screen bg-gray-900" />,
});



export default function Home() {
  return (
    <ErrorBoundary>
      <main className="min-h-screen">
        {/* Hero Section with Drone Video */}
        <HeroSection />

        {/* Services Section */}
        <div id="services">
          <ServicesSection />
        </div>

        {/* Why Choose Us Section */}
        <div id="about">
          <WhyChooseUs />
        </div>

        {/* Service Area Section */}
        <div id="area">
          <ServiceArea />
        </div>

        {/* Testimonials Section */}
        <div id="reviews">
          <Testimonials />
        </div>

        {/* Footer */}
        <Footer />

        {/* Floating Contact Button (Mobile) */}
        <div className="fixed bottom-6 right-6 z-50 md:hidden">
          <a
            href={`tel:${templateConfig.business.phone}`}
            className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:bg-green-700 transition-colors duration-200"
          >
            <span className="text-2xl">📞</span>
          </a>
        </div>
      </main>
    </ErrorBoundary>
  );
}