import React from "react";
import ProfileHeader from "./ProfileHeader";
import ApplicationList from "./ApplicationList";
import Navbar from "../../component/navbar/Navbar";
import Footer from "../../component/Footer/Footer";
// import { gsap } from "gsap";
// import { useGSAP } from "@gsap/react";

const Dashboard = () => {
  // Mock user data
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    location: "New York, USA",
    about: "Passionate about technology and innovation.",
    image: "../../assets/user.jpeg", // Replace with actual user image URL
  };

  // Mock applications data
  const applications = [
    {
      id: 1,
      program: "Computer Science",
      status: "Pending",
      dateApplied: "2023-10-01",
      description: "Application for Bachelor's in Computer Science.",
      message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis esse voluptates doloremque velit molestias voluptate corrupti quae dolor, quidem nisi culpa aperiam incidunt eius ut ab ratione recusandae vitae officia."
    },
    {
      id: 2,
      program: "Scholarship",
      status: "Accepted",
      dateApplied: "2023-09-25",
      description: "Application for Merit-Based Scholarship.",
      message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis esse voluptates doloremque velit molestias voluptate corrupti quae dolor, quidem nisi culpa aperiam incidunt eius ut ab ratione recusandae vitae officia."
    },
    {
      id: 3,
      program: "Business Administration",
      status: "Rejected",
      dateApplied: "2023-09-20",
      description: "Application for Master's in Business Administration.",
      message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis esse voluptates doloremque velit molestias voluptate corrupti quae dolor, quidem nisi culpa aperiam incidunt eius ut ab ratione recusandae vitae officia."
    },
  ];

  // useGSAP(() => {
  //   gsap.from(".dashboard-header", { opacity: 0, y: -50, duration: 1, delay: 0.5 });
  //   gsap.from(".application-card", { opacity: 0, y: 50, duration: 1, stagger: 0.2, delay: 1 });
  // });

  return (
    <div style={{ backgroundImage: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)" }}>
      <Navbar />

      <div className="min-h-screen bg-background p-8 py-[100px]">
        {/* Dashboard Header */}
        <ProfileHeader user={user} />

        {/* Applications List */}
        <ApplicationList applications={applications} />
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;