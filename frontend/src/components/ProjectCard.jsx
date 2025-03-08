import { useTranslation } from "react-i18next";

const ProjectCard = ({ project }) => {
  const { t } = useTranslation();
  return (
    <div
      key={project.id}
      className="border rounded-lg  bg-[var(--background-color)] flex flex-col gap-2 p-2 animation-scale "
    >
      <h2 className="border rounded-full px-6 py-2 gap-1 text-center w-fit text-xl font-bold mx-auto flex ">
        <img src={project.logo} alt="" className="w-8 rounded" />
        {project.title}
      </h2>
      <div className="flex flex-col gap-2 p-2 md:flex-row md:gap-4 lg:p-4 ">
        <img
          src={project.image}
          alt={project.title}
          className="object-fill w-full border md:w-[50%]  aspect-[16/9] "
        />
        <div className="gap-4 flex flex-col md:w-1/2">
          <p className="text-base first-letter:capitalize">
            {project.description?.length > 200
              ? project.description.slice(0, 200)
              : project.description}
            {project.description?.length ? (
              project.description.length > 200 ? (
                <>
                  <button
                    className="ps-2 underline"
                    onClick={(e) =>
                      e.target.classList.add("hidden") ||
                      e.target.nextElementSibling.classList.remove("hidden") ||
                      e.target.nextElementSibling.nextElementSibling.classList.remove(
                        "hidden"
                      )
                    }
                  >
                    ...{t("readMore")}
                  </button>
                  <span className="hidden">
                    {project.description.slice(200, project.description.length)}
                  </span>
                  <button
                    className="hidden underline"
                    onClick={(e) =>
                      e.target.classList.add("hidden") ||
                      e.target.previousElementSibling.classList.add("hidden") ||
                      e.target.previousElementSibling.previousElementSibling.classList.remove(
                        "hidden"
                      )
                    }
                  >
                    {t("readLess")}
                  </button>
                </>
              ) : (
                ""
              )
            ) : (
              ""
            )}
          </p>
          {project.note && (
            <p className="text-sm">
              <strong>Note:</strong> {project.note}
            </p>
          )}
          <p>
            To visit the project you can click on{" "}
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className=""
            >
              this link{" "}
              <i className="fa-solid fa-arrow-up-right-from-square text-sm"></i>
            </a>{" "}
          </p>
          <p className="flex items-center gap-2">
            Or see the code on my GitHub :{" "}
            <a href={project.github} target="_blank" rel="noreferrer">
              <img src="assets/contact/github.png" alt="" className="w-8" />
            </a>{" "}
          </p>
          <div className="flex flex-wrap gap-2 justify-center items-center">
            <h1>To build this project I used:</h1>
            <div className="flex flex-wrap items-center justify-center gap-3 border-2 w-fit p-2  bg-[var(--background-color)] rounded-full  ">
              {project.technologies.map((technology) => {
                return (
                  <div key={technology.name} className="flex items-center ">
                    <img
                      src={technology.image}
                      alt={technology.name}
                      className="w-6 rounded-full bg-slate-100 p-1 lg:w-10 2xl:w-16 border skill-icon"
                      loading="lazy"
                    />
                    <img />
                    <span key={technology.name} className="text-sm p-1 rounded">
                      {technology.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
