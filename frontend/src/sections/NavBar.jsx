import { languages, navItems } from "../constants";
import { cloneElement, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
import { SET_THEME } from "../store/Action";

const NavBar = ({ sections, className }) => {
  const { t } = useTranslation();

  // Redux states
  const currentLanguageCode = useSelector((state) => state.language);
  const isDarkTheme = useSelector((state) => state.isDarkTheme);

  // Local states
  const [currentLanguage, setCurrentLanguage] = useState(
    languages.find((language) => language.code === currentLanguageCode)
  );
  const [showLanguagesDropdown, setShowLanguagesDropdown] = useState(false);
  const [currentSection, setCurrentSection] = useState("home");

  const dispatch = useDispatch();

  // Handle language dropdown visibility
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.classList.contains("language-button")) {
        setShowLanguagesDropdown(false);
      }
    };
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  // Update current language
  useEffect(() => {
    setCurrentLanguage(
      languages.find((language) => language.code === currentLanguageCode)
    );
    i18n.changeLanguage(currentLanguageCode);
  }, [currentLanguageCode]);

  // Change language
  const changeLanguage = (languageCode) => {
    localStorage.setItem("language_code", languageCode);
    dispatch({ type: "SET_LANGUAGE", payload: languageCode });
  };

  // Change theme
  const changeTheme = () => {
    const newTheme = !isDarkTheme;
    localStorage.setItem("isDarkTheme", Number(newTheme));
    dispatch(SET_THEME(newTheme));
  };

  // Observe sections for scrolling
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.getAttribute("id"));
            return;
          }
        });
      },
      { threshold: 0.5 }
    );

    const sectionElements = sections.current;
    sectionElements?.forEach((section) => {
      if (section) observer.observe(section.current);
    });

    return () => observer.disconnect();
  }, [sections]);

  // Scroll to specific section
  const scrollToComponent = (component, e) => {
    // Scroll the component into view
    component.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
    // Adjust the scroll position after scrolling into view
    setCurrentSection(component.id);
  };

  return (
    <nav
      className={`sm:shadow-none border-2 rounded-full bg-[var(--background-color)] w-fit h-fit flex flex-col justify-center items-center p-1 ${className}`}
    >
      <ul className="flex sm:flex-col gap-2 justify-evenly items-center w-72 sm:w-fit sm:px-1 md:h-[320px] md:p-0">
        {/* Navigation items */}
        {navItems.map((item) => (
          <li
            key={item.id}
            className="navItem flex flex-col sm:flex-row gap-6 sm:gap-4 justify-start items-center w-5 md:w-8 overflow-hidden  hover:overflow-visible h-8 sm:h-fit"
          >
            <a
              onClick={(e) =>
                scrollToComponent(
                  document.getElementById(item.title.toLowerCase()),
                  e
                )
              }
              className="flex flex-col justify-center items-center cursor-pointer"
            >
              <i
                className={`${item.icon} w-5 text-center md:w-8 text-lg md:text-2xl`}
              />
              {currentSection === item.title.toLowerCase() && (
                <span className="w-5 border bg-white md:w-6 md:border-1"></span>
              )}
            </a>
            <span className="py-1 px-2 text-sm text-nowrap text-center font-semibold border-2 rounded-full bg-[var(--background-color)] md:text-xl">
              {t(item.title.toLowerCase())}
            </span>
          </li>
        ))}

        {/* Language selector */}
        <li className="relative flex flex-col sm:flex-row gap-6 sm:gap-4 justify-start items-center w-5 md:w-8 h-8 sm:h-fit">
          <button
            className="w-full flex flex-row justify-center items-center language-button"
            onClick={() => setShowLanguagesDropdown((prev) => !prev)}
          >
            <i className="fa-solid fa-globe w-3 text-center text-lg md:text-2xl language-button" />
            <span className="text-xs text-center font-bold language-button text-white bg-[var(--background-color)] p-[.5px] border-[.1px] rounded-md">
              {currentLanguage?.code?.toUpperCase() || "EN"}
            </span>
          </button>
          <ul
            className={`gap-1 ${
              showLanguagesDropdown ? "flex" : "hidden"
            } absolute top-12 sm:top-4 ${
              currentLanguageCode === "ar" ? "sm:-left-28" : "sm:left-10"
            } flex-col justify-center items-center border-2 rounded-md bg-[var(--background-color)]`}
          >
            {languages.map((language) => (
              <li
                key={language.code}
                onClick={() => changeLanguage(language.code)}
                className={`w-full rounded-md cursor-pointer py-1 px-2 text-sm text-center font-semibold ${
                  currentLanguage?.code === language.code
                    ? "bg-[var(--background-color-hover)]"
                    : ""
                } hover:bg-[var(--background-color-hover)] md:text-xl`}
              >
                {language.name}
              </li>
            ))}
          </ul>
        </li>

        {/* Theme toggle */}
        <li className="flex flex-col sm:flex-row gap-6 sm:gap-4 justify-start items-center w-5 md:w-8 overflow-hidden hover:overflow-visible h-8 sm:h-fit">
          <button
            onClick={changeTheme}
            className="flex flex-col justify-center items-center"
          >
            <i
              className={`fa-solid fa-${
                isDarkTheme ? "moon" : "sun"
              } w-5 text-center md:w-8 text-lg md:text-2xl ${
                isDarkTheme ? "" : "text-yellow-400 animation-spin"
              }`}
            />
          </button>
          <span className="py-1 px-2 text-sm text-center font-semibold border-2 rounded-full bg-[var(--background-color)] md:text-xl">
            {isDarkTheme ? t("dark") : t("light")}
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
