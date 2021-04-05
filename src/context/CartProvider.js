import { useState } from "react";
import CartContext from "./CartContext";

const CartProvider = ({ children }) =>{
    const [cart, setCart] = useState([]);
    console.log(cart)

    const isInCart = (id) =>{
        const cartLength = cart.length;
        if(cartLength === 0){
            return -1;
        } else {
            for (let i = 0; i < cartLength; i++){
                if (cart[i].item.id === id){
                    return i;
                }
            }
        }
    };

    const addItem = ( item, quantity ) =>{
        let a = isInCart(item.id);
        if (a >= 0){
            let addCart = cart;
            addCart[a] = {item, quantity};
            setCart(addCart)
            console.log(cart)
        } else { 
       
        setCart([
            ...cart, 
            { item, quantity }
        ]);
        console.log(cart)
    } 
};
    
    const removeItem = (id) => {
        let removeCart = cart;
        removeCart.splice(id, 1);
        setCart(removeCart);
    };

    const clear = () => {
        setCart([]);
    };

    return(
        <CartContext.Provider value={{ cart, addItem, removeItem, clear, isInCart}} >
            { children }
        </CartContext.Provider>
    );
};
export default CartProvider;