import React from 'react'
import Navbar from './Navbar'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <div className='w-full h-[90vh] flex justify-center items-center'>
            <h1 className='text-4xl'>Home Page</h1>
        </div>
    </div>
  )
}

export default Home