import { forwardRef } from "react";
import HeroHeader from "../components/HeroHeader";
import PersonalImg from "./../components/PersonalImg";
import { useTranslation } from "react-i18next";
import { projects } from "../constants";
import ProjectCard from "../components/ProjectCard";
const Projects = forwardRef((props, ref) => {
  const { t } = useTranslation();
  return (
    <div
      ref={ref}
      id="projects"
      className="in-view snap-start pt-16 sm:pt-3 min-w-screen flex flex-col justify-center items-center gap-2 sm:min-h-screen md:text-lg 2xl:gap-6 animation-fade-in"
    >
      <PersonalImg className="w-[70px] md:w-[150px] lg:w-[100px] xl:w-[100px]  " />
      <HeroHeader text={t("projects")} />
      <div className="border w-full flex flex-col flex-wrap item-center justify-center  gap-1">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
});
Projects.displayName = "Projects";
export default Projects;
