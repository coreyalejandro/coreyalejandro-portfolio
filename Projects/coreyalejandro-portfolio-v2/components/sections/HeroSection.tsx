import {
  ArrowRight,
  Code,
  Target,
  LayoutGrid,
  FileText,
  Scale,
  ArrowDownWideNarrow,
  Activity,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { profile } from "@/data/profile";
import ContractWindowDemo from "@/components/demo/ContractWindowDemo";

const featureBoxes = [
  {
    icon: Target,
    title: "Intent Anchor",
    text: "Keeps the user’s end goal visible throughout the session so work never drifts from the original objective.",
  },
  {
    icon: LayoutGrid,
    title: "C-RSP Kanban",
    text: "Task state is governed by the active C-RSP contract. Every item shows BACKLOG, IN PROGRESS, BLOCKED, or DONE.",
  },
  {
    icon: FileText,
    title: "Evidence Notes",
    text: "Task details and verification notes are recorded beside the work so context is never lost between turns.",
  },
  {
    icon: Scale,
    title: "V&T Truth Surface",
    text: "Claims are separated into Exists, Not Claimed, Non-existent, and Functional Status so truth-state is always legible.",
  },
  {
    icon: ArrowDownWideNarrow,
    title: "Ranked Next Steps",
    text: "Ordered actions by importance instead of vague follow-up suggestions. Rank 1 is always the next thing to do.",
  },
  {
    icon: Activity,
    title: "Intent Drift Check",
    text: "A second-pass review checks whether the work still matches the original intent. PASS means proceed; FAIL means repair first.",
  },
];

export function HeroSection() {
  return (
    <section
      id="top"
      className="container-shell grid min-h-[calc(100vh-4rem)] items-start gap-10 py-16 lg:grid-cols-[1fr_520px] lg:py-24"
    >
      <div className="max-w-3xl">
        <Badge tone="verified" className="mb-5">
          {profile.availability}
        </Badge>
        <h1 className="text-4xl font-black tracking-[-0.04em] sm:text-6xl lg:text-7xl">
          {profile.name}
        </h1>
        <p className="mt-4 max-w-2xl text-2xl font-semibold leading-tight text-foreground/90 sm:text-3xl">
          {profile.headline}
        </p>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
          {profile.subheadline} {profile.focus}
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Button asChild size="lg">
            <a href="#demo">
              Try the behavioral observability demo{" "}
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Code className="h-4 w-4" /> Review repos
            </a>
          </Button>
        </div>
        <div className="mt-10 grid gap-3 sm:grid-cols-3">
          {featureBoxes.map((box) => (
            <div key={box.title} className="surface p-4">
              <box.icon className="mb-2 h-5 w-5 text-primary" />
              <p className="font-semibold text-foreground">{box.title}</p>
              <p className="mt-1 text-sm text-muted-foreground">{box.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative h-full min-h-[400px]">
        <ContractWindowDemo />
      </div>
    </section>
  );
}
