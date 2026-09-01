export interface FacebookPost {
  id: string;
  message?: string;
  full_picture?: string;
  created_time: string;
  permalink_url: string;
}

export interface FacebookApiResponse {
  data: FacebookPost[];
}