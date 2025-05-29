
import { Link } from "react-router-dom";

function Footer(){
    
    return(
       
        <div className="footer ">
            <Link to="/" className="logo">
            <a className="website-name" href="">Neron</a>
            </Link>
            <div className="left">
                <Link to="/products"> Catalog</Link>
               
            </div>
            
            
            
        </div>
        
       
    )
}

export default Footer