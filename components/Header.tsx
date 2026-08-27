"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, MapPin, Clock, Menu, X, ShieldCheck } from "lucide-react";

const NAV_LINKS = [
  { label: "Accueil", href: "/" },
  { label: "Couverture", href: "/services/couverture" },
  { label: "Zinguerie", href: "/services/zinguerie" },
  { label: "Isolation", href: "/services/isolation" },
  { label: "Nettoyage & Démoussage", href: "/services/demoussage" },
  { label: "Réalisations", href: "/realisations" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow-md">
      {/* Topbar d'information */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-amber-500" />
              Lyon & métropole (69)
            </span>
            <span className="hidden sm:flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-amber-500" />
              Intervention rapide 7j/7
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-amber-400 font-medium">
            <ShieldCheck className="w-4 h-4" />
            Garantie Décennale
          </div>
        </div>
      </div>

      {/* Barre de navigation principale */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-amber-500 text-slate-950 font-black text-xl px-2.5 py-1 rounded">
              J
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tight text-slate-900 leading-none">
                RENOV<span className="text-amber-500">.</span>
              </span>
              <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                Couverture & Zinguerie Lyon
              </span>
            </div>
          </Link>

          {/* Nav Desktop */}
          <nav className="hidden lg:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-slate-700 hover:text-amber-600 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Phone & Devis */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:0465848885"
              className="flex items-center gap-2 text-slate-900 font-bold hover:text-amber-600 transition-colors"
            >
              <div className="p-2 bg-amber-100 text-amber-600 rounded-full">
                <Phone className="w-4 h-4" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[10px] text-slate-500 font-medium uppercase leading-none">Urgence / Devis</span>
                <span className="text-sm leading-tight font-extrabold">04 65 84 88 85</span>
              </div>
            </a>

            <Link
              href="/devis"
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm px-4 py-2.5 rounded-lg transition"
            >
              Devis Gratuit
            </Link>
          </div>

          {/* Bouton Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-slate-900 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="lg:hidden bg-slate-50 border-t border-slate-200 px-4 pt-2 pb-6 space-y-3">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block py-2 text-base font-medium text-slate-800 hover:text-amber-600 border-b border-slate-200/50"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 space-y-3">
            <a
              href="tel:0465848885"
              className="flex items-center justify-center gap-2 w-full bg-slate-900 text-white font-bold py-3 rounded-lg"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              Appeler : 04 65 84 88 85
            </a>
            <Link
              href="/devis"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3 rounded-lg"
            >
              Demander un devis gratuit
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}