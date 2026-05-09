import { safetyProposals, societalProposals } from "@/data/profile";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/SectionHeader";

function ProposalCard({
  label,
  title,
  question,
  focus,
  tooling,
}: {
  label: string;
  title: string;
  question: string;
  focus: string;
  tooling: string;
}) {
  return (
    <Card className="p-6">
      <p className="eyebrow text-[10px]">{label}</p>
      <h3 className="mt-3 text-xl font-bold">{title}</h3>
      <div className="mt-4 space-y-3">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
            Research question
          </p>
          <p className="mt-1 text-sm leading-6 text-muted-foreground">{question}</p>
        </div>
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
            Measurement focus
          </p>
          <p className="mt-1 text-sm leading-6 text-muted-foreground">{focus}</p>
        </div>
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
            Tooling connection
          </p>
          <p className="mt-1 text-sm leading-6 text-muted-foreground">{tooling}</p>
        </div>
      </div>
    </Card>
  );
}

export function ResearchSection() {
  return (
    <section id="research" className="section-pad border-y border-border bg-card/25">
      <div className="container-shell">
        <SectionHeader
          eyebrow="Societal Tools Agenda"
          title="Six research proposals for testing safety, behavioral observability, and differential harm in high-reliance human-AI interaction."
          description="These are proposals, not completed studies. Their purpose is to show how the portfolio's implemented systems would serve population-scale safety and societal impact research. None of these proposals have been externally validated."
        />

        <div className="mb-8">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.16em] text-primary">
            Safety Research Proposals
          </p>
          <div className="grid gap-5 lg:grid-cols-3">
            {safetyProposals.map((p) => (
              <ProposalCard
                key={p.title}
                label={p.label}
                title={p.title}
                question={p.question}
                focus={p.focus}
                tooling={p.tooling}
              />
            ))}
          </div>
        </div>

        <div>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.16em] text-primary">
            Societal Impact Research Proposals
          </p>
          <div className="grid gap-5 lg:grid-cols-3">
            {societalProposals.map((p) => (
              <ProposalCard
                key={p.title}
                label={p.label}
                title={p.title}
                question={p.question}
                focus={p.focus}
                tooling={p.tooling}
              />
            ))}
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-border bg-background/55 p-6">
          <p className="text-lg font-semibold">Core methodological claim</p>
          <p className="mt-3 max-w-4xl text-sm leading-7 text-muted-foreground">
            For high-reliance users, self-report can be part of the performance of competence. The
            stronger signal is behavioral: task initiation, independent completion, revision
            behavior, repeated decision delegation, and whether users stop doing work they
            previously initiated themselves.
          </p>
        </div>
      </div>
    </section>
  );
}
