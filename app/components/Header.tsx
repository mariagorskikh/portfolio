import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg p-4 sticky top-0 z-20">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-neon-blue">
          Maria Gorskikh
        </Link>
      </nav>
    </header>
  )
}
