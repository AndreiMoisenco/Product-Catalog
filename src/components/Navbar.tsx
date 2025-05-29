import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../context/CartContext";

function Navbar(){
    const {openCart, cartQuantity} = useShoppingCart();

    return(
       
        <div className="navbar ">
            
            <div className="left">
                <Link to="/products"> Catalog</Link>
               
            </div>
            <Link to="/" className="logo">
            <a className="website-name" href="">Neron</a>
            </Link>
            
            <div className="right">
                
                <div className="cursor-pointer" onClick={openCart} >
                    <FaShoppingCart />
                    
                </div>
            </div>
        </div>
        
       
    )
}

export default Navbar