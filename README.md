
# Digital Portfolio Builder

A full-stack web application that enables users to **create, manage and showcase** their professional portfolios. This platform includes a **React.js Frontend** and a **Node.js Backend**, delivering smooth user experience and robust functionality.

---

## Features
- **User Authentication** - Secure login and registration using JWT
- **Portfolio Creation** - Users can create and customize professional portfolios
- **Portfolio Viewing** - Publicly accessible portfolios
- **Redux Integration** - State management for efficient data handling
- **Responsive Design** - Fully mobile-friendly interface

---

### Frontend
- React.js
- Redux
- Axios
- CSS

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- JSON Web Tokens (JWT)
- bcrypt.js
- dotenv

---

## Github Repositories
- [Frontend Repository](https://github.com/nisha311003/Portfolio-Builder-Frontend)
- [Backend Repository](https://github.com/nisha311003/Portfolio-Builder)

## Deployed Links
- [Frontend Live](https://portfolio-builder-frontend-guxx.onrender.com)
- [Backend Live API](https://portfolio-builder-sii7.onrender.com/)

---

## Getting Started

### Prerequisties
- Node.js
- npm or yarn
- MongoDB instance (local or cloud-based)

---

### Backend Setup
```bash 
git clone https://github.com/nisha311003/Portfolio-Builder.git
cd Backend
npm install
```
Create a .env file:
```bash
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```
Start the server:
```bash
npm run dev
```
---

### Frontend Setup
```bash
git clone 
cd Frontend
npm install
```
Start the development server:
```bash
npm Start
```

---

### Usage
- 1. Register/login
- 2. Create your portfolio
- 3. Submit it and get a confirmation alert
- 4. View it at:
```bash
    https://https://portfolio-builder-sii7.onrender.com/api/portfolio:username
```

---

## API Endpoints
### Authentication
- **POST /api/register** - Register a new user
- **POST /api/login** - Log in and receive a JWT

### Portfolio
- **POST /api/portfolio** - Create or update a portfolio (JWT required)
- **GET /api/portfolio/:username** - Get public portfolio by username

---

## Security
- Passwords hashed using bcrypt.js
- JWT-based secure Authentication
- Environment variables managed via **dotenv**

---

## Contributing
Feel free to fork, modify, and submit pull requests to improve the project!

---




