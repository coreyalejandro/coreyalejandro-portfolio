import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Github, Mail } from "lucide-react";

const navItems = [
  { href: "#signals", label: "Signals" },
  { href: "#demo", label: "Demo" },
  { href: "#projects", label: "Projects" },
  { href: "#research", label: "Research" },
  { href: "#proof", label: "Proof" }
];

export function NavBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/82 backdrop-blur-xl">
      <div className="container-shell flex h-16 items-center justify-between">
        <Link href="#top" className="font-mono text-sm font-bold tracking-[0.18em] text-primary">
          CA://AI-SAFETY
        </Link>
        <nav className="hidden items-center gap-5 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-muted-foreground transition hover:text-foreground">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" size="sm" className="hidden sm:inline-flex">
            <a href="mailto:corey@coreyalejandro.com"><Mail className="h-4 w-4" /> Contact</a>
          </Button>
          <Button asChild size="sm">
            <a href="https://github.com/coreyalejandro" target="_blank" rel="noreferrer"><Github className="h-4 w-4" /> GitHub</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
