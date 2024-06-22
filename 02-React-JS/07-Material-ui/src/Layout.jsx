import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <Outlet/>
    </>
  )
}

export default Layout


// const router = createBrowserRouter([
//   {
//     path: '',
//     element: 'login'
//   },
//   {
//     path: 'register',
//     element: 'register'
//   },
//   {
//     path: 'admin',
//     element: 'admin',
//     children: [
//       {
//         path: '',
//         element: 'student'
//       },
//       {
//         path: 'institute',
//         element: 'student'
//       },
//       {
//         path: 'teacher',
//         element: 'student'
//       },
//       {
//         path: 'principal',
//         element: 'student'
//       },
//     ]
//   },
// ])