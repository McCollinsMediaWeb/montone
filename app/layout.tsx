import type { Metadata } from "next";
import { Manrope, Cormorant_Garamond } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";
import "./concept.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-sans" });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-serif", weight: ["500", "600", "700"] });

export const metadata: Metadata = {
  title: "Montone — Everyday ingredients, made exceptional",
  description: "Premium syrups, fruit pulps, creams and café essentials delivered across the UAE.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${manrope.variable} ${cormorant.variable}`}><Toaster position="top-center" richColors />{children}</body></html>;
}
