import { useContext, useReducer } from "react";
import {  createContext } from "react";
import CartReducer from "./CartReducer";
const CartContext=createContext();
const CartContextDispacher=createContext();

const initalState={
    cart:[],
    total:0
}

const CartProvider = ({children}) => {
    const [cart ,dispatch]=useReducer(CartReducer,initalState)
    return (  
        <CartContext.Provider value={cart}>
            <CartContextDispacher.Provider value={dispatch}>
            {children}
            </CartContextDispacher.Provider>
        </CartContext.Provider>
    );
}
 
export default CartProvider;

export const useCart=()=>useContext(CartContext);
export const useCartActions=()=>useContext(CartContextDispacher);
