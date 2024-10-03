import profile from "../assets/profile.png";

function ProjectSection() {
    const projects = [
        {
            title: "Scripting Fivem",
            description: "A complex job system developed for FiveM roleplay servers, with custom jobs, task tracking, and reward systems. ",
            image: "https://cdn.discordapp.com/attachments/1266012108634460254/1290747987399540818/image.png?ex=66fee7bd&is=66fd963d&hm=56728b4d4e87a4bfb8b3f547e72b852b4d33a4d19444b908dc03d33b392a4ae1&", // Ganti dengan URL gambar proyek asli
            link: "https://discord.gg/MEQrSCRe"
        },
        {
            title: "Portfolio Website",
            description: "A personal portfolio website showcasing my skills and projects, built with React or HTML CSS and JavaScript.",
            image: "https://cdn.discordapp.com/attachments/1266012108634460254/1291249206274556035/image.png?ex=66ff6909&is=66fe1789&hm=f14e518d01213e84265aa927f148974edfa2ebd443e5f0bf24b03e7d60d38d1b&",
            link: "https://github.com/Elzeinn/Portofolio-Web"
        },
        {
            title: "Webs For Fivem",
            description: "A simple web fivem server with html css and javascript, this is first my project web fivem server",
            image: "https://cdn.discordapp.com/attachments/1283253237474132069/1290990790470012948/image.png?ex=66fe785d&is=66fd26dd&hm=e8b58bd19f346ff61d7ac137b88825893f37d85779aed195ec874f88395b7f07&",
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
