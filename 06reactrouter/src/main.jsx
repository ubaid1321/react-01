import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Layout from './Layout.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<layout/>,
    children:[
      {
      
        path:"",
        element:<home/>
      
    },
    {
     path:"About",
     element:<About/>
    }
  ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
