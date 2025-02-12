**University Insights**

A full-stack web application for student interaction, built with Next.js, React, Node.js, Express.js, MongoDB, and Tailwind CSS. The application allows students to register, log in, submit applications, and view their application status.

 
GitHub: https://github.com/anirban2005143a/University-Insights

Live Website - https://university-insights-orpin.vercel.app

**Features**

 Student Registration & Login:
 
  •	Secure JWT-based authentication.
  
  •	Password hashing using bcrypt.
  
 Application Submission:
 
  •	Students can submit applications for programs, scholarships, etc.
  
  •	Applications include fields like name, email, program, and message.
  
 Dashboard:
 
  •	Students can view their profile information.
  
  •	Students can see a list of their submitted applications with status (Pending, Accepted, Rejected).

 Responsive UI:
 
  •	Built with Tailwind CSS for a modern and responsive design.
  
  •	Smooth animations using GSAP.

**Technologies Used**

 Frontend:

  •	React
  
  •	Tailwind CSS
  
 Backend:
 
  •	Node.js
  
  •	Express.js
  
  •	MongoDB (for database)
  
  •	Mongoose (for schema modeling)
  
 Authentication:
 
  •	JSON Web Tokens (JWT)
  
  •	bcrypt (for password hashing)


Setup Instructions

 1. Clone the Repository
    
  •	git clone https://github.com/your-username/university-insights.git
  
  •	cd university-insights
  
 3. Install Dependencies
    
  Frontend
  
   •	cd frontend
   
   •	npm install
   
  Backend
  
   •	cd backend
   
   •	npm install
  
 4. Set Up Environment Variables
    
  Create a .env file in the server directory with the following variables:
  
   •	MONGO_URI = your database url
   
   •	JWT_SECRET = your_jwt_secret_key
   
   •	PORT = 3000
   
  **Create a .env file in the server directory with the following variables:**
  
   •	VITE_REACT_BACKEND_URL = "http://localhost:3000"
   
 5. Start the Development Server
    
  Frontend
  
   •	cd frontend
   
   •	npm run dev
   
   (The frontend will run on http://localhost:5173.)

  Backend
  
   •	cd backend
   
   •	node index.js
   
   (The backend will run on http://localhost:3000.)
   

**API Endpoints**

 Authentication
 
  • POST /api/auth/create: Register a new user.
  
  •	POST /api/auth/login: Log in an existing user.
  
  •	POST /api/auth/checkToken: Check if user login or not .
  
  •	POST /api/auth/details: Get user details.
  
 Applications
 
  •	POST /api/applications/submit : Submit a new application.
  




