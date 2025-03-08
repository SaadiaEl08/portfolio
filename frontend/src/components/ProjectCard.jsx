const ProjectCard = ({ project }) => {
  return (
    <div key={project.id} className="border flex flex-col gap-2">
      <h2 className="text-2xl font-bold">{project.title}</h2>
      <img src={project.image} alt={project.title} />
      <p className="text-lg">{project.description}</p>
      <a
        href={project.link}
        target="_blank"
        rel="noreferrer"
        className="text-blue-500"
      >
        {project.link} visite the project 
      </a>
      <div className="flex gap-2">
        {project.technologies.map((technology) => (
          <span key={technology} className="text-sm bg-gray-200 p-1 rounded">
            {technology}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
