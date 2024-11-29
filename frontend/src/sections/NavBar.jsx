
import { Link, useLocation } from 'react-router-dom';
import { languages, navItems } from '../constants';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';
import { SET_THEME } from '../store/Action';


const NavBar = () => {
  const { t } = useTranslation();
  const currentLanguageCode = useSelector(state => state.language);
  const [currentLanguage, setCurrentLanguage] = useState(languages.find(language => language.code === currentLanguageCode));
  const isDarkTheme = useSelector(state => state.isDarkTheme);
  const dispatch = useDispatch();
  const [showLanguagesDropdown, setShowLanguagesDropdown] = useState(false);
  useEffect(() => {
    window.addEventListener("click", (e) => {
      const hasClass = e.target.classList.contains("language-button");
      if (!hasClass) {
        setShowLanguagesDropdown(false);
      }
    });
    return () => {
      window.removeEventListener("click", (e) => {
        const hasClass = e.target.classList.contains("language-button");
        if (!hasClass) {
          setShowLanguagesDropdown(false);
        }
      });
    };
  }, []);

  useEffect(() => {
    setCurrentLanguage(languages.find(language => language.code === currentLanguageCode));
    i18n.changeLanguage(currentLanguageCode);
  }, [currentLanguageCode]);

  const changeLanguage = (languageCode) => {
    localStorage.setItem("language_code", languageCode);
    dispatch({ type: 'SET_LANGUAGE', payload: languageCode });
  };
  const changeTheme = () => {
    const newTheme = !isDarkTheme;
    localStorage.setItem("isDarkTheme", Number(newTheme));
    dispatch(SET_THEME(newTheme));
  };
  const toggleLanguagesDropdown = () => {
    setShowLanguagesDropdown((prevState) => !prevState);

  };
  const currentPage = useLocation().pathname;
  return (
    <nav className="border-2 rounded-full bg-[var(--background-color)] w-fit h-fit flex flex-col justify-center items-center p-1 z-10">
      <ul className="flex sm:flex-col gap-2 justify-evenly items-center w-72 sm:w-fit sm:px-1 md:h-[320px] md:p-0">
        {navItems.map((item) => (
          <li key={item.id} className='navItem flex flex-col sm:flex-row gap-6 sm:gap-4 justify-start items-center w-5  md:w-8 overflow-hidden hover:overflow-visible h-8 sm:h-fit'>
            <Link to={item.path} className='flex flex-col justify-center items-center  '>
              <i className={`${item.icon} w-5 text-center md:w-8 text-lg md:text-2xl  `} />
              {currentPage == item.path ? <span className='w-5 border bg-white md:w-6 md:border-1'></span> : ''}
            </Link>
            <span className='py-1 px-2 text-sm text-center text-nowrap font-semibold border-2 rounded-full bg-[var(--background-color)] md:text-xl'>{t(item.title.toLowerCase())}</span>
          </li>
        ))}
        <li className='relative flex  flex-col sm:flex-row gap-6 sm:gap-4 justify-start items-center w-5  md:w-8 h-8 sm:h-fit '>
          <button className='w-full  flex flex-row justify-center items-center language-button' onClick={toggleLanguagesDropdown} >
            <i className={`fa-solid fa-globe w-1 text-center   text-lg md:text-2xl language-button `} />
            <span className='text-xs text-center align-center font-bold language-button text-black'>{currentLanguage?.code?.toUpperCase() || 'eng'.toUpperCase()}</span>
          </button>
          <ul className={`gap-1 ${showLanguagesDropdown ? "flex" : "hidden"} absolute top-12 sm:top-4  ${currentLanguageCode == "ar" ? " sm:-left-28" : "sm:left-10"} flex-col  justify-center items-center border-2 rounded-md bg-[var(--background-color)]`}>
            {
              languages.map((language, index) => {
                return (
                  <li key={index} onClick={() => changeLanguage(language.code)} className={`w-full rounded-md cursor-pointer py-1 px-2 text-sm text-center align-center font-semibold ${currentLanguage.code == language.code ? "bg-[var(--background-color-hover)]" : ""}   hover:bg-[var(--background-color-hover)]  md:text-xl`}>{language.name}</li>
                );
              })
            }
          </ul>
        </li>
        <li className='flex flex-col sm:flex-row gap-6 sm:gap-4 justify-start items-center w-5  md:w-8 overflow-hidden hover:overflow-visible h-8 sm:h-fit'>
          <button onClick={changeTheme} className='flex flex-col justify-center items-center  '>
            <i className={`fa-solid fa-${isDarkTheme ? "moon" : "sun text-yellow-400 animation-spin"} w-5 text-center md:w-8 text-lg md:text-2xl  `} />
          </button>
          <span className=' py-1 px-2 text-sm text-center align-center font-semibold border-2 rounded-full bg-[var(--background-color)] md:text-xl'>{isDarkTheme ? t("dark") : t("light")}</span>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
