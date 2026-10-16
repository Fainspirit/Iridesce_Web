# Iridesce Website 🌈

Your personal website built with Astro!

## Quick Start

**Option 1: Use the batch file (Recommended)**
```batch
start-server.bat
```

**Option 2: Command line**
```bash
npm run dev
```

Visit `http://localhost:4321` to see your site live!

---

## Project Structure

```
Iridesce_Web/
├── src/
│   ├── components/       # Reusable UI pieces (Header, Hero, etc.)
│   │   ├── Header.astro
│   │   ├── FeaturedGames.astro
│   │   └── Gallery.astro
│   ├── pages/           # Page content (index, blog, games)
│   │   ├── index.astro
│   │   ├── blog.astro
│   │   └── blog/post.astro
│   └── styles/          # CSS files
│       └── main.css

├── package.json         # Project configuration
├── astro.config.mjs    # Astro settings
└── start-server.bat    # Quick-start launcher
```

## Scripts

| Command | Description                    |
|---------|--------------------------------|
| `npm run dev`  | Start development server        |
| `npm run build` | Build for production           |
| `npm run preview` | Preview production build      |

## Customizing

Edit the `.astro` files in `src/pages/` to change content and `src/components/` to modify UI pieces.
