# Techie Cookie 🥠

[![Built with Next.js](https://img.shields.io/badge/Built%20with-Next.js-000000?logo=next.js)](https://nextjs.org/)
[![React.js](https://img.shields.io/badge/React.js-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Hugging Face](https://img.shields.io/badge/Hugging%20Face-FFAA00?logo=huggingface&logoColor=black)](https://huggingface.co/)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?logo=vercel&logoColor=white)](https://vercel.com/)

## 🌐 Live Demo
Crack open a cookie here: [mytechiecookie.com](https://mytechiecookie.com) — get daily baked wisdom, humor, and inspiration for developers.

## 📖 Overview
**Deliverable:** A motivational app built with Next.js and TypeScript, offering a mix of custom and AI-generated fortune cookie messages that blend humor, insight, and encouragement for developers.

**Purpose:** To bring developers a smile and a dose of motivation while tackling their coding adventures.

## 🛠️ Tech Stack
- **Framework:** Next.js / React.js
- **Language:** JavaScript / TypeScript
- **APIs / Libraries:** Hugging Face API (Model: OpenAI GTP-OSS-20b)
- **Styling:** Tailwind CSS
- **Deployment:** Vercel

## ✨ Features
- Fortune cookies flavored by coder types
- Dynamic responses powered by Hugging Face API ([openai/gpt-oss-20b:novita](https://huggingface.co/openai/gpt-oss-20b))
- SEO-ready with meta tags, OG / Twitter cards, sitemap, and robots.txt
- Lighthouse scores: 100 (desktop) / 92 (mobile, usability-focused trade-off)
- Custom domain via Vercel deployment
- Mobile-first design with dark mode support and accessible controls
- Playful CSS3 animations: typewriter effect, cookie slip corner flip on hover, and spark effects

## 📚 What I Learned
- Reduced API calls by half and improved latency by ~2 seconds by removing randomized splits between local and remote fetches after evaluating trade-offs
- Accepted a minor Lighthouse performance trade-off in favor of larger, more usable mobile buttons after testing proportions on real devices
- Strengthened type safety by replacing `any` with refined TypeScript types to satisfy the linter and improve maintainability

## ⚡ Getting Started
```
git clone https://github.com/zcdev/mytechiecookie.git
cd mytechiecookie
```
## 🙏 Credits
Background shape from [Vecteezy](https://www.vecteezy.com/) (no attribution required).

📁 Repo created and maintained by [Zoe Chang](https://github.com/zcdev).    
🥠 Made with love (and lots of cookies).        
Sister project of [Who Ate the Cookie 🍪](https://whoatethecookie.fun).

![GitHub repo size](https://img.shields.io/github/repo-size/zcdev/mytechiecookie)
![GitHub last commit](https://img.shields.io/github/last-commit/zcdev/mytechiecookie)