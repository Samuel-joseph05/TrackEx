# 🧾 TrackEx

A simple **MERN (MongoDB, Express, React, Node.js)** application to perform CRUD operations for tracking expenses with **JWT authentication**.

---

## 🚀 Getting Started

Follow the steps below to set up and run TrackEx on your local machine.

---

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Samuel-joseph05/TrackEx.git
cd TrackEx
2️⃣ Install Dependencies
🖥️ Backend Setup
bash

cd backend
npm init -y
npm install express cors cookie-parser jsonwebtoken mongoose dotenv
💻 Frontend Setup
bash

cd ../frontend
npm install
3️⃣ Set Up Environment Variables
In the backend folder, create a file named .env and add the following variables:

env

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLIENT_URL=http://localhost:3000
⚠️ Make sure to replace the placeholder values with your actual credentials.

4️⃣ Run the Application
Start Backend Server
bash

cd backend
npm start
Start Frontend Server
bash

cd ../frontend
npm start


6️⃣ Features
🔐 JWT Authentication (Login & Register)

💰 Add, Edit, Delete Expenses

📊 Track total and filtered expenses

⚡ RESTful API with Express

🧠 MongoDB database using Mongoose

🎨 React frontend with responsive UI

7️⃣ Technologies Used
Frontend:

React.js

Axios

React Router DOM

Backend:

Node.js

Express.js

MongoDB with Mongoose

JSON Web Token (JWT)

CORS, Cookie-Parser


