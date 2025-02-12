import React, { useContext, useEffect, useState } from "react";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify"
import { FaSpinner } from "react-icons/fa6";

import Navbar from "../navbar/Navbar";
import Footer from "../Footer/Footer";
import UserContext from "../../context API/userContext";
import PageLoader from "../pageLoader/PageLoader";
import axios from "axios";

const ApplicationForm = () => {

  const userContext = useContext(UserContext) // context api
  const navigate = useNavigate() // navigate components

  const [isLoading, setisLoading] = useState(false) // loading state
  const [application, setapplication] = useState(null)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    program: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  //function to show alert
  const showToast = (message, err) => {
    if (err) {
      toast.error(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.success(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setisLoading(true)
      const res = await axios.post(`${import.meta.env.VITE_REACT_BACKEND_URL}/api/application/submit`,
        {
          ...formData,
          userid: localStorage.getItem("id")
        }, {
        headers: {
          "authToken": localStorage.getItem("token")
        }
      })

      console.log(res)
      showToast(res.data.message, 0)
      setapplication(res.data.application)

      window.scrollTo({ top: document.body.scrollHeight * 2, behavior: "smooth" });
    } catch (error) {
      console.log(error)

      if (error.response && error.response.data) showToast(error.response.data.message, 1)
      else showToast(error.message, 1)

    } finally {
      setisLoading(false) // make loading false
      //clear form
      setFormData({ name: "", email: "", program: "", message: "" });
    }

  };

  useEffect(() => {
    if (userContext.isLogin === 0) {
      navigate("/login")
    }
    if (userContext.isLogin === -1) {
      userContext.checkIsLogin()
    }
  }, [userContext.isLogin])


  return (
    <>
      <ToastContainer />
      <Navbar />
      {userContext.isLogin !== 1 && <PageLoader />}

      {userContext.isLogin === 1 && <div style={{ backgroundImage: "linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%)" }}>

        <div id="application-form"
          className="  py-[120px] min-h-screen rounded-lg flex flex-col items-center justify-center  w-full ">
          <div className=" sm:w-[500px] w-full p-4 ">
            <h2 className="text-2xl font-bold text-primary mb-6">Submit Application</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-text mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-text mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-text mb-2">Program</label>
                <select
                  name="program"
                  value={formData.program}
                  onChange={handleChange}
                  className="w-full bg-white px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                >
                  <option value="" disabled>
                    Select a program
                  </option>
                  <option value="Computer Science">Computer Science</option>
                  <option value="Business Administration">Business Administration</option>
                  <option value="Electrical Engineering">Electrical Engineering</option>
                  <option value="Scholarship">Scholarship</option>
                </select>
              </div>
              <div className="mb-6">
                <label className="block text-text mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full min-h-[100px] max-h-[200px] bg-white px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  rows="4"
                  placeholder="Any additional information..."
                ></textarea>
              </div>
              <button
                disabled={isLoading}
                type="submit"
                className="w-full bg-primary flex justify-center bg-blue-500 cursor-pointer text-white py-2 rounded-lg hover:bg-secondary transition duration-300"
              >
                {isLoading ? <FaSpinner className=" animate-spin" /> : "Submit Application"}
              </button>
            </form>
          </div>
        </div>

        {application && <div id="preview-application">
          <h2 className=" text-3xl text-blue-800 font-bold py-6 text-center"> Submitted Application </h2>
          <div
            key={application._id}
            className="application-card bg-[#f6faff] p-6 md:w-7/12 sm:w-9/12 w-full mx-auto rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl text-primary underline underline-offset-4"><strong>{application.program}</strong></h3>
                <p className="text-text "> <strong>Applicant name</strong> : {application.name}</p>
                <p className="text-text "> <strong>Applicant email</strong> : {application.email}</p>
                <p className="text-text"> <strong>Message</strong>  : {application.message} </p>
                <p className="text-sm text-text  mt-2">
                  <span className="font-bold">Date Applied:</span> {new Date(application.dateApplied).toLocaleString()}
                </p>
              </div>
              <div>
                <span
                  className={`px-4 py-2 rounded-full text-sm font-semibold ${application.status === "Pending"
                    ? "bg-yellow-100 text-yellow-800"
                    : application.status === "Accepted"
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                    }`}
                >
                  {application.status}
                </span>
              </div>
            </div>
          </div>
        </div>}

        <Footer />
      </div>}
    </>
  );
};

export default ApplicationForm;