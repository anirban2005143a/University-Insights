import { useState, useContext, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserContext from './context API/userContext';
import axios from "axios"

import Home from "./pages/home/Home"
import Register from "./pages/auth/Register"
import Login from "./pages/auth/Login"
import Dashboard from "./pages/profile/Dashboard"
import ApplicationForm from './component/application form/ApplicationFrom';

function App() {

  const [isLogin, setisLogin] = useState(-1)
  const [loginAlert, setloginAlert] = useState("")

  ///function to check if user is login or not
  const checkIsLogin = async () => {
    try {
      const res = await axios.post(`${import.meta.env.VITE_REACT_BACKEND_URL}/api/auth/checkToken`, {
        userid: localStorage.getItem("id"),
      }, {
        headers: {
          "authToken": localStorage.getItem("token")
        }
      })
      // console.log(res)
      setisLogin(1)
      setloginAlert(res.data.message)
      
      return 1
    } catch (error) {
      console.log(error)
      setisLogin(0)
      if (error.response) setloginAlert(error.response.data.message)
      else setloginAlert(error.message)

      return 0
    }
  }

  useEffect(() => {
    if (isLogin === -1) {
      // console.log(isLogin)
      checkIsLogin()
    }
  }, [isLogin])

  return (
    <>
      <UserContext.Provider value={{
        isLogin, setisLogin,
        loginAlert, setloginAlert,
        checkIsLogin,
      }} >
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
      </UserContext.Provider>
    </>
  )
}

export default App
