import { projects } from "@/data/profile";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/SectionHeader";
import { ExternalLink, Code } from "lucide-react";

export function ProjectsSection() {
  return (
    <section id="projects" className="section-pad">
      <div className="container-shell">
        <SectionHeader
          eyebrow="Research Safety Agenda"
          title="Implemented systems and research tools for testing governable human-AI interaction."
          description="The featured work mirrors the AI safety and societal impact research agenda: every card states what was engineered, what evidence exists, and why it supports testing, inspection, and review for Safety or Societal Impacts."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <Card key={project.title} className="p-6">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-border bg-muted">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <Badge tone={project.statusTone}>{project.status}</Badge>
                      <h3 className="mt-3 text-2xl font-bold tracking-tight">{project.title}</h3>
                      <p className="mt-1 text-sm font-semibold text-muted-foreground">{project.subtitle}</p>
                    </div>
                  </div>
                  <p className="rounded-full border border-border bg-muted px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                    {project.track}
                  </p>
                </div>
                <p className="mt-5 text-sm leading-6 text-muted-foreground">{project.summary}</p>
                <ul className="mt-5 space-y-3">
                  {project.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.proof.map((proof) => <Badge key={proof}>{proof}</Badge>)}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button asChild variant="outline" size="sm"><a href={project.repo} target="_blank" rel="noopener noreferrer"><Code className="h-4 w-4" /> Repo</a></Button>
                  <Button asChild variant="secondary" size="sm"><a href={project.live} target={project.live.startsWith("#") ? undefined : "_blank"} rel="noopener noreferrer"><ExternalLink className="h-4 w-4" /> Demo / evidence</a></Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
