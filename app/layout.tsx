import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import FacebookFeed from "@/components/FacebookFeed";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jrenov - Couvreur Zingueur à Lyon (69) | Rénovation & Urgence Toiture",
  description:
    "Artisan couvreur-zingueur à Lyon et sa métropole. Travaux de couverture, recherche de fuite, isolation et nettoyage de toiture. Devis gratuit au 04 65 84 88 85.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fr"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900">
        <Header />
        <Breadcrumb />
        <main className="flex-1">{children}</main>
        <FacebookFeed />
        <Footer />
      </body>
    </html>
  );
}