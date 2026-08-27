"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { Phone, FileText } from "lucide-react";

const videos = [
  "/banner1.mp4", 
  "/banner2.mp4", 
  "/banner3.mp4",
];

export default function HeroBanner() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Fonction pour mettre en pause toutes les vidéos sauf l'active
  const syncVideos = useCallback((activeIdx: number) => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === activeIdx) {
          video.currentTime = 0; // Recommencer
          video.play().catch(() => {}); // Gérer le blocage navigateur
        } else {
          video.pause();
        }
      }
    });
  }, []);

  // Cycle de changement de vidéo
  useEffect(() => {
    // Initialiser la première vidéo
    syncVideos(currentVideo);

    const interval = setInterval(() => {
      setCurrentVideo((prev) => {
        const next = (prev + 1) % videos.length;
        syncVideos(next); // Lancer la suivante avant la transition
        return next;
      });
    }, 8000); // Réduit à 8s pour plus de dynamisme

    return () => clearInterval(interval);
  }, [currentVideo, syncVideos]);

  return (
    <section className="relative w-full aspect-[16/10] md:aspect-video min-h-[550px] flex items-center justify-center overflow-hidden bg-slate-950">
      
      {/* Background Videos avec Fondu */}
      {videos.map((src, index) => (
        <video
          key={src}
          ref={(el) => { videoRefs.current[index] = el; }}
          muted
          loop
          playsInline
          preload="auto"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            index === currentVideo ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src={src} type="video/mp4" />
        </video>
      ))}

      {/* Overlay sombre dégradé pour meilleure lisibilité du texte */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 z-10" />

      {/* Contenu */}
      <div className="relative z-20 container mx-auto px-6 text-center text-white">
        
        {/* Petit badge local */}
        <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
          <span>Artisan Couvreur à Lyon & Métropole (69)</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
          Votre Toiture, Notre Expertise <br />
          <span className="text-amber-400">Signée Jrenov</span>
        </h1>
        
        <p className="text-lg sm:text-xl text-zinc-200 max-w-2xl mx-auto mb-12">
          Rénovation, zinguerie, isolation et dépannage d'urgence 7j/7. <br/>
          Travaux garantis 10 ans.
        </p>
        
        {/* Double CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/devis"
            className="flex items-center gap-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-4 px-8 rounded-xl transition-all shadow-xl shadow-amber-500/20"
          >
            <FileText className="w-5 h-5" />
            Demander un devis gratuit
          </Link>
          
          <a 
            href="tel:0465848885" 
            className="flex items-center gap-2.5 bg-slate-100 hover:bg-white text-slate-950 font-extrabold py-4 px-8 rounded-xl transition-all shadow-xl"
          >
            <Phone className="w-5 h-5 text-amber-600" />
            04 65 84 88 85
          </a>
        </div>
      </div>
    </section>
  );
}