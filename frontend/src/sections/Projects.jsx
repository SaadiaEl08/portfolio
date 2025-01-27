import { forwardRef} from "react";
import HeroHeader from "../components/HeroHeader";
import { skills } from "../constants";
import PersonalImg from "./../components/PersonalImg";
import { useTranslation } from "react-i18next";
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
      <div className="flex item-center justify-center flex-col gap-1">
       to be added
      </div>
    </div>
  );
});
Projects.displayName = "Projects";

export default Projects;
