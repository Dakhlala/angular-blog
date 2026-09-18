import { Component, signal } from '@angular/core';
import { BLOG_DATA } from '../data';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  protected featuredArticles = signal(BLOG_DATA.posts.filter(p => p.featured))
}
