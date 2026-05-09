import { operatingPrinciples, skills, truthLegend } from "@/data/profile";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/SectionHeader";
import { Badge } from "@/components/ui/Badge";

export function ProofSection() {
  return (
    <section id="proof" className="section-pad">
      <div className="container-shell">
        <SectionHeader
          eyebrow="Truth surface"
          title="Built to reduce reviewer ambiguity."
          description="The refactor removes broad title stacks and theory-first presentation. It surfaces evidence, implementation status, and reviewer pathways instead."
        />
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Card className="p-6">
            <h3 className="text-xl font-bold">Claim status legend</h3>
            <div className="mt-5 space-y-4">
              {truthLegend.map((item) => (
                <div key={item.label} className="rounded-xl border border-border bg-muted/30 p-4">
                  <p className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-primary">{item.label}</p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.text}</p>
                </div>
              ))}
            </div>
          </Card>
          <Card className="p-6">
            <h3 className="text-xl font-bold">Technical skills signal</h3>
            <div className="mt-5 space-y-5">
              {skills.map((group) => (
                <div key={group.label}>
                  <p className="mb-2 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">{group.label}</p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => <Badge key={item}>{item}</Badge>)}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
        <Card className="mt-6 p-6">
          <h3 className="text-xl font-bold">Operating principles for this portfolio</h3>
          <ul className="mt-5 grid gap-3 md:grid-cols-2">
            {operatingPrinciples.map((principle) => (
              <li key={principle} className="rounded-xl border border-border bg-muted/25 p-4 text-sm leading-6 text-muted-foreground">
                {principle}
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </section>
  );
}
