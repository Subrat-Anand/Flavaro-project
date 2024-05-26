import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: "Cart",
    initialState:{
        Cart: [],
        isOpen: false
    },
    reducers:{
        addToCart:(state, action)=>{
            const existingItem = state.Cart.find((item)=> item.id === action.payload.id)
            if(existingItem) {
              state.Cart =  state.Cart.map((item)=> item.id === action.payload.id  ?{...item, qty: item.qty + 1}: item)
            }else{
                state.Cart.push(action.payload)
            }
        },
        removeFromCart:(state, action)=>{
           state.Cart =  state.Cart.filter((Item)=> Item.id !== action.payload.id)
        },
        toggleMenu: (state, action)=>{
            state.isOpen = !state.isOpen
        },
        IncrementQty: (state, action)=>{
            state.Cart = state.Cart.map((item)=> item.id === action.payload.id ? {...item, qty: item.qty + 1}: item)
        },
        DecrementQty: (state, action)=>{
            state.Cart = state.Cart.map((item)=> item.id === action.payload.id ? {...item, qty: item.qty - 1}: item)
        }
    }
})

export const {addToCart, removeFromCart, toggleMenu, IncrementQty, DecrementQty} = CartSlice.actions
export default CartSlice.reducer