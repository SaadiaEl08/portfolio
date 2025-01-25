import { useTranslation } from "react-i18next";
import HeroHeader from "../components/HeroHeader";
import PersonalImg from "../components/PersonalImg";
import DownloadCvButton from "../components/DownloadCvButton";
import { forwardRef } from "react";

const Cv = forwardRef((props,ref) => {
  const { t } = useTranslation();

  return (
    <div
      ref={ref}
      id="cv/resume"
      className="snap-start flex flex-col justify-center items-center gap-2 sm:min-h-screen  md:text-lg 2xl:gap-6 sm:p-2 pt-16 animation-fade-in"
    >
      <PersonalImg className="w-[70px] md:w-[150px] lg:w-[100px] xl:w-[150px] 2xl:w-[300px] " />
      <HeroHeader text={t("cv/resume")} />
      <p className="text-lg w-[100%] sm:w-[80%] text-center">
        {t("cvText1")}
        <br />
        {t("cvText2")}
        <br />
        <strong>{t("note")}</strong> {t("cvText3")}{" "}
      </p>
      <DownloadCvButton />
    </div>
  );
});
Cv.displayName = "CV";

export default Cv;
