import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  title: {
    default: "Huromata | Product Engineering",
    template: "%s | Huromata"
  },
  description:
    "Huromata builds SaaS products, business websites, automation systems, and robotics solutions for teams that move fast.",
  keywords: [
    "SaaS development",
    "product engineering",
    "automation systems",
    "robotics",
    "web development",
    "software studio"
  ],
  openGraph: {
    title: "Huromata | Product Engineering",
    description:
      "We build SaaS platforms, automation tools, and robotics systems for ambitious teams.",
    type: "website"
  }
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-white text-black antialiased">
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
