import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar(){
    return(
       
        <div className="navbar ">
            
            <div className="left">
                <Link to="/products"> Catalog</Link>
                <Link to="/brands"> Brands</Link>
            </div>
            <a className="website-name" href="">Neron</a>
            <div className="right">
                <div>
                    <FaSearch className="icon" />
                    {/* <input type="search" placeholder="search"/> */}
                </div>
                <div>
                    <FaShoppingCart />
                    
                </div>
            </div>
        </div>
        
       
    )
}

export default Navbar