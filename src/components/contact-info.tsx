"use client";

import { motion } from "framer-motion";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { staggerContainer } from "./reveal";

const ADDRESS = "14-B, Govind Marg, Adarsh Nagar, Jaipur, Rajasthan 302004";
const MAP_SRC = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`;

const cards = [
  {
    icon: MapPin,
    title: "Visit Us",
    lines: ["14-B, Govind Marg, Adarsh Nagar,", "Jaipur – 302004, Rajasthan"],
  },
  {
    icon: Phone,
    title: "Call Us",
    links: [
      { href: "tel:+917300061569", label: "+91 73000 61569" },
      { href: "tel:+917300076692", label: "+91 73000 76692" },
    ],
  },
  {
    icon: Mail,
    title: "Email Us",
    links: [
      {
        href: "mailto:astralaptops@gmail.com",
        label: "astralaptops@gmail.com",
      },
    ],
  },
  {
    icon: Clock,
    title: "Business Hours",
    lines: ["Mon – Sat, 9am – 6pm", "Sunday: Closed"],
  },
];

const socials = [
  { href: "#", label: "Instagram" },
  { href: "#", label: "LinkedIn" },
  { href: "#", label: "Twitter" },
];

export function ContactInfo() {
  return (
    <section className="relative -mt-12 px-6 pb-24 lg:px-8 lg:pb-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={staggerContainer}
        className="mx-auto grid max-w-6xl grid-cols-1 gap-4 rounded-2xl border border-border-subtle bg-background p-4 shadow-soft sm:grid-cols-2 lg:grid-cols-4 lg:p-6"
      >
        {cards.map(({ icon: Icon, title, lines, links }) => (
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
            <div className="mt-1.5 space-y-1 text-sm leading-relaxed text-foreground/60">
              {links
                ? links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="block transition-colors hover:text-astra-600"
                    >
                      {link.label}
                    </a>
                  ))
                : lines?.map((line) => <p key={line}>{line}</p>)}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto mt-6 grid max-w-6xl gap-6 lg:grid-cols-[1.6fr_1fr]"
      >
        <div className="overflow-hidden rounded-2xl border border-border-subtle shadow-soft">
          <iframe
            title="Astra office location"
            src={MAP_SRC}
            className="h-80 w-full border-0 lg:h-full"
            loading="lazy"
          />
        </div>

        <div className="flex flex-col justify-center rounded-2xl border border-border-subtle bg-surface p-8 text-center lg:text-left">
          <h3 className="font-display text-lg font-semibold text-foreground">
            Follow along
          </h3>
          <p className="mt-2 text-sm text-foreground/60">
            Restocks, drops, and behind-the-scenes from the refurb bench.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-4 lg:justify-start">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-sm font-medium text-astra-600 underline-offset-4 transition-colors hover:text-astra-700 hover:underline"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
