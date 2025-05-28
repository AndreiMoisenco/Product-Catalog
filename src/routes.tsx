import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Details from "./pages/Details";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/item/:id",
        element: <Details/>
    },
    {
        path: "/products",
         element: <Products/>,
    },
])