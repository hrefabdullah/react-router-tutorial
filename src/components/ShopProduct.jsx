import React from 'react'
import { useNavigate, useParams,  } from 'react-router'
import Navbar from './Navbar'

const ShopProduct = () => {
    const toShop = useNavigate()
    const { id } = useParams()
    const products = ['Shirt', 'Pant', 'Coat', 'Shoes', 'Tie', 'Jacket']

    function handleClick(){
        toShop('/shop')
    }

    return (
        <div>
            <Navbar />
            <div className='w-screen h-[90vh] flex flex-col justify-center items-center'>
                <h1>Your Product is : {products[id]}</h1>
                <button className='font-bold pt-2' onClick={handleClick}>Go back</button>
            </div>
        </div>
    )
}

export default ShopProduct