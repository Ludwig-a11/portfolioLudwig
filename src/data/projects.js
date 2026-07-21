import chloeImg from "../assets/chloe_banner.jpeg";
import kivoImg from "../assets/kivo_banner.jpeg";
import ddtcImg from "../assets/ddtCalculator.png";
import rickMortyImg from "../assets/rick-morthy.png";
import expenseTrackingAppImg from "../assets/expense_tracking_app.png";
import barryImg from "../assets/arloImg.jpeg"

export const projects = [
  {
    id: 1,
    slug: "chloe",
    title: "Chloe",
    description: "AI voice agent - Lead validation",
    stack: "Retell · n8n · ElevenLabs",
    image: chloeImg,
    liveUrl: null,
    summary:
      "Voice-first lead qualification assistant with routing logic and CRM handoff.",
    details: {
      hero: "A voice agent that validates leads in real time, filters noise, and connects real opportunities with sales without unnecessary human friction.",
      whyThisBreaksDown: [
        "Manual lead qualification stops working once volume increases. Calls get delayed, intent cools off, and outcomes become fragmented. Without structured results, sales teams can’t learn what works or improve campaigns using real data.",
      ],
      problem: [
        "Sales reps spend time calling wrong numbers, spam, or low-intent contacts.",
        "Lead validation falls behind during peak demand.",
        "Follow-ups are often inconsistent, and dificult to audit.",
        "Campaigns and reactivation efforts require heavy manual coordination without automation.",
      ],
      solution: [
        "Places personalized calls using real lead context.",
        "Dynamically adjusts conversation flow using LLM-based logic.",
        "Transfers qualified leads to sales immediately when intent is confirmed.",
        "Quickly terminates spam and invalid numbers.",
        "Sends post-call summaries, next steps, and handles scheduling automatically.",
        "Returns structured outcomes for downstream routing and analysis.",
      ],
      stack: [
        "Retell AI",
        "ElevenLabs",
        "n8n",
        "JavaScript",
        "Google Workspace API",
      ],
      results: [
        "Instant filtering of wrong numbers, spam, and unintended contacts.",
        "Fully automated follow-up for passive leads without human intervention.",
        "Calendar scheduling inside the same conversational flow.",
        "Detailed real-time logging for campaign analysis and optimization.",
      ],
    },
  },
  {
    id: 2,
    slug: "kivo",
    title: "Kivo",
    description: "AI ops agent - Lead qualification",
    stack: "n8n · CRM · Google",
    image: kivoImg,
    liveUrl: null,
    summary:
      "Internal automation workflows for repetitive ops tasks and team notifications.",
    details: {
      hero: "Kivo is an internal agent that analyzes inbound leads, prioritizes intent, and preserves operational traceability.",
      whyThisBreaksDown: [
        "When triage depends on humans, speed becomes the bottleneck. Every minute of delay reduces intent and makes processes inconsistent and difficult to scale.",
      ],
      problem: [
        "Sales teams lose time triaging spam, bots, and low-intent submissions.",
        "Manual classification and routing slow down response speed.",
        "Leads get cold fast due to delays, reducing conversion.",
        "Lack of clear traceability across tools.",
      ],
      solution: [
        "Analyzes every inbound submission in real time.",
        "Detects intent signals and spam patterns.",
        "Automatically classifies contacts and extracts context.",
        "Delegates phone validation to Chloe when needed.",
        "Drafts campaign-aligned emails for qualified contacts.",
        "Keeps CRM and internal tools fully synchronized.",
      ],
      stack: [
        "n8n",
        "JavaScript",
        "Google Workspace API",
        "Retell AI (via Chloe)",
        "ElevenLabs",
      ],
      results: [
        "Response time reduced to seconds.",
        "Personalized emails with higher reply likelihood.",
        "False leads filtered before consuming human time.",
      ],
    },
  },
  {
    id: 3,
    slug: "dedicated-teams-calculator",
    title: "Dedicated Teams Calculator",
    description: "Pricing - Fast quote experience",
    stack: "React · Wordpress · JS",
    image: ddtcImg,
    liveUrl:
      "https://www.salvosoftware.com/dedicated-development-teams/#calculator",
    summary: "Dedicated Developemtn Team Cost Calculator. ",
    details: {
      hero: "A sales support initiative focused on improving pricing clarity and proposal preparation efficiency.",
      whyThisBreaksDown: [
        "Pricing conversations break down when cost structures are unclear or fragmented. Manual calculations slow down proposal cycles, introduce inconsistencies, and create misalignment between sales expectations and delivery realities.",
      ],

      problem: [
        "Sales conversations around dedicated development teams required significant manual effort and coordination across multiple teams.",
        "There was a need for clearer cost structures to support discussions around roles, salaries, and team composition.",
      ],
      solution: [
        "Worked closely with sales leadership during the early conceptualization phase of a dedicated team cost calculator, with the goal of supporting pricing conversations.",
        "Collaborated with UX/UI designers, project managers, and developers, contributing inputs from a business and sales perspective.",
        "Supported the initiative through research and implementation tasks such as salary benchmarking, defining appropriate tech stacks by role, and providing input on the interface and overall structure within the company’s website.",
      ],
      stack: [
        "React.js",
        "WordPress",
        "Python - lambdas",
        "JavaScript - lambdas",
        "MySQL",
      ],
      results: [
        "Improved clarity and consistency in pricing conversations for dedicated development teams.",
        "Supported faster proposal and quotation preparation by providing structured inputs to the sales process.",
        "Helped align sales expectations with technical considerations through better-defined roles and cost structures.",
      ],
    },
  },
  {
    id: 4,
    slug: "rick-morty",
    title: "Rick & Morty",
    description: "API - Character discovery UI",
    stack: "React · REST API · CSS",
    image: rickMortyImg,
    liveUrl: "https://subtle-pasca-8707dd.netlify.app/",
    summary: "Rick and Morty Character Explorer",
    details: {
      hero: "A front-end project built during my Full Stack Web Developer training to practice React fundamentals and API consumption.",
      whyThisBreaksDown: [
        "Learning React without real-world data makes architectural mistakes harder to detect. Without practical projects that involve external APIs, concepts like state management, component design, and data flow remain abstract and harder to internalize.",
      ],

      problem: [
        "As part of my training, I needed to strengthen my understanding of component-based architecture, state management, and data fetching in React.",
        "The challenge was to consume and display dynamic data from an external API while providing a clear and interactive user experience.",
      ],

      solution: [
        "Developed a React-based application that consumes the Rick and Morty public API to display character information.",
        "Implemented a search feature that allows users to filter and explore characters dynamically.",
        "Used React Router to manage navigation and structure the application into reusable views and components.",
        "Styled the application using CSS, focusing on clarity, layout, and usability.",
      ],

      stack: [
        "React",
        "CSS",
        "Public API consumption",
        "React Router",
        "Component-based architecture",
      ],

      results: [
        "Strengthened my understanding of React fundamentals, including components, props, state, and lifecycle concepts.",
        "Gained hands-on experience consuming external APIs and rendering dynamic data.",
        "Improved my ability to structure front-end applications and implement basic navigation and search functionality.",
      ],
    },
  },
  {
    id: 5,
    slug: "expenses-record-app",
    title: "Expense Record App",
    description: "Simple personal finance",
    stack: "React · JS · Firebase",
    image: expenseTrackingAppImg,
    liveUrl:
      "https://expenserecordapp.netlify.app",
    summary:
      "Expense tracker for daily records and quick personal finance visibility.",
    details: {
      hero: "An expense tracking application focused on simplicity, clarity, and maintainable architecture.",
      whyThisBreaksDown: [
        "Personal finance tools fail when they become complex. Heavy interfaces discourage daily use.",
      ],
      problem: [
        "Managing personal expenses often becomes messy and time-consuming when data entry is inconsistent or interfaces are unclear.",
        "Many expense tracking tools prioritize features over usability, making simple actions like categorizing or reviewing expenses harder than necessary.",
        "Developers frequently struggle to keep UI components scalable and maintainable as applications grow.",
      ],
      solution: [
        "Designed and built a clean, modular expense tracking app with a strong separation between presentation and business logic.",
        "Implemented reusable UI elements using CSS Modules and a consistent component architecture to ensure scalability.",
        "Created controlled inputs and validation logic to improve data accuracy and user experience when entering expenses.",
      ],
      stack: [
        "React",
        "JavaScript",
        "CSS",
        "Firebase (authentication and data handling)",
      ],
      results: [
        "An actively evolving project, currently under development, used to experiment with and refine best practices in UI design, state management, and front-end architecture.",
      ],
    },
  },
  {
  id: 6,
  slug: "barry",
  title: "Barry",
  description: "AI recruiting agent - Sourcing & evaluation",
  stack: "LangGraph · Claude · FastAPI · Next.js",
  image: barryImg,
  liveUrl: null,
  summary:
    "End-to-end AI recruiting agent that sources, enriches, and scores candidates, closing the loop by learning from every recruiter decision.",
  details: {
    hero: "Barry is an end-to-end AI recruiting agent that automates candidate sourcing, enrichment, and evaluation for technical hiring a full-stack agentic AI application with production LangGraph orchestration, tool use, persistent memory, and a custom frontend.",

    whyThisBreaksDown: [
      "Even a successful hire carries long-term uncertainty. There's rarely a structured way to know whether it was truly the right decision until months later, so teams end up leaning on subjective, case-by-case judgment instead of a system that learns from every hire and gets smarter over time.",
    ],

    problem: [
      "Even after a successful hire, there's no structured way to know whether it was the right decision until months later, teams rely heavily on subjective, case-by-case judgment.",
      "Sourcing is fully manual: a recruiter takes a job description and target keywords and searches LinkedIn/the web by hand, with no systematic way to score or rank candidates.",
      "No traceability links candidate profiles, assessment results, hiring decisions, and retention/performance, so the team can't learn which patterns actually predict a successful hire or early attrition.",
      "Assessment data lives in silos: technical results (e.g. HackerRank) and behavioral/personality results (e.g. TestGorilla) get evaluated superficially — right/wrong — instead of for seniority, logic, and problem-solving approach.",
      "ATS deduplication silently failed due to an undocumented API behavior, causing false-positive duplicate detection.",
      "Candidate identity (LinkedIn URLs) comes back in inconsistent formats across data sources, breaking cross-service matching.",
    ],

    solution: [
      "Turns a job description and target keywords into a ranked, score-analyzed candidate shortlist, replacing hours of manual sourcing.",
      "Pre-screens every candidate early, surfacing strengths and red flags and recommending targeted interview questions.",
      "Reads technical and behavioral/personality assessment results beyond a simple pass/fail, estimating seniority, fit, and retention risk.",
      "Builds long-term traceability between candidate profiles, assessments, hiring decisions, and retention, the foundation for understanding which candidate profiles succeed and which signals predict turnover.",
      "Learns continuously: every recruiter decision feeds back into future searches, so results get sharper over time without manual tuning.",
      "Delivered as a full-stack application with a live dashboard for reviewing ranked candidates and recording hiring decisions in real time.",
    ],

    stack: [
      "Python",
      "LangGraph",
      "LangChain",
      "Anthropic Claude API",
      "FastAPI",
      "Supabase (PostgreSQL)",
      "ChromaDB",
      "LangSmith",
      "Next.js 16",
      "TypeScript",
      "Tailwind CSS"
    ],

    results: [
      "Full pipeline working end-to-end: PDF upload → search → score → UI → feedback → learning loop.",
      "Recruiter feedback measurably changes system behavior, rejected candidates are filtered from future searches, not just logged.",
      "Clean separation between true failures and empty results, avoiding false-positive errors at the API layer.",
      "Fixed a cross-service data consistency bug so rejected-candidate filtering actually matches across Serper, PDL, and Supabase.",
      "In active development: HackerRank/TestGorilla assessment analysis, retention traceability (success rate by candidate profile, score-to-performance correlation, 3/6-month retention), history view for past decisions, non-technical role query tuning, light/dark theme toggle.",
    ],
  },
}
];

export const projectsBySlug = projects.reduce((acc, project) => {
  acc[project.slug] = project;
  return acc;
}, {});
