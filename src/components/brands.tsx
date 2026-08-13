import { Reveal } from "./reveal";

const brands = [
  "Dell",
  "HP",
  "Lenovo",
  "Apple",
  "ASUS",
  "Acer",
  "Microsoft",
  "Samsung",
];

export function Brands() {
  const track = [...brands, ...brands];

  return (
    <section id="brands" className="bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 text-center lg:px-8">
        <Reveal>
          <span className="text-sm font-semibold uppercase tracking-wider text-digital-depot-600">
            Brands We Work With
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Trusted hardware, professionally restored.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-foreground/65">
            We refurbish and support laptops from the world&apos;s leading
            manufacturers — so you get the brand you know, at a price you
            don&apos;t expect.
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.15} className="mt-16">
        <div
          className="group relative mx-auto max-w-6xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
        >
          <div className="motion-safe:animate-marquee flex w-max items-center gap-16 motion-safe:group-hover:[animation-play-state:paused] motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-x-12 motion-reduce:gap-y-6 motion-reduce:px-6">
            {track.map((brand, i) => (
              <span
                key={`${brand}-${i}`}
                aria-hidden={i >= brands.length ? true : undefined}
                className={`shrink-0 font-display text-2xl font-semibold text-foreground/35 transition-all duration-300 hover:scale-110 hover:text-digital-depot-600 sm:text-3xl ${
                  i >= brands.length ? "motion-reduce:hidden" : ""
                }`}
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
