import HeroHeader from "../components/heroHeader";
import PersonalImg from "../components/PersonalImg";
import DownloadCvButton from './../components/DownloadCvButton';

const CV = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-2 sm:min-h-screen  md:text-lg 2xl:gap-6 p-2">
            <PersonalImg className="w-[70px] md:w-[150px] lg:w-[100px] xl:w-[150px] 2xl:w-[300px] " />
            <HeroHeader text="Cv/Resume" />
            <p className="text-lg w-[50%] text-center">Thank you for reaching this point in my portfolio! I appreciate your interest.<br/> Please feel free to download my CV to explore my skills and experiences in more detail.</p>
            <DownloadCvButton />
        </div>
    );
};

export default CV;