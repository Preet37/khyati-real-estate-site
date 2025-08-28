export default function ContactPage() {
  return (
    <div className="bg-gray-50 pt-24">
      <div className="container mx-auto grid gap-12 px-4 py-20 md:grid-cols-2">
        <div>
          <h1 className="text-5xl font-bold">Let's Get Started</h1>
          <p className="mt-4 text-lg text-gray-600">
            Whether you're ready to buy, sell, or just have questions about the market, I'm here to help. Reach out today for a no-obligation consultation.
          </p>
          <div className="mt-8 space-y-4">
            <p className="text-lg"><strong>Email:</strong> khyatidreamhome@gmail.com</p>
            <p className="text-lg"><strong>Phone:</strong> (408) 686-4860</p>
            <p className="text-lg"><strong>Office:</strong> Fremont, California</p>
          </div>
        </div>
        <div className="rounded-lg bg-white p-8 shadow-2xl">
          <h2 className="text-3xl font-bold">Send a Message</h2>
          <form className="mt-6 space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input type="text" id="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gold focus:ring-gold" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gold focus:ring-gold" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea id="message" rows="4" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gold focus:ring-gold"></textarea>
            </div>
            <button type="submit" className="w-full rounded-lg bg-gold py-3 font-semibold text-gray-900 shadow-lg hover:brightness-95">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}