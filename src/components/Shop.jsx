import React from 'react'
import Navbar from './Navbar'
import { NavLink } from 'react-router'

const Shop = () => {
  return (
    <div>
        <Navbar/>
        <div className='w-full h-[90vh] flex flex-col justify-center items-center'>
            <h1 className='text-4xl'>Store Section</h1>
              <ul className='flex gap-2 pt-1 text-xl'>
                <NavLink className='hover:font-semibold' to={'/shop/0'}>Shirt</NavLink>
                <NavLink className='hover:font-semibold' to={'/shop/1'}>Pant</NavLink>
                <NavLink className='hover:font-semibold' to={'/shop/2'}>Coat</NavLink>
                <NavLink className='hover:font-semibold' to={'/shop/3'}>Shoes</NavLink>
              </ul>
        </div>
    </div>
  )
}

export default Shop