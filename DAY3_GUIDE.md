# 🚀 Day 3: The Blog Page (Detailed Guide)

Welcome to Day 3! Today we are building the main **Blog Page** (`/blog`). This is where users will search for articles, filter them by category, and browse through the 3-column grid of posts.

We will break this down step-by-step with exact code snippets, logic explanations, and Tailwind classes.

---

## 🎯 Step 1: Setup the Blog Component & Routing

First, we need to create the component and link it up in our Angular routing.

1. **Generate the Component:**
   Open your terminal and run:
   ```bash
   ng generate component blog
   ```

2. **Configure the Route:**
   Open `src/app/app.routes.ts` and add the new route. Your file should look something like this:
   ```typescript
   import { Routes } from '@angular/router';
   import { Home } from './home/home';
   import { Blog } from './blog/blog'; // Import the new component

   export const routes: Routes = [
     { path: '', component: Home },
     { path: 'blog', component: Blog } // Add this route
   ];
   ```

3. **Check the Navbar:**
   Make sure the "المدونة" (Blog) link in your `navbar.html` uses `routerLink="/blog"` instead of `href="#"`.

---

## 🔍 Step 2: The Filter & Search Bar

We want a search bar on the left (or right in RTL) and category pills on the other side.

**In `blog.ts`:**
You need to import your data so you can loop through the categories.
```typescript
import { Component, signal } from '@angular/core';
import { BLOG_DATA } from '../data';

@Component({
  selector: 'app-blog',
  standalone: true,
  templateUrl: './blog.html',
})
export class Blog {
  // Load the categories from our data file
  categories = signal(BLOG_DATA.categories);
  
  // Track the currently selected category (default to 'الكل' meaning 'All')
  activeCategory = signal('الكل');
  
  // Function to change the active category when a pill is clicked
  setCategory(categoryName: string) {
    this.activeCategory.set(categoryName);
  }
}
```

**In `blog.html`:**
Add the search bar and category pills. Notice how we use `@for` to loop through the categories and `[class]` binding to highlight the active one!

```html
<main class="grow pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <!-- Page Header -->
    <div class="text-center mb-16">
        <h1 class="text-5xl font-bold text-white mb-6">المدونة</h1>
        <p class="text-xl text-neutral-400">اكتشف أحدث المقالات والنصائح في عالم التصوير</p>
    </div>

    <!-- Filter & Search Bar Section -->
    <div class="flex flex-col-reverse md:flex-row justify-between items-center gap-6 mb-12">
        
        <!-- Category Pills -->
        <div class="flex flex-wrap items-center gap-3">
            <!-- 'All' Button -->
            <button 
                (click)="setCategory('الكل')"
                [class]="activeCategory() === 'الكل' ? 'bg-gradient-to-r from-orange-500 to-amber-600 text-white border-transparent' : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:bg-neutral-800'"
                class="border px-5 py-2 rounded-full font-medium transition-all duration-300 cursor-pointer">
                الكل
            </button>

            <!-- Loop through the rest of the categories -->
            @for (cat of categories(); track cat.name) {
                <button 
                    (click)="setCategory(cat.name)"
                    [class]="activeCategory() === cat.name ? 'bg-gradient-to-r from-orange-500 to-amber-600 text-white border-transparent' : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:bg-neutral-800'"
                    class="border px-5 py-2 rounded-full font-medium transition-all duration-300 cursor-pointer flex items-center gap-2">
                    {{ cat.name }}
                    <span class="text-xs bg-black/20 px-2 py-0.5 rounded-full">{{ cat.count }}</span>
                </button>
            }
        </div>

        <!-- Search Bar -->
        <div class="relative w-full md:w-72 group">
            <i class="fa-solid fa-magnifying-glass absolute right-4 top-3.5 text-neutral-500 group-focus-within:text-orange-500 transition-colors"></i>
            <input 
                type="text" 
                placeholder="ابحث في المقالات..." 
                class="w-full bg-neutral-900 border border-neutral-800 rounded-full pr-12 pl-4 py-3 text-white focus:border-orange-500 outline-none transition-all shadow-sm focus:shadow-orange-500/10">
        </div>
    </div>
```

---

## 📸 Step 3: Article Cards Grid (3 Columns)

