import { Component, inject, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Auth } from '../../../../core/auth/auth';
import { Blog } from '../../../../Models/blog.model';
import { BlogService } from '../../services/blog';
import { BlogComments } from '../../components/blog-comments/blog-comments';

@Component({
  imports: [BlogComments, DatePipe, MatButtonModule, MatIconModule, RouterLink],
  selector: 'app-blog-details',
  styleUrl: './blog-details.css',
  templateUrl: './blog-details.html',
})
export class BlogDetails {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly blogService = inject(BlogService);
  readonly auth = inject(Auth);
  blog = signal<Blog | undefined>(undefined);
  isLoading = signal(true);
  errorMessage = signal('');
  isUpdatingLike = signal(false);

  constructor() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.blogService.getById(id).subscribe({
      next: blog => { this.blog.set(blog); this.isLoading.set(false); },
      error: () => { this.errorMessage.set('Unable to load this blog.'); this.isLoading.set(false); },
    });
  }

  toggleLike(): void {
    const currentBlog = this.blog();
    if (!currentBlog || this.isUpdatingLike()) return;
    if (!this.auth.isLoggedIn()) {
      void this.router.navigate(['/login'], { queryParams: { returnUrl: `/blogs/${currentBlog.id}` } });
      return;
    }

    this.isUpdatingLike.set(true);
    const request = currentBlog.liked_by_me
      ? this.blogService.unlike(currentBlog.id)
      : this.blogService.like(currentBlog.id);
    request.subscribe({
      next: result => {
        this.blog.update(blog => blog
          ? { ...blog, liked_by_me: result.liked, like_count: result.like_count }
          : blog);
        this.isUpdatingLike.set(false);
      },
      error: () => this.isUpdatingLike.set(false),
    });
  }

  updateCommentCount(commentCount: number): void {
    this.blog.update(blog => blog ? { ...blog, comment_count: commentCount } : blog);
  }
}
