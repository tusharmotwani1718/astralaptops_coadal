"use client";

import { motion } from "framer-motion";
import { MessageCircleHeart } from "lucide-react";

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

export function ContactHero() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-astra-950 via-astra-700 to-astra-500 pt-36 pb-20 lg:pt-44 lg:pb-24">
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
        className="animate-float pointer-events-none absolute -top-20 -left-20 h-80 w-80 rounded-full bg-astra-400/30 blur-3xl"
      />
      <div
        aria-hidden
        className="animate-float pointer-events-none absolute -bottom-24 -right-16 h-96 w-96 rounded-full bg-astra-300/20 blur-3xl"
        style={{ animationDelay: "1.5s" }}
      />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className="relative mx-auto max-w-3xl px-6 text-center lg:px-8"
      >
        <motion.div
          variants={item}
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm font-medium text-white/90 backdrop-blur-sm"
        >
          <MessageCircleHeart size={16} className="text-mint-500" />
          We&apos;d love to hear from you
        </motion.div>

        <motion.h1
          variants={item}
          className="mt-6 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl"
        >
          Let&apos;s get you connected.
        </motion.h1>

        <motion.p
          variants={item}
          className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/75"
        >
          Whether it&apos;s a question about a laptop, a warranty claim, or
          just to say hello — here&apos;s every way to reach us.
        </motion.p>
      </motion.div>
    </section>
  );
}
