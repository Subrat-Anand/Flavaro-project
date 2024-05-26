import React, { useRef, useState } from 'react'
import FoodCard from '../pages/FoodCard'

const Navbar = () => {
    const Foodref = useRef(null)

    const HandleChange = () => {
        const Direct = Foodref.current.value
        console.log(Direct)
    }

    return (
        <nav className='flex flex-col lg:flex-row justify-between items-center py-3 mx-6'>
            <div>
                <h3 className='font-bold text-xl text-gray-600'>{new Date().toUTCString().slice(0, 16)}</h3>
                <h3 className='text-2xl font-bold'>Flarvo Foods</h3>
            </div>
            <div>
                <input
                    type='text'
                    placeholder='Search here...'
                    className='p-3 border border-gray-400 outline-none rounded-lg w-full lg:w-[25vw]'
                    ref={Foodref}
                    onChange={HandleChange}
                />
            </div>
        </nav>
    )
}

export default Navbar
