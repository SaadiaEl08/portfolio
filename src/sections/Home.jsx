import { useRef } from "react";
import { jobs } from "../constants";
import { useEffect } from "react";
import icon from '../assets/morocco.svg';
import DownloadCvButton from "../components/DownloadCvButton";
import PersonalImg from './../components/PersonalImg';

const Home = () => {
  let jobIndex = 1;
  const jobRef = useRef();
  useEffect(() => {
    const interval = setInterval(() => {
      if (jobRef.current) {
        jobRef.current.textContent = jobs[jobIndex];
        jobIndex = (jobIndex + 1) % jobs.length;
      }
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-fit min-w-screen flex flex-col justify-center items-center  p-2">
      <div className=" flex flex-col justify-center items-center gap-6">
        <PersonalImg className="lg:w-[200px] xl:w-[250px] 2xl:w-[350px]"/>
        <div className="flex flex-col justify-center items-center max-w-[80%] gap-4">
          <h1 className="text-2xl font-bold 2xl:text-5xl">Hello <i className="fa-solid fa-hand text-yellow-400 animate-wave"></i></h1>
          <p className="text-wrap text-3xl text-center 2xl:text-4xl">
            I am <span className="text-blue-300 font-bold">Saadia</span>, a
            <span className="font-bold text-blue-300 " ref={jobRef}> Front-end </span> Developer.
            based in Morocco
            <span className="ms-1" style={{ display: 'inline-block', backgroundImage: `url(${icon})`, width: '25px', height: '25px', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', verticalAlign: 'middle' }} />
          </p>
        </div>
        <DownloadCvButton />
      </div>
    </div>
  );
};

export default Home;