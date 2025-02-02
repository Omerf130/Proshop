import React from 'react'
import ReactDom from 'react-dom/client'
import {createBrowserRouter, createRoutesFromElements,Route, Router, RouterProvider} from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app.jsx'
// import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/bootstrap.custom.css'
import './assets/styles/index.css'
import HomeScreen from './screens/HomeScreen.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
       <Route index={true} path='/' element={<HomeScreen />} /> 
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
  </StrictMode>
)
