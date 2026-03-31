export default function Home() {
  return (
    <main className="min-h-screen bg-white p-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Tree Service Template - Static Test
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        If you can see this, Vercel is serving static content correctly.
      </p>
      <div className="bg-green-100 p-4 rounded-lg mb-8">
        <p className="text-green-800">Tailwind CSS is working.</p>
      </div>
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Next Steps:</h2>
        <ol className="list-decimal list-inside text-gray-700">
          <li>Check Vercel deployment logs for errors</li>
          <li>Ensure all dependencies installed correctly</li>
          <li>Check browser console for JavaScript errors</li>
          <li>Verify vercel.json doesn't have catch-all routes</li>
        </ol>
      </div>
      <div className="mt-8 p-4 bg-blue-100 rounded-lg">
        <h3 className="font-bold text-blue-800 mb-2">Deployment Status:</h3>
        <p className="text-blue-700">
          Vercel build ID: xDKbaq2P6isv2RFuYvYC_
        </p>
        <p className="text-blue-700">
          If this page shows, static export works.
        </p>
      </div>
    </main>
  );
}