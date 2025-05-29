import { RouterProvider } from "react-router-dom"; 
import {routes} from "./routes"; 
import { CartProvider } from "./context/CartContext";
// import { Cart } from "./components/Cart";

function App() {
  return (
    // <CartProvider>
    <CartProvider>

      <div>
        <RouterProvider router={routes} /> 
        {/* <Cart /> */}
      </div>
      </CartProvider>
    // </CartProvider>
  );
}

export default App;


