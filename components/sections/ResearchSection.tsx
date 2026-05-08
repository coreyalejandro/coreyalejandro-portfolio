import { researchTracks } from "@/data/profile";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/SectionHeader";

export function ResearchSection() {
  return (
    <section id="research" className="section-pad border-y border-border bg-card/25">
      <div className="container-shell">
        <SectionHeader
          eyebrow="Societal impact research agenda"
          title="Measurement ideas that fit Anthropic’s empirical feedback loop."
          description="These are framed as project directions, not completed systems. Their purpose is to show how the portfolio’s engineering methods would serve population-scale research."
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {researchTracks.map((track) => (
            <Card key={track.title} className="p-6">
              <p className="eyebrow text-[10px]">{track.label}</p>
              <h3 className="mt-3 text-xl font-bold">{track.title}</h3>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">{track.text}</p>
            </Card>
          ))}
        </div>
        <div className="mt-8 rounded-2xl border border-border bg-background/55 p-6">
          <p className="text-lg font-semibold">Core methodological claim</p>
          <p className="mt-3 max-w-4xl text-sm leading-7 text-muted-foreground">
            For high-reliance users, self-report can be part of the performance of competence. The stronger signal is behavioral: task initiation, independent completion, revision behavior, repeated decision delegation, and whether users stop doing work they previously initiated themselves.
          </p>
        </div>
      </div>
    </section>
  );
}
