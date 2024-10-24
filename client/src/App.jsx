import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Service from "./pages/Service"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Logout from './pages/Logout'
import Navbar from './componenets/Navbar'
import Error from './pages/Error'
import AdminLayout from './componenets/layouts/AdminLayout'
import AdminContacts from './pages/AdminContacts'
import AdminUsers from './pages/AdminUsers'
import Footer from './componenets/Footer/Footer'
const App = () => {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/service' element={<Service />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/logout' element={<Logout />} />
        <Route path="*" element={<Error />} />
        <Route path='/admin' element={<AdminLayout />}>
          <Route path='users' element={<AdminUsers />} />
          <Route path='contacts' element={<AdminContacts />} />
        </Route>
      </Routes>
      
    </BrowserRouter>
    </>
  )
}

export default App

