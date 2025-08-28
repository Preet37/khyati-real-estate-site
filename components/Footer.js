export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto grid gap-8 px-4 py-16 md:grid-cols-3">
        <div>
          <h3 className="text-xl font-bold text-white">Khyati Karia | Rocket Redfin</h3>
          <p className="mt-2 text-gray-400">Your trusted partner in Bay Area real estate.</p>
        </div>
        <div>
          <h4 className="font-semibold text-white">Quick Links</h4>
          <ul className="mt-2 space-y-1 text-gray-400">
            <li><a href="/properties" className="hover:text-white">Properties</a></li>
            <li><a href="/buyers" className="hover:text-white">For Buyers</a></li>
            <li><a href="/sellers" className="hover:text-white">For Sellers</a></li>
            <li><a href="/contact" className="hover:text-white">Contact Me</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white">Get In Touch</h4>
          <p className="mt-2 text-gray-400">Fremont, California</p>
          <p className="text-gray-400">📞 (408) 686-4860</p>
          <p className="text-gray-400">✉️ khyatidreamhome@gmail.com</p>
        </div>
      </div>
      <div className="border-t border-gray-800 py-4">
        <p className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Khyati Karia. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}