
---

```markdown
# Jeremy Foxx Portfolio

Welcome to my **Jeremy Foxx Portfolio** project! This repository showcases my journey in creating a unique, fintech-inspired, gamified portfolio website. It combines a 3D starry ticker background, Star Wars-style transitions, an interactive skill investment dashboard, and a Netflix-style project showcase—all wrapped up in a sleek Next.js + Tailwind CSS environment.

---

## Table of Contents
1. [Project Overview](#project-overview)
2. [Key Features](#key-features)
3. [Tech Stack](#tech-stack)
4. [Getting Started](#getting-started)
5. [Project Structure](#project-structure)
6. [How It Works](#how-it-works)
7. [Roadmap](#roadmap)
8. [Contributing](#contributing)
9. [License](#license)
10. [Contact](#contact)

---

## Project Overview

This project began as a creative way to highlight my **Product Management** and **Data Analytics** skills. I wanted a standout online presence that goes beyond a typical resume site. Visitors can explore:

- A **starry sky** of stock tickers (powered by Three.js)  
- A **Star Wars hyperspace** transition when navigating pages  
- A **Robinhood-style** skill investment dashboard to allocate XP across my skillset  
- A **Netflix-style** project scrolling section filtered by user-selected skills  
- Plans for additional features like **Betterment-style portfolio insights** and **technical stock indicators** (RSI, P/E, EPS)

I hope this site entertains and informs visitors, giving them a taste of my creativity, PM skillset, and technical acumen.

---

## Key Features

1. **Three.js Star Field**  
   - Background animated with small spheres representing stock tickers

2. **Hoverable Stock Charts**  
   - (Optional) Tied to an API like Alpha Vantage for real-time data

3. **Hyperspace Jump**  
   - Clicking on my name triggers a **Star Wars**-inspired warp animation

4. **Skill Investment Dashboard**  
   - Allocate XP across multiple skills  
   - Reflects my interest and proficiency in each area

5. **Netflix-Style Project Showcase**  
   - Scrollable tile layout  
   - Filters based on skill allocations

6. **Tailwind CSS & Recharts**  
   - Clean, responsive UI  
   - Interactive charts for skill distribution

7. **Context API**  
   - Shares skill allocations across pages

8. **Deployment Ready**  
   - Built with Next.js for easy hosting on AWS Amplify (or other platforms)

---

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (React-based, SSR + SPA)  
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (utility-first CSS)  
- **3D Animations**: [Three.js](https://threejs.org/)  
- **Charts**: [Recharts](https://recharts.org/)  
- **State Management**: React Context API  
- **API Calls**: Alpha Vantage (or any other stock/fundamental data provider)  
- **Deployment**: [AWS Amplify](https://aws.amazon.com/amplify/) or Vercel / Netlify

---

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v14+ recommended)
- [npm](https://www.npmjs.com/) (v6+) or [yarn](https://yarnpkg.com/)

### Installation
1. **Clone** the repository:
   ```bash
   git clone https://github.com/mobius29er/portfolio.git
   ```
2. **Navigate** into the project folder:
   ```bash
   cd portfolio
   ```
3. **Install** dependencies:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

### Local Development
1. **Run** the development server:
   ```bash
   npm run dev
   ```
2. Open [http://localhost:3000](http://localhost:3000) in your browser to see the site in action.

### Production Build
```bash
npm run build
npm run start
```
This compiles the production-ready build and serves it.

---

## Project Structure

```
portfolio/
├── components/
│   ├── StarryTickers.js       # Three.js star field
│   ├── TickerChart.js         # Recharts stock price chart (optional)
├── context/
│   └── SkillsContext.js       # Shared state for skill allocations
├── pages/
│   ├── _app.js                # Global app wrapper, includes SkillsProvider
│   ├── index.js               # Landing page (Star field, jump animation)
│   ├── about.js               # Robinhood-style skill dashboard
│   ├── projects.js            # Netflix-style project showcase
│   └── api/
│       └── stocks/[symbol].js # Example API route for stock data
├── public/                    # Static files (images, resume, etc.)
├── styles/
│   └── globals.css            # Global Tailwind imports
├── .env.local                 # API keys (not in repo)
├── tailwind.config.js         # Tailwind config
├── package.json
└── README.md                  # This file
```

---

## How It Works

1. **Landing Page**:  
   - Displays a **Three.js** background with animated star tickers.  
   - Clicking my name triggers a “hyperspace jump” by speeding up star movement briefly before navigating to `/about`.

2. **About Page** (Robinhood-Style Investment Dashboard):  
   - Uses **React Context** to store skill allocations (XP).  
   - Sliders let you allocate up to 100 XP across different skills.  
   - Optionally visualized in a **pie chart** (Recharts).

3. **Projects Page** (Netflix-Style Scrolling):  
   - Reads skill allocations from the Context.  
   - Filters and displays relevant projects horizontally in a “Netflix row” layout.

4. **Optional Stock Chart**:  
   - If integrated with an API like Alpha Vantage, hovering over a ticker can display a mini price chart.

5. **Deployment**:  
   - Deploy to AWS Amplify, Vercel, or any hosting of your choice.

---

## Roadmap

1. **Betterment-Style Portfolio Insights**  
   - Summaries of your skill distribution, recommended “growth” areas, etc.
2. **Additional Animations**  
   - Subtle parallax effects, transitions between sections.
3. **Fundamental Data** (RSI, P/E, EPS, etc.)  
   - Tied to a separate API endpoint to display more robust stock metrics.
4. **Contact Form & Resume Download**  
   - Secure contact form (honeypot or captcha)  
   - Direct resume PDF link or an S3-based download
5. **Blog Integration**  
   - Markdown or Headless CMS for easy updates
6. **Cloudflare Integration**  
   - DDoS protection, caching, and DNS management

---

## Contributing

Feel free to open **issues** or submit **pull requests** if you have ideas to improve the UX, performance, or general code quality. This project is my personal sandbox for creative experiments, but I welcome constructive feedback and collaboration!

---

## License

This project is licensed under the [MIT License](LICENSE). You’re free to use, modify, and distribute the code as you see fit, provided you include the original license file.

---

## Contact

**Jeremy Foxx**  
- [LinkedIn](https://www.linkedin.com/in/jeremyfoxx/)  
- [Portfolio Site](https://www.jeremyfoxx.com/) (in development)

If you have any questions or just want to say hello, feel free to reach out. Thanks for stopping by and checking out my fintech-inspired, interactive portfolio project!

---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.
Below is a **professional, in-depth README** for your public GitHub repo, written in a friendly-yet-professional tone. Feel free to tweak wording, add personal touches, or adjust details to match your exact preferences.