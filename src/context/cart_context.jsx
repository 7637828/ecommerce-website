import { useContext } from "react";
import { createContext } from "react";
import { useReducer } from "react";
import { useEffect } from "react";
import reducer from "../reducer/cart_reducer";
import { json } from "react-router-dom";

const CartContext = createContext();

const getLocalCartData = () =>{
    let newCartata = localStorage.getItem("Cart");
    if(newCartata===[]){
        return [];
    }
    else{
        return JSON.parse(newCartata)
    }
}
const initialState = {
    cart:getLocalCartData(),
    }

export const CartContextProvider = ({children}) =>{
    const[state,dispatch] = useReducer(reducer,initialState);

    const addCart = (name,price,amount,id,data1) =>{

        dispatch({type:"ADD_TO_CART",payload:{name,price,amount,id,data1}})
    }

    const setDecrease =  (id) =>{
        dispatch({type:"SET_DECREMENT", payload:id})

    }

    const setIncrease =  (id) =>{
        dispatch({type:"SET_INCREMENT", payload:id})

    }

    const removeCart = (id) =>{

        dispatch({type:"REMOVE_FROM_CART",payload:id})
    }

    const clearCart = () =>{
        dispatch({type:"CLEAR_CART"})
    }
    useEffect(()=>{
        localStorage.setItem("Cart",JSON.stringify(state.cart))
    },[state.cart])

    return (
        <CartContext.Provider value={{...state,addCart,removeCart,clearCart,setDecrease,setIncrease}}>
        {children}
    </CartContext.Provider>
    ) 
}

export const useCartContext = () =>{
    return useContext(CartContext);
}