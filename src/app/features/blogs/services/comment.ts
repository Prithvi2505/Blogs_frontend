import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from '../../../core/api';
import { BlogComment, BlogCommentPage } from '../../../Models/comment.model';

@Injectable({ providedIn: 'root' })
export class CommentService {
  private readonly http = inject(HttpClient);

  getForBlog(blogId: number, offset = 0, limit = 5): Observable<BlogCommentPage> {
    return this.http.get<BlogCommentPage>(`${API_URL}/blogs/${blogId}/comments`, {
      params: { offset: offset.toString(), limit: limit.toString() },
    });
  }

  create(blogId: number, content: string, parentCommentId: number | null = null): Observable<BlogComment> {
    return this.http.post<BlogComment>(`${API_URL}/blogs/${blogId}/comments`, {
      content,
      parent_comment_id: parentCommentId,
    });
  }

  update(commentId: number, content: string): Observable<BlogComment> {
    return this.http.put<BlogComment>(`${API_URL}/blogs/comments/${commentId}`, { content });
  }

  delete(commentId: number): Observable<void> {
    return this.http.delete<void>(`${API_URL}/blogs/comments/${commentId}`);
  }
}