import projectSatu from "../assets/project.png";
import projectDua from "../assets/project2.png";
import ProjectEmpat from '../assets/projec4.png'

function ProjectSection() {
    const projects = [
        {
            title: "Scripting Fivem",
            description: "A complex job system developed for FiveM roleplay servers, with custom jobs, task tracking, and reward systems. ",
            image: ProjectEmpat, 
            link: "https://discord.gg/MEQrSCRe"
        },
        {
            title: "Portfolio Website",
            description: "A personal portfolio website showcasing my skills and projects, built with React or HTML CSS and JavaScript.",
            image: projectDua,
            link: "https://github.com/Elzeinn/Portofolio-Web"
        },
        {
            title: "Webs For Fivem",
            description: "A simple web fivem server with html css and javascript, this is first my project web fivem server",
            image: projectSatu,
            link: "https://github.com/Elzeinn/Project-Website-Fivem"
        },
    ];
    
    return (
        <section className="project-section" id="projects">
            <div className="projects-container">
                <h2>My Projects</h2>
                <div className="projects-wrapper">
                    {projects.map((project, index) => (
                        <div className="project-card" key={index}>
                            <img src={project.image} alt={project.title} />
                            <div className="project-info">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ProjectSection;
