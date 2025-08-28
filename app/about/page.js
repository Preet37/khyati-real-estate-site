export default function AboutPage() {
  return (
    <div className="bg-white pt-24">
      <div className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-bold">A Commitment to Excellence</h1>
          <p className="mt-6 text-xl text-gray-600">
            "My goal is to make the real estate process transparent, strategic, and successful for every client. I'm not just facilitating a transaction; I'm helping you build your future."
          </p>
        </div>
        <div className="mt-20 grid items-center gap-16 md:grid-cols-2">
            {/* Picture of Khyati */}
            <img
                src="https://images.unsplash.com/photo-1599555779019-3f375355152a?auto=format&fit=crop&w=800&q=80"
                alt="Khyati Karia, Rocket Redfin Agent"
                className="rounded-lg shadow-2xl"
            />
            <div>
                <h2 className="text-4xl font-bold">Meet Khyati Karia</h2>
                <p className="mt-4 text-lg leading-relaxed text-gray-600">
                    As a premier Rocket Redfin agent in the Bay Area, Khyati Karia brings a wealth of knowledge and a client-first approach. Her background in market analysis and dedication to her clients' goals have earned her a reputation for excellence and consistent results.
                </p>
                <h3 className="mt-8 text-2xl font-bold">Awards & Values</h3>
                <ul className="mt-4 space-y-3 text-lg text-gray-700">
                    <li><span className="mr-2 font-semibold text-gold">🏆</span>Top Producer Award (2023, 2024)</li>
                    <li><span className="mr-2 font-semibold text-gold">✔</span>Unwavering Client Advocacy</li>
                    <li><span className="mr-2 font-semibold text-gold">✔</span>Data-Driven Decision Making</li>
                    <li><span className="mr-2 font-semibold text-gold">✔</span>Seamless Communication</li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  );
}