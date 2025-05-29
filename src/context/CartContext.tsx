
import { createContext, useContext, useState } from "react";
const CartContext = createContext({} as CartContext);
import Cart from "../components/Cart";
import UseLocalStorage from "@/hooks/UseLocalStorage";

export function useShoppingCart(){
    return useContext(CartContext);
}
type CartItem = {
    id: number;
    quantity: number;
    // title: string;
    // price: number;
    // image: string;
    // rating: {
    //     rate: number;
    //     count: number;
    // };
}
type CartContext = {

    getItemQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void;
    decreaseCartQuantity: (id: number) => void;
    removeFromCart: (id: number) => void;
    openCart: () => void
    closeCart: () => void
    cartQuantity: number
    cartItems: CartItem[];

}
type CartProviderProps = {
    children: React.ReactNode;
}
export function CartProvider({ children }: CartProviderProps) {
    const [cartItems, setCartItems] = UseLocalStorage<CartItem[]>("shopping-cart",[]);
    const [isOpen, setIsOpen] = useState(false);
    const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0);
    const openCart = () => setIsOpen(true);
    const closeCart = () => setIsOpen(false);
    function getItemQuantity(id: number) {
        return cartItems.find(item => item.id === id)?.quantity || 0;
    }
    function increaseCartQuantity(id: number) {
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id) == null) {
                return [...currItems, { id, quantity: 1 }];
            } else{
                return currItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 };
                    } else {
                        return item;
                    }
                });
            }
        });
    }
    function decreaseCartQuantity(id: number) {
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id)?.quantity === 1) {
                return currItems.filter(item => item.id !== id);
            } else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 };
                    } else {
                        return item;
                    }
                });
            }
        });
    }
    function removeFromCart(id: number) {
        setCartItems(currItems => {
            return currItems.filter(item => item.id !== id);
        });
    }
    

    return (
        <CartContext.Provider value={{
            getItemQuantity, 
            increaseCartQuantity, 
            decreaseCartQuantity,
            removeFromCart,
            openCart,
             closeCart,
            cartQuantity,
           
            cartItems}}>
            {children}
            <Cart isOpen={isOpen}/>
        </CartContext.Provider>
    );
}