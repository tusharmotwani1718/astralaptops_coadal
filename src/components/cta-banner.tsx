"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./reveal";

export function CtaBanner() {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-gradient-to-br from-astra-800 via-astra-700 to-astra-950 py-20"
    >
      <div
        aria-hidden
        className="animate-float pointer-events-none absolute -top-16 left-1/4 h-72 w-72 rounded-full bg-astra-400/20 blur-3xl"
      />
      <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Ready to upgrade, sustainably?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/70">
            Get in touch and we&apos;ll help you find a certified refurbished
            laptop that fits your needs and your budget.
          </p>
          <motion.a
            href="mailto:astralaptops@gmail.com"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-astra-700 shadow-lift transition-shadow hover:shadow-2xl"
          >
            astralaptops@gmail.com
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </motion.a>
        </Reveal>
      </div>
    </section>
  );
}
