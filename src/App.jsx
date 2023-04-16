import { Outlet } from 'react-router-dom'
import './App.css'
import Headers from './components/Headers'
import Footer from './components/Footer'
import { Toaster } from 'react-hot-toast'
import { useContext, useState } from 'react'
import { AuthContext } from './components/provider/AuthProvider'

function App() {
const {user} = useContext(AuthContext)
console.log(user)
  return (
    <>
      <Headers></Headers>
          <Outlet></Outlet>
      <Footer></Footer>
      <Toaster
  position="top-center"
  reverseOrder={false}
/>
    </>
  )
}

export default App
