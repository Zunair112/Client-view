import CustomCursor from '../components/CustomCursor';
import ScrollProgress from '../components/ScrollProgress';
import ScrollToTop from '../components/ScrollToTop';
import Navbar from '../components/portfolio/Navbar';
import Hero from '../components/portfolio/Hero';
import About from '../components/portfolio/About';
import Skills from '../components/portfolio/Skills';
import Projects from '../components/portfolio/Projects';
import Experience from '../components/portfolio/Experience';
import Contact from '../components/portfolio/Contact';
import Footer from '../components/portfolio/Footer';

const Index = () => {
  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Index;
