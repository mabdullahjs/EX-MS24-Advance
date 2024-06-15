import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import Home from './screens/Home'
import About from './screens/About'
import Contact from './screens/Contact'
import Services from './screens/Services'
import Product from './screens/Product'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'about',
        element: <About/>
      },
      {
        path: 'contact',
        element: <Contact/>
      },
      {
        path: 'services',
        element: <Services/>
      },
      {
        path: 'product/:id', //dynamic route
        element: <Product/>
      },
      {
        path: '*',
        element: <Home/>
      }
    ]
  }
])

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Home/>
//   },
//   {
//     path: 'about',
//     element: <About/>
//   }
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)



// /product <product/> x
// /product/:id <product/>

// /product === <Home/>

// /product/djfhsdjkfhdjkf == <Product/>