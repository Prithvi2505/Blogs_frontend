export interface Blog {
  id: number;
  title: string;
  description: string;
  created_at: string;
  last_updated_at: string;
  created_by: number;
  is_public: boolean;
  author_name: string;
  tags: string[];
  like_count: number;
  comment_count: number;
  liked_by_me: boolean;
}

export interface BlogLikeResponse {
  liked: boolean;
  like_count: number;
}