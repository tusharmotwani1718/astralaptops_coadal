import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "./logo";
import { contactHref, navLinks } from "@/lib/nav";

const socials = [
  { href: "#", label: "Instagram" },
  { href: "#", label: "LinkedIn" },
  { href: "#", label: "Twitter" },
];

export function Footer() {
  return (
    <footer className="bg-astra-950 text-white/60">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
              Certified refurbished laptops — rigorously tested, professionally
              restored, and backed by a real warranty.
            </p>
            <div className="mt-6 flex items-center gap-4">
              {socials.map(({ href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="text-sm text-white/50 underline-offset-4 transition-colors duration-300 hover:text-white hover:underline"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Navigate</h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={contactHref}
                  scroll={false}
                  className="text-sm text-white/50 transition-colors hover:text-white"
                >
                  Get in Touch
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Get in touch</h3>
            <ul className="mt-4 space-y-4 text-sm text-white/50">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-astra-400" />
                <span>
                  Flat No. 65, Jeen Ghumay, Road/Lane 3, Block 1, Somalpur, Ekta Nagar, 
                  <br />
                  Ajmer, Rajasthan – 305001
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="mt-0.5 shrink-0 text-astra-400" />
                <span className="flex flex-col gap-1">
                  <a
                    href="tel:+917300061569"
                    className="transition-colors hover:text-white"
                  >
                    +91 73000 61569
                  </a>
                  <a
                    href="tel:+917300076692"
                    className="transition-colors hover:text-white"
                  >
                    +91 73000 76692
                  </a>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="shrink-0 text-astra-400" />
                <a
                  href="mailto:astralaptops@gmail.com"
                  className="transition-colors hover:text-white"
                >
                  astralaptops@gmail.com
                </a>
              </li>
              <li className="pl-7 text-white/40">Mon – Sat, 9am – 6pm</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row">
          <p>© {new Date().getFullYear()} Astra. All rights reserved.</p>
          <p>Refurbished with care.</p>
        </div>
      </div>
    </footer>
  );
}
