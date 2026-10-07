import { Component, EventEmitter, inject, Input, Output, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { Router, RouterLink } from '@angular/router';
import { Auth } from '../../../core/auth/auth';
import { Blog } from '../../../Models/blog.model';
import { BlogService } from '../../../features/blogs/services/blog';

@Component({
  imports: [MatCardModule, MatButtonModule, MatIconModule, MatMenuModule, RouterLink],
  selector: 'app-blog-card',
  styleUrl: './blog-card.css',
  templateUrl: './blog-card.html',
})
export class BlogCard {
  readonly auth = inject(Auth);
  private readonly blogService = inject(BlogService);
  private readonly router = inject(Router);
  private blogValue!: Blog;
  readonly isLiked = signal(false);
  readonly likeCount = signal(0);
  likeErrorMessage = '';

  @Input({ required: true })
  set blog(value: Blog) {
    this.blogValue = value;
    this.isLiked.set(value.liked_by_me);
    this.likeCount.set(value.like_count);
  }

  get blog(): Blog {
    return this.blogValue;
  }
  @Input() showVisibilityToggle = false;
  @Output() deleted = new EventEmitter<number>();
  @Output() visibilityChanged = new EventEmitter<Blog>();
  isDeleting = false;
  isUpdatingVisibility = false;
  isUpdatingLike = false;

  stopCardNavigation(event: Event): void {
    event.stopPropagation();
  }

  deleteBlog(event: Event): void {
    event.stopPropagation();
    if (!this.auth.canDeleteBlog(this.blog.created_by) || !window.confirm('Delete this blog?')) return;

    this.isDeleting = true;
    this.blogService.delete(this.blog.id).subscribe({
      next: () => this.deleted.emit(this.blog.id),
      error: () => { this.isDeleting = false; },
    });
  }

  toggleVisibility(event: Event): void {
    event.stopPropagation();
    if (!this.showVisibilityToggle || !this.auth.canManageVisibility(this.blog.created_by) || this.isUpdatingVisibility) return;

    this.isUpdatingVisibility = true;
    this.blogService.updateVisibility(this.blog.id, !this.blog.is_public).subscribe({
      next: updatedBlog => {
        this.blog = updatedBlog;
        this.visibilityChanged.emit(updatedBlog);
        this.isUpdatingVisibility = false;
      },
      error: () => { this.isUpdatingVisibility = false; },
    });
  }

  toggleLike(event: Event): void {
    event.stopPropagation();
    if (this.isUpdatingLike) return;
    if (!this.auth.isLoggedIn()) {
      void this.router.navigate(['/login'], { queryParams: { returnUrl: `/blogs/${this.blog.id}` } });
      return;
    }

    this.isUpdatingLike = true;
    this.likeErrorMessage = '';
    const request = this.blog.liked_by_me
      ? this.blogService.unlike(this.blog.id)
      : this.blogService.like(this.blog.id);
    request.subscribe({
      next: result => {
        this.blog = { ...this.blog, liked_by_me: result.liked, like_count: result.like_count };
        this.isUpdatingLike = false;
      },
      error: error => {
        this.likeErrorMessage = error.error?.detail ?? 'Unable to update like. Please try again.';
        this.isUpdatingLike = false;
      },
    });
  }
}
