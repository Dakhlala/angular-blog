import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BLOG_DATA } from '../data';

@Component({
  selector: 'app-article',
  imports: [RouterLink],
  templateUrl: './article.html',
})
export class Article {
  // We use the 1st post (index 0) as our static design template 
  // since it matches the "Golden Hour" screenshots you provided.
  post = BLOG_DATA.posts[0]; 
}
