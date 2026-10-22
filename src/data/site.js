export const skills = [
  { g: "Agents", ges: "Agentes", items: ["LangGraph", "LangChain", "Anthropic Claude", "LangSmith", "RAG"] },
  { g: "Automation", ges: "Automatización", items: ["n8n", "Retell AI", "ElevenLabs", "Webhooks", "REST APIs"] },
  { g: "Code", ges: "Código", items: ["Python", "TypeScript", "JavaScript", "React", "Next.js", "FastAPI"] },
  { g: "Data", ges: "Datos", items: ["PostgreSQL", "Supabase", "ChromaDB"] },
  { g: "Quality", ges: "Calidad", items: ["Cypress", "Postman", "Gherkin"] },
];

export const courses = [
  { t: "Software Product Management", o: "University of Alberta", y: "2025", url: "https://www.coursera.org/account/accomplishments/specialization/CS0M4THYKAYW" },
  { t: "Software Testing for Developers", o: "Codio", y: "2024", url: "https://www.coursera.org/account/accomplishments/verify/XD3ZQ2KFVEGA" },
  { t: "Full Stack Web Developer", o: "Academlo", y: "2022", url: "https://verified.sertifier.com/en/verify/00470908666115/" },
];

export const links = {
  linkedin: "https://www.linkedin.com/in/luis-zarza/",
  github: "https://github.com/Ludwig-a11",
};

export const agentLog = [
  { k: "in", t: "webhook › new lead  #4821  source=landing" },
  { k: "run", t: "kivo.classify(intent)  → high · 0.91" },
  { k: "run", t: "kivo.spam_check  → clean" },
  { k: "run", t: "delegate › chloe.call(+52 ··· 4410)" },
  { k: "voice", t: "chloe  “Hi Ana, this is Chloe from…”" },
  { k: "run", t: "chloe.intent  → confirmed · transfer" },
  { k: "out", t: "crm.update  stage=qualified  owner=sales" },
  { k: "out", t: "calendar.book  Thu 11:00 CST  ✓" },
];
