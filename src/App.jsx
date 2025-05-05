import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './components/Home'
import About from './components/About'
import Shop from './components/Shop'
import ShopProduct from './components/ShopProduct'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },

  {
    path: '/Shop',
    element: <Shop/>
  },

  {
    path: '/About',
    element: <About/>
  },

  {
    path: '/Shop/:id',
    element: <ShopProduct/>
  }
])


const App = () => {

  return (
    <div className='w-screen h-screen'>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App