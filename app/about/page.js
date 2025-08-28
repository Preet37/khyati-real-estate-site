import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <section className="pt-32 pb-20 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold">Meet Khyati</h1>
        <p className="mt-6 text-gray-700">
          Khyati Karia has built her career on trust, integrity, and results...
          (longer story here). Awards, client stories, and professional
          background will go here.
        </p>
      </section>
      <Footer />
    </main>
  );
}
