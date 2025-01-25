import { Resume, Contact, NavBar, About, Home } from "./sections";
import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";

const App = () => {
  const currentLanguageCode = useSelector((state) => state.language);
  const isDarkTheme = useSelector((state) => state.isDarkTheme);
  useEffect(() => {
    document.body.setAttribute("data-theme", isDarkTheme ? "dark" : "light");
  }, [isDarkTheme]);
  useEffect(() => {
    document.body.style.direction =
      currentLanguageCode === "ar" ? "rtl" : "ltr";
  }, [currentLanguageCode]);

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const cvRef = useRef(null);

  const sections = useRef([homeRef, aboutRef, contactRef, cvRef]);

  // State to track scroll position
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Calculate the scroll progress
  const totalHeight =
    document.documentElement.scrollHeight - window.innerHeight;
  const scrollProgress = (scrollY / totalHeight) * 100;
  const circleLength = 125.6; // Circle length (2 * Math.PI * radius), assuming radius = 20
  const strokeDashoffset = circleLength - (scrollProgress / 100) * circleLength;

  return (
    <main
      data-theme={isDarkTheme ? "dark" : "light"}
      className="min-h-screen flex flex-col lg:flex-row lg:justify-center lg:items-center justify-between items-center pt-4 sm:pt-0 text-[var(--color)]"
    >
      <aside
        className={`w-fit h-fit fixed ${
          currentLanguageCode === "ar" ? " sm:right-5" : " sm:left-5"
        } sm:top-40 z-10`}
      >
        <NavBar
          sections={sections}
          className={`${
            scrollY >= 10 ? "shadow-[0_0px_90px_7px_rgba(0,0,0,0.9)]" : " "
          }`}
        />
      </aside>

      <section className="sm:mt-0 sm:ms-20 w-fit md:min-w-[70%] px-3 snap-y snap-mandatory">
        <Home ref={homeRef} />
        <About ref={aboutRef} />
        <Resume ref={cvRef} />
        <Contact ref={contactRef} />
      </section>

      {/* Scroll progress circle */}
      {scrollY >= 200 && (
        <div className="fixed z-50 flex justify-center items-center bottom-2 right-2 ">
          <button
            className="relative h-16 w-16 rounded-full bg-[var(--background-color)] flex justify-center items-center "
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <svg
              className="absolute inset-0 rotate-[-90deg]"
              width="100%"
              height="100%"
              viewBox="0 0 44 44"
            >
              <circle
                cx="22"
                cy="22"
                r="20"
                stroke="rgba(200, 200, 200, 1)"
                strokeWidth="4"
                fill="none"
                strokeDasharray={circleLength}
                strokeDashoffset={strokeDashoffset}
                className="transition-all duration-300 ease-out"
              />
            </svg>
            <i className="fa-solid fa-arrow-up text-white text-xl"></i>
          </button>
        </div>
      )}

      {/* Scroll-to-top button */}
      {scrollY >= 200 && (
        <div className="scroll-up-btn-parent">
          <button
            className="scroll-up-btn border fixed rounded-full bg-[var(--background-color)] animate-bounce duration-1000 hover:scale-105 hover:animate-none"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <i className="fa-solid fa-arrow-up"></i>
          </button>
        </div>
      )}

      <div className="fixed w-1/2 h-screen top-0 left-0 bg-[var(--background-color)] z-10 openToRight"></div>
      <div className="fixed w-1/2 h-screen top-0 right-0 bg-[var(--background-color)] z-10 openToLeft"></div>
    </main>
  );
};

export default App;
