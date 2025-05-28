// export interface CartItem {
//   id: number;
//   name: string;
//   price: number;
//   image: string; 
//   quantity: number;
// }

// export interface CartContextType {
//   cart: CartItem[];
//   addToCart: (item: Omit<CartItem, 'quantity'>) => void;
//   removeFromCart: (itemId: number) => void;
//   updateQuantity: (itemId: number, amount: number) => void;
// }
// import { createContext, useContext, useState, ReactNode } from "react";
// import { CartItem, CartContextType } from "../types/cart";
// const CartContext = createContext<CartContextType | null>(null);

// interface CartProviderProps {
//   children: ReactNode;
// }

// export function CartProvider({ children }: CartProviderProps) {
//   const [cart, setCart] = useState<CartItem[]>([]);

//   const addToCart = (item: Omit<CartItem, 'quantity'>) => {
//     setCart((prev) => {
//       const existingItem = prev.find((i) => i.id === item.id);
//       if (existingItem) {
//         return prev.map((i) =>
//           i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
//         );
//       }
//       return [...prev, { ...item, quantity: 1 }];
//     });
//   };

//   const removeFromCart = (itemId: number) => {
//     setCart((prev) => prev.filter((item) => item.id !== itemId));
//   };

//   const updateQuantity = (itemId: number, amount: number) => {
//     setCart((prev) =>
//       prev.map((item) =>
//         item.id === itemId
//           ? { ...item, quantity: Math.max(0, item.quantity + amount) }
//           : item
//       ).filter((item) => item.quantity > 0)
//     );
//   };

//   return (
//     <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
//       {children}
//     </CartContext.Provider>
//   );
// }

// export function useCart(): CartContextType {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error('useCart must be used within a CartProvider');
//   }
//   return context;
// }