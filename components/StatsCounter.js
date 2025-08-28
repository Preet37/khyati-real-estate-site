// components/StatsCounter.js
"use client";
import { useEffect, useState } from "react";

export default function StatsCounter({ label, end = 0, prefix = "", suffix = "" }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const duration = 2000; // 2 seconds
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

  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-white drop-shadow">
        {prefix}{value.toLocaleString()}{suffix}
      </div>
      <div className="text-sm md:text-base text-gray-200 mt-1">{label}</div>
    </div>
  );
}