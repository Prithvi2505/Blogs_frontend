import { DatePipe } from '@angular/common';
import { Component, EventEmitter, forwardRef, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Auth } from '../../../core/auth/auth';
import { BlogComment } from '../../../Models/comment.model';

@Component({
  selector: 'app-comment-card',
  imports: [DatePipe, FormsModule, MatButtonModule, MatIconModule, forwardRef(() => CommentCard)],
  styleUrl: './comment-card.css',
  templateUrl: './comment-card.html',
})
export class CommentCard {
  @Input({ required: true }) comment!: BlogComment;
  @Input() busy = false;
  @Output() replyComment = new EventEmitter<{ parentCommentId: number; content: string }>();
  @Output() editComment = new EventEmitter<{ commentId: number; content: string }>();
  @Output() deleteComment = new EventEmitter<number>();

  readonly auth = inject(Auth);
  isEditing = false;
  isReplying = false;
  editContent = '';
  replyContent = '';

  startEdit(): void {
    this.editContent = this.comment.content;
    this.isEditing = true;
  }

  saveEdit(): void {
    const content = this.editContent.trim();
    if (content) {
      this.editComment.emit({ commentId: this.comment.id, content });
      this.isEditing = false;
    }
  }

  sendReply(): void {
    const content = this.replyContent.trim();
    if (content) {
      this.replyComment.emit({ parentCommentId: this.comment.id, content });
      this.replyContent = '';
      this.isReplying = false;
    }
  }
}