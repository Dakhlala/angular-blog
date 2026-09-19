import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BLOG_DATA } from '../data';

@Component({
  selector: 'app-article',
  imports: [RouterLink],
  templateUrl: './article.html',
})
export class Article {
  post = BLOG_DATA.posts[0];
}
