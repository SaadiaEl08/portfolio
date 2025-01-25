import { Cv, Contact, NavBar, About, Home } from "./sections";
import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
const App = () => {
  const currentLanguageCode = useSelector((state) => state.language);
  const isDarkTheme = useSelector((state) => state.isDarkTheme);
  useEffect(() => {
    document.body.setAttribute("data-theme", isDarkTheme ? "dark" : "light");
  }, [isDarkTheme]);
  useEffect(() => {
    document.body.style.direction = currentLanguageCode == "ar" ? "rtl" : "ltr";
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
  return (
    <main
      data-theme={isDarkTheme ? "dark" : "light"}
      className="min-h-screen flex flex-col lg:flex-row lg:justify-center lg:items-center justify-between items-center pt-4  sm:pt-0 text-[var(--color)]"
    >
      <aside
        className={`w-fit h-fit fixed ${
          currentLanguageCode == "ar" ? " sm:right-5" : " sm:left-5"
        } sm:top-40 z-10`}
      >
        <NavBar
          sections={sections}
          className={`${
            scrollY >= 10 ? "shadow-[0_0px_90px_7px_rgba(0,0,0,0.9)]" : " "
          }
          `}
         
        />
      </aside>
      <section className="sm:mt-0 sm:ms-20 w-fit md:min-w-[70%] px-3 snap-y snap-mandatory">
        <Home ref={homeRef} />
        <About ref={aboutRef} />
        <Cv ref={cvRef} />
        <Contact ref={contactRef} />
      </section>
      {
        // back to top
        scrollY >= 200 && (
          <div className="fixed bottom-2 right-2">
            <button
              className="border h-12 w-12 rounded-full bg-[var(--background-color)] animate-bounce duration-1000 hover:scale-105 hover:animate-none"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <i className="fa-solid fa-arrow-up"></i>
            </button>
          </div>
        )
      }
    </main>
  );
};

export default App;
