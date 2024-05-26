import React, { useEffect, useState } from 'react'
import { load } from '../Data/constant'

const Success = () => {
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    setTimeout(() => {
        setLoading(false)
    }, 3000);
  })
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      {
        loading ? (
          <img src={load}/>
        ):(
          <>
          <h1 className='text-3xl text-center font-semibold text-gray-600 mb-4'>Order Successful! 😊😊</h1>
          <p>Your Order Sucessfully has been placed</p>
          </>
        )
      }
    </div>
  )
}

export default Success