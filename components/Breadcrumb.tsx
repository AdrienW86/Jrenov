"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";

const LABEL_MAP: Record<string, string> = {
  services: "Nos Services",
  couverture: "Rénovation de Couverture",
  zinguerie: "Zinguerie & Gouttières",
  isolation: "Isolation de Toiture",
  demoussage: "Nettoyage & Démoussage",
  devis: "Demande de Devis",
  contact: "Contact & Zone d'intervention",
};

export default function Breadcrumb() {
  const pathname = usePathname();

  // Ne pas afficher le fil d'Ariane sur la page d'accueil
  if (pathname === "/") return null;

  const pathSegments = pathname.split("/").filter(Boolean);

  const breadcrumbItems = pathSegments.map((segment, index) => {
    const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
    const label = LABEL_MAP[segment] || segment.replace(/-/g, " ");
    return { href, label };
  });

  // Structure Schema.org JSON-LD pour le SEO Google
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: "https://jrenov.fr",
      },
      ...breadcrumbItems.map((item, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: item.label,
        item: `https://jrenov.fr${item.href}`,
      })),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <nav aria-label="Fil d'Ariane" className="bg-slate-100 border-b border-slate-200 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center text-xs sm:text-sm text-slate-600 overflow-x-auto">
          <Link href="/" className="flex items-center hover:text-amber-600 transition shrink-0">
            <Home className="w-3.5 h-3.5 mr-1" />
            Accueil
          </Link>

          {breadcrumbItems.map((item, index) => {
            const isLast = index === breadcrumbItems.length - 1;
            return (
              <div key={item.href} className="flex items-center shrink-0">
                <ChevronRight className="w-3.5 h-3.5 mx-2 text-slate-400" />
                {isLast ? (
                  <span className="font-semibold text-slate-900 capitalize" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link href={item.href} className="hover:text-amber-600 transition capitalize">
                    {item.label}
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </nav>
    </>
  );
}