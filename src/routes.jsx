import { createBrowserRouter } from "react-router-dom";
import ErrorElement from "./components/ui/ErrorElement";
import Home from "./pages/Home";
import MainLayouts from "./components/Layouts/MainLayouts";

const MainRoutes = createBrowserRouter([
    {

        path: '/',
        element: <MainLayouts/>,
        errorElement: <ErrorElement/>,
        children: [
            {
                index: true,
                element: <Home/>
            }
        ]
    }

]);

export default MainRoutes;