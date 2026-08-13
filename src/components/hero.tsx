"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import digitalDepotBanner from "../../public/digital_depot_banner.jpeg";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const chips = [
  { label: "40-Point Quality Check", top: "6%", side: "-left-6 lg:-left-10" },
  { label: "1-Year Warranty", top: "auto", bottom: "12%", side: "-right-4 lg:-right-10" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-linear-to-br from-digital-depot-950 via-digital-depot-700 to-digital-depot-500 pt-36 pb-24 lg:pt-44 lg:pb-32"
    >
      {/* Dot-grid texture */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.16) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Floating brand-blue blobs */}
      <div
        aria-hidden
        className="animate-float pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-digital-depot-400/30 blur-3xl"
      />
      <div
        aria-hidden
        className="animate-float pointer-events-none absolute -bottom-32 -right-16 h-112 w-md rounded-full bg-digital-depot-300/20 blur-3xl"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={container}
          className="text-center lg:text-left"
        >
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm font-medium text-white/90 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-mint-500" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-mint-500" />
            </span>
            Certified Refurbished Laptops
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Performance you trust.
            <br />
            Prices you&apos;ll love.
          </motion.h1>

          <motion.p
            variants={item}
            className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-white/75 lg:mx-0"
          >
            Digital Depot gives premium laptops a second life — rigorously tested,
            professionally restored, and backed by a real warranty. Better
            for your wallet, better for the planet.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start"
          >
            <motion.a
              href="#brands"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-digital-depot-700 shadow-lift transition-shadow hover:shadow-2xl"
            >
              Explore Brands
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </motion.a>
            <motion.a
              href="#about"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              <ShieldCheck size={16} />
              Learn About Us
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Laptop mockup showcasing the digital-depot billboard visual */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md lg:mx-0"
        >
          <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-digital-depot-900 to-digital-depot-950 p-3 shadow-2xl">
            <div className="relative aspect-video overflow-hidden rounded-lg bg-digital-depot-900">
              <Image
                src={digitalDepotBanner}
                alt="Digital Depot billboard: Refurbished. Refined. Reliable."
                fill
                priority
                sizes="(min-width: 1024px) 424px, 90vw"
                className="object-cover"
              />
              {/* Inner vignette so the photo reads as inset glass, not pasted flat */}
              <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_36px_rgba(6,11,53,0.45)]" />
              {/* Screen glare sweep */}
              <motion.div
                aria-hidden
                className="pointer-events-none absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent mix-blend-overlay"
                animate={{ x: ["-120%", "220%"] }}
                transition={{
                  duration: 3.2,
                  repeat: Infinity,
                  repeatDelay: 1.6,
                  ease: "easeInOut",
                }}
              />
            </div>
            <div className="mx-auto mt-3 h-1.5 w-16 rounded-full bg-white/10" />
          </div>
          <div className="mx-auto h-3 w-[85%] rounded-b-2xl bg-gradient-to-b from-digital-depot-800 to-digital-depot-900 shadow-xl" />
          <div className="mx-auto h-1.5 w-[92%] rounded-b-xl bg-digital-depot-950/80" />

          {chips.map((chip, i) => (
            <motion.div
              key={chip.label}
              initial={{ opacity: 0, y: 12, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.9 + i * 0.15 }}
              className={`animate-float absolute ${chip.side} hidden items-center gap-2 rounded-xl bg-white px-3.5 py-2.5 text-xs font-semibold text-digital-depot-700 shadow-lift sm:flex`}
              style={{
                top: chip.top,
                bottom: chip.bottom,
                animationDelay: `${i * 0.8}s`,
              }}
            >
              <ShieldCheck size={14} className="text-mint-500" />
              {chip.label}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
