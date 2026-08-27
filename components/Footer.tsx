import Link from "next/link";
import { Phone, MapPin, Clock, Mail, ShieldCheck } from "lucide-react";

const SERVICES_LINKS = [
  { label: "Rénovation de couverture", href: "/services/couverture" },
  { label: "Zinguerie & Gouttières", href: "/services/zinguerie" },
  { label: "Isolation thermique", href: "/services/isolation" },
  { label: "Nettoyage & Démoussage", href: "/services/demoussage" },
];

const TOWNS_LYON = [
  "Lyon (tous arrondissements)",
  "Villeurbanne",
  "Caluire-et-Cuire",
  "Écully",
  "Tassin-la-Demi-Lune",
  "Oullins",
  "Bron",
  "Mions & Est Lyonnais",
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Colonne 1 : Présentation Jrenov */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-amber-500 text-slate-950 font-black text-xl px-2.5 py-1 rounded">
                J
              </div>
              <span className="text-2xl font-black tracking-tight text-white leading-none">
                RENOV<span className="text-amber-500">.</span>
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Artisan couvreur-zingueur spécialiste de la rénovation, la réparation et l’entretien de toitures à Lyon et dans tout le Rhône (69).
            </p>
            <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>Garantie Décennale 10 ans</span>
            </div>
          </div>

          {/* Colonne 2 : Nos Prestations */}
          <div className="space-y-3">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider">Nos Prestations</h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              {SERVICES_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-amber-400 transition">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 : Zone d'intervention SEO */}
          <div className="space-y-3">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider">Zone d'intervention</h3>
            <ul className="grid grid-cols-1 gap-1 text-xs text-slate-400">
              {TOWNS_LYON.map((town, idx) => (
                <li key={idx} className="flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-amber-500 shrink-0" />
                  <span>{town}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 4 : Contact Direct */}
          <div className="space-y-3">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider">Contact & Urgences</h3>
            <div className="space-y-2 text-xs sm:text-sm text-slate-300">
              <a href="tel:0465848885" className="flex items-center gap-2 font-bold text-white hover:text-amber-400 transition">
                <Phone className="w-4 h-4 text-amber-500" />
                04 65 84 88 85
              </a>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Intervention 7j/7 en cas d'urgence</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <span>contact@jrenov.com</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bas du Footer & Mentions Légales */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Jrenov Couverture Lyon. Tous droits réservés.</p>
          <div className="flex gap-4 flex-wrap">
            <Link href="/plan-du-site" className="hover:text-slate-300 transition">
              Plan du site
            </Link>
            <Link href="/mentions-legales" className="hover:text-slate-300 transition">
              Mentions légales
            </Link>
            <Link href="/devis" className="hover:text-slate-300 transition">
              Demander un devis
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}