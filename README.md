# 🚀 InturnX — AI-Powered Internship Platform

---

## 🧠 Overview
InturnX is a full-stack, AI-driven platform designed to help students prepare for internships and placements through real-world simulations, coding battles, and intelligent feedback systems.

It combines **AI interviews, live coding battles, resume building, and analytics** into one unified ecosystem that tracks your growth with XP and performance insights.

---

## ✨ Highlights
- 🎙️ AI Mock Interviews with voice interaction  
- ⚔️ Real-time 1v1 coding battles  
- 📄 Smart Resume Builder + ATS Analyzer  
- 🧠 AI Mentor & Course Recommendation Engine  
- 📊 XP-based Progress Tracking Dashboard  
- 🔒 Secure OAuth + JWT Authentication  

---

## 🎙️ AI Mock Interview System

### 👨‍💻 AI Interviewers
- **Rahul** → Technical  
- **Priya** → HR  
- **Karan** → DSA  
- **Aditi** → System Design  

### ⚙️ Features
- 🎤 Voice Interaction (TTS + STT)  
- 💻 Live coding via Judge0 API  
- 📑 Auto-generated PDF reports with evaluation scores  

---

## ⚔️ Battle Arena (1v1 Coding)
- Real-time matchmaking (Socket.io)  
- Live opponent code sync (ghost typing)  
- Anti-cheat protection (focus + shortcuts tracking)  
- Code execution with multiple test cases (Judge0)  

---

## 📄 Resume & Dashboard
- Resume Builder with structured templates  
- ATS-based Resume Analyzer  

### 📊 Real-time Stats
- XP  
- Streaks  
- Battles won  
- Time spent  

- Certificate upload & management  

---

## 🧠 AI Capabilities
- Personalized course recommendations  
- Resume scoring & feedback  
- AI Code Mentor (debugging + guidance)  
- Offline fallback with local models (Ollama support)  

---

## 🔐 Authentication & Security
- OAuth: Google, GitHub, LinkedIn  
- JWT-based authentication  
- Password hashing with bcrypt  

---

## 🛠️ Tech Stack

### Frontend
- React 19 + Vite  
- Tailwind CSS + DaisyUI  
- Framer Motion + GSAP  
- Monaco Editor  
- Socket.io-client  
- MediaPipe + Whisper (STT)  

### Backend
- Node.js + Express  
- MongoDB + Mongoose  
- Socket.io  
- Passport.js (OAuth)  
- Puppeteer (PDF)  

### AI Service
- FastAPI (Python)  
- ML models for recommendation & evaluation  

### Deployment
- Vercel (Frontend + Serverless)  
- Railway (Backend optional)  
- Judge0 API (Code execution)  
- Ollama (Local AI)  
- ElevenLabs / Azure / GCP (Voice)  

---

## 🏗️ Architecture

Monorepo structure:

```bash
/client       → React frontend  
/server       → Express backend  
/ai_service   → FastAPI AI service  
/api          → Vercel serverless functions  
/antiCheat    → Battle anti-cheat logic  
