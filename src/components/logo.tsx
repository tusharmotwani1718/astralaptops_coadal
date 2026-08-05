import Image from "next/image";
import Link from "next/link";
import astraMark from "../../public/astra.jpg";
import astraWordmark from "../../public/astra_white_wordmark.png";

type LogoProps = {
  /** "icon" — badge mark, for light/solid surfaces. "wordmark" — white lockup, for transparent/dark surfaces. */
  variant?: "icon" | "wordmark";
  className?: string;
};

export function Logo({ variant = "icon", className = "" }: LogoProps) {
  if (variant === "wordmark") {
    return (
      <Link
        href="/"
        scroll={false}
        aria-label="Astra — home"
        className={`group inline-flex items-center ${className}`}
      >
        <Image
          src={astraWordmark}
          alt=""
          priority
          className="h-9 w-auto transition-transform duration-300 ease-out group-hover:scale-105"
        />
      </Link>
    );
  }

  return (
    <Link
      href="/"
      scroll={false}
      aria-label="Astra — home"
      className={`group inline-flex items-center gap-2.5 ${className}`}
    >
      <span className="relative block h-11 w-11 overflow-hidden rounded-[10px] shadow-soft ring-1 ring-black/5 transition-transform duration-300 ease-out group-hover:scale-105 group-hover:-rotate-3">
        <Image
          src={astraMark}
          alt=""
          fill
          sizes="44px"
          className="object-cover"
          priority
        />
      </span>
    </Link>
  );
}
