import img0 from "../assets/arloImg.jpeg";
import img1 from "../assets/chloe_banner.jpeg";
import img2 from "../assets/kivo_banner.jpeg";
import img3 from "../assets/ddtCalculator.png";
import img4 from "../assets/expense-record-cover-dark-en.png";
import img5 from "../assets/rick-morthy.png";

const projects = [
  {
    "slug": "barry",
    "imgPos": "center 30%",
    "title": "Barry",
    "stack": [
      "LangGraph",
      "Claude",
      "FastAPI",
      "Next.js",
      "Supabase",
      "ChromaDB",
      "LangSmith"
    ],
    "live": null,
    "ai": true,
    "en": {
      "tag": "AI recruiting agent",
      "desc": "Sources, enriches and scores candidates — and learns from every recruiter decision.",
      "problem": "Sourcing was manual, assessments were read as pass/fail, and nothing linked a hire to how it turned out.",
      "solution": [
        "Job description + keywords → ranked, scored shortlist",
        "Pre-screens candidates and flags strengths, risks and interview questions",
        "Recruiter feedback loops back into future searches"
      ],
      "results": [
        "End-to-end pipeline: PDF → search → score → UI → feedback → learning",
        "Rejected candidates are filtered from future searches, not just logged",
        "Reduced bad hires with empirical data"
      ]
    },
    "es": {
      "tag": "Agente de reclutamiento IA",
      "desc": "Busca, enriquece y califica candidatos — y aprende de cada decisión del reclutador.",
      "problem": "El sourcing era manual, las evaluaciones se leían como pasa/no pasa y nada conectaba una contratación con su resultado.",
      "solution": [
        "Descripción + keywords → shortlist ordenada y calificada",
        "Pre-filtra candidatos con fortalezas, riesgos y preguntas sugeridas",
        "El feedback del reclutador alimenta búsquedas futuras"
      ],
      "results": [
        "Pipeline completo: PDF → búsqueda → score → UI → feedback → aprendizaje",
        "Los candidatos rechazados se filtran en búsquedas futuras",
        "Reducción de malas contrataciones con datos empíricos"
      ]
    },
    "img": img0
  },
  {
    "slug": "chloe",
    "imgPos": "center 42%",
    "title": "Chloe",
    "stack": [
      "Retell AI",
      "ElevenLabs",
      "n8n",
      "JavaScript",
      "Google Workspace"
    ],
    "live": null,
    "ai": true,
    "en": {
      "tag": "AI voice agent",
      "desc": "Calls and validates leads in real time, then hands qualified ones straight to sales.",
      "problem": "Manual qualification collapses with volume: calls get delayed, intent cools off, outcomes go untracked.",
      "solution": [
        "Personalized calls using real lead context",
        "LLM-driven conversation flow that adapts live",
        "Instant transfer to sales when intent is confirmed",
        "Post-call summaries, next steps and scheduling"
      ],
      "results": [
        "Instant filtering of spam and wrong numbers",
        "Fully automated follow-up for passive leads",
        "Real-time logs for campaign optimization"
      ]
    },
    "es": {
      "tag": "Agente de voz IA",
      "desc": "Llama y valida leads en tiempo real, y pasa los calificados directo a ventas.",
      "problem": "La calificación manual colapsa con volumen: llamadas tardías, intención que se enfría, resultados sin rastro.",
      "solution": [
        "Llamadas personalizadas con contexto real del lead",
        "Conversación guiada por LLM que se adapta en vivo",
        "Transferencia inmediata a ventas al confirmar intención",
        "Resúmenes, siguientes pasos y agenda automática"
      ],
      "results": [
        "Filtrado instantáneo de spam y números erróneos",
        "Seguimiento 100% automático de leads pasivos",
        "Logs en tiempo real para optimizar campañas"
      ]
    },
    "img": img1
  },
  {
    "slug": "kivo",
    "imgPos": "center 15%",
    "title": "Kivo",
    "stack": [
      "n8n",
      "JavaScript",
      "Google Workspace",
      "Retell (via Chloe)",
      "HubSpot CRM"
    ],
    "live": null,
    "ai": true,
    "en": {
      "tag": "AI ops agent",
      "desc": "Triages every inbound lead, detects intent and keeps CRM and tools in sync.",
      "problem": "Human triage was the bottleneck: every minute of delay cost intent and consistency.",
      "solution": [
        "Analyzes each submission in real time",
        "Detects intent signals and spam patterns",
        "Delegates phone validation to Chloe",
        "Drafts campaign-aligned emails"
      ],
      "results": [
        "Response time down to seconds",
        "Personalized emails with higher reply rates",
        "False leads filtered before costing human time"
      ]
    },
    "es": {
      "tag": "Agente de operaciones IA",
      "desc": "Clasifica cada lead entrante, detecta intención y mantiene CRM y herramientas sincronizados.",
      "problem": "El triage humano era el cuello de botella: cada minuto de retraso costaba intención y consistencia.",
      "solution": [
        "Analiza cada envío en tiempo real",
        "Detecta señales de intención y spam",
        "Delega la validación telefónica a Chloe",
        "Redacta correos alineados a la campaña"
      ],
      "results": [
        "Tiempo de respuesta reducido a segundos",
        "Correos personalizados con más respuestas",
        "Leads falsos filtrados antes de consumir tiempo humano"
      ]
    },
    "img": img2
  },
  {
    "slug": "dtc",
    "imgPos": "center top",
    "title": "Dedicated Teams Calculator",
    "stack": [
      "React",
      "WordPress",
      "Python λ",
      "MySQL"
    ],
    "live": "https://www.salvosoftware.com/dedicated-development-teams/#calculator",
    "ai": false,
    "en": {
      "tag": "Pricing tool",
      "desc": "A fast quote experience for dedicated development teams.",
      "problem": "Pricing conversations relied on manual, fragmented calculations across teams.",
      "solution": [
        "Shaped the concept with sales leadership",
        "Salary benchmarking and stack definition per role",
        "Worked with UX, PMs and devs on structure and UI"
      ],
      "results": [
        "Clearer, consistent pricing conversations",
        "Faster proposal preparation",
        "Sales and delivery aligned on roles and costs"
      ]
    },
    "es": {
      "tag": "Herramienta de cotización",
      "desc": "Cotizaciones rápidas para equipos de desarrollo dedicados.",
      "problem": "Las cotizaciones dependían de cálculos manuales y fragmentados entre equipos.",
      "solution": [
        "Definí el concepto con dirección de ventas",
        "Benchmark salarial y stack por rol",
        "Trabajé con UX, PMs y devs en estructura e interfaz"
      ],
      "results": [
        "Conversaciones de precio más claras",
        "Propuestas más rápidas",
        "Ventas y entrega alineadas en roles y costos"
      ]
    },
    "img": img3
  },
  {
    "slug": "expense",
    "imgPos": "center 45%",
    "title": "Expense Record App",
    "stack": [
      "React",
      "JavaScript",
      "Firebase",
      "CSS Modules"
    ],
    "live": "https://expenserecordapp.netlify.app",
    "ai": false,
    "en": {
      "tag": "Personal finance",
      "desc": "A personal finance app with an AI agent that guides you toward your savings goals.",
      "problem": "Keeping your accounts in a boring spreadsheet is slow, and most people give up before it ever helps them save.",
      "solution": [
        "A simple but fast UI built for daily use: log an expense in seconds",
        "An AI agent that guides you toward your savings goals with advice based on your own spending",
        "Set your budget and follow it day by day, with spending grouped by category",
        "Clean separation of UI and business logic, with reusable components in CSS Modules"
      ],
      "results": [
        "Replaces the spreadsheet with a faster, easier way to keep your accounts",
        "Budget progress and category breakdown visible at a glance",
        "Savings goals backed by the guidance of an intelligent agent"
      ]
    },
    "es": {
      "tag": "Finanzas personales",
      "desc": "Una app de finanzas personales con un agente de IA que te guía hacia tus metas de ahorro.",
      "problem": "Llevar tus cuentas en un Excel aburrido es lento, y la mayoría lo abandona antes de que le ayude a ahorrar.",
      "solution": [
        "Una interfaz sencilla pero ágil, pensada para el uso diario: registra un gasto en segundos",
        "Un agente de IA que te guía hacia tus metas de ahorro con consejos basados en tus propios gastos",
        "Define tu presupuesto y síguelo día a día, con los gastos agrupados por categoría",
        "Separación limpia entre UI y lógica, con componentes reutilizables en CSS Modules"
      ],
      "results": [
        "Reemplaza el Excel con una forma más rápida y fácil de llevar tus cuentas",
        "Avance del presupuesto y desglose por categoría a simple vista",
        "Metas de ahorro respaldadas por la asesoría de un agente inteligente"
      ]
    },
    "img": img4
  },
  {
    "slug": "rick-morty",
    "imgPos": "center top",
    "title": "Rick & Morty",
    "stack": [
      "React",
      "REST API",
      "React Router",
      "CSS"
    ],
    "live": "https://subtle-pasca-8707dd.netlify.app/",
    "ai": false,
    "en": {
      "tag": "API explorer",
      "desc": "Character discovery UI consuming a public REST API.",
      "problem": "Needed hands-on practice with components, state and real external data.",
      "solution": [
        "React app consuming the Rick and Morty API",
        "Live search and filtering",
        "Routing with React Router"
      ],
      "results": [
        "Solid grasp of React fundamentals and data fetching"
      ]
    },
    "es": {
      "tag": "Explorador de API",
      "desc": "Interfaz para descubrir personajes consumiendo una API REST pública.",
      "problem": "Necesitaba práctica real con componentes, estado y datos externos.",
      "solution": [
        "App en React que consume la API de Rick and Morty",
        "Búsqueda y filtros en vivo",
        "Navegación con React Router"
      ],
      "results": [
        "Dominio sólido de fundamentos de React y consumo de APIs"
      ]
    },
    "img": img5
  },
];

export default projects;

export const getProject = (slug) => projects.find((p) => p.slug === slug);
