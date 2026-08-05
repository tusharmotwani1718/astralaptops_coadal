"use client";

import { motion } from "framer-motion";
import { Leaf, ShieldCheck, Timer, Truck } from "lucide-react";
import { staggerContainer } from "./reveal";

const highlights = [
  {
    icon: ShieldCheck,
    title: "40-Point Inspection",
    desc: "Every device is stress-tested on hardware, battery, and display before it ships.",
  },
  {
    icon: Timer,
    title: "6-Month Warranty",
    desc: "Real coverage, no fine print — repairs or replacement if anything goes wrong.",
  },
  {
    icon: Leaf,
    title: "Less E-Waste",
    desc: "Every refurbished laptop is one less device in a landfill.",
  },
  {
    icon: Truck,
    title: "Doorstep Delivery",
    desc: "Carefully packaged and delivered straight to you, fully set up and ready.",
  },
];

export function Highlights() {
  return (
    <section className="relative -mt-12 px-6 lg:px-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={staggerContainer}
        className="mx-auto grid max-w-6xl grid-cols-1 gap-4 rounded-2xl border border-border-subtle bg-background p-4 shadow-soft sm:grid-cols-2 lg:grid-cols-4 lg:p-6"
      >
        {highlights.map(({ icon: Icon, title, desc }) => (
          <motion.div
            key={title}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4 }}
            className="group rounded-xl p-4 transition-colors duration-300 hover:bg-surface"
          >
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-astra-50 text-astra-600 transition-colors duration-300 group-hover:bg-astra-600 group-hover:text-white">
              <Icon size={20} strokeWidth={2} />
            </span>
            <h3 className="mt-4 font-display text-base font-semibold text-foreground">
              {title}
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-foreground/60">
              {desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
