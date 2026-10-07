import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { BlogService } from '../../services/blog';

@Component({
  imports: [ReactiveFormsModule, MatButtonModule, MatFormFieldModule, MatInputModule, RouterLink],
  selector: 'app-create-blog',
  styleUrl: './create-blog.css',
  templateUrl: './create-blog.html',
})
export class CreateBlog {
  private readonly formBuilder = inject(FormBuilder);
  private readonly blogService = inject(BlogService);
  private readonly router = inject(Router);

  readonly form = this.formBuilder.nonNullable.group({
    title: ['', [Validators.required, Validators.maxLength(120)]],
    description: ['', [Validators.required, Validators.minLength(20)]],
    tags: [''],
  });
  errorMessage = '';
  isSubmitting = false;

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    this.errorMessage = '';
    const tags = [...new Set(
      this.form.controls.tags.value
        .split(',')
        .map(tag => tag.trim().toLowerCase())
        .filter(Boolean),
    )];
    this.blogService.create(
      this.form.controls.title.value,
      this.form.controls.description.value,
      tags,
    ).subscribe({
      next: () => void this.router.navigate(['/blogs']),
      error: error => {
        this.errorMessage = error.error?.detail ?? 'Unable to create the blog. Please try again.';
        this.isSubmitting = false;
      },
    });
  }
}
