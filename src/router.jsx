import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./sections/Home";
import About from "./sections/About";

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
                    path: "*",
                    element: ""
                },


            ]
    }

]);
export default router;