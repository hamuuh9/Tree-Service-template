"use client";

import dynamicImport from "next/dynamic";
import { templateConfig } from "@/config/templateConfig";
import ErrorBoundary from "@/components/ErrorBoundary";
import ClientOnly from "@/components/ClientOnly";

// Force dynamic rendering
export const dynamicConfig = 'force-dynamic';

// Dynamic imports for better performance and to avoid SSR issues
const HeroSection = dynamicImport(() => {
  console.log("Loading HeroSection...");
  return import("@/components/sections/HeroSection");
}, {
  ssr: false,
  loading: () => <div className="min-h-screen bg-gray-900" />,
});
const HeroSectionWrapped = (props: any) => (
  <ClientOnly fallback={<div className="min-h-screen bg-gray-900" />}>
    <HeroSection {...props} />
  </ClientOnly>
);

const ServicesSection = dynamicImport(() => import("@/components/sections/ServicesSection"), {
  ssr: false,
  loading: () => <div className="min-h-screen bg-gray-100" />,
});
const ServicesSectionWrapped = (props: any) => (
  <ClientOnly fallback={<div className="min-h-screen bg-gray-100" />}>
    <ServicesSection {...props} />
  </ClientOnly>
);

const WhyChooseUs = dynamicImport(() => import("@/components/sections/WhyChooseUs"), {
  ssr: false,
  loading: () => <div className="min-h-screen bg-white" />,
});
const WhyChooseUsWrapped = (props: any) => (
  <ClientOnly fallback={<div className="min-h-screen bg-white" />}>
    <WhyChooseUs {...props} />
  </ClientOnly>
);

const ServiceArea = dynamicImport(() => import("@/components/sections/ServiceArea"), {
  ssr: false,
  loading: () => <div className="min-h-screen bg-gray-50" />,
});
const ServiceAreaWrapped = (props: any) => (
  <ClientOnly fallback={<div className="min-h-screen bg-gray-50" />}>
    <ServiceArea {...props} />
  </ClientOnly>
);

const Testimonials = dynamicImport(() => import("@/components/sections/Testimonials"), {
  ssr: false,
  loading: () => <div className="min-h-screen bg-gray-50" />,
});
const TestimonialsWrapped = (props: any) => (
  <ClientOnly fallback={<div className="min-h-screen bg-gray-50" />}>
    <Testimonials {...props} />
  </ClientOnly>
);

const Footer = dynamicImport(() => import("@/components/sections/Footer"), {
  ssr: false,
  loading: () => <div className="min-h-screen bg-gray-900" />,
});
const FooterWrapped = (props: any) => (
  <ClientOnly fallback={<div className="min-h-screen bg-gray-900" />}>
    <Footer {...props} />
  </ClientOnly>
);



export default function Home() {
  return (
    <ErrorBoundary>
      <main className="min-h-screen">
      {/* Hero Section with Drone Video */}
      <HeroSectionWrapped />

        {/* Services Section */}
        <div id="services">
          <ServicesSectionWrapped />
        </div>

        {/* Why Choose Us Section */}
        <div id="about">
          <WhyChooseUsWrapped />
        </div>

        {/* Service Area Section */}
        <div id="area">
          <ServiceAreaWrapped />
        </div>

        {/* Testimonials Section */}
        <div id="reviews">
          <TestimonialsWrapped />
        </div>

        {/* Footer */}
        <FooterWrapped />

        {/* Floating Contact Button (Mobile) */}
        <div className="fixed bottom-6 right-6 z-50 md:hidden">
          <a
            href={`tel:555-999-8888`}
            className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:bg-green-700 transition-colors duration-200"
          >
            <span className="text-2xl">📞</span>
          </a>
        </div>
      </main>
    </ErrorBoundary>
  );
}