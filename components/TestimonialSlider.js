"use client";
import { useEffect, useState } from "react";

const items = [
  { name: "Amit S.", text: "Khyati made the home buying process effortless. A true professional!" },
  { name: "Lisa R.", text: "Honest, responsive, and incredibly knowledgeable of the Bay Area market." },
  { name: "Jordan P.", text: "Listed on Friday, sold over asking by Tuesday. Absolutely amazing results!" },

];

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="w-full max-w-sm rounded-xl bg-white/90 p-6 shadow-2xl backdrop-blur-lg">
      <p className="italic text-gray-700">“{items[index].text}”</p>
      <p className="mt-4 text-right font-semibold text-gray-900">— {items[index].name}</p>
    </div>
  );
}