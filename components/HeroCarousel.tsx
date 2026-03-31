"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const defaultImages = [
  // Tech / UI imagery from Unsplash (royalty-free usage via source links)
  "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1400&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=1400&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1400&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1581091870622-3e8e6a7f7b58?w=1400&q=80&auto=format&fit=crop",
];

export default function HeroCarousel({ className = "", images }: { className?: string; images?: string[] }) {
  const imgs = images && images.length > 0 ? images : defaultImages;
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % imgs.length), 3500);
    return () => clearInterval(t);
  }, []);

  return (
    <div className={`relative w-full h-96 rounded-3xl overflow-hidden shadow-lg ${className}`}>
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={imgs[index]}
          alt={`hero-${index}`}
          className="object-cover w-full h-96"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.8 }}
          draggable={false}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 pointer-events-none" />

      {/* small thumbnail strip */}
      <div className="absolute left-6 bottom-6 flex gap-2 z-10">
        {imgs.map((src, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-12 h-8 rounded-md overflow-hidden border-2 transition-all ${
              i === index ? "border-primary scale-105" : "border-white/40"
            }`}
            aria-label={`Go to slide ${i + 1}`}
            style={{ backgroundImage: `url(${src})`, backgroundSize: "cover" }}
          />
        ))}
      </div>
    </div>
  );
}
