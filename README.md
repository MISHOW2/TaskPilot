TaskPilot 🛫
TaskPilot is a task management SaaS app designed for students but can be used by anyone. It offers a streamlined way to organize tasks, set deadlines, and manage productivity efficiently.

🚀 Features
User Authentication: Sign up and login with secure password hashing.
Task Management: Create, update, and delete tasks based on user ID.
30-Day Free Trial: Explore all features for 30 days.
Profile Management: Optional profile updates after login.
Responsive UI: Clean and user-friendly interface.
🛠️ Tech Stack
Frontend: React, JavaScript, HTML, CSS
Backend: Node.js, Express
Database: Temporary db.js file (local storage for now)
Authentication: JWT (JSON Web Tokens), bcrypt for password hashing
API Testing: Postman
Others: Axios for API calls, CORS for security
📂 Project Structure
nginx
Copy
Edit
TaskPilot
├── client          # React frontend
taskpilot-backend/
├── config/          # For config files like db and JWT
├── controllers/     # Business logic for each route
├── middleware/      # Auth and error-handling middleware
├── models/          # Mongoose schemas
├── routes/          # API endpoints
├── utils/           # Helper functions
├── .env             # Environment variables
├── server.js        # Entry point


├── .gitignore      
├── README.md       
📦 Installation
Clone the repo:
bash
Copy
Edit
git clone https://github.com/your-username/TaskPilot.git
Install dependencies:
bash
Copy
Edit
cd TaskPilot/server
npm install
cd ../client
npm install
Run the app:
Server: npm start (in /server folder)
Client: npm start (in /client folder)
🔒 Environment Variables
Create a .env file in the server folder:

ini
Copy
Edit
JWT_SECRET=your_jwt_secret
🛤️ API Endpoints
Signup: POST /api/auth/signup
Login: POST /api/auth/login
Tasks:
GET /api/tasks (Get all tasks)
POST /api/tasks (Add new task)
PUT /api/tasks/:id (Update task)
DELETE /api/tasks/:id (Delete task)
🛡️ Security Practices
Passwords hashed with bcrypt.
JWT for authentication and protected routes.
CORS configured to allow requests from the client.
🛠️ Future Enhancements
Integrate MongoDB.
Google OAuth login.
Analytics dashboard for task insights.
📄 License
This project is open-source and free to use.
