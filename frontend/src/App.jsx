import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home"
import Register from "./pages/auth/Register"
import Login from "./pages/auth/Login"
import Dashboard from "./pages/profile/Dashboard"
import Navbar from './component/navbar/Navbar';
import Footer from './component/Footer/Footer';
import ApplicationForm from './component/application form/ApplicationFrom';

function App() {
  console.log(window.location.pathname)

  return (
    <>
      <Router>
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/application" element={<ApplicationForm />} />
            </Routes>
          </main>
          
        </div>
      </Router>
    </>
  )
}

export default App
