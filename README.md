# CRM Dashboard - Client & Project Manager 📊

🚀 A complete full-stack CRM Dashboard built using the MERN stack, featuring secure login, client/project tracking, and responsive UI. This project is part of a professional portfolio and demonstrates scalable application structure, secure authentication, and API design.

## 🌐 Live Deployment

- **Frontend (Vercel):** [https://rahul-crm-dashboard.vercel.app](https://rahul-crm-dashboard.vercel.app)
- **Backend (Render):** [https://crm-dashboard-9j1c.onrender.com](https://crm-dashboard-9j1c.onrender.com)

## GitHub Repository
[https://github.com/rahul-pal-mastizone/crm-dashboard](https://github.com/rahul-pal-mastizone/crm-dashboard)

---

## 🎯 Overview

The CRM Dashboard enables authenticated users (admin) to:

- Log in securely using JWT-based authentication
- View a summary of clients and projects
- Add, view, and convert clients
- Add and manage projects
- Access protected dashboard routes only after login

This project implements user authentication, CRUD operations, REST APIs, and a clean React UI for practical CRM use cases.

---

## ✅ Features

- 🔐 **JWT-based authentication** (Admin login)
- 📈 **Dashboard summary** (Clients, Projects, Conversions)
- 🧩 **Modular components** (Sidebar, Navbar, Forms)
- 📁 **CRUD operations** for clients & projects
- 🚫 **Protected routes** using `PrivateRoute.jsx`
- 🧠 **Global state management** with Context API
- 🌈 **Tailwind CSS UI** with gradient cards & responsive design
- ☁️ Fully deployed on **Render** (Backend) + **Vercel** (Frontend)

---

## 🧱 Project Structure

```bash
crm-dashboard/
├── backend/
│   ├── models/             # Mongoose schemas
│   ├── routes/             # Express API routes
│   ├── controllers/        # Business logic
│   ├── createAdmin.js      # Script to seed admin user
│   └── server.js           # Main Express server
│
├── frontend/
│   ├── components/         # Navbar, Sidebar, Forms
│   ├── pages/              # Login, Home, Clients, Projects
│   ├── CRMContext.jsx      # Context for global state
│   ├── AuthContext.jsx     # Auth context
│   ├── App.jsx             # Route definitions
│   ├── main.jsx            # App entry point
│   └── styles/             # Tailwind config
````
---

## ▶️ Running Locally

### Prerequisites
- Node.js 18+
- MongoDB URI (cloud or local)
- Vite, npm

### Backend Setup
```bash
cd backend
npm install

PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret

node createAdmin.js  # create admin user (optional)
npm start


cd frontend
npm install
npm run dev
````


## 📄 License

This project is licensed under the [MIT License](LICENSE).

---


## 🙋‍♂️ Author

**👨‍💻 Rahul Pal**  
- GitHub: [@rahul-pal-mastizone](https://github.com/rahul-pal-mastizone)
- Email: rahulpal.moderntechno@gmail.com