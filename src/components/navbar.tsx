"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "./logo";
import { contactHref, navLinks } from "@/lib/nav";

const MotionLink = motion.create(Link);

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid
          ? "bg-background/90 backdrop-blur-md border-b border-border-subtle shadow-soft"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:px-8">
        <Logo variant={solid ? "icon" : "wordmark"} />

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-300 ${
                solid
                  ? "text-foreground/70 hover:text-astra-600"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={contactHref}
            scroll={false}
            className="rounded-full bg-astra-600 px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition-all duration-300 hover:bg-astra-700 hover:shadow-lift active:scale-95"
          >
            Get in Touch
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className={`inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors md:hidden ${
            solid ? "text-foreground" : "text-white"
          }`}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={open ? "close" : "open"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </motion.span>
          </AnimatePresence>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden bg-background border-b border-border-subtle md:hidden"
          >
            <motion.div
              className="flex flex-col gap-1 px-6 py-4"
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.06 } },
              }}
            >
              {navLinks.map((link) => (
                <MotionLink
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  variants={{
                    hidden: { opacity: 0, x: -12 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  className="rounded-lg px-3 py-3 text-base font-medium text-foreground/80 transition-colors hover:bg-surface hover:text-astra-600"
                >
                  {link.label}
                </MotionLink>
              ))}
              <MotionLink
                href={contactHref}
                scroll={false}
                onClick={() => setOpen(false)}
                variants={{
                  hidden: { opacity: 0, x: -12 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="mt-2 rounded-full bg-astra-600 px-5 py-3 text-center text-base font-semibold text-white transition-colors hover:bg-astra-700"
              >
                Get in Touch
              </MotionLink>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
