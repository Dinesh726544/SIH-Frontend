import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Register from "./components/Register.jsx"
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Login from './components/Login.jsx'
import Home from './components/Home.jsx'
import RegisterWorker from './components/RegisterWorker.jsx'
import RegisterFace from './components/RegisterFace.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='/register-admin' element={<Register />} />
      <Route path='/login-admin' element={<Login />} />
      <Route path='/register-face' element={<RegisterFace />} />
      <Route path='/register-worker' element={<RegisterWorker />} />
      <Route path='/login-worker' element={<Login />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
