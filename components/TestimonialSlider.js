// components/TestimonialSlider.js
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
    }, 4000); // Rotate every 4 seconds
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="card max-w-md">
      <div className="p-6">
        <p className="text-gray-700 italic">“{items[index].text}”</p>
        <p className="mt-4 text-right font-semibold text-gray-900">— {items[index].name}</p>
      </div>
    </div>
  );
}