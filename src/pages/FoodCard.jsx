import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../Redux/CartSlice'

const FoodCard = ({id, name, price, desc, rating, img}) => {
    const dispatch = useDispatch()

    const addItems = ()=>{
        dispatch(addToCart({id: id, name: name, price: price, img: img, rating: rating, qty: 1}))
    }

  return (
    <div className='font-bold w-[250px] bg-white p-5 flex flex-col rounded-lg gap-2'>
        <img className='w-[250px] h-[250px] cursor-grabbing' src={img}/>
        <div className='text-sm flex justify-between'>
            <h2>{name}</h2>
            <span className=' text-green-500'>₹{price}</span>
        </div>
        <p className='text-sm font-normal'>{desc}</p>
        <div className='flex justify-between'>
            <span className='flex justify-center items-center'>
                <i className="fa fa-star pr-1 text-yellow-400" aria-hidden="true"></i>
                {rating}
            </span>
            <button className='px-3 py-2 bg-gray-200 font-bold rounded-lg 
            hover:bg-green-500 hover:text-white cursor-pointer'
            onClick={addItems}>
                Add to Cart
            </button>
        </div>
    </div>
  )
}

export default FoodCard