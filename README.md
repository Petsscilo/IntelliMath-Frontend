# IntelliMath Frontend

IntelliMath is an AI-powered math tutoring platform designed to help students learn math through structured lessons, quizzes, real-time AI chat, and progress tracking. This repository contains the **frontend** of the IntelliMath platform.

---

## ✨ Key Features

### ✅ User Authentication
- Student & Admin signup/login
- Forgot Password & Reset Password pages
- Role-based dashboards with protected access

### 📚 Learning Experience
- Math lessons structured by level
- Interactive quizzes for each lesson
- AI Tutor (powered by OpenAI API)
- Student progress tracking: completed lessons, last viewed, and current level

### 📊 Dashboards
- **Student Dashboard:** Progress cards, quick access to lessons & quizzes, gamification
- **Admin Dashboard:** Add/edit lessons & quizzes, view students, generate reports

### 🎮 Gamification
- Badges, leaderboards, and achievement system
- Future-ready for quiz competitions & engagement boosts

### 🔗 Live Tutoring (Prototype)
- Book a tutor (UI only)
- Placeholder for secure payment integration

### 🌟 Fully Responsive Design
- Clean and responsive layout
- Sidebar navigation with mobile/desktop optimization
- Smooth animations with Tailwind CSS

---

## 🔧 Tech Stack

| Technology | Usage               |
|------------|----------------------|
| HTML5      | Markup               |
| Tailwind CSS | Styling & Animations |
| JavaScript | Frontend logic & localStorage |
| Chart.js   | Admin report graphs   |
| OpenAI API (Planned) | AI Tutor functionality |

---

## 🔌 API Integration (Planned)

The frontend will integrate with a Django backend providing these endpoints:

- `/api/register/`
- `/api/login/`
- `/api/lessons/`
- `/api/quiz/submit/`
- `/api/user/progress/`
- `/api/admin/users/`
- `/api/admin/reports/`

---

## 🚀 Running Locally

1. Clone this repository:
   ```bash
   git clone https://github.com/Petsscilo/IntelliMath-Frontend.git
   cd IntelliMath-Frontend

Open index.html using Live Server in VS Code
OR run:

bash " python3 -m http.server 3000
Visit http://localhost:3000/ in your browser.

👥 Built By

Peter & Dev Team


