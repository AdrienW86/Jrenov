import Image from 'next/image';
import { getFacebookPosts } from '@/lib/facebook';

export default async function FacebookFeed() {
  const posts = await getFacebookPosts(6); // Récupère les 6 derniers posts

  if (!posts || posts.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        Aucune publication disponible pour le moment.
      </div>
    );
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
        <span>Dernières actualités </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => {
          const dateFormatted = new Date(post.created_time).toLocaleDateString('fr-FR', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          });

          return (
            <article 
              key={post.id} 
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100 flex flex-col justify-between"
            >
              <div>
                {/* Image du post si disponible */}
                {post.full_picture && (
                  <div className="relative w-full h-48 bg-gray-100">
                    <Image
                      src={post.full_picture}
                      alt={post.message ? post.message.slice(0, 100) : 'Publication Facebook'}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                )}

                {/* Contenu textuel */}
                <div className="p-4">
                  <p className="text-xs text-blue-600 font-semibold mb-1">{dateFormatted}</p>
                  {post.message ? (
                    <p className="text-gray-700 text-sm line-clamp-3">
                      {post.message}
                    </p>
                  ) : (
                    <p className="text-gray-400 text-sm italic">
                      Voir la publication sur Facebook
                    </p>
                  )}
                </div>
              </div>

              {/* Pied de carte avec lien nofollow pour le SEO */}
              <div className="p-4 pt-0">
                <a
                  href={post.permalink_url}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-flex items-center text-sm text-blue-600 font-medium hover:underline gap-1 mt-2"
                >
                  Voir sur Facebook →
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}