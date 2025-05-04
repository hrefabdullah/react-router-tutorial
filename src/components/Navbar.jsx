import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div className='w-[100%] h-[10vh] min-h-[70px] bg-purple-300 grid grid-cols-2 px-7 py-1'>
      <h1 className='text-[2rem] font-semibold self-center'>Navbar</h1>
      <div className='flex items-center gap-4 justify-self-end'>
        <ul className='gap-5 items-center pr-3 flex'>
          <NavLink to={'/'}
          className='hover:text-white'>Home</NavLink>
          <NavLink to={'/Shop'}
          className='hover:text-white'>Shop</NavLink>
          <NavLink to={'/About'}
          className='hover:text-white'>About</NavLink>
        </ul>
      </div>
    </div>
  )
}

export default Navbar