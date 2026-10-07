export interface BlogComment {
  id: number;
  blog_id: number;
  user_id: number;
  parent_comment_id: number | null;
  author_name: string;
  content: string;
  created_at: string;
  updated_at: string;
  replies: BlogComment[];
}

export interface BlogCommentPage {
  items: BlogComment[];
  total: number;
  comment_count: number;
  offset: number;
  limit: number;
}