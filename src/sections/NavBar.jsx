
import { Link, useLocation } from 'react-router-dom';
import { languages, navItems } from './../constants';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import i18n from '../i18n';


const NavBar = () => {
  const currentLanguageCode = useSelector(state => state.language);
  const [currentLanguage, setCurrentLanguage] = useState(languages.find(language => language.code === currentLanguageCode));
  const dispatch = useDispatch();
  useEffect(() => {
    setCurrentLanguage(languages.find(language => language.code === currentLanguageCode));
    document.body.style.direction = currentLanguageCode == "ar" ? "rtl" : "ltr";
    i18n.changeLanguage(currentLanguageCode);
  }, [currentLanguageCode]);

  const changeLanguage = () => {
    const currentLanguageIndex = languages.findIndex(language => language.code === currentLanguageCode);
    const newLanguageIndex = currentLanguageIndex === languages.length - 1 ? 0 : currentLanguageIndex + 1;
    const newLanguageCode = languages[newLanguageIndex].code;
    dispatch({ type: 'SET_LANGUAGE', payload: newLanguageCode });
  };
  const currentPage = useLocation().pathname;
  return (
    <nav className="border-2 rounded-full bg-[var(--background-color)] w-fit h-fit flex flex-col justify-center items-center p-1 z-10">
      <ul className="flex sm:flex-col gap-2 justify-evenly items-center w-72  sm:w-fit md:h-[300px]">
        {navItems.map((item) => (
          <li key={item.id} className='flex flex-col sm:flex-row gap-6 sm:gap-4 justify-start items-center w-5  md:w-8 overflow-hidden hover:overflow-visible h-8 sm:h-fit'>
            <Link to={item.path} className='flex flex-col justify-center items-center  '>
              <i className={`${item.icon} w-5 text-center md:w-8 text-lg md:text-2xl  `} />
              {currentPage == item.path ? <span className='w-5 border bg-white md:w-6 md:border-1'></span> : ''}
            </Link>
            <span className=' py-1 px-2 text-sm text-center font-semibold border-2 rounded-full bg-[var(--background-color)] md:text-xl'>{item.title}</span>
          </li>
        ))}
        <li className='flex flex-col sm:flex-row gap-6 sm:gap-4 justify-start items-center w-5  md:w-8 overflow-hidden hover:overflow-visible h-8 sm:h-fit'>
          <button onClick={changeLanguage} className='flex flex-col justify-center items-center  '>
            <i className={`fa-solid fa-globe w-5 text-center md:w-8 text-lg md:text-2xl  `} />
          </button>
          <span className=' py-1 px-2 text-sm text-center align-center font-semibold border-2 rounded-full bg-[var(--background-color)] md:text-xl'>{currentLanguage.name}</span>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
