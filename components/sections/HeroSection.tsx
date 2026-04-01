"use client";

export default function HeroSection() {
  console.log("HeroSection rendered - NEW VERSION");
  return (
    <section className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="text-center text-white p-8">
        <h1 className="text-4xl font-bold mb-4">Tree Service Template - NEW</h1>
        <p className="text-xl mb-8">Professional tree removal and landscaping services</p>
        <button className="bg-green-600 text-white px-6 py-3 rounded-lg">
          Call Now: (555) 999-8888
        </button>
      </div>
    </section>
  );
}