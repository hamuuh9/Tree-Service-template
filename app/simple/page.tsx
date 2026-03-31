export default function SimplePage() {
  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Simple Server Component Test
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        This page uses no client-side JavaScript. If you see this, Vercel deployment works.
      </p>
      <div className="bg-green-100 p-4 rounded-lg">
        <p className="text-green-800">Server components render correctly.</p>
      </div>
      <div className="mt-8 p-4 bg-yellow-100 rounded-lg">
        <h3 className="font-bold text-yellow-800 mb-2">Status:</h3>
        <p className="text-yellow-700">
          If this page works, the issue is with client components (framer-motion, GSAP).
        </p>
      </div>
    </div>
  );
}