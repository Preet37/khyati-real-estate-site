export default function SellersPage() {
    const soldHomes = [
        { id: 1, price: "2,450,000", address: "123 Meadow Lane, Palo Alto", img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80" },
        { id: 2, price: "3,150,000", address: "456 Foothill Drive, Los Altos", img: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=800&q=80" },
        { id: 3, price: "4,750,000", address: "789 Laurel Court, Atherton", img: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80" },
    ];

    return (
        <div className="bg-gray-50 pt-24">
            <div className="container mx-auto px-4 py-20">
                <div className="mx-auto max-w-3xl text-center">
                    <h1 className="text-5xl font-bold">Maximizing Your Home's Value</h1>
                    <p className="mt-4 text-lg text-gray-600">Khyati's strategic approach to selling ensures your property stands out, attracts qualified buyers, and achieves the highest possible price.</p>
                </div>
                
                {/* SALES PROCESS */}
                <div className="mt-16 grid items-center gap-12 md:grid-cols-2">
                    <div>
                        <h2 className="text-3xl font-bold">The Sales Process Flow</h2>
                        <ol className="mt-4 list-decimal list-inside space-y-4 text-lg text-gray-700">
                            <li><strong>Strategic Pricing & Preparation:</strong> A data-backed plan to position your home for success.</li>
                            <li><strong>Professional Staging & Media:</strong> Making a powerful first impression with high-quality photos and tours.</li>
                            <li><strong>Targeted Marketing Launch:</strong> Reaching qualified buyers across all major platforms.</li>
                            <li><strong>Expert Offer Negotiation:</strong> Securing the best possible terms and maximizing your return.</li>
                            <li><strong>Seamless Escrow & Closing:</strong> Guiding you through to a smooth and successful closing day.</li>
                        </ol>
                    </div>
                    <img
                        src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80"
                        alt="Well-staged living room"
                        className="rounded-lg shadow-2xl"
                    />
                </div>

                {/* --- NEW SECTION ADDED BELOW --- */}

                {/* PROVEN TRACK RECORD */}
                <div className="mt-24 text-center">
                    <h2 className="text-4xl font-bold">A Proven Track Record</h2>
                    <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">A portfolio of successfully sold properties showcasing a history of delivering exceptional results for clients.</p>
                </div>
                <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {soldHomes.map(home => (
                        <div key={home.id} className="group overflow-hidden rounded-lg bg-white shadow-xl text-center">
                            <img src={home.img} alt={home.address} className="h-64 w-full object-cover" />
                            <div className="p-6">
                                <p className="text-xl font-bold">Sold for ${home.price}</p>
                                <p className="mt-2 text-gray-600">{home.address}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}