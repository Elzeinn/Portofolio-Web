function AboutSection() {
    return (
        <section className="about" id="about">
            <div className="about-container">
                <div className="about-content">
                    <h1>About Me</h1>
                    <p>
                        Hi, I'm <strong>Alam</strong>, a passionate <strong>FiveM Developer</strong> and a <strong>Full Stack Developer</strong>. 
                        I enjoy creating creative and responsive web applications that bring ideas to life. With experience in frontend and backend development, 
                        I constantly strive to improve my skills and learn new technologies.
                    </p>
                    <p>
                        From building robust APIs to crafting engaging user interfaces, I focus on delivering high-quality solutions that meet user needs.
                    </p>
                    <a href="#contact" className="contact-me">Contact Me</a>
                </div>
                <div className="about-image">
                    <img src="https://cdn.discordapp.com/attachments/1266012108634460254/1289799717152096288/5b2765609517d0c00fad3f1cdd3822f3.png?ex=66fa2317&is=66f8d197&hm=c603423868b2c80145e7c5dd964e79edebb52030d34afe4918fbf39edc1282ab&" alt="Profile" />
                </div>
            </div>
            <div className="skills-section">
                <h2>My Skills</h2>
                <div className="skills-wrapper">
                    <div className="skills-category frontend-skills">
                        <h3>Frontend Development</h3>
                        <div className="skills-icons">
                            <a href="#" aria-label="JavaScript">
                                <img className="icon" src="https://abyansh.vercel.app/_next/image?url=%2Fimg%2Fjs.png&w=64&q=75" alt="JavaScript" />
                            </a>
          
                            <a href="#" aria-label="React">
                                <img className="icon" src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" />
                            </a>
                            <a href="#" aria-label="Tailwind CSS">
                                <img className="icon" src="https://abyansh.vercel.app/img/tailwind.svg" alt="Tailwind CSS" />
                            </a>
                               <a href="#" aria-label="HTML">
                                <img className="icon" src="https://abyansh.vercel.app/_next/image?url=%2Fimg%2Fhtml.png&w=64&q=75" alt="HTML" />
                            </a>
                               <a href="#" aria-label="CSS">
                                <img className="icon" src="https://abyansh.vercel.app/_next/image?url=%2Fimg%2Fcss.png&w=64&q=75" alt="CSS" />
                            </a>
                        </div>
                    </div>
                    <div className="skills-category backend-skills">
                        <h3>Backend Development</h3>
                        <div className="skills-icons">
                                   <a href="#" aria-label="TypeScript">
                                <img className="icon" src="https://abyansh.vercel.app/_next/image?url=%2Fimg%2Ftypescript.png&w=64&q=75" alt="TypeScript" />
                            </a>
                            <a href="#" aria-label="Node.js">
                                <img className="icon" src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" alt="Node.js" />
                            </a>
                            <a href="#" aria-label="Python">
                                <img className="icon" src="https://abyansh.vercel.app/_next/image?url=%2Fimg%2Fpython.png&w=64&q=75" alt="Python" />
                            </a>
                            <a href="#" aria-label="SQL">
                                <img className="icon" src="https://abyansh.vercel.app/_next/image?url=%2Fimg%2Fmysql.png&w=64&q=75" alt="SQL" />
                            </a>
                            <a href="#" aria-label="Git">
                                <img className="icon" src="https://abyansh.vercel.app/img/git.svg" alt="Git" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;
