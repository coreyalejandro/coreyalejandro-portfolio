import { Github, Mail, ExternalLink } from "lucide-react";

export function FooterSection() {
  return (
    <footer className="border-t border-border bg-card/40 py-10">
      <div className="container-shell flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <p className="font-mono text-sm font-bold tracking-[0.16em]">COREY ALEJANDRO</p>
          <p className="mt-2 text-sm text-muted-foreground">AI Safety + Societal Impact research infrastructure.</p>
        </div>
        <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
          <a className="inline-flex items-center gap-2 hover:text-foreground" href="https://github.com/coreyalejandro" target="_blank" rel="noreferrer"><Github className="h-4 w-4" /> GitHub</a>
          <a className="inline-flex items-center gap-2 hover:text-foreground" href="mailto:corey@coreyalejandro.com"><Mail className="h-4 w-4" /> Email</a>
          <a className="inline-flex items-center gap-2 hover:text-foreground" href="https://agent-sentinel-alignment-anomaly-de.vercel.app" target="_blank" rel="noreferrer"><ExternalLink className="h-4 w-4" /> Agent Sentinel</a>
        </div>
      </div>
    </footer>
  );
}
