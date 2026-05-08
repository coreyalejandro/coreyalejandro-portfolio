import { NavBar } from "@/components/NavBar";
import { HeroSection } from "@/components/sections/HeroSection";
import { ContractDemo } from "@/components/demo/ContractDemo";
import { SignalGrid } from "@/components/sections/SignalGrid";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ResearchSection } from "@/components/sections/ResearchSection";
import { ProofSection } from "@/components/sections/ProofSection";
import { FooterSection } from "@/components/sections/FooterSection";

export default function HomePage() {
  return (
    <main>
      <NavBar />
      <HeroSection />
      <section id="contract" className="section-pad">
        <div className="container-shell">
          <ContractDemo />
        </div>
      </section>
      <SignalGrid />
      <ProjectsSection />
      <ResearchSection />
      <ProofSection />
      <FooterSection />
    </main>
  );
}
