import chloeImg from "../assets/chloe_banner.jpeg";
import kivoImg from "../assets/kivo_banner.jpeg";
import ddtcImg from "../assets/ddtCalculator.png";
import rickMortyImg from "../assets/rick-morthy.png";
import expensesPlaceholderImg from "../assets/project1Pic.jpg";

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
      hero:
        "Chloe is an AI-driven voice agent that calls leads to validate intent and data, routes outcomes in real time, and triggers follow-ups.",
      problem: [
        "Sales reps spend time calling wrong numbers, spam contacts, or unqualified leads.",
        "Lead validation falls behind during busy periods, creating backlog and lost opportunities.",
        "Follow-ups are often inconsistent, and outcomes are not always captured cleanly for analysis.",
        "Campaigns and reactivation efforts require heavy manual coordination without automation.",
      ],
      solution: [
        "Places personalized phone calls using lead context.",
        "Adjusts conversation flow dynamically using LLM-based logic.",
        "Transfers hot leads to sales in real time when qualification is confirmed.",
        "Terminates spam or wrong numbers quickly.",
        "Sends post-call summaries and next steps automatically.",
        "Schedules meetings via calendar integration.",
        "Returns outcomes back to Kivo and sales for downstream routing.",
      ],
      stack: [
        "Retell AI",
        "n8n",
        "Google Sheets",
        "Custom Webhook",
        "Gmail API",
        "Google Calendar API",
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
      hero:
        "Kivo is an automated scoring and response agent that analyzes inbound web leads in real time, filters noise, and drafts personalized replies.",
      problem: [
        "Sales teams lose time triaging spam, bots, and low-intent submissions.",
        "Response speed suffers when humans must validate, classify, and route every message.",
        "Leads get cold fast due to delays, reducing conversion.",
        "Without strict traceability, follow-up becomes inconsistent.",
      ],
      solution: [
        "Analyzes each new form submission as it arrives.",
        "Validates intent signals and detects spam or bot patterns.",
        "Classifies contact type and extracts useful context.",
        "Checks for phone number presence and delegates phone validation to Chloe.",
        "Drafts campaign-aligned emails for qualified contacts.",
        "Updates CRM workflow and preserves traceability across tools.",
      ],
      stack: [
        "n8n",
        "HubSpot",
        "Google Workspace",
        "Salck",
        "Retell AI (via Chloe)",
      ],
      results: [
        "Response time reduced to under 10 seconds after form submission.",
        "Personalized context-aware outbound emails improved reply likelihood.",
        "Spam and false leads filtered before consuming human time.",
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
    summary:
      "Dedicated Developemtn Team Cost Calculator. ",
    details: {
      hero: 
        "A sales support initiative focused on improving pricing clarity and proposal preparation efficiency.",

      problem: [
        "Sales conversations around dedicated development teams required significant manual effort and coordination across multiple teams.",
        "There was a need for clearer cost structures to support discussions around roles, salaries, and team composition.",
      ],
      solution: [
        "Worked closely with sales leadership during the early conceptualization phase of a dedicated team cost calculator, with the goal of supporting pricing conversations.",
        "Collaborated with UX/UI designers, project managers, and developers, contributing inputs from a business and sales perspective.",
        "Supported the initiative through research and implementation tasks such as salary benchmarking, defining appropriate tech stacks by role, and providing input on the interface and overall structure within the company’s website."
      ],
      stack: [
        "React.js",
        "WordPress",
        "Python - lambdas",
        "JavaScript - lambdas",
        "MySQL"
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
    summary:
      "Rick and Morty Character Explorer",
    details: {
      hero:
        "A front-end project built during my Full Stack Web Developer training to practice React fundamentals and API consumption.",

      problem: [
        "As part of my training, I needed to strengthen my understanding of component-based architecture, state management, and data fetching in React.",
        "The challenge was to consume and display dynamic data from an external API while providing a clear and interactive user experience."
      ],

      solution: [
        "Developed a React-based application that consumes the Rick and Morty public API to display character information.",
        "Implemented a search feature that allows users to filter and explore characters dynamically.",
        "Used React Router to manage navigation and structure the application into reusable views and components.",
        "Styled the application using CSS, focusing on clarity, layout, and usability."
      ],

      stack: [
        "React",
        "CSS",
        "Public API consumption",
        "React Router",
        "Component-based architecture"
      ],

      results: [
        "Strengthened my understanding of React fundamentals, including components, props, state, and lifecycle concepts.",
        "Gained hands-on experience consuming external APIs and rendering dynamic data.",
        "Improved my ability to structure front-end applications and implement basic navigation and search functionality."
      ],
    }
  },
  {
    id: 5,
    slug: "expenses-record-app",
    title: "Expenses record app",
    description: "Expense tracker - Simple personal finance",
    stack: "React · JS · Firebase",
    image: expensesPlaceholderImg,
    liveUrl: null,
    summary:
      "Expense tracker for daily records and quick personal finance visibility.",
    details: {
      hero:
        "A modern expense tracking application focused on clarity, usability, and clean architecture.",
      problem: [
        "Managing personal expenses often becomes messy and time-consuming when data entry is inconsistent or interfaces are unclear.",
        "Many expense tracking tools prioritize features over usability, making simple actions like categorizing or reviewing expenses harder than necessary.",
        "Developers frequently struggle to keep UI components scalable and maintainable as applications grow."  
      ],
      solution: [
        "Designed and built a clean, modular expense tracking app with a strong separation between presentation and business logic.",
        "Implemented reusable UI elements using CSS Modules and a consistent component architecture to ensure scalability.",
        "Created controlled inputs and validation logic to improve data accuracy and user experience when entering expenses."
      ],
      stack: [
        "React",
        "JavaScript",
        "CSS",
        "Firebase (authentication and data handling)"
      ],
      results: [
        "An actively evolving project, currently under development, used to experiment with and refine best practices in UI design, state management, and front-end architecture."
      ],
    },
  },
];

export const projectsBySlug = projects.reduce((acc, project) => {
  acc[project.slug] = project;
  return acc;
}, {});
