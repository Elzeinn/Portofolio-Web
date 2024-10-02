import profile from "../assets/profile.png";

function ProjectSection() {
    const projects = [
        {
            title: "Scripting Fivem",
            description: "A complex job system developed for FiveM roleplay servers, with custom jobs, task tracking, and reward systems. ",
            image: "https://cdn.discordapp.com/attachments/1279456225414877194/1280154135366209586/image.png?ex=66fb4d31&is=66f9fbb1&hm=36d9fa164d65a0a318a8a45e13fab27de907aaeac644086171b83df28fd67814&", // Ganti dengan URL gambar proyek asli
            link: "https://discord.gg/MEQrSCRe"
        },
        {
            title: "Portfolio Website",
            description: "A personal portfolio website showcasing my skills and projects, built with React or HTML CSS and JavaScript.",
            image: "https://cdn.discordapp.com/attachments/1266012108634460254/1290213466518327347/image.png?ex=66fba46d&is=66fa52ed&hm=958b74503816caedd0b56fd011f27c4aede47b582fbfa4b0bb1b221b5602670b&",
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
