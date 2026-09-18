# 📚 Pixel-Perfect Design System & Architecture Guide

This document contains everything you need to build the "عدسة" blog exactly as it appears in the screenshots. We've broken down the global styles, typography, reusable components, and page-by-page blueprints.

---

## 📅 Your Daily Schedule (Goal: Finish by Thursday!)

To hit your Friday 10 PM deadline comfortably, we will divide this project into small, manageable chunks aiming to finish by **Thursday evening**. That gives you Friday as a buffer day just in case!

*   **Day 1 (Today, Monday): Foundation & Hero**
    *   [ ] Complete **Step 1 & 2** below (Fonts and Global CSS).
    *   [ ] Refactor the Navbar to use the new `.btn-primary` class.
    *   [ ] Setup Angular Routing (`<router-outlet>`).
    *   [ ] Build the Home Page Hero Section (Grid background, text, buttons).
*   **Day 2 (Tuesday): Home Page & Footer**
    *   [ ] Build the Home Page Stats Grid (4 columns).
    *   [ ] Build the Home Page "Featured Articles" section.
    *   [ ] Build the Global 4-column Footer component.
*   **Day 3 (Wednesday): Blog Page**
    *   [ ] Setup the Blog Page route.
    *   [ ] Build the Filter & Search Bar.
    *   [ ] Build the 3-column Article Cards Grid.
    *   [ ] Build the Pagination buttons.
*   **Day 4 (Thursday): About Page & Final Polish**
    *   [ ] Setup the About Us Page route.
    *   [ ] Build the Core Values grid.
    *   [ ] Build the Authors Team Grid (with the circular avatars).
    *   [ ] Final review: Test everything on Mobile, Tablet, and Desktop!

---

## 🎨 1. Global Styles & Typography (The "Vibe")

To get the exact look from the pictures, we need the right background color, text colors, and most importantly, an **Arabic Font**.

