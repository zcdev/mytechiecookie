# Techie Cookie 🥠

Crack open a fortune cookie and get daily baked developer wisdom, humor, and inspiring messages for coders.

[![Built with Next.js](https://img.shields.io/badge/Built%20with-Next.js-000000?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Hugging Face](https://img.shields.io/badge/Hugging%20Face-FFAA00?logo=huggingface&logoColor=black)](https://huggingface.co/)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?logo=vercel&logoColor=white)](https://vercel.com/)

![GitHub repo size](https://img.shields.io/github/repo-size/zcdev/mytechiecookie)
![GitHub last commit](https://img.shields.io/github/last-commit/zcdev/mytechiecookie)

## 🚀 Demo
[Live Site](https://mytechiecookie.com)

## ✨ Features
- Fortune cookies with coder-type flavors
- Powered by Hugging Face API (model: [openai/gpt-oss-20b:novita](https://huggingface.co/openai/gpt-oss-20b)) for dynamic responses
- SEO-optimized (meta tags, OG/Twitter cards, sitemap, robots.txt)
- 100/100 Lighthouse scores on desktop
- Custom domain via Vercel deployment
- Mobile-first, dark mode-friendly, and accessible
- CSS3 animations: typewriter, cookie slip corner flipping on hover, and spark effects.

## 🛠️ Tech Stack
- [Next.js 14](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Hugging Face Inference API](https://huggingface.co/inference-api)
- [Vercel](https://vercel.com/)

## 📚 What I Learned
- Reduced API calls by half and improved latency by up to 2 seconds by removing randomized splits between local and remote fetches after evaluating trade-offs.
- Accepted a minor Lighthouse performance trade-off (92%) for larger mobile buttons, prioritizing usability after verifying proportions on real devices.
- Replaced `any` with refined TypeScript types to satisfy the linter and improve type safety.

## ⚡ Getting Started

### 1. Clone the repo
```
git clone https://github.com/zcdev/mytechiecookie.git
cd mytechiecookie
```
📁 Repo created and maintained by Zoe Chang 🥠 Made with love (and lots of cookies). Sister project of [Who Ate the Cookie 🍪](https://whoatethecookie.fun)