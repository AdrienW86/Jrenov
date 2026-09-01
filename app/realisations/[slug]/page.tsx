import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import realisations from "@/data/realisations.json";
import { MapPin, Calendar, Clock, ShieldCheck, ArrowLeft, Phone, CheckCircle2 } from "lucide-react";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return realisations.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = realisations.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: `${project.title} à ${project.city} | Jrenov Lyon`,
    description: `${project.summary} Découvrez notre réalisation de travaux à ${project.city}. Devis et diagnostic gratuit.`,
  };
}

export default async function RealisationDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = realisations.find((p) => p.slug === slug);

  if (!project) notFound();

  // Filtrage de 2 projets similaires dans la même catégorie pour le maillage interne
  const relatedProjects = realisations
    .filter((p) => p.category === project.category && p.slug !== project.slug)
    .slice(0, 2);

  return (
    <article className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Fil d'ariane & Bouton retour */}
        <Link 
          href="/realisations" 
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-amber-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Retour à toutes les réalisations
        </Link>

        {/* Carte Principale */}
        <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200/80 shadow-sm space-y-8">
          
          {/* Entête du Projet */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="bg-amber-100 text-amber-900 text-xs font-extrabold px-3 py-1 rounded-full">
                {project.category}
              </span>
              <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                Garantie Décennale 10 ans
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-black text-slate-900 leading-tight">
              {project.title}
            </h1>
            
            <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-slate-600 border-y border-slate-100 py-3.5">
              <span className="flex items-center gap-1.5 font-medium">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0" />
                {project.city}
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <Calendar className="w-4 h-4 text-amber-500 shrink-0" />
                {project.date}
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <Clock className="w-4 h-4 text-amber-500 shrink-0" />
                Durée : {project.duration}
              </span>
            </div>
          </div>

          {/* Image du Chantier */}
          {project.image && (
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
              <Image
                src={project.image}
                alt={`${project.title} - Chantier Jrenov à ${project.city}`}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 896px) 100vw, 896px"
              />
            </div>
          )}

          {/* Résumé synthétique */}
          <div className="bg-amber-50/60 border-l-4 border-amber-500 p-4 rounded-r-xl">
            <p className="text-xs sm:text-sm font-semibold text-amber-950 leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Description détaillée des travaux */}
          <div className="prose max-w-none text-slate-700 text-sm sm:text-base leading-relaxed space-y-4">
            <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-2">
              Détail de l'intervention
            </h2>
            <p className="text-slate-600 whitespace-pre-line">
              {project.description}
            </p>

            <div className="pt-2">
              <h3 className="text-base font-bold text-slate-900 mb-3"> Points clés du chantier :</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-slate-600 list-none p-0">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span>Matériaux haute qualité certifiés NF</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span>Respect strict des normes DTU en vigueur</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span>Protection complète du site & nettoyage fin de chantier</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span>Contrôle d'étanchéité post-intervention</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Encart d'appel à l'action (CTA) */}
          <div className="bg-slate-950 text-white p-6 sm:p-8 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="font-extrabold text-base sm:text-lg">
                Un projet similaire à {project.city.split(" ")[0]} ou dans le Rhône ?
              </h3>
              <p className="text-xs text-slate-400">
                Diagnostic toiture offert et devis détaillé sous 24h sans engagement.
              </p>
            </div>
            <a 
              href="tel:0465848885" 
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-black px-6 py-3 rounded-xl text-xs sm:text-sm shrink-0 flex items-center gap-2.5 transition-transform active:scale-95 shadow-lg shadow-amber-500/20"
            >
              <Phone className="w-4 h-4" /> 04 65 84 88 85
            </a>
          </div>

        </div>

        {/* Section Réalisations Similaires (SEO & Maillage Interne) */}
        {relatedProjects.length > 0 && (
          <div className="space-y-4 pt-4">
            <h3 className="text-lg font-bold text-slate-900">
              Autres réalisations en {project.category}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedProjects.map((item) => (
                <Link
                  key={item.slug}
                  href={`/realisations/${item.slug}`}
                  className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm hover:border-amber-400 transition-all group space-y-2"
                >
                  <span className="text-xs text-amber-600 font-bold block">{item.city}</span>
                  <h4 className="font-bold text-slate-900 text-sm group-hover:text-amber-600 transition-colors line-clamp-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-500 line-clamp-2">
                    {item.summary}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </article>
  );
}