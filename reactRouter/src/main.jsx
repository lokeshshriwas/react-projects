import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {  Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import {Github, Home, Contact, User, githubInfoLoader, About} from "./components"



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
        <Route path="" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route
        loader={githubInfoLoader}
         path='github' 
        element={<Github/>}
        />
        <Route path='user/:id' element={<User/>}/>
   
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>,
)
