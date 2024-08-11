const Projects = () => {
  const projects = [
    { projectId: 1, name: 'Task Manager' },
    { projectId: 2, name: 'Weather App' },
    { projectId: 3, name: 'Portfolio Website' },
  ];

  return (
    
    <div>
      <ul className="sidebar__generic">
        {projects.map((project) => (
          <li key={project.projectId}>
            <div>{project.name}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;
