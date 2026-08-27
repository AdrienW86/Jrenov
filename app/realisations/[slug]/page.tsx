import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import realisations from "@/data/realisations.json";
import { MapPin, Calendar, Clock, ShieldCheck, ArrowLeft, Phone } from "lucide-react";

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
    title: `${project.title} | Jrenov Lyon`,
    description: `${project.summary} Chantier réalisé à ${project.city}.`,
  };
}

export default async function RealisationDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = realisations.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <article className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/80 shadow-sm space-y-8">
        <Link href="/realisations" className="inline-flex items-center gap-2 text-xs font-bold text-amber-600 hover:underline">
          <ArrowLeft className="w-4 h-4" /> Retour aux réalisations
        </Link>

        <div className="space-y-4">
          <span className="bg-amber-100 text-amber-800 text-xs font-extrabold px-3 py-1 rounded-full inline-block">
            {project.category}
          </span>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight">{project.title}</h1>
          
          <div className="flex flex-wrap gap-4 text-xs text-slate-500 border-y border-slate-100 py-3">
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-amber-500" />{project.city}</span>
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-amber-500" />{project.date}</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-amber-500" />Durée : {project.duration}</span>
          </div>
        </div>

        <div className="prose max-w-none text-slate-700 text-sm sm:text-base leading-relaxed space-y-4">
          <h2 className="text-lg font-bold text-slate-900">Description des travaux</h2>
          <p>{project.description}</p>
        </div>

        <div className="bg-slate-900 text-white p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-bold text-base">Vous avez un projet similaire à {project.city.split(" ")[0]} ?</h3>
            <p className="text-xs text-slate-400">Demandez votre devis ou diagnostic gratuit sous 24h.</p>
          </div>
          <a href="tel:0465848885" className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-5 py-2.5 rounded-xl text-xs shrink-0 flex items-center gap-2">
            <Phone className="w-4 h-4" /> 04 65 84 88 85
          </a>
        </div>
      </div>
    </article>
  );
}