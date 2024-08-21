import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Technologies from "./components/Technologies";
import SkillsEducationCertifications from "./components/SkillsEducationCertifications";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      {/* Background Gradient Layer */}
      <div className="fixed top-0 -z-10 h-full w-full">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
     
   
      {/* Main Content */}
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <SkillsEducationCertifications />
        <Project />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
