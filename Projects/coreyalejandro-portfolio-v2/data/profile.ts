import { ShieldCheck, Activity, BrainCircuit, GitBranch, HeartPulse, Layers3 } from "lucide-react";

export const profile = {
  name: "Corey Alejandro",
  headline: "Research infrastructure for high-stakes human-AI interaction",
  subheadline:
    "Runtime verification for AI safety and behavioral observability for societal impact.",
  github: "https://github.com/coreyalejandro",
  email: "mailto:corey@coreyalejandro.com",
  availability: "Available for AI Safety + Societal Impacts roles",
  focus:
    "I build systems that turn ambiguous human-AI dynamics into observable states, verification surfaces, audit records, and decision-ready evidence."
};

export const signalCards = [
  {
    icon: ShieldCheck,
    label: "AI Safety",
    title: "Runtime verification",
    text: "Contract-state systems, evidence gates, phantom-completion checks, and repair obligations for long-context AI workflows."
  },
  {
    icon: Activity,
    label: "Societal Impact",
    title: "Behavioral observability",
    text: "Instrumentation for deference escalation, agency erosion, repeated delegation, and high-reliance use patterns."
  },
  {
    icon: HeartPulse,
    label: "Differential Harm",
    title: "Vulnerable-user safety",
    text: "Safety infrastructure designed from neurodivergent, disabled, non-traditional, and high-need user contexts."
  },
  {
    icon: GitBranch,
    label: "Research Engineering",
    title: "Full-stack research loop",
    text: "Study design, data schemas, local-first tooling, React/TypeScript interfaces, JSON audit exports, and reproducible evidence surfaces."
  }
];

export const projects = [
  {
    title: "Agent Sentinel",
    subtitle: "Behavioral Anomaly & Alignment Diagnostic Platform",
    repo: "https://github.com/coreyalejandro/Agent-Sentinel-Alignment-Anomaly-Detector",
    live: "https://agent-sentinel-alignment-anomaly-de.vercel.app",
    track: "Societal impact research tool",
    status: "Implemented",
    statusTone: "implemented" as const,
    icon: Activity,
    summary:
      "A diagnostic platform that turns agentic interaction logs into structured anomaly signals with lay-readable explanations, contestability states, and repair paths.",
    bullets: [
      "Built a React/TypeScript diagnostic platform that ingests local agentic interaction logs and analyzes them across 17 structured anomaly categories, including goal drift, omission patterns, deference escalation, and alignment failures.",
      "Implemented File System Access API ingestion, binary-file detection, preview truncation, byte-count tracking, risk topology visualization, and structured JSON audit export.",
      "Designed typed anomaly schemas and modular UI components to support future extension toward cohort-level behavioral analysis and longitudinal human-AI interaction measurement."
    ],
    proof: ["17 anomaly categories", "local log ingestion", "contest/repair loop", "JSON audit export"]
  },
  {
    title: "The Living Constitution",
    subtitle: "Runtime Verification & Contract-State System",
    repo: "https://github.com/coreyalejandro/the-living-constitution",
    live: "https://youtu.be/7iqq1nRdKFg",
    track: "Safety research tool",
    status: "Verified tests",
    statusTone: "verified" as const,
    icon: ShieldCheck,
    summary:
      "A tested runtime verification architecture that makes task state, evidence, repair obligations, and truth status inspectable per interaction turn.",
    bullets: [
      "Built a runtime contract-state system that enforces structured task tracking, evidence verification, and repair obligations per interaction turn.",
      "Implemented SessionRecorder, ContractWindow, and BicameralReview modules to detect phantom completion, missing evidence, unresolved repair obligations, and safety/relational review failures.",
      "Verified the system with a passing test suite covering SessionRecorder, ContractWindow behavior, and full-suite integration checks: 62/62 tests passing."
    ],
    proof: ["62/62 tests", "SessionRecorder", "ContractWindow", "BicameralReview"]
  },
  {
    title: "UICare / HUI",
    subtitle: "Behavioral Safety System for High-Risk Neurodivergent Users",
    repo: "https://github.com/coreyalejandro/UICare-System",
    live: "#demo",
    track: "Differential harm research tool",
    status: "Implemented prototype",
    statusTone: "prototype" as const,
    icon: HeartPulse,
    summary:
      "A fail-safe PWA exploring consent-aware behavioral safety infrastructure for neurodivergent users during elevated-risk states.",
    bullets: [
      "Built a fail-safe Progressive Web App for high-risk neurodivergent users, with behavioral-state tracking designed to detect manic, compulsive, or destabilizing activity patterns before they escalate into high-stakes actions.",
      "Implemented restrictive action gates, local-first safety logic, high-reliability state management, and consent-aware monitoring flows to slow or block risky user actions during elevated-risk periods.",
      "Designed the system architecture around observable behavioral signals, secure surveillance loops, and user-facing intervention states, translating lived safety requirements into a concrete application workflow."
    ],
    proof: ["PWA", "restrictive action gates", "local-first safety", "consent-aware flows"]
  },
  {
    title: "Meta-Prompt Architect",
    subtitle: "Structured Prompt Engineering & Evaluation Platform",
    repo: "https://github.com/coreyalejandro/Meta-Prompt-Architect",
    live: "https://ai.studio/apps/34d58bd0-0f42-4058-b4ab-265711ccde10",
    track: "Research infrastructure tool",
    status: "Implemented",
    statusTone: "implemented" as const,
    icon: Layers3,
    summary:
      "A developer-facing platform for transforming fragile prompts into structured, testable, exportable instruction artifacts.",
    bullets: [
      "Built a structured prompt-engineering platform with a three-phase pipeline for intent audit, adversarial stress testing, and instruction synthesis before generating the final executable prompt artifact.",
      "Implemented developer tooling for prompt versioning, branch/diff workflows, IDE export, .cursorrules generation, token budgeting, PII redaction, and JSON/Markdown export.",
      "Designed structured output architecture for cross-model evaluation, including verification gates, cognitive audit records, reusable prompt artifacts, and model-targeted instruction packaging."
    ],
    proof: ["intent audit", "adversarial stress test", "IDE export", "PII redaction"]
  }
];

