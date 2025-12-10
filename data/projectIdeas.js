// Comprehensive analysis of project ideas for solo developers using AI coding agents

export const originalIdeas = [
  {
    id: 1,
    name: "Corporate Translator Keyboard",
    category: "GPT Wrapper",
    description: "Text input that converts casual/blunt messages into polite corporate HR-speak using AI",
    marketSize: {
      rating: "Medium",
      tam: "$50-100M",
      description: "Targets corporate professionals, freelancers, and remote workers globally. Estimated 50M+ white-collar workers who communicate via email/Slack daily."
    },
    competition: {
      level: "Low-Medium",
      competitors: ["Grammarly (tone adjustment)", "Wordtune", "Copy.ai"],
      pricing: "$5-15/month SaaS or $0.99-2.99 one-time browser extension",
      differentiation: "Highly specific use case (corporate speak) vs general writing assistants"
    },
    profitMargin: {
      estimate: "75-85%",
      reasoning: "Low infrastructure costs (API calls ~$0.01-0.05 per conversion), minimal hosting. Main costs: OpenAI API + hosting (~$500/mo at 10K users)"
    },
    implementation: {
      difficulty: "Easy",
      rating: 2,
      explanation: "Simple UI (text input + button), single API call to GPT-4, basic authentication. No complex backend logic."
    },
    timeToDeployment: {
      estimate: "1-2 weeks",
      breakdown: {
        planning: "1 day",
        aiScaffolding: "2 days (Bolt/v0 for UI)",
        coding: "3-5 days (API integration, auth, polish)",
        testing: "2 days",
        appStore: "2-3 days (review process)"
      }
    },
    viralPotential: "High - Perfect for LinkedIn/TikTok comedy content",
    monetization: ["Freemium (5 free conversions/day)", "Premium $9.99/mo unlimited", "Browser extension $2.99 one-time"],
    technicalStack: "Next.js, OpenAI API, Vercel, Stripe",
    risks: ["API costs if viral without conversion", "OpenAI rate limits"]
  },
  {
    id: 2,
    name: "Fridge-to-Feast Scanner",
    category: "GPT Wrapper (Vision)",
    description: "Mobile web app that identifies ingredients from fridge photos and generates 3 custom recipes",
    marketSize: {
      rating: "Large",
      tam: "$200-500M",
      description: "Targets home cooks, busy parents, budget-conscious consumers. 100M+ households struggle with meal planning daily."
    },
    competition: {
      level: "Medium-High",
      competitors: ["SuperCook", "Yummly", "Tasty", "BigOven", "Samsung Food"],
      pricing: "$4.99-9.99/month or ad-supported free tier",
      differentiation: "AI vision + instant recipes vs manual ingredient input"
    },
    profitMargin: {
      estimate: "60-70%",
      reasoning: "Higher API costs (GPT-4 Vision ~$0.10-0.30 per image analysis). Revenue from ads or subscriptions offsets costs at scale."
    },
    implementation: {
      difficulty: "Medium",
      rating: 5,
      explanation: "Mobile-first PWA, camera integration, GPT-4 Vision API, recipe formatting, offline caching for recipes"
    },
    timeToDeployment: {
      estimate: "3-4 weeks",
      breakdown: {
        planning: "2 days",
        aiScaffolding: "3 days (mobile UI with camera)",
        coding: "10-12 days (camera integration, Vision API, recipe display, error handling)",
        testing: "3-4 days (cross-device testing)",
        appStore: "3-5 days (iOS/Android review)"
      }
    },
    viralPotential: "High - Visual, shareable content for Instagram/TikTok",
    monetization: ["Freemium (3 scans/day free)", "Premium $7.99/mo unlimited", "Ad-supported free tier", "Affiliate links to grocery delivery"],
    technicalStack: "React Native or PWA, GPT-4 Vision API, Cloudinary, Firebase",
    risks: ["High API costs", "Accuracy issues with ingredient recognition", "User privacy concerns with food photos"]
  },
  {
    id: 3,
    name: "Dream Visualizer Journal",
    category: "GPT Wrapper (Multi-modal)",
    description: "Voice-to-text dream recording with AI interpretation and image generation of dreams",
    marketSize: {
      rating: "Small-Medium",
      tam: "$30-80M",
      description: "Niche market of dream journaling enthusiasts, psychology students, spiritual/wellness community. 5-10M active users globally."
    },
    competition: {
      level: "Low",
      competitors: ["Dreamboard", "Lucidity", "Dream Journal Ultimate", "Awoken"],
      pricing: "$2.99-9.99/month with freemium tier",
      differentiation: "AI interpretation + visual generation vs simple text logging"
    },
    profitMargin: {
      estimate: "50-65%",
      reasoning: "Expensive API usage (Voice-to-Text + GPT-4 + DALL-E/Midjourney = $0.50-1.00 per dream entry). Need strong conversion to premium."
    },
    implementation: {
      difficulty: "Medium-Hard",
      rating: 6,
      explanation: "Multiple AI services integration (Whisper/Speech-to-Text, GPT-4 for interpretation, DALL-E for images), database for journal entries, media storage"
    },
    timeToDeployment: {
      estimate: "4-5 weeks",
      breakdown: {
        planning: "2 days",
        aiScaffolding: "3 days",
        coding: "15-18 days (voice recording, 3 AI integrations, image gallery, journal UI)",
        testing: "3-4 days",
        appStore: "3-5 days"
      }
    },
    viralPotential: "Medium-High - Shareable dream images for social media",
    monetization: ["Freemium (5 dreams/month)", "Premium $9.99/mo unlimited", "Dream image downloads $0.99 each", "Print dream books $29.99"],
    technicalStack: "Next.js/React Native, Whisper API, GPT-4, DALL-E 3, AWS S3, PostgreSQL",
    risks: ["Very high API costs", "Limited market appeal", "Accuracy of dream interpretation"]
  },
  {
    id: 4,
    name: "Screenshot Cleanup & Sort CLI",
    category: "Boring Problem (Utility)",
    description: "Desktop utility that analyzes screenshots, renames them descriptively, and organizes into folders",
    marketSize: {
      rating: "Medium",
      tam: "$40-100M",
      description: "Targets developers, designers, content creators, remote workers. 20M+ knowledge workers with cluttered desktops."
    },
    competition: {
      level: "Low-Medium",
      competitors: ["Hazel (Mac)", "DropIt (Windows)", "File Juggler", "Organize"],
      pricing: "$19.99-49.99 one-time or $4.99/mo subscription",
      differentiation: "AI-powered content analysis vs rule-based file organization"
    },
    profitMargin: {
      estimate: "70-80%",
      reasoning: "Local processing with occasional API calls for OCR/vision. Low ongoing costs after initial sale. One-time purchase model preferred."
    },
    implementation: {
      difficulty: "Medium",
      rating: 5,
      explanation: "Desktop app (Electron or native), OCR/Vision API integration, file system operations, background service, cross-platform compatibility"
    },
    timeToDeployment: {
      estimate: "3-4 weeks",
      breakdown: {
        planning: "2 days",
        aiScaffolding: "2 days",
        coding: "12-15 days (Electron app, file system monitoring, Vision API, rename logic, settings UI)",
        testing: "4-5 days (Mac/Windows/Linux testing)",
        distribution: "2-3 days (packaging, Gumroad/Mac App Store)"
      }
    },
    viralPotential: "Low-Medium - Practical utility, word-of-mouth in dev communities",
    monetization: ["One-time purchase $29.99", "Lifetime deal $49.99", "Annual license $19.99/year"],
    technicalStack: "Electron.js, GPT-4 Vision or Tesseract OCR, Node.js file system APIs",
    risks: ["Cross-platform compatibility issues", "User privacy concerns with screenshot analysis", "File corruption risks"]
  },
  {
    id: 5,
    name: "Voice-to-Invoice for Contractors",
    category: "Boring Problem (Utility)",
    description: "Voice input app that generates professional PDF invoices for blue-collar workers",
    marketSize: {
      rating: "Large",
      tam: "$300-800M",
      description: "Massive market of independent contractors, tradespeople, handymen. 15M+ independent contractors in US alone, 50M+ globally."
    },
    competition: {
      level: "Medium-High",
      competitors: ["QuickBooks", "FreshBooks", "Wave", "Invoice2go", "Zoho Invoice"],
      pricing: "$9.99-29.99/month",
      differentiation: "Voice-first interface for non-desk workers vs traditional form-based invoicing"
    },
    profitMargin: {
      estimate: "65-75%",
      reasoning: "Low API costs (voice-to-text ~$0.02 per invoice), PDF generation cheap. Subscription model provides recurring revenue."
    },
    implementation: {
      difficulty: "Medium",
      rating: 5,
      explanation: "Mobile-first PWA, voice input integration, natural language processing to extract invoice data, PDF generation, optional payment integration"
    },
    timeToDeployment: {
      estimate: "3-4 weeks",
      breakdown: {
        planning: "2 days",
        aiScaffolding: "3 days",
        coding: "12-14 days (voice UI, NLP for data extraction, PDF templates, client database)",
        testing: "3-4 days",
        appStore: "3-5 days"
      }
    },
    viralPotential: "Low-Medium - Spreads through trade communities, contractor networks",
    monetization: ["Freemium (5 invoices/month)", "Pro $14.99/mo unlimited invoices", "Premium $29.99/mo with payment processing", "White-label $199/mo for trade companies"],
    technicalStack: "React Native/PWA, Whisper API, GPT-4 for parsing, PDFKit, Stripe",
    risks: ["Accuracy of voice-to-data conversion", "Complex invoice requirements", "Industry-specific terminology challenges"]
  },
  {
    id: 6,
    name: "Subscription Vampire Hunter",
    category: "Boring Problem (Utility)",
    description: "PDF bank statement parser that identifies recurring subscriptions and calculates annual costs",
    marketSize: {
      rating: "Large",
      tam: "$500M-1B",
      description: "Everyone with subscriptions = nearly all adults in developed countries. 200M+ people in US paying average $273/mo in subscriptions."
    },
    competition: {
      level: "High",
      competitors: ["Truebill (Rocket Money)", "Trim", "Bobby", "Hiatus", "Mint"],
      pricing: "Free with affiliate revenue or $2.99-9.99/month premium",
      differentiation: "Manual PDF upload (no bank login required) vs automatic bank connection"
    },
    profitMargin: {
      estimate: "60-75%",
      reasoning: "PDF parsing is cheap (~$0.05-0.10 per statement). Revenue from affiliate commissions when users cancel/switch services or subscriptions."
    },
    implementation: {
      difficulty: "Medium-Hard",
      rating: 6,
      explanation: "PDF parsing (various bank formats), transaction categorization, recurring pattern detection, subscription database, cancellation workflow"
    },
    timeToDeployment: {
      estimate: "4-6 weeks",
      breakdown: {
        planning: "3 days",
        aiScaffolding: "3 days",
        coding: "18-22 days (PDF parser for multiple banks, ML for subscription detection, cancellation templates, dashboard UI)",
        testing: "5-7 days (test with various bank formats)",
        deployment: "2-3 days"
      }
    },
    viralPotential: "High - Money-saving content performs well on social media",
    monetization: ["Freemium (1 statement/month)", "Premium $7.99/mo unlimited", "Affiliate revenue from alternative services", "Cancellation concierge service $49.99 one-time"],
    technicalStack: "Next.js, PDF.js or Apache PDFBox, GPT-4 for transaction categorization, PostgreSQL",
    risks: ["Privacy concerns with bank statements", "Varying bank PDF formats", "Legal compliance (financial data handling)", "Competition from established fintech apps"]
  },
  {
    id: 7,
    name: "Strava for Readers",
    category: "X for Y (Gamification)",
    description: "Reading tracker with competitive leaderboards, streaks, and pages-read-per-day gamification",
    marketSize: {
      rating: "Medium-Large",
      tam: "$100-300M",
      description: "Avid readers, book clubs, students. 50M+ active readers in English-speaking markets who use reading apps."
    },
    competition: {
      level: "Medium",
      competitors: ["Goodreads", "StoryGraph", "Literal", "Bookly", "Reading List"],
      pricing: "$2.99-9.99/month or ad-supported free",
      differentiation: "Competitive/social reading metrics vs book cataloging/reviews"
    },
    profitMargin: {
      estimate: "70-80%",
      reasoning: "Low infrastructure costs, minimal API usage. Social features require moderation. Ad revenue or subscriptions cover hosting."
    },
    implementation: {
      difficulty: "Medium",
      rating: 5,
      explanation: "Social features (friends, leaderboards), reading progress tracking, streak mechanics, book database integration (Open Library API), gamification logic"
    },
    timeToDeployment: {
      estimate: "4-5 weeks",
      breakdown: {
        planning: "2 days",
        aiScaffolding: "4 days",
        coding: "15-18 days (user profiles, social graph, leaderboards, reading stats, book search/add)",
        testing: "4-5 days",
        deployment: "2-3 days"
      }
    },
    viralPotential: "Medium-High - Social features encourage sharing, good for BookTok/BookTube",
    monetization: ["Freemium (basic tracking)", "Premium $6.99/mo (advanced stats, unlimited friends)", "Book club tier $19.99/mo", "Affiliate links to book retailers"],
    technicalStack: "Next.js, PostgreSQL, Open Library API, real-time updates (Pusher/Socket.io)",
    risks: ["Hard to compete with Goodreads' network effects", "Need critical mass for social features", "Book data quality issues"]
  },
  {
    id: 8,
    name: "Tinder for Gym Partners",
    category: "X for Y (Niche Social)",
    description: "Matching app based on workout schedules and fitness goals to find gym partners/spotters",
    marketSize: {
      rating: "Medium",
      tam: "$80-200M",
      description: "Gym-goers looking for workout partners. 60M+ gym memberships in US, 10-15% actively seeking workout partners."
    },
    competition: {
      level: "Low-Medium",
      competitors: ["Gymder", "JEFIT social features", "Meetup fitness groups", "Bumble BFF"],
      pricing: "$4.99-14.99/month with free tier",
      differentiation: "Gym-specific matching algorithm vs general social/fitness apps"
    },
    profitMargin: {
      estimate: "60-70%",
      reasoning: "Moderate hosting costs for user profiles, images, messaging. Location-based matching. Revenue from subscriptions or gym partnership deals."
    },
    implementation: {
      difficulty: "Medium-Hard",
      rating: 6,
      explanation: "Dating app clone (matching algorithm, profiles, chat), location services, schedule matching, workout preference filters, safety features, moderation"
    },
    timeToDeployment: {
      estimate: "5-7 weeks",
      breakdown: {
        planning: "3 days",
        aiScaffolding: "4 days",
        coding: "20-25 days (user auth, profiles, matching logic, chat system, location services, safety features)",
        testing: "5-7 days",
        appStore: "4-7 days (dating apps face stricter review)"
      }
    },
    viralPotential: "Medium - Niche but can spread in fitness communities",
    monetization: ["Freemium (limited matches)", "Premium $9.99/mo unlimited", "Gym partnerships (in-app promotion)", "Personal trainer directory $19.99/mo listing"],
    technicalStack: "React Native, Firebase/Supabase, Geolocation APIs, Stream Chat API, image storage",
    risks: ["Safety concerns (meeting strangers)", "Network effects needed", "User verification challenges", "Liability issues"]
  },
  {
    id: 9,
    name: "Glassdoor for Landlords",
    category: "X for Y (Review Platform)",
    description: "Platform where tenants review landlords and properties for transparency in rental market",
    marketSize: {
      rating: "Large",
      tam: "$200-500M",
      description: "Renters in US (44M rental households) and globally (200M+). High demand for landlord transparency."
    },
    competition: {
      level: "Low-Medium",
      competitors: ["RateMyLandlord", "landlordratings.com", "Yelp (limited)", "local Facebook groups"],
      pricing: "Free for users, monetize through landlord premium listings or ads",
      differentiation: "Verified reviews with proof of tenancy vs anonymous unverified reviews"
    },
    profitMargin: {
      estimate: "55-70%",
      reasoning: "Moderate hosting/moderation costs. Revenue from landlord subscriptions, promoted listings, or ads. Legal costs for review disputes."
    },
    implementation: {
      difficulty: "Hard",
      rating: 7,
      explanation: "Review platform with verification system, moderation tools, landlord profiles, search/filter, spam prevention, legal compliance for defamation protection"
    },
    timeToDeployment: {
      estimate: "6-9 weeks",
      breakdown: {
        planning: "4 days",
        aiScaffolding: "4 days",
        coding: "25-35 days (user/landlord auth, review system, verification logic, moderation dashboard, search, legal protections)",
        testing: "7-10 days",
        legal: "5-10 days (terms of service, DMCA, defamation protections)"
      }
    },
    viralPotential: "High - Controversial, newsworthy, spreads through renter communities",
    monetization: ["Free for renters", "Landlord premium $29.99/mo (respond to reviews, promote listings)", "Featured property listings", "Background check services"],
    technicalStack: "Next.js, PostgreSQL, review moderation (AI + human), verification system, Stripe",
    risks: ["Legal liability for defamatory reviews", "Requires strong moderation", "Landlord pushback", "Verification system complexity", "Spam and fake reviews"]
  },
  {
    id: 10,
    name: "Uber for Tech Support (Grandkid App)",
    category: "X for Y (On-Demand Service)",
    description: "On-demand video call service connecting seniors with tech-savvy students for 15-min tech help sessions",
    marketSize: {
      rating: "Large",
      tam: "$500M-1B",
      description: "55M+ seniors (65+) in US, 200M+ globally. Most struggle with tech. Family members willing to pay for help."
    },
    competition: {
      level: "Low-Medium",
      competitors: ["Papa (companionship + tech)", "Hello Tech", "Geek Squad (expensive)", "local computer repair shops"],
      pricing: "$15-30 per 15-min session or $49.99/mo subscription (4 sessions)",
      differentiation: "On-demand video calls with students vs expensive in-home visits"
    },
    profitMargin: {
      estimate: "25-40%",
      reasoning: "Marketplace model: take 20-30% commission. Higher support costs, payment processing fees, background checks for helpers, insurance."
    },
    implementation: {
      difficulty: "Hard",
      rating: 8,
      explanation: "Two-sided marketplace, video call integration, booking system, payment processing, helper vetting/background checks, rating system, session recording for quality"
    },
    timeToDeployment: {
      estimate: "8-12 weeks",
      breakdown: {
        planning: "5 days",
        aiScaffolding: "5 days",
        coding: "35-50 days (dual user types, booking system, video calls, payments, background checks, ratings, support dashboard)",
        testing: "10-15 days (both user flows)",
        legal: "7-10 days (liability, background checks)",
        appStore: "5-7 days"
      }
    },
    viralPotential: "High - Heartwarming stories, media coverage potential, generational appeal",
    monetization: ["Per-session pricing $19.99/15min", "Subscription $49.99/mo (4 sessions)", "Gift cards for families", "Take 25-30% commission from helpers"],
    technicalStack: "Next.js, Twilio Video API, Stripe Connect, background check API (Checkr), PostgreSQL, real-time availability",
    risks: ["High customer support needs", "Liability insurance required", "Vetting helpers is time-intensive", "Video call quality issues", "Regulatory compliance (elder care)"]
  }
];

