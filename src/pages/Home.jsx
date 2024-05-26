import React from 'react'
import Navbar from '../Components/Navbar'
import CatogaryMenu from '../Components/CatogaryMenu'
import FoodItem from '../Components/FoodItem'
import Cart from '../Components/Cart'
import { useSelector } from 'react-redux'

const Home = () => {
  const isOpens = useSelector((store) => store.Cart.isOpen) // Ensure the correct path to isOpen

  return (
    <div>
      {isOpens ? (
        <>
          <Navbar />
          <CatogaryMenu />
          <FoodItem />
          <Cart />
        </>
      ) : (
        <>
          <Navbar />
          <CatogaryMenu />
          <FoodItem />
        </>
      )}
    </div>
  )
}

export default Home