export const safetyProposals = [
  {
    group: "Safety Research Proposals",
    label: "Safety Proposal 01",
    title: "Contract Window Intent Fidelity",
    question:
      "Can a persistent Contract Window reduce task drift, phantom completion, and unverifiable claims during long-context AI-assisted work?",
    focus:
      "Intent preservation, evidence completion, repair-trigger frequency, V&T accuracy, and user correction rate.",
    tooling: "TLC, C-RSP, Contract Window, V&T truth surface."
  },
  {
    group: "Safety Research Proposals",
    label: "Safety Proposal 02",
    title: "Runtime Governance for Agentic Workflows",
    question:
      "Can C-RSP-governed task state improve reliability, auditability, and halt behavior in agentic build workflows?",
    focus:
      "Task-state accuracy, halt-condition detection, acceptance-criteria coverage, rollback clarity, and evidence trace completeness.",
    tooling: "C-RSP contracts, Kanban state, halt matrix, verifier class, acceptance criteria."
  },
  {
    group: "Safety Research Proposals",
    label: "Safety Proposal 03",
    title: "Intent Drift Scoring with Second-Pass Review",
    question:
      "Can a second LLM or agent detect intent drift before the primary workflow produces misleading or misaligned output?",
    focus:
      "Pass/fail drift classification, disagreement rate, false pass rate, false fail rate, repair instruction quality.",
    tooling: "Intent Score block, second-pass review, drift repair instructions, ranked next steps."
  }
];

export const societalProposals = [
  {
    group: "Societal Impact Research Proposals",
    label: "Societal Proposal 01",
    title: "Population-Segmented Deference Signals",
    question:
      "How do different user groups show escalating deference to AI systems across repeated interactions?",
    focus:
      "Position revision, cessation of follow-up questioning, unmodified output submission, acceptance-without-review behavior, and cohort-level deference curves.",
    tooling: "Agent Sentinel, behavioral observability, anomaly categories, local interaction logs."
  },
  {
    group: "Societal Impact Research Proposals",
    label: "Societal Proposal 02",
    title: "Longitudinal Agency Erosion Measurement",
    question:
      "Can repeated AI interaction reduce independent task initiation, independent completion, or user confidence over time?",
    focus:
      "Task initiation rate, independent completion rate, repeated decision delegation, user override behavior, and decline in self-directed problem solving.",
    tooling: "Longitudinal log analysis, behavioral-state tracking, high-reliance interaction measurement."
  },
  {
    group: "Societal Impact Research Proposals",
    label: "Societal Proposal 03",
    title: "Differential Harm and Vulnerable-User Safety",
    question:
      "How can AI systems detect and respond to higher-risk interaction patterns for neurodivergent, disabled, or high-reliance users without relying only on self-report?",
    focus:
      "Compulsive repetition, escalation loops, over-delegation, destabilizing interaction patterns, intervention timing, and consent-aware safety gates.",
    tooling: "HUI / UICare, local-first monitoring, restrictive action gates, consent-aware behavioral safety flows."
  }
];

export const skills = [
  { label: "Research Engineering", items: ["human-AI interaction measurement", "behavioral instrumentation", "safety evaluations", "anomaly detection", "audit surfaces", "evidence schemas"] },
  { label: "AI / LLM Systems", items: ["Python", "RAG", "DSPy", "Axolotl", "structured LLM outputs", "model-assisted evaluation", "synthetic data"] },
  { label: "Data Infrastructure", items: ["async Python pipelines", "JSON Schema", "audit records", "multimodal ingestion", "cohort-level signals", "metadata security"] },
  { label: "Full-Stack Tooling", items: ["React", "Next.js App Router", "TypeScript", "Progressive Web Apps", "File System Access API", "Vercel"] },
  { label: "Human Factors", items: ["neurodivergent-first design", "WCAG", "trauma-informed interface logic", "instructional systems design", "non-traditional learner support"] }
];

export const truthLegend = [
  { label: "Implemented", text: "Runs as code or application workflow; still may need external validation." },
  { label: "Verified", text: "Has reproducible test evidence or inspection-ready validation artifacts." },
  { label: "Prototype", text: "Built enough to demonstrate the method; not claimed as production deployment." },
  { label: "Roadmap", text: "Planned capability; never framed as completed work." }
];

export const operatingPrinciples = [
  "GitHub proves the build; portfolio explains why the build matters.",
  "The demo isolates one safety mechanism: detect a behavioral signal, explain it plainly, let the user contest it, and apply a repair.",
  "Theory appears only when attached to an implemented artifact or falsifiable measurement plan.",
  "Every strong claim gets a status label: implemented, verified, prototype, or roadmap.",
  "The visitor should understand the Safety path and the Societal Impacts path in under 30 seconds."
];
