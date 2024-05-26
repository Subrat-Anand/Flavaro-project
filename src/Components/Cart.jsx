import React from 'react'
import ItemCart from './ItemCart'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../Redux/CartSlice'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const CartItems = useSelector((store)=> store.Cart.Cart)
    const TotalQty = CartItems.reduce((totalQty, item)=>totalQty + item.qty, 0)
    const TotalPrice = CartItems.reduce((total, item)=> total + item.qty * item.price, 0)
    if(!CartItems) return null

    const toggle = ()=>{
      dispatch(toggleMenu(false))
    }

  return (
  <>
    <div className='fixed right-0 top-0 w-full lg:w-[20vw] bg-white h-full p-5 z-50'>
        <div className='flex justify-between items-center my-3 mb-3'>
            <span className='text-xl font-bold text-gray-800'>My Order</span>
            <span><i className="fa-solid fa-circle-xmark text-xl" onClick={toggle}></i></span>
        </div>
        {CartItems.length > 0 ? (
                CartItems.map((food) => (
                    <ItemCart
                        key={food.id}
                        id={food.id}
                        name={food.name}
                        price={food.price}
                        img={food.img}
                        qty={food.qty}
                    />
                ))
            ) : (
                <h2 className='text-center text-xl'>Your Cart is empty</h2>
            )}
        <div className='absolute bottom-0 mb-4'>
            <h3 className='font-semibold text-gray-800'>Items : {TotalQty}</h3>
            <h3 className='font-semibold text-gray-800'>Total Amount : {TotalPrice}</h3>
            <hr className='w-[90vw] lg:w-[18vw] my-2'/>
            <button onClick={()=> navigate('/success')} className='cursor-pointer bg-blue-500 text-rose-600 font-bold px-3
             rounded-lg hover:bg-green-500 hover:text-white py-3 w-[90vw] lg:w-[18vw]'>CheckOut</button>
        </div>
    </div>
  </>
  )
}

export default Cart