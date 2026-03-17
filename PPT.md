---
marp: true
theme: default
paginate: true
header: "**🚀 InturnX**"
footer: "🎓 AI-Powered Internship Preparation Platform"
---

# 🚀 InturnX
### 🎓 AI-Powered Internship and Placement Preparation Platform

*Practice interviews 🎙️ | Compete in coding battles ⚔️ | Build your profile 📄 | All in one place 🌐*

---

## 🛑 Idea Title & Problem Statement

**Title:** 🚀 InturnX - Bridging the Gap Between Academic Theory and Real-World Execution.

**The Problem 🚨:**
Traditional placement preparation relies heavily on static coding platforms and theoretical knowledge. It misses key aspects:
- 😰 **Lack of Real Interview Pressure:** Students struggle with soft skills and communication under technical scrutiny.
- 🗣️ **Limited Practical Communication:** Practicing alone doesn't simulate conversing with a technical interviewer or HR manager.
- ⏱️ **Absence of Competition:** Standard platforms don't replicate the time-sensitive, competitive nature of actual tech assessments.

**The Solution 💡:** InturnX provides a realistic, all-in-one ecosystem that actively simulates the pressure and environment of professional software engineering assessments.

---

## 💻 Technical Approach

InturnX combines real-time synchronization ⚡, isolated code compilation 🔒, and generative AI 🧠.

**🛠️ Tech Stack Arsenal:**
- ⚛️ **Frontend Ecosystem:** React 19, Vite, Tailwind CSS, Monaco Editor (VS Code-like feel).
- 🟢 **Backend Infrastructure:** Node.js, Express, MongoDB (Structured Data & Analytics).
- 🐍 **AI Microservice:** Python FastAPI (ML model inference, Resume ATS Analysis).
- 🔌 **Real-Time Layer:** Socket.io (Low-latency WebSockets for 1v1 battles).
- 💻 **Code Execution Engine:** Judge0 API (Secure, multi-language sandboxed compilation).
- 🤖 **AI Tooling:** STT/TTS via ElevenLabs/Web APIs, Ollama (offline local fallback).

---

## 🗺️ Complete User Workflow Flowchart

**How a student navigates the platform:**

🚪 **[ 👤 User Login ]**  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;⬇️  
🎯 **[ 🗂️ Choose Module ]**  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;⬇️  

| 🎙️ **Interview Mode** | ⚔️ **Coding Battle Mode** | 📄 **Resume Builder Mode** |
| :---: | :---: | :---: |
| 🗣️ AI Interaction | ⏱️ Real-time Match | 📝 Build & ATS Analyze |
| ⬇️ | ⬇️ | ⬇️ |
| 📝 **Performance Evaluation (AI / System)** | 🏆 **Winner Decided (Judge0)** | 📈 **ATS Keyword Match Score** |

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;⬇️  
📈 **[ 🌟 XP, Streaks & Analytics Update ]**  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;⬇️  
📊 **[ 🏆 Dashboard Insights & Recommendations ]**

---

## 🏗️ Technical Component Architecture

How our servers talk to each other under the hood:

🌐 **Frontend (React 19 SPA)**  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;⬇️ *(REST API / WebSockets)*  
⚙️ **Backend Core (Node.js + Express)**  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;⬇️  

| 🧠 **AI Service** | 💻 **Judge0 API** | 🗃️ **MongoDB** |
| :---: | :---: | :---: |
| Python FastAPI | Isolated Execution | Database & Data |

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;⬇️  
🔌 **Real-time Engine (Socket.io Rooms)**

---

## 🎙️ Feature Deep Dive: AI Interviews

**🔄 User Flow:** 🎯 Select Interview Type ➡️ 🤖 AI Starts Conversation ➡️ 🗣️ User Responds (Voice/Text) ➡️ 🤔 Follow-up Questions ➡️ 📑 Evaluation & Report

- 🎭 **Role-based AI Personas:** 
  - 🛠️ Technical, 🤝 HR, 📊 DSA, and 🏛️ System Design specialists.
- 🗣️ **Natural Voice Interaction:** 
  - Real-time Speech-to-Text (STT) & Text-to-Speech (TTS) for a fluid conversation.
- 💻 **Interactive Technical Rounds:** 
  - Live coding support directly within the browser during the interview.
- 📑 **Actionable Feedback:** 
  - Auto-generated PDF reports with detailed scoring and constructive feedback.

---

## ⚔️ Feature Deep Dive: 1v1 Coding Battles

**🔄 User Flow:** 🔍 Match Found ➡️ 📝 Problem Assigned ➡️ 💻 Live Coding Sync ➡️ ⚖️ Judge0 Execution ➡️ 🏆 Winner Decided ➡️ 🌟 XP Updated

- 🤝 **Real-Time Matchmaking:** Instantly pairs users of similar skill levels.
- 👀 **Live Opponent Sync:** Features "Ghost Typing" to view your opponent's progress live, adding competitive pressure.
- 🛡️ **Anti-Cheat Ecosystem:** 
  - 🚫 Overrides critical browser shortcuts (`Ctrl+C`, `Ctrl+V`).
  - 👁️ Monitors page visibility to ensure fairness.
- 🧮 **Robust Execution:** Evaluates code against hidden edge cases via Judge0.

---

## ✅ Feasibility and Viability

**⚙️ Technical Feasibility:**
- 🏗️ Built entirely on proven, production-ready frameworks (MERN + FastAPI).
- 🛡️ Secure, sandboxed code execution using Judge0 prevents malicious code from harming servers.
- 🔋 **Offline Resilience:** Incorporates fallback to local Ollama models, ensuring functionality even if external LLM APIs (like OpenAI) hit rate limits.

**💰 Economic Viability:**
- ☁️ Employs an efficient serverless edge architecture (Vercel) allowing dynamic scaling.
- 🔓 Utilizes open-source integrations to heavily reduce API overhead costs.
- 🎮 Gamified mechanics (XP, Streaks) ensure high user retention with low marketing cost.

---

## 🌟 Impact and Benefits

**🎓 For the Users (Students & Job Seekers):**
- 🎭 **Realistic Preparation:** Accurately mimics the stress and format of actual tech company interviews.
- 🔥 **Continuous Motivation:** XP tracking, day streaks, and win/loss ratios turn learning into an engaging game.
- 📄 **Profile Building:** Structured ATS-analyzer ensures resumes pass automated corporate filters.
- 🧠 **Comprehensive Growth:** Holistic development of both hard coding skills and soft communication skills.

**🏫 For the Educational Ecosystem:**
- 🌍 Democratizes access to high-quality, mock-interview practice that is traditionally expensive or requires human mentorship.

---

## 📚 Research and Scientific Basis

**🔬 How the Features Work and Professional Context:**
- 🧠 **Conversational AI Cognitive Load:** Voice-based technical interviews simulate cognitive stress accurately. InturnX utilizes low-latency TTS/STT to force spontaneous problem-solving.
- 🏎️ **Competitive Programming Efficacy:** Real-time 1v1 peer environments leverage **"Social Facilitation Theory"**, where visibility of a peer's progress significantly increases focus.
- 📑 **ATS Algorithms:** InturnX's scanner uses **NLP term-frequency analysis** to mirror real Applicant Tracking Systems (Workday, Greenhouse), providing empirical keyword matching data.
- 🔒 **Sandboxed Compilation (Judge0):** Utilizes standard Linux cgroups/namespaces for 100% secure RCE (Remote Code Execution) to properly assess Big-O time and space complexity.
