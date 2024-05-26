import React from 'react'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../Redux/CartSlice'
import { IncrementQty, DecrementQty } from '../Redux/CartSlice'

const ItemCart = ({img, name, price, qty, id}) => {

  const dispatch = useDispatch()

  const Trash = ()=>{
    dispatch(removeFromCart({id}))
  }

  const HandleMinus = ()=>{
    qty > 1 ? dispatch(DecrementQty({id})) : (qty = 0)
  }

  const HandlePlus = ()=>{
    qty >= 1 ? dispatch(IncrementQty({id})) : (qty = 0)
  }

  return (
    <div className='flex gap-2 shadow-md rounded-lg p-2 mb-3 overflow-auto'>
        <i className="fa-solid fa-trash" onClick={Trash}></i>
        <img src={img} 
        className='w-[50px] h-[50px] rounded-md'
        />
        <div>
            <h2 className='font-bold text-gray-800'>{name}</h2>
            <div className='flex justify-between items-center '>
            <span className='text-green-500 font-bold'>{price}</span>
              <div className='flex justify-between items-center pl-8 absolute right-7'>
                <i className="fa-solid fa-plus border-2 border-gray-600 text-gray-600 hover:bg-green-500 hover:border-none rounded-md p-1 transition-all ease-linear cursor-pointer" 
                onClick={HandlePlus}></i>
                <span className='mx-5'>{qty}</span>
                <i className="fa-solid fa-minus border-2 border-gray-600 text-gray-600 hover:bg-green-500 hover:border-none rounded-md p-1 transition-all ease-linear cursor-pointer"
                onClick={HandleMinus}></i>
              </div>
            </div>
        </div>
    </div>
  )
}

export default ItemCart