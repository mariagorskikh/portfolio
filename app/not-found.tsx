export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-neon-pink">404</h1>
        <p className="text-xl mb-4 text-neon-blue">Page not found</p>
        <a href="/" className="text-neon-green hover:text-neon-blue transition-colors">
          Return Home
        </a>
      </div>
    </div>
  )
}
