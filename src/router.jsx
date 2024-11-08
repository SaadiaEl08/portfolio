import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./sections/Home";
import About from "./sections/About";
import Contact from "./sections/Contact";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children:
            [
                {
                    path: "/",
                    element: <Home />
                },
                {
                    path: "/about",
                    element: <About />
                },
                {
                    path: "/contact",
                    element: <Contact />
                },
                {
                    path: "*",
                    element: <h1>Not found</h1>
                },


            ]
    }

]);
export default router;