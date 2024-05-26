import React from 'react'
import FoodCard from '../pages/FoodCard'
import FoodData from '../Data/FoodData'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../Redux/CartSlice'

const FoodItem = () => {

  const dispatch = useDispatch()
    
  const toggle = ()=>{
    console.log("hey")
    dispatch(toggleMenu())
  }  

  return (
    <div className='flex flex-wrap gap-2 ml-4 justify-center lg:justify-start lg:ml-28 gap-5'>
        {
            FoodData.map((food)=>{
                return(
                    <FoodCard
                    price={food.price} 
                    img={food.img}
                    key={food.id} 
                    id={food.id} 
                    name={food.name} 
                    desc={food.desc} 
                    category={food.category} 
                    rating={food.rating}
                    />
                )
            })
        }
        <FoodCard/>
        <i onClick={toggle} className="fa-solid fa-cart-shopping shadow-md text-2xl p-3 fixed bottom-10 right-6 z-50"></i>
    </div>
  )
}

export default FoodItem