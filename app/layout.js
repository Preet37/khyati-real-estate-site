// app/layout.js
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Khyati Karia — Bay Area Luxury Real Estate",
  description: "Fremont & Bay Area real estate expertise for buyers and sellers.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* ADD THE CLASS TO THIS BODY TAG BELOW */}
      <body className="bg-red-500">  
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}