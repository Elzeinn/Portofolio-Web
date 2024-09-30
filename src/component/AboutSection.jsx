import Js from '../assets/js.webp';
import tailwind from '../assets/tailwind.svg';
import html from '../assets/html.webp';
import css from '../assets/css.webp';
import python from '../assets/python.webp';
import typescript from '../assets/typescript.webp';
import sql from '../assets/sql.webp';
import git from '../assets/git.svg';
import ngoding from '../assets/ngoding.gif';

const frontendSkills = [
  { name: 'JavaScript', icon: Js },
  { name: 'React', icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
  { name: 'Tailwind CSS', icon: tailwind },
  { name: 'HTML', icon: html },
  { name: 'CSS', icon: css },
];

const backendSkills = [
  { name: 'TypeScript', icon: typescript },
  { name: 'Node.js', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg' },
  { name: 'Python', icon: python },
  { name: 'SQL', icon: sql },
  { name: 'Git', icon: git },
];

function SkillSection({ title, skills }) {
  return (
    <div className="skills-category">
      <h3>{title}</h3>
      <div className="skills-icons">
        {skills.map((skill, index) => (
          <div className="skill" key={index}>
            <a href="#" aria-label={skill.name}>
              <img className="icon" src={skill.icon} alt={skill.name} />
            </a>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

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
          <img src={ngoding} alt="Profile" />
        </div>
      </div>
      <div className="skills-section">
        <h2>My Skills</h2>
        <div className="skills-wrapper">
          <SkillSection title="Frontend Development" skills={frontendSkills} />
          <SkillSection title="Backend Development" skills={backendSkills} />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
