import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

function Navbar(){
    return(
       
             <div className="navbar ">
            <a className="website-name" href="">Neron</a>
            <nav>
                <a href="">Home</a>
                <a href="">Contact</a>
                <a href="">About</a>
                <a href="">Sign Up</a>
            </nav>
            <div className="options">
                <div className="search">
                    <input type="search" placeholder="What are you looking for?"/>
                   <FaSearch className="icon" />


                    {/* <i className="fa-solid fa-magnifying-glass"></i> */}
                </div>
                <a href=""><i className="fa-solid fa-heart"></i></a>
                 <FaShoppingCart />
            </div>
        </div>
        
       
    )
}

export default Navbar