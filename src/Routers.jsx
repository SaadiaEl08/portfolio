import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import AboutMe from './pages/AboutMe';
import Blog from './pages/Blog';
import Certifications from './pages/Certifications';
import Contact from './pages/Contact';
import Education from './pages/Education';
import Hobbies from './pages/Hobbies';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Skills from './pages/Skills';
const Routers = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/about",
                element: <AboutMe/>
            },
            {
                path: "/blog",
                element: <Blog/>
            },
            {
                path: "/certifications",
                element: <Certifications />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/education",
                element: <Education />
            },
            {
                path: "/hobbies",
                element: <Hobbies />
            },
            {
                path: "/projects",
                element: <Projects />
            },
            {
                path: "/resume",
                element: <Resume />
            },
            {
                path: "/skills",
                element: <Skills />
            }

        ]


    }
]);
export default Routers;