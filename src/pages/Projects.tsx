import { Helmet } from "react-helmet-async";

const Projects = () => {
  const projects = [
    { projectId: 1, name: 'Task Manager' },
    { projectId: 2, name: 'Weather App' },
    { projectId: 3, name: 'Portfolio Website' },
  ];

  return (
    <>
    <Helmet>
      <title>Projects | Kausik</title>
    </Helmet>
    <div className='h-screen w-full bg-dark_bg'>
    <section className="w-[90%] mx-auto h-full md:w-[70%] flex flex-col justify-start gap-16 lg:justify-between lg:flex-row items-center  text-light_text">
      
        <ul className="sidebar__generic">
        {projects.map((project) => (
          <li key={project.projectId}>
            <div>{project.name}</div>
          </li>
        ))}
      </ul>
    
      
    </section>
    </div>
    
    </>
  );
}

export default Projects;
