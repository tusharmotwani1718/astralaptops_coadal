import { CheckCircle2 } from "lucide-react";
import { Reveal } from "./reveal";
import { AnimatedCounter } from "./animated-counter";

const points = [
  "Every laptop passes a 40-point hardware and cosmetic inspection",
  "Genuine, manufacturer-grade replacement components only",
  "All data securely wiped to industry-certified standards",
  "1-month warranty with real, responsive support",
];

const stats = [
  { value: 12000, suffix: "+", label: "Laptops refurbished" },
  { value: 98, suffix: "%", label: "Customer satisfaction" },
  { value: 40, suffix: "-pt", label: "Quality inspection" },
  { value: 6, suffix: "mo", label: "Warranty coverage" },
];

export function About() {
  return (
    <section id="about" className="bg-background py-24 lg:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <Reveal>
          <span className="text-sm font-semibold uppercase tracking-wider text-astra-600">
            About Astra Laptops
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Great laptops deserve a second life.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-foreground/65">
            Astra Laptops was founded on a simple idea: a great laptop shouldn&apos;t
            end up in a landfill just because its first life is over. We
            source pre-owned devices from trusted brands, restore them to
            like-new condition, and pass the savings — and the
            sustainability — on to you.
          </p>

          <ul className="mt-8 space-y-3.5">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <CheckCircle2
                  size={20}
                  className="mt-0.5 shrink-0 text-mint-500"
                />
                <span className="text-sm leading-relaxed text-foreground/75">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`rounded-2xl border border-border-subtle p-6 transition-colors duration-300 hover:bg-surface ${
                  i % 2 === 1 ? "sm:translate-y-4" : ""
                }`}
              >
                <p className="font-display text-3xl font-semibold text-astra-600 sm:text-4xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-sm text-foreground/60">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
