// components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="container section grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="text-xl font-semibold font-heading">Khyati Karia</h3>
          <p className="mt-3 text-gray-400">
            Luxury real estate across Fremont and the Bay Area.
          </p>
        </div>
        <div>
          <h4 className="font-semibold">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-gray-400">
            <li><a href="/about" className="hover:text-white">About</a></li>
            <li><a href="/properties" className="hover:text-white">Properties</a></li>
            <li><a href="/buyers" className="hover:text-white">Buyers</a></li>
            <li><a href="/sellers" className="hover:text-white">Sellers</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Get in touch</h4>
          <p className="mt-3 text-gray-400">
            Fremont, California<br/>📞 (510) 707-2494<br/>📧 khyati.karia@redfin.com
          </p>
        </div>
      </div>
      <div className="border-t border-gray-800 text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} Khyati Karia. All rights reserved.
      </div>
    </footer>
  );
}