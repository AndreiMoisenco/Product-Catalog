
// import { FaShoppingCart } from "react-icons";
// import { Link } from "react-router-dom";
// import { FaShoppingCart } from "react-icons";
import { Link } from "react-router-dom";
// import { AddToCartButton } from "./AddToCartButtonsProps";
// import { CartItem } from "../types/cart";
import { FaRegHeart } from "react-icons/fa";


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
        return str.split(" ").slice(0, 3).join(" ");
    }

    return(
        <div>
            <Link to={`/item/${test.id}`}>
            <div className="item-container">
                <FaRegHeart  className="icon"/> 
                <div className="picture">
                    
                        <img src={test.image }alt={test.title}/>

                        
                        {/* <a href="" className="button">Add To Cart</a> */}
                    </div>
                    <div className="text">
                        <h2 className="title">{getFirst4Words(test.title)}</h2>
                        {/* <p className="rating">Rating: {test.rating.rate} <span className="count">({test.rating.count})</span></p>    */}
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
                        <div className="add-to-cart">
                            Add to Cart
                        </div>
                        
                        
                        
                    </div>
            </div>
            </Link>
        </div>
    )
}
export default Item