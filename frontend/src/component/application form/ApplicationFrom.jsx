import React, { useState } from "react";
import { gsap } from "gsap";
import Navbar from "../navbar/Navbar";
import Footer from "../Footer/Footer";

const ApplicationForm = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Application submitted successfully!");
    setFormData({ name: "", email: "", program: "", message: "" });
  };


  return (
    <div style={{backgroundImage: "linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%)"}}>
      <Navbar />

      <div id="application-form"
       className="  py-[100px] min-h-screen rounded-lg flex flex-col items-center justify-center  w-full ">
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
              type="submit"
              className="w-full bg-primary bg-blue-500 cursor-pointer text-white py-2 rounded-lg hover:bg-secondary transition duration-300"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>

       <Footer />
    </div>
  );
};

export default ApplicationForm;