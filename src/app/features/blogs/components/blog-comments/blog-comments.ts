import { Component, computed, EventEmitter, inject, Input, OnInit, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Auth } from '../../../../core/auth/auth';
import { BlogComment } from '../../../../Models/comment.model';
import { CommentService } from '../../services/comment';
import { CommentCard } from '../../../../shared/components/comment-card/comment-card';

@Component({
  imports: [CommentCard, FormsModule, RouterLink],
  selector: 'app-blog-comments',
  styleUrl: './blog-comments.css',
  templateUrl: './blog-comments.html',
})
export class BlogComments implements OnInit {
  @Input({ required: true }) blogId!: number;

  private readonly commentService = inject(CommentService);
  private readonly router = inject(Router);
  readonly auth = inject(Auth);
  readonly comments = signal<BlogComment[]>([]);
  readonly totalComments = signal(0);
  readonly commentCount = signal(0);
  readonly isLoading = signal(true);
  readonly isLoadingMore = signal(false);
  readonly isSaving = signal(false);
  readonly errorMessage = signal('');
  readonly nextCommentCount = computed(() => Math.min(5, this.totalComments() - this.comments().length));
  @Output() commentCountChange = new EventEmitter<number>();
  newContent = '';

  ngOnInit(): void {
    this.loadComments();
  }

  loadComments(append = false): void {
    const offset = append ? this.comments().length : 0;
    this.errorMessage.set('');
    if (append) {
      this.isLoadingMore.set(true);
    } else {
      this.isLoading.set(true);
    }
    this.commentService.getForBlog(this.blogId, offset, 5).subscribe({
      next: page => {
        this.comments.update(comments => append ? [...comments, ...page.items] : page.items);
        this.totalComments.set(page.total);
        this.commentCount.set(page.comment_count);
        this.isLoading.set(false);
        this.isLoadingMore.set(false);
      },
      error: () => {
        this.errorMessage.set('Unable to load comments right now.');
        this.isLoading.set(false);
        this.isLoadingMore.set(false);
      },
    });
  }

  loadMore(): void {
    if (this.comments().length < this.totalComments() && !this.isLoadingMore()) {
      this.loadComments(true);
    }
  }

  createComment(): void {
    const content = this.newContent.trim();
    if (!content) return;
    if (!this.auth.isLoggedIn()) {
      this.goToLogin();
      return;
    }

    this.submit(() => this.commentService.create(this.blogId, content), comment => {
      this.newContent = '';
      this.comments.update(comments => [...comments, comment]);
      this.totalComments.update(total => total + 1);
      this.updateCommentCount(1);
    });
  }

  replyTo(event: { parentCommentId: number; content: string }): void {
    if (!this.auth.isLoggedIn()) {
      this.goToLogin();
      return;
    }
    this.submit(
      () => this.commentService.create(this.blogId, event.content, event.parentCommentId),
      reply => {
        this.comments.set(this.updateCommentTree(
          this.comments(),
          event.parentCommentId,
          comment => ({ ...comment, replies: [...comment.replies, reply] }),
        ));
      },
    );
  }

  edit(event: { commentId: number; content: string }): void {
    this.submit(
      () => this.commentService.update(event.commentId, event.content),
      updated => this.comments.set(this.updateCommentTree(
        this.comments(),
        event.commentId,
        comment => ({ ...comment, content: updated.content, updated_at: updated.updated_at }),
      )),
    );
  }

  delete(commentId: number): void {
    if (!window.confirm('Delete this comment and its replies?')) return;
    const isRootComment = this.comments().some(comment => comment.id === commentId);
    this.submit(() => this.commentService.delete(commentId), () => {
      this.comments.update(comments => this.removeCommentTree(comments, commentId));
      if (isRootComment) {
        this.totalComments.update(total => Math.max(0, total - 1));
        this.updateCommentCount(-1);
      }
    });
  }

  goToLogin(): void {
    void this.router.navigate(['/login'], {
      queryParams: { returnUrl: `/blogs/${this.blogId}` },
    });
  }

  private submit<T>(request: () => import('rxjs').Observable<T>, onSuccess: (result: T) => void = () => {}): void {
    this.errorMessage.set('');
    this.isSaving.set(true);
    request().subscribe({
      next: result => {
        onSuccess(result);
        this.isSaving.set(false);
      },
      error: error => {
        this.errorMessage.set(error.error?.detail ?? 'Unable to save your comment.');
        this.isSaving.set(false);
      },
    });
  }

  private updateCommentTree(
    comments: BlogComment[],
    commentId: number,
    update: (comment: BlogComment) => BlogComment,
  ): BlogComment[] {
    return comments.map(comment => comment.id === commentId
      ? update(comment)
      : { ...comment, replies: this.updateCommentTree(comment.replies, commentId, update) });
  }

  private removeCommentTree(comments: BlogComment[], commentId: number): BlogComment[] {
    return comments
      .filter(comment => comment.id !== commentId)
      .map(comment => ({ ...comment, replies: this.removeCommentTree(comment.replies, commentId) }));
  }

  private updateCommentCount(delta: number): void {
    this.commentCount.update(count => Math.max(0, count + delta));
    this.commentCountChange.emit(this.commentCount());
  }
}