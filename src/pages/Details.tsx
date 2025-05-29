import Navbar from "../components/Navbar"
import { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import Loader from "../components/Loader"
import { FaRegHeart } from "react-icons/fa";
import Footer from "../components/Footer"
import { useShoppingCart } from "../context/CartContext";
import Notification from "../components/Notification"

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
export default function Details() {
  const [item, setItem] = useState<Product | null>(null)
  const{getItemQuantity, increaseCartQuantity} = useShoppingCart();
  const [showNotification, setShowNotification] = useState(false);
  function handleAddToCart() {
   
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 1500);}
  const { id } = useParams<{ id: string }>()
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setItem(response.data);
      })
      .catch((error) => {
        console.error("Error fetching item details:", error);
      });
  }, [id]);
  return (
    <div >
      {item ? (
       
          <div className="details ">
             {showNotification && <Notification />}
            <div className="border-b-[2px]">
              <Navbar />  
            </div>
            <div className="main h-screen">
              <div className="upper-details">
                <p>Collection <span className="capitalize">/ {item.category}</span></p>
              </div>
              <div className="middle">
                <div className="col left">
                  <div className="flex flex-col gap-2">
                    <p className="title">{item.title}</p>
                    <p className="min-title">{item.category}</p>
                    <p className="rating">Rating: {item.rating.rate} <span className="count">({item.rating.count})</span></p> 
                  </div>
                  <div className="flex flex-col gap-2">
                     <div className="price-container">
                    <p className="price">${item.price}</p>
                    <div>
                      <p className="discount">${(item.price * 90/100).toFixed(2)}</p>
                      <p className="old-price">With card</p>
                    </div>
                  </div>
                  
                  <div className="add-options">
                    <div className="addToCart cursor-pointer" onClick={() => {
                                increaseCartQuantity(item.id);
                                handleAddToCart();
                            }}>
                      Add to Cart
                    </div>
                    <div className="like"> 
                      <FaRegHeart />
                    </div>
                  </div>
                  {/* <div className="grid grid-cols-3 gap-1">
                    <p className="subtitle">Free Shipping</p>
                    <p className="subtitle">30 Days Return</p>
                    <p className="subtitle">Secure Payment</p>
                  </div> */}
                  </div>
                  
                 
                  
                </div>
                <div className="col ">
                  <div className="image-container">
                    <img src={item.image} alt={item.title} />
                  </div>
                </div>
                <div className="col right">
                  <p className="title">Details</p>
                  <p className="description">{item.description}</p> 
                </div>
              </div>
            </div>
            <div className="border-t-[2px] ">
                    <Footer/>
                </div>
          </div>
      ) : (
        <Loader />
      )}
   </div>
  )
}