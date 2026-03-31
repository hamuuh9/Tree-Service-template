"use client";

export default function TestPage() {
  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Test Page - Components are working!
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        If you can see this, Next.js is rendering correctly.
      </p>
      <div className="bg-green-100 p-4 rounded-lg">
        <p className="text-green-800">Tailwind CSS is working.</p>
      </div>
    </div>
  );
}