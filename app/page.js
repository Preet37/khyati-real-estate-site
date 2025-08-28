import StatsCounter from "../components/StatsCounter";
import TestimonialSlider from "../components/TestimonialSlider";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section
        className="relative flex h-screen items-center justify-center text-center text-white"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 px-4">
          <h1 className="text-5xl font-bold md:text-7xl">Khyati Karia</h1>
          <p className="mt-4 text-xl text-gray-200 md:text-2xl">
            Your Path to Your Dream Home
          </p>
          <div className="mx-auto mt-8 grid max-w-4xl grid-cols-3 gap-8 text-center">
            <StatsCounter label="Total Sales" end={46000000} prefix="$" />
            <StatsCounter label="Total Deals" end={44} suffix="+" />
            <StatsCounter label="Highest Sale" end={2100000} prefix="$" />
          </div>
        </div>
        <div className="absolute bottom-10 right-10 hidden lg:block">
          <TestimonialSlider />
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="py-20">
        <div className="container mx-auto grid max-w-5xl items-center gap-12 px-4 md:grid-cols-2">
          <img
            src="https://images.unsplash.com/photo-1541123356219-284ebe98ae3b?auto=format&fit=crop&w=800&q=80"
            alt="Khyati Karia"
            className="h-96 w-full rounded-lg object-cover shadow-2xl"
          />
          <div>
            <h2 className="text-4xl font-bold">Meet Khyati Karia</h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              A Fremont-based Rocket Redfin agent serving the entire Bay Area. Khyati blends data-driven strategy with concierge-level service to help you achieve exceptional outcomes.
            </p>
            <a href="/about" className="mt-6 inline-block rounded-lg bg-gold px-6 py-3 font-semibold text-gray-900 shadow-lg transition-transform hover:scale-105 hover:bg-opacity-90">
              Learn More About Khyati
            </a>
          </div>
        </div>
      </section>

      {/* WHY LIST WITH KHYATI */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto max-w-5xl px-4 text-center">
          <h2 className="text-4xl font-bold">Why List with Khyati?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            A proven strategy that combines modern marketing with expert negotiation to get you the highest possible price.
          </p>
          <div className="mt-12 grid gap-8 text-left md:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <h3 className="text-xl font-bold">📈 Strategic Pricing</h3>
              <p className="mt-2 text-gray-600">In-depth market analysis to price your home competitively from day one.</p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <h3 className="text-xl font-bold">📣 Powerful Marketing</h3>
              <p className="mt-2 text-gray-600">Professional photography, virtual tours, and targeted digital campaigns.</p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <h3 className="text-xl font-bold">🤝 Expert Negotiation</h3>
              <p className="mt-2 text-gray-600">Skilled representation to secure the best terms and price for your home.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}