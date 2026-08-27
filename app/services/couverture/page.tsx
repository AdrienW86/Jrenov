import { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  Phone,
  FileText,
  Hammer,
  Wrench,
  Sparkles,
  AlertTriangle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Rénovation & Réparation de Couverture à Lyon (69) | Jrenov",
  description: "Artisan couvreur spécialisé en réfection de toiture, pose de tuiles, ardoise et zinc à Lyon et dans le Rhône. Garantie décennale et devis gratuit au 04 65 84 88 85.",
};

const MATERIALS = [
  {
    name: "Tuiles en Terre Cuite",
    desc: "Esthétiques, durables et traditionnelles (tuiles romanes, plates ou emboîtement). Le choix classique dans la région lyonnaise.",
  },
  {
    name: "Tuiles en Béton",
    desc: "Excellente résistance aux intempéries et au gel, proposant un bon rapport qualité/prix pour les grandes surfaces.",
  },
  {
    name: "Ardoises Naturelles",
    desc: "Élégance haut de gamme et longévité exceptionnelle. Idéales pour les toitures à forte pente et le patrimoine.",
  },
  {
    name: "Bac Acier & Toitures Plates",
    desc: "Solution moderne, étanche et ultra-résistante pour annexes, garages ou bâtiments industriels et contemporains.",
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Diagnostic & Devis Gratuit",
    desc: "Inspection visuelle sur place à Lyon et analyse de la charpente et de l'étanchéité.",
  },
  {
    step: "02",
    title: "Mise en Sécurité & Dépose",
    desc: "Installation des échafaudages et retrait des anciens matériaux usagés.",
  },
  {
    step: "03",
    title: "Pose de l'Écran & Liteonnage",
    desc: "Installation du pare-pluie (HPV) et pose des lattes de support ventilées.",
  },
  {
    step: "04",
    title: "Pose de la Couverture & Finitions",
    desc: "Alignement précis des matériaux et réalisation de l'étanchéité sur les berges et faîtages.",
  },
];

export default function CouverturePage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      
      {/* 1. Hero de la page Service */}
      <section className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="max-w-5xl mx-auto relative z-10 space-y-6 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold">
            <ShieldCheck className="w-4 h-4 text-amber-500" />
            <span>Travaux sous Garantie Décennale 10 Ans</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Rénovation & Réfection de Toiture à <span className="text-amber-400">Lyon</span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            Votre toiture présente des fuites, des tuiles cassées ou nécessite une rénovation complète ? Jrenov intervient dans toute la métropole lyonnaise pour assurer l'étanchéité et la protection pérenne de votre maison.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center sm:justify-start">
            <Link
              href="/devis"
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold px-6 py-3.5 rounded-xl text-center transition flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
            >
              <FileText className="w-5 h-5" />
              Demander un devis couverture
            </Link>

            <a
              href="tel:0465848885"
              className="bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 font-bold px-6 py-3.5 rounded-xl text-center transition flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5 text-amber-400" />
              Appeler le 04 65 84 88 85
            </a>
          </div>
        </div>
      </section>

      {/* 2. Section Matériaux */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center space-y-3 mb-12">
          <span className="text-amber-600 font-bold text-sm uppercase tracking-wider">Matériaux & Savoir-faire</span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
            Tous types de couvertures maîtrisés
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
            Nous sélectionnons des matériaux de haute qualité adaptés aux contraintes climatiques du Rhône et aux règles d'urbanisme de la région lyonnaise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MATERIALS.map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
              <div className="w-10 h-10 bg-amber-100 text-amber-700 rounded-lg flex items-center justify-center font-bold">
                <Hammer className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">{item.name}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Section Processus de Rénovation */}
      <section className="bg-slate-100 py-16 px-4 sm:px-6 lg:px-8 border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-3 mb-12">
            <span className="text-amber-600 font-bold text-sm uppercase tracking-wider">Méthodologie</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Comment se déroule votre chantier de toiture ?
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((step, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 relative space-y-3">
                <span className="text-3xl font-black text-amber-500/30 absolute top-4 right-4">
                  {step.step}
                </span>
                <h3 className="text-base font-bold text-slate-900 pr-8">{step.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Banner Urgence / Infiltration */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <AlertTriangle className="w-4 h-4" />
              Dépannage Rapide
            </div>
            <h3 className="text-xl sm:text-2xl font-black">Une fuite d'eau suite à un orage ?</h3>
            <p className="text-slate-300 text-sm max-w-lg">
              Nos équipes se déplacent rapidement sur Lyon et 30 km aux alentours pour bâcher votre toit et effectuer une mise hors d'eau temporaire ou définitive.
            </p>
          </div>
          <a
            href="tel:0465848885"
            className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold px-6 py-3.5 rounded-xl transition shrink-0 uppercase text-xs sm:text-sm tracking-wider"
          >
            Appel d'urgence : 04 65 84 88 85
          </a>
        </div>
      </section>

    </div>
  );
}