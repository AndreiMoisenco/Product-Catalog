
// import { FaShoppingCart } from "react-icons";
// import { Link } from "react-router-dom";
// import { FaShoppingCart } from "react-icons";
import { Link } from "react-router-dom";
// import { AddToCartButton } from "./AddToCartButtonsProps";
// import { CartItem } from "../types/cart";
import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { useShoppingCart } from "../context/CartContext";
import Notification from "./Notification";

        // interface ItemProps {
        // test: Omit<CartItem, 'quantity'>;
        // index: number;
        // }
    interface ItemProps {
      test: {
        id: number;
        title: string;
        price: number;
        image: string;
        rating: {
              rate: number;
              count: number;
            };
      };
      index: number;
    }
function Item({ test, index }: ItemProps){
    console.log("Test object:", test); 
    function getFirst4Words(str: string): string {
        return str.split(" ").slice(0,3).join(" ");
    }
     const [showNotification, setShowNotification] = useState(false);
    const{getItemQuantity, increaseCartQuantity} = useShoppingCart();
    const quantity = getItemQuantity(test.id);
    function handleAddToCart() {
    // console.log("Item added to cart:", test);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 1500);
  }
    return(
        <div>
            {showNotification && <Notification />}
            <div className="item-container">
                <FaRegHeart  className="icon"/> 
                <Link to={`/item/${test.id}`}>
                <div className="picture">
                    
                        <img src={test.image }alt={test.title}/>

                        
                        {/* <a href="" className="button">Add To Cart</a> */}
                    </div>
                    </Link>
                    <div className="text">
                        <h2 className="title">{getFirst4Words(test.title)}</h2>
                        <p className="rating">Rating: {test.rating.rate} <span className="count">({test.rating.count})</span></p>   
                        <div className="price">
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
                        <div className="add-to-cart"  onClick={() => {
                                increaseCartQuantity(test.id);
                                handleAddToCart();
                            }}>
                            Add to Cart
                        </div>
                       
                        {/* <div className="quantity">
                            {quantity > 0 && <span className="count">{quantity}</span>}
                        
                        
                        </div> */}
                        
                    </div>
            </div>
            
        </div>
    )
}
export default Item