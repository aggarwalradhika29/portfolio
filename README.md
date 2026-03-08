# radhika aggarwal — portfolio

personal portfolio and writing space built with next.js 14.

**live site →** [radhikaa29.vercel.app](https://radhikaa29.vercel.app)

---

## about

this is my corner of the internet — part portfolio, part blog, part digital home. it shows my work in data engineering and ai, and also the things i think and write about outside of work.

---

## stack

| layer | tech |
|---|---|
| framework | next.js 14 (app router) |
| language | typescript |
| styling | tailwind css + css variables |
| animations | framer motion |
| blog | mdx + next-mdx-remote |
| contact form | resend |
| deployment | vercel |

---

## structure

```
portfolio/
├── app/                        
│   ├── page.tsx                # home page
│   ├── layout.tsx              # root layout
│   ├── projects/page.tsx       # all projects
│   ├── writing/
│   │   ├── page.tsx            # all posts
│   │   └── [slug]/page.tsx     # individual post
│   └── api/contact/route.ts    # contact form api
├── components/
│   ├── layout/                 # nav, footer
│   ├── sections/               # hero, about, experience, projects, writing, contact
│   └── ui/                     # button, tag, chip
├── content/
│   └── posts/                  # mdx blog posts
├── lib/
│   ├── mdx.ts                  # blog helpers
│   ├── fonts.ts                # font config
│   ├── projects.ts             # projects data
│   └── utils.ts                # shared utilities
└── styles/
    └── globals.css             # css tokens, themes, base styles
```

---

## running locally

```bash
git clone https://github.com/aggarwalradhika29/portfolio.git
cd portfolio
npm install
npm run dev
```

open [http://localhost:3000](http://localhost:3000)

---

## writing a new post

create a new `.mdx` file in `content/posts/`:

```mdx
---
title: Your post title
excerpt: A short description shown in previews.
date: 2025-04-01
tag: post-tag
readTime: 5 min read
published: true
---

your content here.
```

set `published: false` to keep it as a draft. push to main and vercel deploys automatically.

---

## environment variables

create a `.env.local` file at the root:

```
RESEND_API_KEY=your_resend_api_key
```

get a free api key at [resend.com](https://resend.com). the contact form won't work without it but everything else will.

---

## theme

two themes — dark (default) and light — toggled via the 🌙 / ☀️ button in the nav. preference is saved to localStorage.

palette is soft pastels: blush, sage, cream with a terracotta accent — warm and editorial in light mode, deep and rich in dark mode.

---

## deploying

the repo is connected to vercel. every push to `main` triggers an automatic redeploy.

to deploy your own fork:
1. fork this repo
2. import into [vercel.com](https://vercel.com)
3. add `RESEND_API_KEY` in vercel environment variables
4. deploy

---

*built and maintained by [radhika aggarwal](https://github.com/aggarwalradhika29)*
