import { signalCards } from "@/data/profile";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { SectionHeader } from "@/components/SectionHeader";

export function SignalGrid() {
  return (
    <section id="signals" className="section-pad border-y border-border/70 bg-card/25">
      <div className="container-shell">
        <SectionHeader
          eyebrow="Reviewer signal map"
          title="One portfolio, two Anthropic paths."
          description="The page is organized so Safety reviewers see verification and evals, while Societal Impacts reviewers see behavioral measurement and differential harm infrastructure."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {signalCards.map((card) => {
            const Icon = card.icon;
            return (
              <Card key={card.title} className="shadow-line">
                <CardHeader>
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-muted">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <p className="eyebrow text-[10px]">{card.label}</p>
                  <CardTitle>{card.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-6 text-muted-foreground">{card.text}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
