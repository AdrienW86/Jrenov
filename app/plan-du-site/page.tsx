import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plan du site | Jrenov - Couvreur Lyon",
  description: "Accédez à l'ensemble des pages et services du site Jrenov Couverture à Lyon.",
};

export default function PlanDuSite() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6">
      <h1 className="text-3xl font-extrabold text-slate-900 mb-8">Plan du site</h1>

      <div className="space-y-8 bg-white p-8 rounded-2xl border border-slate-200">
        <div>
          <h2 className="text-lg font-bold text-amber-600 mb-3">Pages Principales</h2>
          <ul className="list-disc list-inside space-y-2 text-sm text-slate-700">
            <li><Link href="/" className="hover:underline">Accueil</Link></li>
            <li><Link href="/devis" className="hover:underline">Demande de Devis Gratuit</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact & Zone d'intervention</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-bold text-amber-600 mb-3">Nos Services de Couverture à Lyon</h2>
          <ul className="list-disc list-inside space-y-2 text-sm text-slate-700">
            <li><Link href="/services/couverture" className="hover:underline">Rénovation de couverture & pose de tuiles</Link></li>
            <li><Link href="/services/zinguerie" className="hover:underline">Travaux de zinguerie & pose de gouttières</Link></li>
            <li><Link href="/services/isolation" className="hover:underline">Isolation de toiture & combles</Link></li>
            <li><Link href="/services/demoussage" className="hover:underline">Nettoyage, démoussage & traitement hydrofuge</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}