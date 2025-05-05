import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './components/Home'
import About from './components/About'
import Shop from './components/Shop'
import ShopProduct from './components/ShopProduct'
import NotFound from './NotFound'

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
  },

  {
    path: '*',
    element: <NotFound />
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