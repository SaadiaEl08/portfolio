import { useTranslation } from "react-i18next";
import HeroHeader from "../components/heroHeader";
import PersonalImg from "../components/PersonalImg";
import DownloadCvButton from './../components/DownloadCvButton';

const CV = () => {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col justify-center items-center gap-2 sm:min-h-screen  md:text-lg 2xl:gap-6 p-2">
            <PersonalImg className="w-[70px] md:w-[150px] lg:w-[100px] xl:w-[150px] 2xl:w-[300px] " />
            <HeroHeader text={t("cv/resume")} />
            <p className="text-lg w-[50%] text-center">{t("cvText1")}<br/>{t("cvText2")} </p>
            <DownloadCvButton />
        </div>
    );
};

export default CV;