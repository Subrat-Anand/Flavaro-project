import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const ProctorRoute = ({element}) => {
    const cartItems = useSelector((store)=>store.Cart.Cart)
    return cartItems.length > 0 ? element : <Navigate to="/"/>
}

export default ProctorRoute