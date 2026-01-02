import LizardAzarr from '@/components/LizardAzarr';
import AnimatedBackground from '@/components/AnimatedBackground';
import Hero from '@/components/Hero';
import ProblemVisualization from '@/components/ProblemVisualization';
import AlgorithmBrainstorm from '@/components/AlgorithmBrainstorm';
import Breakthrough from '@/components/Breakthrough';
import AlgorithmComparison from '@/components/AlgorithmComparison';
import PrimsAlgorithm from '@/components/PrimsAlgorithm';
import Implementation from '@/components/Implementation';
import SolutionFlow from '@/components/SolutionFlow';
import TreeToPath from '@/components/TreeToPath';
import Team from '@/components/Team';
import FinalOutcome from '@/components/FinalOutcome';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      {/* Fixed Background Elements */}
      <AnimatedBackground />
      <LizardAzarr />

      {/* Page Sections */}
      <Hero />
      <ProblemVisualization />
      <AlgorithmBrainstorm />
      <Breakthrough />
      <AlgorithmComparison />
      <PrimsAlgorithm />
      <Implementation />
      <SolutionFlow />
      <TreeToPath />
      <FinalOutcome />
      <Team />
      <Footer />
    </main>
  );
}
