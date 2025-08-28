// app/page.js
import StatsCounter from "../components/StatsCounter";
import TestimonialSlider from "../components/TestimonialSlider";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section
        className="relative h-[90vh] flex items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="container relative grid md:grid-cols-2 gap-8 items-center z-10">
          <div className="text-white">
            <h1 className="text-5xl md:text-6xl font-bold drop-shadow">Khyati Karia</h1>
            <p className="mt-4 text-2xl md:text-3xl text-gray-100">Your path to your dream home</p>

            {/* Animated stats */}
            <div className="mt-8 grid grid-cols-3 gap-4 max-w-lg">
              <StatsCounter label="Sales Volume" end={10000000} prefix="$" />
              <StatsCounter label="Clients Helped" end={120} suffix="+" />
              <StatsCounter label="Homes Listed" end={45} suffix="+" />
            </div>
            <div className="mt-8">
              <a href="/contact" className="btn-gold">Work with Khyati</a>
            </div>
          </div>
          <div className="justify-self-end hidden md:block">
            <TestimonialSlider />
          </div>
        </div>
      </section>

      {/* QUICK ABOUT SECTION */}
      <section id="about" className="section">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.unsplash.com/photo-1541123356219-284ebe98ae3b?auto=format&fit=crop&w=1200&q=80"
            alt="Khyati Karia professional"
            className="rounded-2xl shadow-lg object-cover w-full h-[360px]"
          />
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Meet Khyati</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              A Fremont-based luxury real estate expert serving clients across the Bay Area.
              Khyati blends data-driven strategy with concierge-level service to help buyers
              and sellers achieve exceptional outcomes. Her client-first approach ensures a seamless and successful experience.
            </p>
            <a href="/about" className="btn-gold mt-6 inline-block">Learn More About Khyati</a>
          </div>
        </div>
      </section>
    </>
  );
}