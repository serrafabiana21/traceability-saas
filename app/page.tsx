import CTASection from "./components/CTASection";
import FeatureGrid from "./components/FeatureGrid";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import LandingShell from "./components/LandingShell";
import Navbar from "./components/Navbar";
import ProblemSolution from "./components/ProblemSolution";
import SocialProof from "./components/SocialProof";
import UseCases from "./components/UseCases";

export default function Home() {
  return (
    <LandingShell>
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <ProblemSolution />
        <HowItWorks />
        <FeatureGrid />
        <UseCases />
        <CTASection />
      </main>
      <Footer />
    </LandingShell>
  );
}
