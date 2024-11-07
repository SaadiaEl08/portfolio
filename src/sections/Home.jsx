import { useState } from "react";
import { jobs } from "../constants";
import { useEffect } from "react";
import icon from '../assets/morocco.svg';

const Home = () => {
  const [jobIndex, setJobIndex] = useState(0);
  const downloadCv = () => {
    const link = document.createElement('a');
    link.href = `src/assets/Saadia_El_Achguir_CV.pdf`;
    link.download = 'Saadia_El_Achguir_CV.pdf';
    link.click();
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setJobIndex((prevIndex) => (prevIndex + 1) % jobs.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" min-h-screen min-w-screen flex flex-col justify-center items-center  p-2">
      <div className=" flex flex-col justify-center items-center gap-6">
        <img src="src/assets/personal_photo.jpg" alt="personal photo" className="w-40  rounded-full  img-drop-shadow shadow-[var(--shadow)] " />
        <div className="flex flex-col justify-center items-center max-w-[80%]">
          <h1 className="text-2xl font-bold">Hello <i className="fa-solid fa-hand text-yellow-400 animate-wave"></i></h1>
          <p className="text-wrap text-3xl text-center">
            I am <span className="text-blue-300 font-bold">Saadia</span>, a
            <span className="font-bold text-blue-300 ">{jobs[jobIndex]}</span> Developer.
            based in Morocco
            <span className="ms-1" style={{ display: 'inline-block', backgroundImage: `url(${icon})`, width: '15px', height: '15px', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', verticalAlign: 'middle' }} />
          </p>
        </div>
        <button onClick={downloadCv} className="CTA-btn">CV/Resume <i className="fa-solid fa-download "></i></button>
      </div>
    </div>
  );
};

export default Home;