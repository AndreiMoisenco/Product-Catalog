import { useShoppingCart } from "../context/CartContext";
import { Offcanvas } from "react-bootstrap";
import CartItem from "./CartItem";
import { IoMdClose } from "react-icons/io";

type CartProps = {
    isOpen: boolean;
}

export default function Cart({ isOpen }: CartProps) {
    const { closeCart, cartItems } = useShoppingCart();
    // const getPrice = (id: number) => cartItems.find(p => p.id === id)?.price || 0;
    return (
         <Offcanvas show={isOpen} onHide={closeCart} className="cart-container" placement="end">
                <div className="cart">
            
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className="title">Cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {cartItems.length === 0 ? (
                        <p className="empty">Your cart is empty.</p>
                    ) : (
                        cartItems.map(item => (
                            <CartItem key={item.id} {...item} />
                        ))
                    )}
                    <p onClick={closeCart} className="close cursor-pointer"><IoMdClose /></p>
                    <div className="total">
                            
                    
                        <div>
                            <p>
                                Total:
                            </p>
                             {cartItems.reduce((total, item) => total + item.quantity, 0)} items
                             {/* {
                                cartItems
                                    .reduce((total, item) => total + getPrice(item.id) * item.quantity, 0)
                                    .toFixed(2)
                            } */}
        
                            
                        </div>
                    </div>
                </Offcanvas.Body>
                </div>
            </Offcanvas>
        
    );
}
