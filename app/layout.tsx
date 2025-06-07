import '../globals.css'

export default function RootLayout() {
  return (
    <html lang="en">
      <body>
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
          <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
            <h1 className="text-4xl font-bold text-center mb-8">
              Welcome to IOYAO Next Bot
            </h1>
            <p className="text-center text-lg mb-8">
              A Next.js application with FastAPI backend integration
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="p-6 border border-gray-300 rounded-lg">
                <h2 className="text-xl font-semibold mb-2">Frontend</h2>
                <p className="text-gray-600">
                  Built with Next.js 15 and React 19
                </p>
              </div>
              <div className="p-6 border border-gray-300 rounded-lg">
                <h2 className="text-xl font-semibold mb-2">Backend</h2>
                <p className="text-gray-600">Powered by FastAPI</p>
              </div>
            </div>
          </div>
        </main>
      </body>
    </html>
  )
}
