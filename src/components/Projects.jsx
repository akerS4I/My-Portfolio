import "../styles/components/Projects.scss";

const Projects = () => {
  // Placeholder data; replace with your actual projects
  const projectList = [
    {
      title: "Landing Page 1",
      description:
        "Developed a responsive landing page using HTML, CSS, and JavaScript based on Figma designs.",
      link: "#",
    },
    {
      title: "Landing Page 2",
      description:
        "Created a pixel-perfect landing page with advanced CSS techniques for animations.",
      link: "#",
    },
    {
      title: "SPA Project 1",
      description:
        "Built a single-page application using React.js and SCSS, implementing dynamic routing.",
      link: "#",
    },
    {
      title: "SPA Project 2",
      description:
        "Developed an interactive SPA with state management using React hooks.",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects__container">
        {projectList.map((project, index) => (
          <div key={index} className="projects__item">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
