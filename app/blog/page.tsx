import { Metadata } from "next";
import Link from "next/link";
import posts from "@/data/post.json";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog & Conseils Toiture Lyon | Jrenov",
  description: "Retrouvez les conseils de nos artisans couvreurs pour l'entretien, l'isolation et la rénovation de toiture à Lyon.",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <span className="text-amber-600 font-bold text-xs uppercase tracking-wider">Conseils d'Artisan</span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900">Le Blog Toiture & Zinguerie</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <article key={post.slug} className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex gap-4 text-xs text-slate-400">
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{post.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{post.readTime}</span>
                </div>
                <h2 className="text-xl font-bold text-slate-900 hover:text-amber-600 transition">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{post.excerpt}</p>
              </div>
              <Link href={`/blog/${post.slug}`} className="text-xs font-extrabold text-amber-600 flex items-center gap-1 pt-2 border-t border-slate-100">
                Lire l'article complet <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}