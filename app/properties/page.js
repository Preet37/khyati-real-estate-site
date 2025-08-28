export default function PropertiesPage() {
    const mockListings = [
        { id: 1, price: "2,450,000", beds: 4, baths: 4, sqft: "3,500", address: "123 Meadow Lane, Palo Alto", img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80" },
        { id: 2, price: "3,150,000", beds: 5, baths: 5, sqft: "4,200", address: "456 Foothill Drive, Los Altos", img: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=800&q=80" },
        { id: 3, price: "4,750,000", beds: 6, baths: 7, sqft: "5,800", address: "789 Laurel Court, Atherton", img: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80" },
    ];

    const PropertyGrid = ({ listings }) => (
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {listings.map(listing => (
                <div key={listing.id} className="group overflow-hidden rounded-lg bg-white shadow-xl">
                    <img src={listing.img} alt={listing.address} className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                    <div className="p-6">
                        <p className="text-2xl font-bold">${listing.price}</p>
                        <p className="mt-2 text-gray-700">{listing.address}</p>
                        <p className="mt-2 text-gray-500">{listing.beds} Beds | {listing.baths} Baths | {listing.sqft} sqft</p>
                        <a href="https://www.redfin.com/" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-gold font-semibold hover:underline">View on Redfin →</a>
                    </div>
                </div>
            ))}
        </div>
    );

    return (
        <div className="bg-white pt-24">
            <div className="container mx-auto px-4 py-20">
                <div className="mx-auto max-w-3xl text-center">
                    <h1 className="text-5xl font-bold">Current Listings</h1>
                    <p className="mt-4 text-lg text-gray-600">This section will be updated automatically once your MLS/IDX feed is connected.</p>
                </div>
                <PropertyGrid listings={mockListings} />
                
                <div className="mx-auto mt-24 max-w-3xl text-center">
                    <h2 className="text-4xl font-bold">Past Sold Listings</h2>
                    <p className="mt-4 text-lg text-gray-600">A portfolio of successfully sold properties, showcasing a track record of success.</p>
                </div>
                <PropertyGrid listings={mockListings.slice(0, 3).reverse()} />
            </div>
        </div>
    );
}