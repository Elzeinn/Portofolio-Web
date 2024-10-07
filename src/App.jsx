import { useState, useEffect } from 'react';
import './index.css';
import Header from './component/Header.jsx';
import HeroSection from './component/HeroSection.jsx';
import AboutSection from './component/AboutSection.jsx';
import ProjectSection from './component/ProjectSection.jsx';
import ContactSection from './component/ContactSection.jsx';
import Loading from './loading/loading.jsx';
import ExperienceSection from './component/ExperienceSection.jsx';


function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); 
    }, 10000);

    return () => clearTimeout(timer); 
  }, []);

  return (
    <>
      {/* {isLoading ? (
        <Loading />
      ) : ( */}
        <>
          <Header />
          <HeroSection />
          <AboutSection />
          <ProjectSection />
          <ExperienceSection />
          <ContactSection />
        </>
      {/* )} */}
    </>
  );
}

export default App;
