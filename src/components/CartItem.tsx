import { useShoppingCart } from "../context/CartContext";
import Loader from "../components/Loader";
import { useEffect, useState } from "react";
import axios from "axios";
import { IoMdClose } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";import { FaMinus } from "react-icons/fa6";


export default function CartItem({ id, quantity }: { id: number; quantity: number }) {
  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart();
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((result) => {
        const sliced = result.data.slice(0, 20);
        setItems(sliced);
      })
      .catch((error) => console.error("Error fetching products:", error))
      .finally(() => setLoading(false));
  }, []);

  const item = items.find(item => item.id === id);

//   const quantity = getItemQuantity(item.id);
  if (loading) return <Loader />;
  if (!item) return <div>Item not found</div>;

  return (
    <div className="cart-item">
      <h2>{item.title}</h2>
      <p>{quantity >=1 && <span className="text-muted" >x{quantity}</span>}</p>
       <div className="cursor-pointer" onClick={() => increaseCartQuantity(item.id)}><FaPlus /></div>
                        <div onClick={() => decreaseCartQuantity(item.id)}><FaMinus className="cursor-pointer" /></div>
      <p> ${item.price}</p>
      <IoMdClose className="cursor-pointer " onClick={() => removeFromCart(id)}/>
      
    </div>
  );
}
