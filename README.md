# Modern Blog with Dynamic Table of Contents

A modern blog implementation built with Astro, featuring a dynamic table of contents, responsive design, and smooth animations.

## 🚀 Features

### Table of Contents

- Desktop: Sticky sidebar navigation
- Mobile: Floating action button with slide-out panel
- Auto-generated from markdown headings
- Smooth scroll to sections
- Active section highlighting
- Responsive design with mobile-first approach

### Blog Features

- Modern card-based homepage layout
- Featured post highlighting
- Category organization
- Responsive images with lazy loading
- Rich typography with Tailwind Typography
- Smooth animations and transitions

## 🏗️ Project Structure

```
src/
├── components/
│   └── blog/
│       ├── ArticleTOC.astro    # Desktop table of contents
│       ├── FeaturedPost.astro  # Blog post card component
│       ├── HeadingLink.astro   # TOC link component
│       ├── MobileTOC.astro     # Mobile TOC wrapper
│       ├── PostGrid.astro      # Homepage post grid
│       ├── TOCButton.astro     # Mobile TOC trigger button
│       └── TOCPanel.astro      # Mobile TOC slide-out panel
├── content/
│   └── blog/                   # Markdown blog posts
├── layouts/
│   └── Layout.astro           # Base layout component
├── pages/
│   ├── blog/
│   │   └── [...slug].astro    # Dynamic blog post routes
│   └── index.astro            # Homepage
├── types/
│   └── blog.ts                # TypeScript interfaces
└── utils/
    ├── markdown.ts            # Markdown parsing utilities
    └── toc.ts                # TOC interaction management
```

## 🛠️ Technical Implementation

### Table of Contents Generation

- Extracts headings from markdown content
- Generates unique IDs for scroll targeting
- Maintains heading hierarchy in navigation

### Mobile TOC Features

- Touch-friendly slide-out panel
- Gesture support for panel interaction
- Auto-close on selection
- Keyboard accessibility (Escape to close)
- Click outside to dismiss

### Performance Optimizations

- Lazy loaded images
- Efficient DOM updates
- Smooth animations with CSS transforms
- Debounced scroll handling

## 🎨 Styling

The project uses Tailwind CSS with custom configurations:

- Custom color schemes
- Responsive breakpoints
- Typography plugin for markdown content
- Custom animations and transitions

## 📱 Responsive Design

- Mobile-first approach
- Breakpoint-specific layouts
- Adaptive TOC behavior
- Optimized touch interactions

## 🚀 Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start development server:

   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## 💻 Development

### Adding New Posts

1. Create a new markdown file in `src/content/blog/`
2. Include required frontmatter:
   ```yaml
   ---
   title: "Post Title"
   description: "Post description"
   pubDate: 2024-03-20
   image: "image-url"
   author: "Author Name"
   category: "Category"
   ---
   ```

### Customizing TOC

- Modify heading extraction in `utils/markdown.ts`
- Adjust styling in component files
- Configure animation timing in `utils/toc.ts`

## 🔧 Configuration

Key configuration files:

- `astro.config.mjs`: Astro configuration
- `tailwind.config.mjs`: Tailwind CSS settings
- `tsconfig.json`: TypeScript configuration
