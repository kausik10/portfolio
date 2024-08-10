const Projects = () => {
  const { projects } = useProjectsValue();

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