### Step 1: Add Google Fonts
In your [src/index.html](file:///c:/angular-exercises/blog/src/index.html), add the 'Cairo' or 'Tajawal' font inside the `<head>`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800&display=swap" rel="stylesheet">
```

### Step 2: Global CSS (styles.css)
In [src/styles.css](file:///c:/angular-exercises/blog/src/styles.css), define the global background, text color, and font family:
```css
@import 'tailwindcss';

@theme {
  /* This tells Tailwind to use Cairo as the default sans-serif font */
  --font-sans: 'Cairo', sans-serif;
}

body {
  background-color: #0a0a0a; /* The deep dark background */
  color: #f5f5f5;
  font-family: 'Cairo', sans-serif;
}

/* Reusable Primary Button (Orange Gradient) */
.btn-primary {
  @apply inline-flex items-center justify-center gap-2 font-semibold text-white px-6 py-2.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 transition-all duration-300 shadow-md shadow-orange-500/20 cursor-pointer text-sm;
}

/* Reusable Secondary Button (Dark Glass Outline) */
.btn-secondary {
  @apply inline-flex items-center justify-center gap-2 font-medium text-neutral-300 hover:text-white px-6 py-2.5 rounded-full bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 transition-all duration-300 cursor-pointer text-sm backdrop-blur-sm;
}

/* Reusable Glass Card Style */
.glass-card {
  @apply bg-neutral-900/60 backdrop-blur-md border border-neutral-800/80 rounded-2xl hover:border-neutral-700 transition-all;
}
```

---

## 🧭 2. Navbar Details (Pixel-Perfect)

*   **Container**: `sticky top-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-md border-b border-neutral-800/50`.
*   **Active Link Pill**: The active link uses an orange gradient: `bg-gradient-to-r from-orange-500 to-amber-600 text-white px-4 py-1.5 rounded-full shadow-sm`.
*   **Inactive Links**: `text-neutral-400 hover:text-white px-3 py-1.5`.
*   **Search Icon**: Needs a subtle hover box: `text-neutral-400 hover:text-orange-500 hover:bg-neutral-900 p-2.5 rounded-xl transition-all`.

---

## 🏠 3. Home Page (`/`)

### Hero Background Grid
To get that subtle grid background, use this on the Hero section container:
```html
<div class="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f15_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
```

### Typography Details
*   **Pill Badge**: `bg-orange-500/10 border-orange-500/20 text-orange-400 text-sm px-4 py-1.5 rounded-full`. Add two `<span class="w-1.5 h-1.5 rounded-full bg-orange-500"></span>` dots inside.
*   **Gradient Text ("فن")**: `<span class="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">فن</span>`

### Stats Cards (Grid)
*   **Layout**: `grid grid-cols-2 md:grid-cols-4 gap-4`.
*   **Card Styling**: Apply the `.glass-card` class (defined above). Add `p-6 flex flex-col items-center text-center`.
*   **Number**: `text-3xl font-bold text-white` (Except "+10 ألف" which is `text-orange-400`).

### Featured Articles ("مقالات مختارة")
*   **Layout**: These cards are horizontal. `flex flex-col md:flex-row`.
*   **Image side**: `w-full md:w-1/2 aspect-video object-cover`.
*   **Text side**: `w-full md:w-1/2 p-8 flex flex-col justify-center`.

---

## 📰 4. Blog Page (`/blog`)

### Filter & Search Bar
*   **Layout**: `flex flex-col-reverse md:flex-row justify-between items-center gap-4`.
*   **Search Input**: `<div class="relative"><i class="fa-solid fa-magnifying-glass absolute right-4 top-3 text-neutral-500"></i><input type="text" placeholder="ابحث في المقالات..." class="bg-neutral-900 border border-neutral-800 rounded-full pl-4 pr-10 py-2 text-white focus:border-orange-500 outline-none w-full md:w-64" /></div>`
*   **Category Pills**: `bg-neutral-900 border border-neutral-800 text-neutral-400 px-4 py-2 rounded-full hover:bg-neutral-800`.
*   **Active Category**: `bg-gradient-to-r from-orange-500 to-amber-600 text-white border-transparent`.

### Article Cards Grid (3 Columns)
*   **Layout**: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`.
*   **Card Layout**: `.glass-card overflow-hidden flex flex-col`.
*   **Image Wrapper**: `relative w-full aspect-[4/3]`.
*   **Category Overlay**: `absolute top-3 right-3 bg-neutral-900/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium`.
*   **Content Padding**: `p-5`.
*   **Title**: `text-xl font-bold text-white mb-2 line-clamp-2`.
*   **Excerpt**: `text-neutral-400 text-sm mb-4 line-clamp-2`.
*   **Author Row**: `flex items-center justify-between border-t border-neutral-800/50 pt-4 mt-auto`.
*   **Arrow Button**: `w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-orange-500`.

### Pagination
*   **Wrapper**: `flex justify-center items-center gap-2 mt-12`.
*   **Page Button**: `w-10 h-10 flex items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900/50 text-neutral-400 hover:bg-neutral-800`.
*   **Active Page**: `bg-orange-500 text-white border-orange-500`.

---

## 👥 5. About Us Page (`/about`)

### Core Values Section (`| قيمنا |`)
*   **Layout**: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6`.
*   **Cards**: `.glass-card p-8 flex flex-col items-center text-center`.
*   **Icon**: `text-3xl text-orange-500 mb-4`.
*   **Title**: `text-lg font-bold text-white mb-2`.
*   **Subtitle**: `text-sm text-neutral-400`.

### Authors Team Grid
*   **Layout**: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6`.
*   **Card**: `.glass-card p-8 flex flex-col items-center text-center`.
*   **Avatar Wrapper**:
    ```html
    <div class="relative mb-4">
        <img src="..." class="w-20 h-20 rounded-full object-cover border-2 border-neutral-800">
        <!-- Verified Badge -->
        <span class="absolute bottom-0 right-0 bg-orange-500 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full border-2 border-[#0a0a0a]">
            <i class="fa-solid fa-check"></i>
        </span>
    </div>
    ```
*   **Name**: `text-xl font-bold text-white`.
*   **Role**: `text-sm text-orange-500 mt-1 mb-4`.
*   **Social Links Container**: `flex items-center justify-center gap-3`.
*   **Social Button**: `w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-700 transition-all`.

---

## 👣 6. Global Footer

*   **Layout**: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12 border-t border-neutral-800/50 mt-20`.
*   **Column Headings**: `text-lg font-bold text-white mb-4 flex items-center gap-2`.
*   **Accent line**: Use a small orange line next to the headings `<span class="w-6 h-0.5 bg-orange-500"></span>`.
*   **Links list**: `flex flex-col gap-3 text-neutral-400`. Links should have `hover:text-orange-500 transition-colors`.
*   **Newsletter Input**: `w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-2.5 text-white outline-none focus:border-orange-500 mb-3`.
*   **Newsletter Button**: `w-full btn-primary py-2.5 rounded-lg`.

---

## 🚀 The Execution Plan
1. **Set up Global Styles**: Add the font to `index.html` and global rules to `styles.css`.
2. **Setup Routing**: Generate the components (`ng g c home`, `ng g c blog`, `ng g c about`, `ng g c footer`) and link them in `app.routes.ts`.
3. **Build section by section**: Start with Home Hero, then Stats, then Featured. Then move to the next page!
