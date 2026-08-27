import HeroBanner from "@/components/Banner";
import Link from "next/link";
import {
  Home as HomeIcon,
  Droplets,
  Shield,
  Sparkles,
  Phone,
  CheckCircle2,
  Clock,
  MapPin,
  FileCheck,
} from "lucide-react";

const SERVICES = [
  {
    title: "Couverture & Toiture",
    description:
      "Rénovation complète ou partielle, pose de tuiles (terre cuite, béton), ardoises et bac acier à Lyon et ses environs.",
    icon: HomeIcon,
    href: "/services/couverture",
  },
  {
    title: "Zinguerie & Gouttières",
    description: "Installation et réparation de chéneaux, gouttières zinc ou PVC, entourages de cheminée et abergements.",
    icon: Droplets,
    href: "/services/zinguerie",
  },
  {
    title: "Isolation de Toiture",
    description: "Isolation thermique par l'extérieur (Sarking) ou sous combles pour améliorer votre confort et réduire vos factures.",
    icon: Shield,
    href: "/services/isolation",
  },
  {
    title: "Nettoyage & Démoussage",
    description: "Traitement fongicide, démoussage haute pression et application d'hydrofuge pour prolonger la durée de vie de votre toit.",
    icon: Sparkles,
    href: "/services/demoussage",
  },
];

const ENGAGEMENTS = [
  { icon: Clock, title: "Intervention sous 24h", desc: "Pour les urgences et fuites" },
  { icon: Shield, title: "Garantie Décennale", desc: "Travaux assurés pendant 10 ans" },
  { icon: FileCheck, title: "Devis Gratuit", desc: "Sans engagement sous 24h" },
  { icon: MapPin, title: "Proximité Lyon", desc: "Métropole & Rhône (69)" },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* 1. Hero avec Fond Vidéo */}
      <HeroBanner />

      {/* 2. Bandes d'engagements & réassurance */}
      <section className="bg-slate-900 text-white py-8 border-t border-amber-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
            {ENGAGEMENTS.map((item, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row items-center gap-3">
                <div className="p-2.5 bg-amber-500/10 text-amber-400 rounded-xl shrink-0">
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-white">{item.title}</h3>
                  <p className="text-xs text-slate-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Grille des Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <span className="text-amber-600 font-bold text-sm uppercase tracking-wider">Nos Prestations</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Nos solutions de couverture à Lyon
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-base">
            Jrenov accompagne les particuliers et professionnels pour tous leurs travaux de toiture, en neuf comme en rénovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
                </div>
                <div className="pt-6">
                  <Link
                    href={service.href}
                    className="text-amber-600 hover:text-amber-700 text-sm font-bold inline-flex items-center gap-1 transition"
                  >
                    En savoir plus &rarr;
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Encart CTA Urgence & Contact Direct */}
      <section className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-amber-600 to-amber-500 rounded-3xl p-8 sm:p-12 text-slate-950 flex flex-col md:flex-row justify-between items-center gap-8 shadow-xl">
          <div className="space-y-3 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-black">Un projet de toiture ou une urgence à Lyon ?</h2>
            <p className="font-medium text-slate-900/90 max-w-xl">
              Nos artisans sont à votre écoute pour établir un diagnostic gratuit et intervenir dans les plus brefs délais.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full md:w-auto">
            <a
              href="tel:0465848885"
              className="bg-slate-950 hover:bg-slate-900 text-white font-extrabold px-6 py-4 rounded-xl text-center flex items-center justify-center gap-2 transition"
            >
              <Phone className="w-5 h-5 text-amber-400" />
              04 65 84 88 85
            </a>
            <Link
              href="/devis"
              className="bg-white hover:bg-slate-100 text-slate-950 font-extrabold px-6 py-4 rounded-xl text-center transition"
            >
              Devis en ligne
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}