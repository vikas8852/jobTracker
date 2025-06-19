1.# 🧑‍💼 Job Portal System

A full-stack web application designed to streamline the process of job search and hiring. This project enables job seekers to apply for jobs, and employers to post and manage job listings.

---

## 📌 Features

- 👤 User Registration & Login (Job Seeker / Employer / Admin)
- 📝 Job Posting and Listing
- 📄 Job Application Submission
- 📂 Role-Based Dashboard Views
- 🔐 Secure Authentication
- 🧹 Clean UI with Bootstrap

---

## 🏗️ Tech Stack

| Layer     | Tech                          |
|-----------|-------------------------------|
| Frontend  | HTML, CSS, JavaScript, Bootstrap |
| Backend   | Node.js, Express.js            |
| Database  | MongoDB (Mongoose ORM)         |
| Tools     | Nodemon, dotenv, bcryptjs      |

---

## 🛠️ Installation

### 1. Clone the repository
```bash
git clone https://github.com/vikas8852/jobProtal
cd job-portal
2. Install dependencies
npm install
3. Configure Environment Variables
Create a .env file in the root directory and add the following:
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
4. Run the Server
npm run dev
The server should be running on http://localhost:5000.

📁 Folder Structure
job-portal/
├── models/           # MongoDB Schemas
├── routes/           # API Route Handlers
├── public/           # Static Assets
├── views/            # HTML Templates
├── .env              # Environment Variables
├── server.js         # Entry Point
└── README.md
