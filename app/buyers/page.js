export default function BuyersPage() {
    const steps = [
        { num: "01", title: "Initial Consultation", desc: "We define your goals, budget, and ideal neighborhood to kickstart a tailored home search." },
        { num: "02", title: "Mortgage Pre-Approval", desc: "Connect with trusted lenders to secure financing and strengthen your offer." },
        { num: "03", title: "Home Search", desc: "Receive curated listings, including off-market properties, and tour homes that match your criteria." },
        { num: "04", title: "Making an Offer", desc: "Leverage expert market analysis to craft a competitive offer and negotiate the best terms." },
        { num: "05", title: "Escrow & Inspections", desc: "Navigate inspections, appraisals, and paperwork with guidance at every step." },
        { num: "06", title: "Closing Day", desc: "Finalize the purchase, get the keys, and celebrate your new home!" },
    ];
    
    const testimonials = [
      { name: "Amit S.", text: "Khyati made the home buying process effortless. A true professional!" },
      { name: "Lisa R.", text: "Honest, responsive, and incredibly knowledgeable of the Bay Area market." },
      { name: "Jordan P.", text: "Listed on Friday, sold over asking by Tuesday. Absolutely amazing results!" },
    ];

    const mockListings = [
        { id: 1, price: "2,450,000", beds: 4, baths: 4, sqft: "3,500", address: "123 Meadow Lane, Palo Alto", img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80" },
        { id: 2, price: "3,150,000", beds: 5, baths: 5, sqft: "4,200", address: "456 Foothill Drive, Los Altos", img: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=800&q=80" },
        { id: 3, price: "4,750,000", beds: 6, baths: 7, sqft: "5,800", address: "789 Laurel Court, Atherton", img: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80" },
    ];

    return (
        <div className="bg-white pt-24">
            <div className="container mx-auto px-4 py-20">
                <div className="mx-auto max-w-3xl text-center">
                    <h1 className="text-5xl font-bold">A Clear Path to Your New Home</h1>
                    <p className="mt-4 text-lg text-gray-600">The home buying journey can be complex. Khyati simplifies it with a proven, step-by-step process designed for your success and peace of mind.</p>
                </div>
                <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {steps.map(step => (
                        <div key={step.num} className="rounded-lg bg-gray-50 p-6 shadow-lg">
                            <span className="text-4xl font-bold text-gold">{step.num}</span>
                            <h3 className="mt-4 text-2xl font-bold">{step.title}</h3>
                            <p className="mt-2 text-gray-600">{step.desc}</p>
                        </div>
                    ))}
                </div>

                {/* TESTIMONIALS */}
                <div className="mx-auto mt-24 max-w-3xl text-center">
                    <h2 className="text-4xl font-bold">What My Clients Say</h2>
                </div>
                <div className="mt-12 grid gap-8 md:grid-cols-3">
                    {testimonials.map(t => (
                        <div key={t.name} className="rounded-lg bg-gray-50 p-6 shadow-lg text-center">
                            <p className="italic text-gray-700">“{t.text}”</p>
                            <p className="mt-4 font-semibold text-gray-900">— {t.name}</p>
                        </div>
                    ))}
                </div>

                {/* CURRENT LISTINGS */}
                <div className="mx-auto mt-24 max-w-3xl text-center">
                    <h2 className="text-4xl font-bold">Available Homes For Sale</h2>
                </div>
                <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {mockListings.map(listing => (
                        <div key={listing.id} className="group overflow-hidden rounded-lg bg-white shadow-xl">
                            <img src={listing.img} alt={listing.address} className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                            <div className="p-6">
                                <p className="text-2xl font-bold">${listing.price}</p>
                                <p className="mt-2 text-gray-700">{listing.address}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}