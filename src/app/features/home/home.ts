import { Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { BlogCard } from '../../shared/components/blog-card/blog-card';
import { Blog } from '../../Models/blog.model';
import { BlogService } from '../blogs/services/blog';
import { Auth } from '../../core/auth/auth';

@Component({
  imports: [BlogCard, MatButtonModule, RouterLink],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  private readonly blogService = inject(BlogService);
  readonly auth = inject(Auth);
  sampleBlogs = signal<Blog[]>([]);

  constructor() {
    this.blogService.getAll().subscribe({
      next: blogs => this.sampleBlogs.set(blogs.slice(0, 3)),
    });
  }
}
