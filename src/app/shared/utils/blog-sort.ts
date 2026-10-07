import { Blog } from '../../Models/blog.model';
import { BlogSortOption } from '../components/blog-sort/blog-sort';

function updatedTime(blog: Blog): number {
	return Date.parse(blog.last_updated_at || blog.created_at) || 0;
}

export function sortBlogs(blogs: Blog[], sortBy: BlogSortOption): Blog[] {
	return [...blogs].sort((left, right) => {
		const recentFirst = updatedTime(right) - updatedTime(left);
		if (sortBy === 'likes') return right.like_count - left.like_count || recentFirst;
		if (sortBy === 'comments') return right.comment_count - left.comment_count || recentFirst;
		return recentFirst;
	});
}