import { Component, computed, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { BlogCard } from '../../../../shared/components/blog-card/blog-card';
import { Blog } from '../../../../Models/blog.model';
import { BlogService } from '../../services/blog';
import { BlogSearch } from '../../../../shared/components/blog-search/blog-search';
import { BlogSort, BlogSortOption } from '../../../../shared/components/blog-sort/blog-sort';
import { sortBlogs } from '../../../../shared/utils/blog-sort';

@Component({
  imports: [BlogCard, BlogSearch, BlogSort, MatButtonModule, RouterLink],
  selector: 'app-my-blogs',
  styleUrl: './my-blogs.css',
  templateUrl: './my-blogs.html',
})
export class MyBlogs {
  private readonly blogService = inject(BlogService);
  blogs = signal<Blog[]>([]);
  isLoading = signal(true);
  errorMessage = signal('');
  readonly searchQuery = signal('');
  readonly sortBy = signal<BlogSortOption>('updated');
  readonly filteredBlogs = computed(() => {
    const query = this.searchQuery().trim().toLocaleLowerCase();
    const blogs = this.blogs();

    const filtered = query ? blogs.filter(blog =>
      blog.title.toLocaleLowerCase().includes(query)
      || blog.author_name.toLocaleLowerCase().includes(query)
      || blog.tags.some(tag => tag.toLocaleLowerCase().includes(query)),
    ) : blogs;
    return sortBlogs(filtered, this.sortBy());
  });

  constructor() {
    this.blogService.getMine().subscribe({
      next: blogs => { this.blogs.set(blogs); this.isLoading.set(false); },
      error: () => { this.errorMessage.set('Unable to load your blogs right now.'); this.isLoading.set(false); },
    });
  }

  removeBlog(blogId: number): void {
    this.blogs.update(blogs => blogs.filter(blog => blog.id !== blogId));
  }

  updateBlog(updatedBlog: Blog): void {
    this.blogs.update(blogs => blogs.map(blog => blog.id === updatedBlog.id ? updatedBlog : blog));
  }

  onSearch(query: string): void {
    this.searchQuery.set(query);
  }

  onSortChange(sortBy: BlogSortOption): void {
    this.sortBy.set(sortBy);
  }
}
