import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import ProblemSolution from "./components/ProblemSolution";
import ValueProps from "./components/ValueProps";

export default function Home() {
  return (
    <main className="bg-white text-slate-900">
      <Hero />
      <ValueProps />
      <ProblemSolution />
      <HowItWorks />
    </main>
  );
}
