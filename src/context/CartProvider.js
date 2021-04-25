import { useState } from "react";
import CartContext from "./CartContext";

const CartProvider = ({ children }) =>{
    const [cart, setCart] = useState([]);
    console.log(cart);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [priceTotal, setPriceTotal] = useState([]);
    const [total, setTotal] = useState(0);

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

    const addItem = ( item, quantity) =>{

        //in cart
        let a = isInCart(item.id);
        //add to cart
        if (a >= 0){
            let addCart = cart;
            addCart[a] = {item, quantity};
            setCart(addCart);
            console.log(cart);
            //total quantity item
            setTotalQuantity( + quantity);
            console.log("setTotalQuantity " +  (+ quantity));
            console.log(totalQuantity);
            //total price item
            setPriceTotal(item.price * quantity);
            //total price of cart
            setTotal(total + (item.price * quantity));

        } else { 
             //total quantity item
             setTotalQuantity( totalQuantity + quantity);
             console.log("setTotalQuantity " + (totalQuantity + quantity));
             console.log("totalQuantity" + totalQuantity);
            //total price item
            setPriceTotal(item.price * quantity);
            console.log("setPriceTotal " + item.price * quantity);
            console.log("setTotal " + (priceTotal + (item.price * quantity)));
            //total price of cart
            setTotal(total + (item.price * quantity));

        setCart([
            ...cart, 
            { item, quantity }
        ]);
        console.log("cart" + cart)
    } 
};

    const removeItem = (id, price, q) => {
        setCart(cart.filter(({ item }) => item.id !== id ));
        setTotalQuantity( totalQuantity - q);
        setTotal(total - (price * q));
        console.log("total:" + (total - (price * q)));
        console.log(cart);
    };

    const clear = () => {
        setCart([]);
        setTotal(0);
        setTotalQuantity(0);
    };

    return(
        <CartContext.Provider value={{ cart, total, totalQuantity, addItem, removeItem, clear, isInCart}} >
            { children }
        </CartContext.Provider>
    );
};
export default CartProvider;