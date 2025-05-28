import { RouterProvider } from "react-router-dom"; 
import {routes} from "./routes"; 
// import { CartProvider } from "./components/CartContext";
// import { Cart } from "./components/Cart";

function App() {
  return (
    // <CartProvider>
      <div>
        <RouterProvider router={routes} /> 
        {/* <Cart /> */}
      </div>
    // </CartProvider>
  );
}

export default App;



