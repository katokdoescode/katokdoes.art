# katokdoes.art

This project is also has an Eleventy version - [see 11ty version](https://github.com/katokdoescode/katokdoes.art/tree/eleventy)

If you wanna try this repo in work, follow these steps:

Bun:

```bash
bun i && bun dev
```

npm:

```bash
npm i && npm run dev
```

## 🚀 Project Structure

```text
/
├── dist
├── public
│   └── styles
│       ├── themes
│       │   ├── dark.css
│       │   └── light.css
│       ├── default-layout.css
│       ├── fonts.css
│       ├── global.css
│       ├── index.css
│       └── switcher.css
├── src
│   ├── components
│   │   ├── ExperienceCard.astro
│   │   └── ThemeSwitcher.astro
│   ├── data
│   │   ├── en
│   │   │   └── experience.json
│   │   └── ru
│   │       └── experience.json
│   ├── layouts
│   │   └── Layout.astro
│   ├── pages
│   │   ├── experience
│   │   │   ├── ru
│   │   │   │   └── index.mdx
│   │   │   └── index.mdx
│   │   ├── ru
│   │   │   └── index.mdx
│   │   └── index.mdx
│   ├── scripts
│   │   └── index.js
│   └── env.d.ts
├── CNAME
├── README.md
├── astro.config.mjs
├── bun.lockb
├── package-lock.json
├── package.json
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command               | Action                                           |
| :-------------------- | :----------------------------------------------- |
| `bun i`               | Installs dependencies                            |
| `bun dev`             | Starts local dev server at `localhost:4321`      |
| `bun run build`       | Build your production site to `./dist/`          |
| `bun preview`         | Preview your build locally, before deploying     |
| `bun astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `bun astro -- --help` | Get help using the Astro CLI                     |
