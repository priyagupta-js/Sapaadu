# VIT Sapaadu – Food Ordering Web Application

**VIT Sapaadu** is a full-stack food ordering web application designed to make food ordering simple and reliable for students, faculties and staffs of VIT Chennai.
The project focuses on **clean architecture, secure authentication, state synchronization, and user-friendly cart management**, making it suitable for production-level.

---

## Tech Stack

### Frontend

* React.js
* Context API / State Management
* Axios
* Modern UI Components

### Backend

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT Authentication

### Deployment

* AWS EC2 (Free Tier)
* Nginx (Reverse Proxy)
* PM2 (Process Manager)

---
## 🎯 Key Features

### 🔐 Authentication

* Secure **Login & Signup** using **JWT authentication**
* Protected routes for authenticated users
* Token-based session handling

---

### Home Page

* Displays **restaurants**
* Selecting a restaurant navigates to its **dedicated restaurant page**

---

### Restaurant & Menu Management

* Each restaurant has its own **menu**
* 
---

### Cart Functionality

* Add any menu item to cart
* Increase or decrease quantity for each item
* Same item can be added **multiple times**
* Cart displays:

  * Item name
  * Quantity
  * Individual price
  * Total bill amount

---

### Real-Time Cart Synchronization

* Quantity updates from:

  * **Restaurant page** → reflect in **Cart page**
  * **Cart page** → reflect in **Restaurant page**
* Ensures a **single source of truth** for cart state

---

### Order Placement

* “Place Order” button available after successful cart addition
* Displays **Order Placed Successfully** confirmation message
* *(Payment integration planned for future enhancement)*

---

## Application Flow

1. User signs up / logs in
2. Lands on Home Page with restaurant listings
3. Selects a restaurant → views menu
4. Adds items to cart (with quantity control)
5. Reviews cart and total bill
6. Places order → receives success confirmation

---

## Project Architecture (High Level)

```text
Frontend (React)
│
├── Authentication (JWT)
├── Restaurant Listing
├── Menu & Cart State Management
│
Backend (Node.js + Express)
│
├── Auth APIs
├── Restaurant APIs
├── Menu APIs
├── Cart Logic
│
Database (MongoDB)
│
├── Users
├── Restaurants
├── Menu Items
└── Orders
```

---

## Security & Best Practices

* JWT-based authentication
* Password hashing
* RESTful API design
* Environment variables for secrets
* Clean separation of frontend & backend

---

## Deployment
* Deployed on **AWS EC2 Free Tier**
* Backend served via **Node.js + PM2**
* Frontend hosted with production build
* Reverse proxy using **Nginx**

---

## Future Enhancements

* Online payment integration (Razorpay / Stripe)
* Order history page
* Admin dashboard for restaurant & menu management
* Responsive mobile-first UI
* Real-time order tracking

---

## Author

**Priya Gupta**
**Umang Doshi**

---

### Why This Project Matters

This project demonstrates:

* Real-world cart logic
* State synchronization
* Secure backend design
* Scalable architecture
* Deployment knowledge

> Built with the intention of showcasing **production-ready thinking**, not just CRUD functionality.

Just tell me the next step.
