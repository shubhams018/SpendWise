# SpendWise

A full-stack expense management application that helps users track income and expenses, manage transactions, and view financial summaries.

## Live Demo

**Frontend:** https://spendwise-frontend-7l33.onrender.com

**Backend:** https://spendwise-cngo.onrender.com

## GitHub

https://github.com/shubhams018/SpendWise

## Features

* User registration and login
* JWT-based authentication
* JWT stored using HTTP-only cookies
* Password hashing with bcrypt
* Protected routes
* Create, read, update, and delete expenses
* Expense filtering
* Pagination
* Income and expense tracking
* Balance calculation
* Monthly financial summaries
* Input validation
* Centralized error handling
* MongoDB aggregation for financial calculations
* Responsive React frontend
* Production deployment with Render
* MongoDB Atlas database

## Tech Stack

### Frontend

* React
* JavaScript
* React Router
* Axios
* Tailwind CSS
* Vite

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcrypt
* express-validator
* cookie-parser
* CORS

### Tools & Deployment

* Git
* GitHub
* Postman
* MongoDB Atlas
* Render

## Application Architecture

```text
React Frontend
      |
      | Axios HTTP Requests
      ↓
Express.js REST API
      |
      | Authentication / Validation
      ↓
Controllers
      |
      ↓
Mongoose
      |
      ↓
MongoDB Atlas
```

## Authentication Flow

SpendWise uses JWT authentication with HTTP-only cookies.

```text
User Login
    ↓
React sends credentials
    ↓
Express login controller
    ↓
Password verified using bcrypt
    ↓
JWT generated
    ↓
JWT stored in HTTP-only cookie
    ↓
Protected API request
    ↓
Authentication middleware verifies JWT
    ↓
User ID attached to request
    ↓
Protected controller executes
```

Using HTTP-only cookies prevents client-side JavaScript from directly accessing the authentication token.

## Expense Management

Authenticated users can:

* Add expenses and income
* View their transactions
* Update transactions
* Delete transactions
* Filter transactions by available criteria
* View transactions using pagination

Pagination reduces the number of records returned in a single request.

## Financial Summary

MongoDB aggregation pipelines are used to calculate financial information such as:

* Total income
* Total expenses
* Balance
* Monthly summaries

Example:

```text
Balance = Total Income - Total Expenses
```

Aggregation allows these calculations to be performed efficiently at the database level.

## API Structure

### Authentication

```text
POST /api/auth/register
POST /api/auth/login
POST /api/auth/logout
```

### User

```text
GET /api/user/me
```

### Expenses

```text
POST   /api/expense
GET    /api/expense
PUT    /api/expense/:id
DELETE /api/expense/:id
```

## Validation & Error Handling

The backend uses `express-validator` to validate incoming request data.

A centralized error-handling middleware is used to provide consistent API error responses.

## Environment Variables

### Backend

Create a `.env` file inside the backend directory:

```env
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret
NODE_ENV=development
```

Do not commit `.env` files or database credentials to GitHub.

### Frontend

Update the API URL to point to your backend.

Example:

```js
const API_URL = "https://your-backend.onrender.com/api";
```

## Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/shubhams018/SpendWise.git
cd SpendWise
```

### 2. Install backend dependencies

```bash
cd backend
npm install
```

### 3. Configure backend environment variables

Create a `.env` file and add:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
NODE_ENV=development
```

### 4. Start the backend

```bash
npm run dev
```

### 5. Install frontend dependencies

Open another terminal:

```bash
cd frontend
npm install
```

### 6. Start the frontend

```bash
npm run dev
```

The frontend will normally run at:

```text
http://localhost:5173
```

## Deployment

The application is deployed using Render.

```text
GitHub
   ↓
Render Frontend
   ↓
Render Backend
   ↓
MongoDB Atlas
```

During production deployment, CORS was configured to allow communication between the deployed frontend and backend.

JWT authentication cookies were also configured for production cross-origin requests.

## Project Structure

```text
SpendWise/
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── middlewares/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── validators/
│   │   ├── app.js
│   │   └── server.js
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

## Future Improvements

* Expense charts and visual analytics
* Budget management
* Recurring transactions
* Export expenses as CSV or PDF
* Advanced date-based filtering
* Dark mode
* Email notifications

## Author

**Shubham Kalyan Shedage**

GitHub:
https://github.com/shubhams018

LinkedIn:
https://www.linkedin.com/in/shubham-shedage-7b8b22265/