Now we build the grid of cards. This will be very similar to the "Featured Articles" you built on Day 2, but in a 3-column layout!

**In `blog.ts`:**
Add the posts data.
```typescript
  // Load all posts
  posts = signal(BLOG_DATA.posts);
```

**In `blog.html` (Add this right below the Filter section):**
```html
    <!-- 3-Column Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        @for (post of posts(); track post.id) {
            <!-- Article Card -->
            <article class="bg-neutral-900/60 backdrop-blur-md border border-neutral-800/80 rounded-2xl hover:border-neutral-700 transition-all overflow-hidden flex flex-col group cursor-pointer">
                
                <!-- Image Wrapper -->
                <div class="relative w-full aspect-[4/3] overflow-hidden">
                    <img [src]="post.image" alt="Post cover" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
                    
                    <!-- Floating Category Badge -->
                    <div class="absolute top-4 right-4 bg-neutral-900/80 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-medium border border-white/10 shadow-lg">
                        {{ post.category }}
                    </div>
                </div>

                <!-- Card Content -->
                <div class="p-6 flex flex-col grow">
                    <div class="flex items-center gap-2 text-sm text-neutral-400 mb-4">
                        <i class="fa-regular fa-clock text-orange-500"></i>
                        <span>{{ post.readTime }}</span>
                    </div>

                    <h3 class="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-orange-500 transition-colors">
                        {{ post.title }}
                    </h3>
                    
                    <p class="text-neutral-400 text-sm mb-6 line-clamp-2 leading-relaxed">
                        {{ post.excerpt }}
                    </p>

                    <!-- Author & Arrow Row (Pushed to bottom) -->
                    <div class="flex items-center justify-between border-t border-neutral-800/50 pt-5 mt-auto">
                        <div class="flex items-center gap-3">
                            <img [src]="post.author.avatar" alt="Author" class="w-10 h-10 rounded-full border border-neutral-800">
                            <div>
                                <p class="text-white font-bold text-sm">{{ post.author.name }}</p>
                                <p class="text-neutral-500 text-xs">{{ post.date }}</p>
                            </div>
                        </div>

                        <!-- Hover Arrow Button -->
                        <div class="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                            <i class="fa-solid fa-arrow-left transform group-hover:-translate-x-1 transition-transform"></i>
                        </div>
                    </div>
                </div>
            </article>
        }
    </div>
```

---

## 🔢 Step 4: Pagination

Finally, let's add the pagination buttons at the very bottom.

**In `blog.html` (Add this right below the Grid):**
```html
    <!-- Pagination -->
    <div class="flex justify-center items-center gap-2 mt-16">
        <!-- Previous Button -->
        <button class="w-10 h-10 flex items-center justify-center rounded-xl border border-neutral-800 bg-neutral-900/50 text-neutral-500 hover:text-white hover:bg-neutral-800 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed">
            <i class="fa-solid fa-angle-right"></i>
        </button>

        <!-- Page Numbers -->
        <button class="w-10 h-10 flex items-center justify-center rounded-xl border border-orange-500 bg-orange-500 text-white font-bold shadow-md shadow-orange-500/20 cursor-pointer">
            1
        </button>
        <button class="w-10 h-10 flex items-center justify-center rounded-xl border border-neutral-800 bg-neutral-900/50 text-neutral-400 hover:bg-neutral-800 hover:text-white transition-all cursor-pointer">
            2
        </button>
        <button class="w-10 h-10 flex items-center justify-center rounded-xl border border-neutral-800 bg-neutral-900/50 text-neutral-400 hover:bg-neutral-800 hover:text-white transition-all cursor-pointer">
            3
        </button>

        <!-- Next Button -->
        <button class="w-10 h-10 flex items-center justify-center rounded-xl border border-neutral-800 bg-neutral-900/50 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-all cursor-pointer">
            <i class="fa-solid fa-angle-left"></i>
        </button>
    </div>
</main>
```

---

## 🏆 Day 3 Wrap-up!
By following this guide, you will have a fully styled, beautifully animated Blog page layout! Test out the category pill clicking to make sure the "Active" state switches visually.

(We will hook up the actual filtering logic later, for now, just getting the UI looking pixel-perfect is the goal!)
