"use client";

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="text-center text-white p-8">
        <h1 className="text-4xl font-bold mb-4">Tree Service Template</h1>
        <p className="text-xl mb-8">Professional tree removal and landscaping services</p>
        <button className="bg-green-600 text-white px-6 py-3 rounded-lg">
          Call Now: (555) 123-4567
        </button>
      </div>
    </section>
  );
}