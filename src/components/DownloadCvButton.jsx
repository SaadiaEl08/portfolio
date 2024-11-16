import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const DownloadCvButton = () => {
    const { t } = useTranslation();
    const language=useSelector(state=>state.language)

    const downloadCv = () => {
        const link = document.createElement('a');
        link.href = t("cvPath");
        link.download = `Saadia_El_Achguir_CV_${languag}.pdf`; 
        link.click();
      };
    return (
        <button onClick={downloadCv} className="CTA-btn border-2 2xl:text-3xl">{t("cv/resume")} <i className="fa-solid fa-download "></i></button>

    );
};

export default DownloadCvButton;
