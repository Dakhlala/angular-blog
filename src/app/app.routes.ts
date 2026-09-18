import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Page404 } from './page404/page404';
import { Blog } from './blog/blog';
import { Article } from './article/article';

export const routes: Routes = [
    { path: "", component: Home },
    { path: "blog", component: Blog },
    { path: "blog/:slug", component: Article },
    { path: "home", component: Home },
    { path: "**", component: Page404 }
];
