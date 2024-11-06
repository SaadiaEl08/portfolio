import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./sections/Home";

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
                    path: "*",
                    element: ""
                },


            ]
    }

]);
export default router;