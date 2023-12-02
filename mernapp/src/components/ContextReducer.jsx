import React, { createContext, useContext, useReducer } from 'react'



const CartStateContext = createContext();
const CartDispathContext = createContext();
const reducer =(state,action)=>{
    switch(action.type){
        case "ADD":
            return[...state,{id:action.id, name:action.name, qty:action.qty, size:action.size, price:action.price, img:action.img}]

            default:
                console.log("Error in reducer");
    }

}
export const CartProvider = ({children})=>{


const[state,dispatch] = useReducer(reducer,[]);

    return(
        <CartDispathContext.Provider value={state}>
           <CartDispathContext.Provider value={dispatch}>
           {children}
           </CartDispathContext.Provider>
        </CartDispathContext.Provider>
    );
}

export const useCart = () => useContext(CartStateContext);
export const useDispatchCart = ()=> useContext(CartDispathContext);