export const newIdeas = [
  {
    id: 11,
    name: "Notion for ADHD",
    category: "X for Y (Productivity)",
    description: "Task management app designed specifically for ADHD brains with time-blindness helpers, dopamine-driven UX, and body-doubling video rooms",
    marketSize: {
      rating: "Large",
      tam: "$400-900M",
      description: "17M+ adults with ADHD in US, 60M+ globally. Underserved by traditional productivity tools. Neurodivergent market growing."
    },
    competition: {
      level: "Low-Medium",
      competitors: ["Tiimo", "Goblin Tools", "Focus@Will", "general productivity apps not optimized for ADHD"],
      pricing: "$9.99-19.99/month",
      differentiation: "ADHD-specific features vs general productivity tools"
    },
    profitMargin: {
      estimate: "65-75%",
      reasoning: "SaaS model with low infrastructure costs. Video rooms add cost but premium feature. High retention due to specific need."
    },
    implementation: {
      difficulty: "Medium-Hard",
      rating: 6,
      explanation: "Task management, calendar integration, time visualization widgets, video room integration, notification system with smart reminders, focus mode"
    },
    timeToDeployment: {
      estimate: "5-7 weeks",
      breakdown: {
        planning: "3 days (research ADHD needs)",
        aiScaffolding: "4 days",
        coding: "20-28 days (task system, calendar, video rooms, time widgets, gamification)",
        testing: "5-7 days (ADHD user testing critical)",
        deployment: "3-4 days"
      }
    },
    viralPotential: "High - ADHD community active on TikTok/Twitter, word-of-mouth strong",
    monetization: ["Freemium (basic tasks)", "Premium $14.99/mo (video rooms, unlimited tasks)", "Annual $149/year", "ADHD coach marketplace 20% commission"],
    technicalStack: "Next.js, PostgreSQL, Daily.co for video, calendar APIs, push notifications",
    risks: ["Requires deep ADHD knowledge/research", "Must balance features vs overwhelm", "High support needs"]
  },
  {
    id: 12,
    name: "Duolingo for Personal Finance",
    category: "X for Y (Gamified Education)",
    description: "5-minute daily personal finance lessons with streaks, XP, and challenges. Learn budgeting, investing, credit through gamification",
    marketSize: {
      rating: "Very Large",
      tam: "$1-2B",
      description: "Financial literacy gap affects 150M+ Americans, billions globally. Everyone needs finance education."
    },
    competition: {
      level: "Medium",
      competitors: ["Fidelity Learn", "Investopedia Academy", "Khan Academy (free)", "financial advisors"],
      pricing: "$6.99-14.99/month or free with ads",
      differentiation: "Micro-learning + gamification vs dense courses/articles"
    },
    profitMargin: {
      estimate: "70-85%",
      reasoning: "Content creation upfront cost, then low marginal costs. Ad revenue or subscriptions. Potential affiliate revenue from financial products."
    },
    implementation: {
      difficulty: "Medium",
      rating: 5,
      explanation: "Content management system, gamification (streaks, XP, levels), quiz system, progress tracking, push notifications for daily reminders"
    },
    timeToDeployment: {
      estimate: "5-6 weeks",
      breakdown: {
        planning: "4 days (curriculum design critical)",
        aiScaffolding: "3 days",
        coding: "18-22 days (lesson system, gamification, quizzes, progress tracking)",
        content: "10+ days (can be parallel, ongoing)",
        testing: "4-5 days",
        deployment: "2-3 days"
      }
    },
    viralPotential: "High - Gamification encourages sharing, financial education is trendy",
    monetization: ["Freemium (basic lessons)", "Premium $9.99/mo (all content, no ads)", "Affiliate revenue from recommended financial products", "B2B for companies (employee benefit)"],
    technicalStack: "Next.js, PostgreSQL, content management system, gamification engine, notification system",
    risks: ["Content accuracy critical (financial advice liability)", "Hard to balance education vs engagement", "Regulatory concerns if offering specific advice"]
  },
  {
    id: 13,
    name: "GitHub Copilot for Excel",
    category: "GPT Wrapper (Productivity)",
    description: "AI assistant that generates Excel formulas, macros, and analyses data through natural language queries",
    marketSize: {
      rating: "Very Large",
      tam: "$2-5B",
      description: "1B+ Excel users worldwide. Most struggle with formulas/macros. Enterprise + consumer market."
    },
    competition: {
      level: "High",
      competitors: ["Microsoft 365 Copilot (expensive)", "Formula Bot", "Sheet AI", "Numerous.ai"],
      pricing: "$9.99-29.99/month or enterprise licensing",
      differentiation: "Affordable vs Microsoft's $30/user/mo, works with Excel + Google Sheets"
    },
    profitMargin: {
      estimate: "60-75%",
      reasoning: "API costs moderate (~$0.10-0.50 per complex query). SaaS subscription model. Enterprise contracts high margin."
    },
    implementation: {
      difficulty: "Medium-Hard",
      rating: 6,
      explanation: "Excel/Sheets plugin development, GPT-4 integration with formula-specific training, code execution sandbox, data analysis features"
    },
    timeToDeployment: {
      estimate: "6-8 weeks",
      breakdown: {
        planning: "3 days",
        aiScaffolding: "4 days",
        coding: "25-32 days (plugin architecture, GPT integration, formula validation, macro generation, testing framework)",
        testing: "7-10 days (extensive formula testing)",
        distribution: "3-5 days (Office Store + Chrome Web Store)"
      }
    },
    viralPotential: "Medium - Spreads in corporate/productivity communities",
    monetization: ["Free tier (10 formulas/month)", "Pro $19.99/mo unlimited", "Enterprise $9.99/user/mo (50+ users)", "One-time license $99"],
    technicalStack: "Office.js for Excel, Google Apps Script, GPT-4 API, code execution sandbox",
    risks: ["Microsoft competition (Copilot)", "Formula accuracy critical", "Security concerns with macro generation", "API rate limits"]
  },
  {
    id: 14,
    name: "Calm for Productivity (Focus Sessions)",
    category: "X for Y (Wellness)",
    description: "Timed focus sessions (25/50min) with ambient soundscapes, breathing breaks, and productivity tracking. Meditation meets deep work",
    marketSize: {
      rating: "Large",
      tam: "$300-700M",
      description: "Knowledge workers, students, remote workers seeking focus. 100M+ potential users fighting distraction."
    },
    competition: {
      level: "Medium-High",
      competitors: ["Forest", "Focus@Will", "Brain.fm", "Centered App", "Pomodoro timers"],
      pricing: "$4.99-9.99/month or $29.99/year",
      differentiation: "Holistic focus (sound + breaks + tracking) vs single-feature apps"
    },
    profitMargin: {
      estimate: "70-80%",
      reasoning: "Low infrastructure costs. Audio streaming can be cached. High retention for focus tools. Subscription model."
    },
    implementation: {
      difficulty: "Medium",
      rating: 5,
      explanation: "Timer functionality, audio player, session tracking, stats dashboard, breathing exercise animations, notification blocking integration"
    },
    timeToDeployment: {
      estimate: "4-5 weeks",
      breakdown: {
        planning: "2 days",
        aiScaffolding: "3 days",
        coding: "16-20 days (timer, audio system, session tracking, stats, breathing UI)",
        audio: "5-7 days (license or create ambient tracks)",
        testing: "4-5 days",
        deployment: "2-3 days"
      }
    },
    viralPotential: "Medium - #StudyTok and productivity communities",
    monetization: ["Freemium (limited sessions)", "Premium $7.99/mo unlimited", "Annual $49.99/year", "Lifetime $149 one-time", "B2B workplace wellness $4.99/user/mo"],
    technicalStack: "Next.js/React Native, audio streaming, IndexedDB for offline, notification APIs, stats engine",
    risks: ["Highly competitive market", "Audio licensing costs", "Need differentiation from free alternatives"]
  },
  {
    id: 15,
    name: "Loom for Bug Reports",
    category: "X for Y (Developer Tools)",
    description: "Screen recording tool that automatically captures console errors, network calls, and browser info for bug reports",
    marketSize: {
      rating: "Medium",
      tam: "$150-400M",
      description: "Software teams, QA testers, customer support. 10M+ developers, 50M+ support agents globally."
    },
    competition: {
      level: "Medium",
      competitors: ["LogRocket", "FullStory", "Sentry (partial)", "Jam.dev", "Bird Eats Bug"],
      pricing: "$15-49/month per user or team plans",
      differentiation: "Lightweight, instant sharing vs heavy session replay tools"
    },
    profitMargin: {
      estimate: "60-70%",
      reasoning: "Video storage costs (S3 ~$0.02/GB). Processing costs for extracting technical data. B2B SaaS margins."
    },
    implementation: {
      difficulty: "Hard",
      rating: 7,
      explanation: "Browser extension, screen recording API, console log capture, network monitoring, video processing, shareable links with embedded technical data"
    },
    timeToDeployment: {
      estimate: "7-10 weeks",
      breakdown: {
        planning: "4 days",
        aiScaffolding: "4 days",
        coding: "30-40 days (browser extension, recording, console capture, network logging, video processing, viewer UI)",
        testing: "7-10 days (cross-browser testing)",
        distribution: "5-7 days (Chrome/Firefox stores)"
      }
    },
    viralPotential: "Low-Medium - Developer word-of-mouth, GitHub/HackerNews",
    monetization: ["Free tier (10 recordings/month)", "Pro $19/mo per user (unlimited)", "Team $99/mo (5 users)", "Enterprise custom pricing"],
    technicalStack: "Browser extension (Chrome/Firefox), WebRTC, video processing (FFmpeg), AWS S3, Next.js viewer",
    risks: ["Technical complexity high", "Video storage costs", "Privacy concerns", "Competition from established players"]
  },
  {
    id: 16,
    name: "Etsy for Digital Products Only",
    category: "X for Y (Marketplace)",
    description: "Marketplace exclusively for digital products (templates, courses, ebooks, graphics) with instant delivery and creator tools",
    marketSize: {
      rating: "Large",
      tam: "$500M-1.5B",
      description: "Digital creators, educators, designers. $300B+ creator economy, growing demand for passive income."
    },
    competition: {
      level: "High",
      competitors: ["Gumroad", "Etsy (has physical)", "Creative Market", "Sellfy", "Payhip"],
      pricing: "5-10% commission + payment processing",
      differentiation: "Digital-only focus with better creator tools vs general marketplaces"
    },
    profitMargin: {
      estimate: "40-60%",
      reasoning: "Marketplace model: 8-10% commission. Costs: hosting, payment processing (2.9%), customer support, fraud prevention."
    },
    implementation: {
      difficulty: "Hard",
      rating: 8,
      explanation: "Marketplace platform, seller/buyer accounts, product uploads, payment processing, digital delivery, file storage, search/discovery, reviews, seller analytics"
    },
    timeToDeployment: {
      estimate: "10-14 weeks",
      breakdown: {
        planning: "5 days",
        aiScaffolding: "5 days",
        coding: "45-60 days (marketplace core, payments, file management, seller tools, buyer experience, admin dashboard)",
        testing: "10-14 days",
        legal: "5-7 days (terms, DMCA)",
        deployment: "3-5 days"
      }
    },
    viralPotential: "Medium - Creator communities on Twitter/TikTok, needs seller marketing",
    monetization: ["8% commission per sale", "Premium seller accounts $19.99/mo (better placement)", "Transaction fees 2.9% + $0.30", "Featured listings"],
    technicalStack: "Next.js, PostgreSQL, Stripe Connect, AWS S3/Cloudflare R2, search (Algolia), CDN",
    risks: ["Chicken-and-egg (need buyers and sellers)", "Fraud and chargebacks", "Copyright infringement", "High competition", "Requires significant marketing"]
  },
  {
    id: 17,
    name: "Canva for Resumes (AI-Powered)",
    category: "GPT Wrapper (Career)",
    description: "AI writes resume content based on job description, then auto-formats into ATS-friendly professional templates",
    marketSize: {
      rating: "Large",
      tam: "$500M-1B",
      description: "Job seekers globally (200M+ active yearly). Everyone needs resumes, constant updates needed."
    },
    competition: {
      level: "High",
      competitors: ["Resume.io", "Zety", "Kickresume", "Rezi", "LinkedIn Resume Builder"],
      pricing: "$9.99-29.99/month or $4.99 per resume download",
      differentiation: "AI content generation + ATS optimization vs template-only tools"
    },
    profitMargin: {
      estimate: "65-75%",
      reasoning: "Moderate API costs (~$0.50-1.00 per resume generation). PDF generation cheap. High conversion from job seekers."
    },
    implementation: {
      difficulty: "Medium",
      rating: 5,
      explanation: "Resume builder UI, GPT-4 integration for content, ATS-friendly template system, PDF export, job description parser, keyword optimization"
    },
    timeToDeployment: {
      estimate: "4-5 weeks",
      breakdown: {
        planning: "2 days",
        aiScaffolding: "3 days",
        coding: "16-20 days (resume builder, AI integration, templates, ATS optimization, PDF export)",
        testing: "4-5 days (ATS testing critical)",
        deployment: "2-3 days"
      }
    },
    viralPotential: "Medium-High - Career content popular on LinkedIn/TikTok",
    monetization: ["Free tier (1 resume)", "Pay-per-download $7.99 per resume", "Monthly $19.99 (unlimited edits/downloads)", "Cover letter add-on $4.99"],
    technicalStack: "Next.js, GPT-4 API, React PDF or PDFKit, ATS parser, template engine",
    risks: ["Very competitive market", "AI content quality must be high", "ATS requirements constantly changing"]
  },
  {
    id: 18,
    name: "Twitter/X for Voice Notes",
    category: "X for Y (Social Media)",
    description: "Micro-podcasting platform: 60-second voice notes, following, threading. Audio-first social network",
    marketSize: {
      rating: "Medium-Large",
      tam: "$200-600M",
      description: "Podcast listeners (400M+), voice-note users. Gap between long podcasts and short text."
    },
    competition: {
      level: "Low-Medium",
      competitors: ["Clubhouse (dead)", "Twitter Spaces (live only)", "Stereo", "Racket"],
      pricing: "Free with ads or $4.99/month premium (no ads, analytics)",
      differentiation: "Async short-form audio vs live audio rooms or long podcasts"
    },
    profitMargin: {
      estimate: "50-65%",
      reasoning: "Audio storage costs (cheaper than video). CDN costs. Moderation costs for audio content. Ad revenue or subscriptions."
    },
    implementation: {
      difficulty: "Hard",
      rating: 7,
      explanation: "Social network architecture (feed, follow, likes), audio recording/playback, audio storage/streaming, moderation, discovery algorithm, notifications"
    },
    timeToDeployment: {
      estimate: "8-12 weeks",
      breakdown: {
        planning: "4 days",
        aiScaffolding: "5 days",
        coding: "40-50 days (social graph, audio recording, feed algorithm, player, moderation tools, notifications)",
        testing: "8-12 days",
        deployment: "3-5 days"
      }
    },
    viralPotential: "High - Novel format, audio clips shareable to other platforms",
    monetization: ["Free with ads", "Premium $4.99/mo (no ads, analytics, longer clips)", "Creator subscriptions (platform fee 10%)", "Sponsorships"],
    technicalStack: "Next.js, PostgreSQL, audio storage (S3), streaming CDN, audio transcription API for moderation, real-time feed updates",
    risks: ["Network effects required", "Moderation of audio content hard", "Needs critical mass quickly", "Audio quality variations"]
  },
  {
    id: 19,
    name: "Airbnb for Coworking (Hourly)",
    category: "X for Y (Marketplace)",
    description: "Book unused office space, coffee shops, hotel lobbies by the hour for remote work. Pay-per-hour coworking marketplace",
    marketSize: {
      rating: "Large",
      tam: "$400M-1B",
      description: "Remote workers, digital nomads, traveling professionals. 50M+ remote workers in US, need workspace options."
    },
    competition: {
      level: "Medium",
      competitors: ["WeWork (memberships)", "Croissant", "Deskpass", "Spacious (shut down)", "coffee shops"],
      pricing: "$5-15/hour, platform takes 15-20% commission",
      differentiation: "True hourly bookings vs monthly memberships, includes non-traditional spaces"
    },
    profitMargin: {
      estimate: "35-50%",
      reasoning: "Marketplace model: 15-20% commission. Costs: payment processing, customer support, space verification, insurance."
    },
    implementation: {
      difficulty: "Hard",
      rating: 7,
      explanation: "Two-sided marketplace, booking system with availability calendar, payments, space listings with photos, reviews, search with filters (WiFi, outlets, quiet, etc.), check-in system"
    },
    timeToDeployment: {
      estimate: "8-11 weeks",
      breakdown: {
        planning: "4 days",
        aiScaffolding: "5 days",
        coding: "35-45 days (marketplace, booking system, payments, space management, search/filters, reviews)",
        testing: "8-10 days",
        legal: "5-7 days (liability, insurance)",
        deployment: "3-4 days"
      }
    },
    viralPotential: "Medium - Remote work communities, digital nomad groups",
    monetization: ["15-20% commission per booking", "Space owner subscriptions $29.99/mo (better placement)", "Premium user accounts $14.99/mo (no booking fees)"],
    technicalStack: "Next.js, PostgreSQL, Stripe Connect, calendar system (react-big-calendar), geolocation, image storage",
    risks: ["Chicken-and-egg problem", "Space quality control", "Liability insurance required", "Coffee shops may not want hourly bookings", "Competition from free options"]
  },
  {
    id: 20,
    name: "Letterboxd for Video Games",
    category: "X for Y (Social Cataloging)",
    description: "Track games played, rate/review, create lists, follow friends' gaming activity. Social gaming diary",
    marketSize: {
      rating: "Large",
      tam: "$300-800M",
      description: "Gamers who want to track their backlog and share reviews. 3B+ gamers worldwide, 100M+ core gamers."
    },
    competition: {
      level: "Medium",
      competitors: ["Backloggd", "Grouvee", "GG|", "Steam profiles (limited)", "IGN user reviews"],
      pricing: "Free with ads or $3.99-9.99/month premium",
      differentiation: "Social focus + beautiful UI vs utilitarian game trackers"
    },
    profitMargin: {
      estimate: "65-75%",
      reasoning: "Low infrastructure costs. Game database (IGDB API is free). Revenue from ads, subscriptions, or affiliate links to game stores."
    },
    implementation: {
      difficulty: "Medium-Hard",
      rating: 6,
      explanation: "Social features (profiles, follows, activity feed), game database integration (IGDB API), reviews/ratings, lists, statistics dashboard, game completion tracking"
    },
    timeToDeployment: {
      estimate: "6-8 weeks",
      breakdown: {
        planning: "3 days",
        aiScaffolding: "4 days",
        coding: "25-32 days (user profiles, social graph, game database, reviews, lists, activity feed, stats)",
        testing: "6-8 days",
        deployment: "3-4 days"
      }
    },
    viralPotential: "High - Gaming communities very active on Twitter, Reddit, Discord",
    monetization: ["Free with ads", "Pro $6.99/mo (no ads, advanced stats, more lists)", "Affiliate revenue from game store links", "Premium badges/themes"],
    technicalStack: "Next.js, PostgreSQL, IGDB API, image CDN, social features (follow/feed system)",
    risks: ["Hard to compete with Steam's social features", "Network effects needed", "Game data quality dependent on IGDB", "Free alternatives exist"]
  }
];

