# 🤖 AI-Powered Peer-to-Peer Micro-Tasking Platform

An intelligent full-stack web application that enables users to post and complete microtasks while leveraging Artificial Intelligence for task recommendations, worker matching, fraud detection, and performance analytics.

## 🚀 Features

### 🔐 Authentication & Authorization

* Secure User Registration and Login
* JWT-based Authentication
* Role-Based Access Control (Provider & Worker)
* Password Encryption using BCrypt

### 📋 Task Management

* Create, Edit, and Delete Tasks
* Browse and Search Tasks
* Accept and Submit Tasks
* Task Status Tracking
* Deadline Management

### 🤖 AI-Powered Features

* Intelligent Task Recommendation System
* AI Skill Matching Engine
* Task Completion Time Prediction
* Fraud Detection System
* AI Reputation Score Calculation
* Personalized Insights Dashboard

### ⭐ Rating & Review System

* Rate Providers and Workers
* Review and Feedback Mechanism
* Trust Score Generation

### 📊 Analytics Dashboard

* Task Statistics
* Earnings Overview
* Performance Charts
* AI Insights Panel

### 🔔 Notifications

* Real-time Task Updates
* Task Acceptance Notifications
* Completion Alerts
* Review Notifications

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Tailwind CSS
* Axios
* React Router DOM
* Framer Motion

### Backend

* Spring Boot
* Spring Security
* Spring Data JPA
* JWT Authentication
* Maven

### AI Service

* Python
* FastAPI
* Scikit-learn
* Pandas
* NumPy

### Database

* MySQL

---

## 🏗️ System Architecture

```text
React Frontend
       ↓
Spring Boot REST APIs
       ↓
MySQL Database
       ↓
Python AI Microservice
       ↓
Machine Learning Models
```

---

## 📁 Project Structure

```text
peer-to-peer-microtasking-platform/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── src/
│   ├── pom.xml
│   └── application.properties
│
├── ai-service/
│   ├── models/
│   ├── datasets/
│   ├── app.py
│   └── requirements.txt
│
├── database/
│   └── schema.sql
│
└── README.md
```

---

## 🗄️ Database Tables

* Users
* Tasks
* Reviews
* Transactions
* Notifications
* Recommendations

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/keerthana-513/peer-to-peer-microtasking-platform.git
cd peer-to-peer-microtasking-platform
```

### 2️⃣ Configure MySQL

Create Database:

```sql
CREATE DATABASE microtasking_platform;
```

Update:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/microtasking_platform
spring.datasource.username=root
spring.datasource.password=yourpassword
```

---

### 3️⃣ Run Backend

```bash
cd backend
mvn clean install
mvn spring-boot:run
```

Backend runs on:

```text
http://localhost:8080
```

---

### 4️⃣ Run Frontend

```bash
cd frontend
npm install
npm start
```

Frontend runs on:

```text
http://localhost:3000
```

---

### 5️⃣ Run AI Service

```bash
cd ai-service
pip install -r requirements.txt
python app.py
```

AI Service runs on:

```text
http://localhost:5000
```

---

## 🤖 AI Modules

### Task Recommendation System

Recommends tasks based on:

* Skills
* Previous Activity
* Interests
* Ratings

### Skill Matching Engine

Matches workers with tasks using:

* NLP
* TF-IDF
* Cosine Similarity

### Fraud Detection

Detects:

* Fake Submissions
* Suspicious Behaviour
* Spam Accounts

### Completion Time Prediction

Predicts estimated completion time using machine learning models.

---

## 📸 Screenshots

* Landing Page
* Dashboard
* Task Management
* AI Recommendations
* Analytics
* Profile Page

---

## 🔮 Future Enhancements

* Mobile Application
* Chat System
* Payment Gateway Integration
* Blockchain-based Reputation System
* Advanced AI Recommendation Engine
* Real-time Collaboration

---

## 👨‍💻 Author

**Vishnu M S**

* B.Tech Artificial Intelligence and Data Science Student
* Passionate about Full Stack Development and Artificial Intelligence.

---

## 📜 License

This project is licensed under the MIT License.

---

## ⭐ If you like this project, don't forget to star the repository!

