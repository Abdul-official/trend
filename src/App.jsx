import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Applayout from './pages/Applayout'
import Home from './pages/Home'
import About from './pages/About'
import Collection from './pages/Collection'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import Product from './pages/Product'
import CheckoutPage from './pages/CheckoutPage'

const App = () => {
  const router = createBrowserRouter([
    {
      path : '/',
      element : <Applayout/>,

      children : [
        {
          path : '/',
          element : <Home/>
        },
        {
          path : '/About',
          element : <About/>
        },
        {
           path : '/Collection',
           element : <Collection/>
        },
        {
          path  : '/Contact' ,
          element : <Contact/>
        },
        {
          path : '/Cart',
          element : <Cart/>
        },    
        {
          path : '/Product/:ProductId',
          element : <Product/>
        },
        {
          path : '/checkoutPage',
          element : <CheckoutPage/>
        }
      ]               
    }
  ])
  return <RouterProvider router={router}/>
}

export default App



