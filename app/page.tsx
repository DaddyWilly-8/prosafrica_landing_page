import Hero from "@/components/home/Hero";
import ValuePropositionSection from "@/components/home/ValuePropositionSection";
import ClientssSection from "@/components/home/ClientssSection";
import JoinTeams from "@/components/home/JoinTeams";
import ManagementTools from "@/components/home/ManagementTools";
import WhyProsErp from "@/components/home/WhyProsErp";
import Testimonials from "@/components/home/Testimonials";
import IdeasAndInsights from "@/components/home/IdeasAndInsights";
import { HowItWorks } from "@/components/home/HowItWorks";

export default function Home() {
  return (
    <div className=" flex flex-col gap-8 justify-start">
      <Hero />
      <ValuePropositionSection />
      <ClientssSection />
      <JoinTeams />
      <ManagementTools />
      <WhyProsErp />
      <Testimonials />
      <IdeasAndInsights />
      <HowItWorks />
    </div>
  );
}
