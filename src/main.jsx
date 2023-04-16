import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App'
import Banner from './components/Banner'
import Error from './components/Error'
import ForgetPassword from './components/ForgetPassword'
import './index.css'
import Login from './pages/Login'
import Reg from './pages/Reg'
import AuthProvider from './components/provider/AuthProvider'
import ProtractedRoute from './components/ProtectedRoute/ProtractedRoute'

const router = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        errorElement:<Error/>,
        children:[
            {
                path:'/banner',
                element:<ProtractedRoute><Banner /></ProtractedRoute>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/reg',
                element:<Reg/>
            },
            {
                path:'/forget',
                element:<ForgetPassword/>
            },
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <AuthProvider><RouterProvider router={router}></RouterProvider></AuthProvider>
    
)
