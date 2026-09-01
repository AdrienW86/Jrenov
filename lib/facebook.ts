import { FacebookApiResponse, FacebookPost } from '@/types/facebook';

export async function getFacebookPosts(limit = 6): Promise<FacebookPost[]> {
  const pageId = process.env.FACEBOOK_PAGE_ID;
  const accessToken = process.env.META_ACCESS_TOKEN;

  if (!pageId || !accessToken) {
    console.error('Variables d’environnement Facebook manquantes.');
    return [];
  }

  const url = `https://graph.facebook.com/v20.0/${pageId}/posts?fields=id,message,full_picture,created_time,permalink_url&limit=${limit}&access_token=${accessToken}`;

  try {
    const res = await fetch(url, {
      next: { revalidate: 7200 }, // Révalide toutes les 2 heures (ISR)
    });

    if (!res.ok) {
  const errorData = await res.json();
  console.error('Détails de l’erreur Meta :', JSON.stringify(errorData, null, 2));
  throw new Error(`Erreur Meta: ${res.statusText}`);
}

    const json: FacebookApiResponse = await res.json();
    
    // Tri chronologique : le plus récent en premier
    return (json.data || []).sort(
      (a, b) => new Date(b.created_time).getTime() - new Date(a.created_time).getTime()
    );
  } catch (error) {
    console.error('Erreur API Facebook :', error);
    return [];
  }
}