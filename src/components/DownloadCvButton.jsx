const DownloadCvButton = () => {
    const downloadCv = () => {
        const link = document.createElement('a');
        link.href = `src/assets/Saadia_El_Achguir_CV.pdf`;
        link.download = 'Saadia_El_Achguir_CV.pdf';
        link.click();
      };
    return (
        <button onClick={downloadCv} className="CTA-btn border-2">CV/Resume <i className="fa-solid fa-download "></i></button>

    );
};

export default DownloadCvButton;
