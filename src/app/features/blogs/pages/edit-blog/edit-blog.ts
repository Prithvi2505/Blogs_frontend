import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Auth } from '../../../../core/auth/auth';
import { Blog } from '../../../../Models/blog.model';
import { BlogService } from '../../services/blog';

@Component({
  imports: [ReactiveFormsModule, MatButtonModule, MatFormFieldModule, MatInputModule, RouterLink],
  selector: 'app-edit-blog',
  styleUrl: './edit-blog.css',
  templateUrl: './edit-blog.html',
})
export class EditBlog {
  private readonly route = inject(ActivatedRoute);
  private readonly formBuilder = inject(FormBuilder);
  private readonly blogService = inject(BlogService);
  private readonly router = inject(Router);
  readonly auth = inject(Auth);

  blog = signal<Blog | undefined>(undefined);
  readonly form = this.formBuilder.nonNullable.group({
    title: ['', [Validators.required, Validators.maxLength(120)]],
    description: ['', [Validators.required, Validators.minLength(20)]],
    tags: [''],
  });
  isLoading = signal(true);
  errorMessage = signal('');
  isSubmitting = false;

  constructor() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.blogService.getById(id).subscribe({
      next: blog => {
        this.blog.set(blog);
        this.form.patchValue({
          title: blog.title,
          description: blog.description,
          tags: blog.tags?.join(', ') ?? '',
        });
        this.isLoading.set(false);
      },
      error: () => {
        this.errorMessage.set('Unable to load this blog.');
        this.isLoading.set(false);
      },
    });
  }

  submit(): void {
    const blog = this.blog();
    if (this.form.invalid || !blog || !this.auth.canEdit(blog.created_by)) {
      this.form.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    this.errorMessage.set('');
    const tags = [...new Set(
      this.form.controls.tags.value
        .split(',')
        .map(tag => tag.trim().toLowerCase())
        .filter(Boolean),
    )];
    this.blogService.update(
      blog.id,
      this.form.controls.title.value,
      this.form.controls.description.value,
      tags,
    ).subscribe({
      next: () => void this.router.navigate(['/blogs', blog.id]),
      error: error => {
        this.errorMessage.set(error.error?.detail ?? 'Unable to update the blog. Please try again.');
        this.isSubmitting = false;
      },
    });
  }
}
