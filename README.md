Instructions on how to run the solution: 

**BACKEND**

1.  Clone the repository: https://github.com/rochellejoanesteves/mern-users.git
2.  Install the backend dependencies:
   - cd api
   - npm install
3. Create .env file in the root directory. Replace the your_mongodb_connection with your MongoDB connection URI and add secret key
  - MONGO_URI="your_mongodb_connection"
  - JWT_SECRET = "secret_key_here"
4. Start the backend server
  - npm run dev

**FRONTEND**

1. Install the frontend dependencies:
   - cd ../client
   - npm install
2. Start the React Development Server
   - npm run dev
3. Access the Application
4. Open the browser and visit http://localhost:5173/

**API Endpoints:**

- Create account: POST http://localhost:3000/api/auth/signup
- Sign in account: POST http://localhost:3000/api/auth/signin
- Get all users: GET http://localhost:3000/api/users/getUsers
- Create new user: POST http://localhost:3000/api/users/create
- Update a user with the given ID: POST http://localhost:3000/api/users/update/:id
- Delete a user with the given ID: DELETE http://localhost:3000/api/users/update/:id

**OUTPUT**

<img width="793" alt="image" src="https://github.com/rochellejoanesteves/mern-users/assets/128266520/53c198a1-fc43-40d9-a1a7-852ee3fcc251">

<img width="923" alt="image" src="https://github.com/rochellejoanesteves/mern-users/assets/128266520/55c217a6-7abc-4da1-8cd7-1f820f9da4d5">
