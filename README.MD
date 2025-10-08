# 🧾 TrackEx

A simple **MERN (MongoDB, Express, React, Node.js)** application to perform CRUD operations for tracking expenses with **JWT authentication**.

---

## Getting Started

Follow the steps below to set up and run TrackEx on your local machine.

---

### 1️⃣ Clone the Repository

`git clone https://github.com/Samuel-joseph05/TrackEx.git
cd TrackEx`
2️⃣ Install Dependencies
🖥️ Backend Setup


`cd backend
npm init -y
npm install express cors cookie-parser jsonwebtoken mongoose dotenv`
💻 Frontend Setup


`cd ../frontend
npm install`
3️⃣ Set Up Environment Variables
In the backend folder, create a file named .env and add the following variables:

env

`PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLIENT_URL=http://localhost:3000`
⚠️ Make sure to replace the placeholder values with your actual credentials.

4️⃣ Run the Application
Start Backend Server


`cd backend
npm start`
Start Frontend Server


`cd ../frontend
npm run dev`



