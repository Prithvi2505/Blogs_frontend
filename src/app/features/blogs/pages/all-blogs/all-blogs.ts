import { Component, inject, signal } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Observable, of } from 'rxjs';
import { catchError, shareReplay, tap } from 'rxjs/operators';
import { Blog } from '../../../../Models/blog.model';
import { BlogCard } from '../../../../shared/components/blog-card/blog-card';
import { BlogService } from '../../services/blog';
import { BlogSearch } from '../../../../shared/components/blog-search/blog-search';
import { BlogSort, BlogSortOption } from '../../../../shared/components/blog-sort/blog-sort';
import { sortBlogs } from '../../../../shared/utils/blog-sort';
import { Auth } from '../../../../core/auth/auth';

@Component({
  imports: [BlogCard, BlogSearch, BlogSort, AsyncPipe],
  selector: 'app-all-blogs',
  styleUrl: './all-blogs.css',
  templateUrl: './all-blogs.html',
})
export class AllBlogs {
  private readonly blogService = inject(BlogService);
  readonly auth = inject(Auth);
  readonly removedBlogIds = signal<Set<number>>(new Set());
  readonly blogs$: Observable<Blog[]> = this.blogService.getAll().pipe(
    tap(blogs => console.log('[AllBlogs] blogs received:', blogs.length, blogs)),
    catchError(() => {
      console.error('[AllBlogs] failed to load blogs');
      this.errorMessage = 'Unable to load blogs right now.';
      return of([]);
    }),
    shareReplay(1),
  );
  errorMessage = '';
  readonly searchQuery = signal('');
  readonly sortBy = signal<BlogSortOption>('updated');

  onSearch(query: string): void {
    this.searchQuery.set(query);
  }

  onSortChange(sortBy: BlogSortOption): void {
    this.sortBy.set(sortBy);
  }

  filterBlogs(blogs: Blog[]): Blog[] {
    const query = this.searchQuery().trim().toLocaleLowerCase();
    const visibleBlogs = blogs.filter(blog => !this.removedBlogIds().has(blog.id));
    const filtered = query ? visibleBlogs.filter(blog =>
        blog.title.toLocaleLowerCase().includes(query)
        || blog.author_name.toLocaleLowerCase().includes(query)
        || blog.tags.some(tag => tag.toLocaleLowerCase().includes(query)),
    ) : visibleBlogs;
    return sortBlogs(filtered, this.sortBy());
  }

  removeBlog(blogId: number): void {
    this.removedBlogIds.update(ids => new Set(ids).add(blogId));
  }
}
