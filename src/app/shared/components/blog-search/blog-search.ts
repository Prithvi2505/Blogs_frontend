import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-blog-search',
  templateUrl: './blog-search.html',
  styleUrl: './blog-search.css',
})
export class BlogSearch {
  @Input() placeholder = 'Search by title, tag, or author';
  @Output() queryChange = new EventEmitter<string>();

  onInput(event: Event): void {
    this.queryChange.emit((event.target as HTMLInputElement).value);
  }
}