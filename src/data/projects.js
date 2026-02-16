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
    stack: "Retell · n8n · Decision trees",
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
        "+60% of leads with phone numbers automatically validated.",
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
    stack: "n8n · Slack · Google Sheets",
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
        "HubSpot API",
        "Gmail API",
        "Google Sheets",
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
    stack: "React · CSS · JS",
    image: ddtcImg,
    liveUrl:
      "https://www.salvosoftware.com/dedicated-development-teams/#calculator",
    summary:
      "Interactive pricing flow to estimate dedicated team costs with instant feedback.",
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
      "Character explorer that consumes public API data with a fast browsing interface.",
  },
  {
    id: 5,
    slug: "expenses-record-app",
    title: "Expenses record app",
    description: "Expense tracker - Simple personal finance",
    stack: "React · Local state · CSS",
    image: expensesPlaceholderImg,
    liveUrl: null,
    summary:
      "Minimal expense tracker for daily records and quick personal finance visibility.",
  },
];

export const projectsBySlug = projects.reduce((acc, project) => {
  acc[project.slug] = project;
  return acc;
}, {});
