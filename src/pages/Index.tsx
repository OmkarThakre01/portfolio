
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Articles from '@/components/Articles';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Articles />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
