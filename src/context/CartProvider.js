import { useState } from "react";
import CartContext from "./CartContext";

const CartProvider = ({ children }) =>{
    const [cart, setCart] = useState([]);
    console.log(cart);
    const [priceTotal, setPriceTotal] = useState([]);
    const [total, setTotal] = useState([]);
    const [totalQuantity, setTotalQuantity] = useState(0);

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
            setCart(addCart);
            console.log(cart);

            setTotalQuantity( + quantity);
            console.log("setTotalQuantity " +  (+ quantity));
            console.log(totalQuantity);

            setPriceTotal(item.price * quantity);
       console.log(item.price * quantity);
       console.log(priceTotal + (item.price * quantity));
       setTotal(priceTotal + (item.price * quantity));

        } else { 
       setPriceTotal(item.price * quantity);
       console.log("setPriceTotal " + item.price * quantity);
       console.log("setTotal " + (priceTotal + (item.price * quantity)));
       setTotal(priceTotal + (item.price * quantity));

       setTotalQuantity( totalQuantity + quantity);
            console.log("setTotalQuantity " + (totalQuantity + quantity));
            console.log(totalQuantity);

        setCart([
            ...cart, 
            { item, quantity }
        ]);
        console.log("cart" + cart)
    } 
};

    const removeItem = (id, q) => {
        setCart(cart.filter(({ item }) => item.id !== id ));
        setTotalQuantity( totalQuantity - q);
    };

    const clear = () => {
        setCart([]);
        setTotalQuantity(0);
    };

    return(
        <CartContext.Provider value={{ cart, total, totalQuantity, addItem, removeItem, clear, isInCart}} >
            { children }
        </CartContext.Provider>
    );
};
export default CartProvider;