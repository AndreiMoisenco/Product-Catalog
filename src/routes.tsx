import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/products",
         element: <Products/>,
    },
])