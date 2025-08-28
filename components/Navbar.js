import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-md">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="text-2xl font-bold font-heading">
          Khyati Karia
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/properties" className="text-gray-600 hover:text-gold transition-colors">Properties</Link>
          <Link href="/buyers" className="text-gray-600 hover:text-gold transition-colors">Buyers</Link>
          <Link href="/sellers" className="text-gray-600 hover:text-gold transition-colors">Sellers</Link>
          <Link href="/about" className="text-gray-600 hover:text-gold transition-colors">About</Link>
          <Link href="/contact" className="ml-4 bg-gold text-gray-900 px-5 py-2.5 rounded-lg text-sm font-semibold shadow-sm hover:brightness-95 transition">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}