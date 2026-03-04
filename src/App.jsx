import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import Services from './components/Services';
import WorkProcess from './components/WorkProcess';
import FAQ from './components/FAQ'; // Nuevo
import Footer from './components/Footer'; // Nuevo
import './App.css';

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <ProblemSolution />
      <Services />
      <WorkProcess />
      <FAQ />
      <Footer />
    </div>
  );
}