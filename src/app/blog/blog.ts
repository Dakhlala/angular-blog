import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BLOG_DATA, Post, Category } from '../data';

@Component({
  selector: 'app-blog',
  imports: [RouterLink],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog {
  categorise: Category[] = BLOG_DATA.categories;
  posts: Post[] = BLOG_DATA.posts;
  activeCategory: string = 'الكل';
  viewMode: 'grid' | 'list' = 'grid';

  currentPage: number = 1;
  itemsPerPage: number = 6;

  get filteredPosts(): Post[] {
    if (this.activeCategory === 'الكل') {
      return this.posts;
    }
    return this.posts.filter(post => post.category === this.activeCategory);
  }

  get totalPages(): number {
    return Math.ceil(this.filteredPosts.length / this.itemsPerPage);
  }

  get paginatedPosts(): Post[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredPosts.slice(startIndex, startIndex + this.itemsPerPage);
  }

  get pagesArray(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  setCategory(categoryName: string): void {
    this.activeCategory = categoryName;
    this.currentPage = 1;
  }

  setPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  setViewMode(mode: 'grid' | 'list'): void {
    this.viewMode = mode;
  }
}
