import { Component, EventEmitter, Output, signal } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

export type BlogSortOption = 'updated' | 'likes' | 'comments';

@Component({
	imports: [MatFormFieldModule, MatSelectModule],
	selector: 'app-blog-sort',
	templateUrl: './blog-sort.html',
})
export class BlogSort {
	readonly selected = signal<BlogSortOption>('updated');
	@Output() sortChange = new EventEmitter<BlogSortOption>();

	select(value: BlogSortOption): void {
		this.selected.set(value);
		this.sortChange.emit(value);
	}
}