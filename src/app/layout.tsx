import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nail Master Dallas | Professional Nail Supply",
  description: "A new storefront concept for Nail Master Dallas, featuring professional nail products and studio equipment.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
