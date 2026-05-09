import { cn } from "@/lib/utils";

type BadgeTone = "verified" | "implemented" | "prototype" | "roadmap" | "neutral";

const toneClass: Record<BadgeTone, string> = {
  verified: "border-success/35 bg-success/10 text-success",
  implemented: "border-primary/35 bg-primary/10 text-primary",
  prototype: "border-warning/35 bg-warning/10 text-warning",
  roadmap: "border-muted-foreground/25 bg-muted text-muted-foreground",
  neutral: "border-border bg-muted/60 text-muted-foreground"
};

export function Badge({ children, tone = "neutral", className }: { children: React.ReactNode; tone?: BadgeTone; className?: string }) {
  return (
    <span className={cn("inline-flex rounded-full border px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.16em]", toneClass[tone], className)}>
      {children}
    </span>
  );
}
