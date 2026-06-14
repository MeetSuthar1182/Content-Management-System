import { useState } from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './App.css'
import Admin from '../layouts/Admin'
import Visitor from '../layouts/Visitor'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AboutPage from '../components/Aboutpage'
import Singleblogpage from '../components/Singleblogpage'
import AdminDashboard from '../components/AdminDashboard'
import NotFoundPage from '../components/NotFoundPage'

function App() {
  
  const routes = createBrowserRouter(
    [

      //Visitorside Routes
      {
        path: "/home",
        element: <Visitor/>
      },

      {
        path: "/about",
        element: <div>
          <Navbar/>
          <AboutPage/>
          <Footer/>
        </div>
      },
      {
        path:"/blog/:id",
        element: <div>
          <Navbar/>
          <Singleblogpage/>
          <Footer/>
        </div>
      },
      //Admin side Routes
      {
        path: "/admin",
        element: <Admin/>
      },
      {
        path: "/admindashboard",
        element: <AdminDashboard/>
      },
      {
        path: "*",
        element: <NotFoundPage/>
      }
    ]
  )

  return (
    <>
    <RouterProvider router={routes}/>
    </>
  )
}

export default App
