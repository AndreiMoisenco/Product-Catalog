
import { FaShoppingCart } from "react-icons/fa";
function Item({test, index}){

    return(
        <div>
            <div className="item-container">
                <div className="picture">
                        <img src={test.image }alt={test.title}/>
                    
                        <div>
                            
                        </div>
                        {/* <a href="" className="button">Add To Cart</a> */}
                    </div>
                    <div className="text">
                        <h2>{test.title}</h2>
                        <div className="price">
                            {/* <span>180$</span> */}
                            <small>{test.price} $</small>
                        </div>
                        <div className="stars">
                            {/* <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star-half-stroke"></i> */}
                            {/* <small>(88)</small> */}
                        </div>
                        <FaShoppingCart />
                    </div>
            </div>
        </div>
    )
}
export default Item