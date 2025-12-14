# 🪔 Mithai Bazaar – Sweet Shop Management System

Mithai Bazaar is a full-stack **Sweet Shop Management System** inspired by traditional Indian sweets and festive vibes.  
This academic project is built using the **MERN stack** and follows a **Test-Driven Development (TDD)** approach to ensure reliability, maintainability, and clean architecture.

---

## 📌 Project Overview

Mithai Bazaar demonstrates a complete end-to-end web application with:

- Secure authentication  
- Role-based authorization  
- Inventory and stock management  
- Advanced searching and filtering  
- Comprehensive test coverage  

Customers can browse and purchase sweets, while administrators can manage inventory, stock, and user access.

---

## ✨ Key Features

### 🔐 User Authentication
- Secure registration and login using **bcrypt password hashing**

### 👥 Role-Based Access Control
- Admin and User roles

### 🍬 Sweet Inventory Management
- Create, Read, Update, Delete (**CRUD**) operations

### 🔍 Advanced Search & Filters
- Filter by name, category, and price range

### 📦 Stock Management
- Purchase sweets and restock inventory

### 🎨 Festival-Themed UI
- Indian sweets & festive design

### ✅ Test-Driven Development (TDD)
- Unit and integration tests with high coverage

---

## 🛠️ Tech Stack

### Backend
- **Node.js** – Runtime environment  
- **Express.js** – Web framework  
- **MongoDB Atlas** – Cloud database  
- **Mongoose** – MongoDB ODM  
- **bcrypt** – Password hashing  
- **dotenv** – Environment variable management  

### Testing
- **Jest** – Testing framework  
- **Supertest** – HTTP assertions  

### Frontend
- **React** – Functional components with hooks  
- **Axios** – HTTP client  
- **Lucide React** – Icon library  
- **Plain CSS** – Styling  

---

## 📁 Project Structure

```text
mithai-bazaar/
├── backend/
│   ├── src/
│   │   ├── models/
│   │   │   ├── User.js
│   │   │   └── Sweet.js
│   │   ├── controllers/
│   │   │   ├── authController.js
│   │   │   └── sweetController.js
│   │   ├── services/
│   │   │   ├── authService.js
│   │   │   └── sweetService.js
│   │   ├── routes/
│   │   │   ├── authRoutes.js
│   │   │   └── sweetRoutes.js
│   │   ├── middleware/
│   │   │   └── authMiddleware.js
│   │   ├── config/
│   │   │   └── db.js
│   │   └── server.js
│   ├── tests/
│   │   ├── unit/
│   │   │   ├── authService.test.js
│   │   │   └── sweetService.test.js
│   │   └── integration/
│   │       ├── auth.test.js
│   │       └── sweets.test.js
│   ├── package.json
│   └── .env.example
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Login.js
│   │   │   ├── Register.js
│   │   │   ├── Dashboard.js
│   │   │   ├── SweetCard.js
│   │   │   └── AdminPanel.js
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   └── package.json
└── README.md
## 🚀 Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account
- npm or yarn

---

### Backend Setup

```bash
cd backend
npm install
cp .env.example .env
## 🤖 My AI Usage

### AI Tools Used
- **ChatGPT**
- **Google Gemini**

### How I Used AI
- I used **ChatGPT** to understand the overall system design and project structure of a MERN stack application, including how controllers, services, routes, and middleware work together.
- ChatGPT also helped me debug errors and resolve problems faced during development, such as API issues, test failures, and logical mistakes while implementing features using TDD.
- I used **Google Gemini** mainly for UI/UX-related guidance, such as layout ideas, component structuring, user flow suggestions, and improving the visual organization of the frontend.
- Both tools were used as learning aids to clarify concepts and explore best practices, not to directly copy complete solutions.

### Reflection
Using AI tools improved my understanding of full-stack development by speeding up problem-solving and helping me visualize better design and structure. ChatGPT strengthened my backend logic and debugging skills, while Gemini contributed to improving the UI/UX quality of the application. Overall, AI enhanced my productivity and learning without replacing hands-on coding or decision-making.

