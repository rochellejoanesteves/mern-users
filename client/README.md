Instructions on how to run the solution: BACKEND

Clone the repository: https://github.com/rochellejoanesteves/mern-users.git
Install the backend dependencies:
cd api
npm install
Create .env file in the root directory. Replace the your_mongodb_connection with your MongoDB connection URI and add secret key

MONGO_URI="your_mongodb_connection"
JWT_SECRET = "secret_key_here"

Start the backend server
npm run dev

FRONTEND

Install the frontend dependencies:
cd ../client
npm install
Start the React Development Server
npm run dev
Access the Todo App
Open the browser and visit http://localhost:5173/

API Endpoints:

Create account: POST http://localhost:3000/api/auth/signup
Sign in account: POST http://localhost:3000/api/auth/signin
Get all users: GET http://localhost:3000/api/users/getUsers
Create new user: POST http://localhost:3000/api/users/create
Update a user with the given ID: POST http://localhost:3000/api/users/update/:id
Delete a user with the given ID: DELETE http://localhost:3000/api/users/update/:id