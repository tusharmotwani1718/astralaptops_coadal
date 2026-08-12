import type { Metadata } from "next";
import { Geist, Geist_Mono, Fredoka } from "next/font/google";
import { ScrollRestoration } from "@/components/scroll-restoration";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Astra Laptops — Certified Refurbished Laptops",
  description:
    "Astra Laptops gives premium laptops a second life — rigorously tested, professionally restored, and backed by real warranty. Better for your wallet, better for the planet.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/astra_favicon.png", type: "image/png" },
    ],
    apple: "/astra_favicon.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${fredoka.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ScrollRestoration />
        {children}
      </body>
    </html>
  );
}