// Ranking criteria weights
export const rankingCriteria = {
  marketSize: 25,
  competition: 20,
  profitMargin: 20,
  implementationDifficulty: 20,
  timeToDeployment: 15
};

// Calculate score for ranking (0-100)
export function calculateScore(idea) {
  const marketSizeScores = {
    "Small-Medium": 40,
    "Medium": 60,
    "Medium-Large": 70,
    "Large": 80,
    "Very Large": 100
  };
  
  const competitionScores = {
    "Low": 90,
    "Low-Medium": 75,
    "Medium": 60,
    "Medium-High": 45,
    "High": 30
  };
  
  const difficultyScores = {
    "Easy": 100,
    2: 100,
    3: 85,
    4: 70,
    5: 60,
    6: 45,
    7: 30,
    8: 15
  };
  
  // Parse profit margin percentage
  const profitMarginMatch = idea.profitMargin.estimate.match(/(\d+)-?(\d+)?%/);
  const profitMarginAvg = profitMarginMatch 
    ? (parseInt(profitMarginMatch[1]) + (profitMarginMatch[2] ? parseInt(profitMarginMatch[2]) : parseInt(profitMarginMatch[1]))) / 2
    : 50;
  
  // Parse time to deployment (convert weeks to days, lower is better)
  const timeMatch = idea.timeToDeployment.estimate.match(/(\d+)-?(\d+)?/);
  const timeAvg = timeMatch
    ? (parseInt(timeMatch[1]) + (parseInt(timeMatch[2]) || parseInt(timeMatch[1]))) / 2
    : 5;
  const timeScore = Math.max(0, 100 - (timeAvg * 8)); // Penalize longer times
  
  const score = 
    (marketSizeScores[idea.marketSize.rating] || 50) * (rankingCriteria.marketSize / 100) +
    (competitionScores[idea.competition.level] || 50) * (rankingCriteria.competition / 100) +
    (profitMarginAvg) * (rankingCriteria.profitMargin / 100) +
    (difficultyScores[idea.implementation.difficulty] || difficultyScores[idea.implementation.rating] || 50) * (rankingCriteria.implementationDifficulty / 100) +
    timeScore * (rankingCriteria.timeToDeployment / 100);
  
  return Math.round(score);
}

// Get ranked ideas
export function getRankedIdeas(ideas) {
  return ideas
    .map(idea => ({
      ...idea,
      score: calculateScore(idea)
    }))
    .sort((a, b) => b.score - a.score);
}
