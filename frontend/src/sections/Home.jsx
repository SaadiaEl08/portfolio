import { useRef } from "react";
import { jobs } from "../constants";
import { useEffect } from "react";
import icon from '../assets/morocco.svg';
import DownloadCvButton from "../components/DownloadCvButton";
import PersonalImg from './../components/PersonalImg';
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  let jobIndex = 1;
  const jobRef = useRef();
  useEffect(() => {
    const interval = setInterval(() => {
      if (jobRef.current) {
        jobRef.current.textContent =` ${t(jobs[jobIndex].trim())}`;
        jobIndex = (jobIndex + 1) % jobs.length;
      }
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-fit  min-w-screen flex flex-col justify-center items-center px-2 lg:text-xl">
      <div className="flex  flex-col justify-center items-center gap-6">
        <PersonalImg className="md:w-[280px] lg:w-[300px] xl:w-[200px] 2xl:w-[400px]"/>
        <div className="flex flex-col justify-center items-center max-w-[80%] gap-4">
          <h1 className="text-2xl font-bold 2xl:text-5xl">{t("hello")} <i className="fa-solid fa-hand text-yellow-400 animate-wave"></i></h1>
          <p className="text-wrap text-3xl text-center 2xl:text-4xl">
          {t("I am")} <span className="text-blue-300 font-bold">{t("Saadia")}</span>, {t("a")}
            <span className="font-bold text-blue-300 " ref={jobRef}> {t("Front-end")} </span> {t("Developer")}.
            <br /> {t("based in Morocco")}
            <span className="ms-1" style={{ display: 'inline-block', backgroundImage: `url(${icon})`, width: '25px', height: '25px', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', verticalAlign: 'middle' }} />
          </p>
        </div>
        <DownloadCvButton />
      </div>
    </div>
  );
};

export default Home;