import chloeImg from "../assets/chloe_banner.jpeg";
import kivoImg from "../assets/kivo_banner.jpeg";
import ddtcImg from "../assets/ddtCalculator.png";
import rickMortyImg from "../assets/rick-morthy.png";
import expenseTrackingAppImg from "../assets/expense_tracking_app.png";

export const projects = [
  {
    id: 1,
    slug: "chloe",
    title: "Chloe",
    description: "AI voice agent - Lead qualification",
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
    description: "Automation platform - Internal ops assistant",
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
    description: "Pricing calculator - Fast quote experience",
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
    description: "API explorer - Character discovery UI",
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
    title: "Expenses record app",
    description: "Expense tracker - Simple personal finance",
    stack: "React · JS · Firebase",
    image: expenseTrackingAppImg,
    liveUrl: null,
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
];

export const projectsBySlug = projects.reduce((acc, project) => {
  acc[project.slug] = project;
  return acc;
}, {});
