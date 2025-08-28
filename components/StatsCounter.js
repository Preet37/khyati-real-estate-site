"use client";
import { useEffect, useState } from "react";

export default function StatsCounter({ label, end = 0, prefix = "", suffix = "" }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const duration = 2000;
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setValue(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end]);

  const formattedValue = end >= 1000000 
    ? (value / 1000000).toFixed(1) + 'M' 
    : value.toLocaleString();

  return (
    <div>
      <p className="text-4xl font-bold text-white drop-shadow-md md:text-5xl">
        {prefix}{formattedValue}{suffix}
      </p>
      <p className="mt-1 text-sm text-gray-200">{label}</p>
    </div>
  );
}