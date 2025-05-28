// import { useCart } from "./CartContext";
// import { CartItem } from "../types/cart";

// export function Cart() {
//   const { cart, removeFromCart, updateQuantity } = useCart();

//   const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

//   return (
//     <div className="cart">
//       <h2>Shopping Cart</h2>
//       {cart.length === 0 ? (
//         <p>Your cart is empty</p>
//       ) : (
//         <>
//           {cart.map((item: CartItem) => (
//             <div key={item.id} className="cart-item">
//               <img src={item.image} alt={item.name} width="50" />
//               <div>
//                 <h3>{item.name}</h3>
//                 <p>${item.price}</p>
//                 <div className="quantity-controls">
//                   <button onClick={() => updateQuantity(item.id, -1)}>-</button>
//                   <span>{item.quantity}</span>
//                   <button onClick={() => updateQuantity(item.id, 1)}>+</button>
//                 </div>
//                 <button onClick={() => removeFromCart(item.id)}>Remove</button>
//               </div>
//             </div>
//           ))}
//           <div className="cart-total">
//             <h3>Total: ${total.toFixed(2)}</h3>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }