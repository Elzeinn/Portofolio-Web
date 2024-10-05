import feather from 'feather-icons';
import Typed from 'typed.js';
import React from 'react';
import Alam from '../assets/alam.jpg'


function HeroSection() {
   const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Fivem Developer.', 'Full Stuck Developer.', 'Web Developer'],
      typeSpeed: 50,
      backSpeed: 50,  
      loop: true,    
    });

    return () => {
      typed.destroy();
    };
  }, []);
    return (
        <>
            <section className="hero" id="home">
              <main className="content">
                <h1>Hallo I'm <span>Alam</span></h1>
                  <p ref={el}></p>
                  <a href="#about" className="cta">About Me</a>
                   
                  <div className="content-icon">
                      <a href="https://github.com/Elzeinn" dangerouslySetInnerHTML={{ __html: feather.icons.github.toSvg() }}></a>
                      <a href="https://instagram.com/Elzeinn" dangerouslySetInnerHTML={{ __html: feather.icons.instagram.toSvg() }}></a>
                      <a href="" dangerouslySetInnerHTML={{ __html: feather.icons.youtube.toSvg() }}></a>
                      <a href="" dangerouslySetInnerHTML={{ __html: feather.icons.linkedin.toSvg() }}></a>
                    </div>
                </main>
                <div className="hero-content-image">
                  {/* <img src={Alam} alt="" /> */}
                </div>
            </section>
        </>
    )
}

export default HeroSection