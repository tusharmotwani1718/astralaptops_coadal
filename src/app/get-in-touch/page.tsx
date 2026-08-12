import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ContactHero } from "@/components/contact-hero";
import { ContactInfo } from "@/components/contact-info";

export const metadata: Metadata = {
  title: "Get in Touch — Astra Laptops",
  description:
    "Reach Astra Laptops by phone, email, or visit our Jaipur office. We're here to help with certified refurbished laptops.",
};

export default function GetInTouchPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <ContactHero />
        <ContactInfo />
      </main>
      <Footer />
    </>
  );
}
