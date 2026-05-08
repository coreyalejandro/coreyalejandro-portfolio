import { ArrowRight, Github, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { profile } from "@/data/profile";
import { AgentSentinelDemo } from "@/components/demo/AgentSentinelDemo";

export function HeroSection() {
  return (
    <section id="top" className="container-shell grid min-h-[calc(100vh-4rem)] items-center gap-10 py-16 lg:grid-cols-[1fr_520px] lg:py-24">
      <div className="max-w-3xl">
        <Badge tone="verified" className="mb-5">{profile.availability}</Badge>
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
            <a href="#demo">Try the behavioral observability demo <ArrowRight className="h-4 w-4" /></a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href={profile.github} target="_blank" rel="noreferrer"><Github className="h-4 w-4" /> Review repos</a>
          </Button>
        </div>
        <div className="mt-10 grid gap-3 sm:grid-cols-3">
          <div className="surface p-4"><p className="font-mono text-2xl font-bold text-success">62/62</p><p className="mt-1 text-sm text-muted-foreground">TLC verification tests reported</p></div>
          <div className="surface p-4"><p className="font-mono text-2xl font-bold text-primary">17</p><p className="mt-1 text-sm text-muted-foreground">Agent Sentinel anomaly categories</p></div>
          <div className="surface p-4"><p className="flex items-center gap-2 font-mono text-2xl font-bold text-warning"><ShieldCheck className="h-5 w-5" />2</p><p className="mt-1 text-sm text-muted-foreground">Reviewer paths: Safety + Societal Impacts</p></div>
        </div>
      </div>
      <AgentSentinelDemo compact />
    </section>
  );
}
