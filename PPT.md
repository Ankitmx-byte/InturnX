---
marp: true
theme: default
paginate: true
header: "**InturnX**"
footer: "AI-Powered Internship Preparation Platform"
---

# InturnX
### AI-Powered Internship and Placement Preparation Platform

*Practice interviews. Compete in coding battles. Build your profile. All in one place.*

---

## 🛑 Idea Title & Problem Statement

**Title:** InturnX - Bridging the Gap Between Academic Theory and Real-World Execution.

**The Problem:**
Traditional placement preparation relies heavily on static coding platforms and theoretical knowledge. It often misses key aspects necessary for real-world success:
- 😰 **Lack of Real Interview Pressure:** Students struggle with soft skills and communication under technical scrutiny.
- 🗣️ **Limited Practical Communication Skills:** Practicing alone doesn't simulate conversing with a technical interviewer or HR manager.
- ⚔️ **Absence of a Competitive Environment:** Standard platforms don't replicate the time-sensitive, competitive nature of actual tech assessments.

**The Solution:** InturnX provides a realistic, all-in-one ecosystem that actively simulates the pressure and environment of professional software engineering assessments.

---

## 💻 Technical Approach

InturnX combines real-time synchronization, isolated code compilation, and generative AI into a unified ecosystem.

**Tech Stack Arsenal:**
- **Frontend Ecosystem:** React 19, Vite, Tailwind CSS, Monaco Editor (for a native VS Code-like feel).
- **Backend Infrastructure:** Node.js, Express, MongoDB (Structured Data & Analytics).
- **AI Microservice:** Python FastAPI (for ML model inference, Recommendations, Resume ATS Analysis).
- **Real-Time Layer:** Socket.io (Low-latency WebSockets for 1v1 battles).
- **Code Execution Engine:** Judge0 API (Secure, multi-language sandboxed compilation).
- **AI Tooling:** STT/TTS via ElevenLabs/Web APIs, Ollama (for offline, local infrastructure fallback).

---

## 🏗️ Architecture / Flow Diagram

**Complete System Workflow:**

```text
               [ User Login ]
                     ↓
             [ Choose Module ]
                     ↓
[ Interview ]   [ Coding Battle ]   [ Resume Builder ]
      ↓                 ↓                   ↓
AI Interaction   Real-time Match     Build & ATS Analyze
      ↓                 ↓                   ↓
         Performance Evaluation (AI / System)
                        ↓
             XP and Analytics Update
                        ↓
            [ Dashboard Insights ]
```

---

## 🏗️ Technical Component Architecture

```text
       Frontend (React 19 SPA)
                 ↓
    Backend (Node.js + Express)
                 ↓
-----------------------------------------
| AI Service  | Judge0 API | MongoDB     |
| (FastAPI)   | Execution  | Database    |
-----------------------------------------
                 ↓
   Real-time Layer (Socket.io Rooms)
```

---

## 🎙️ Feature Deep Dive: AI Interviews

**Workflow:** Select Interview Type -> AI Starts Conversation -> User Responds (Voice/Text) -> Follow-up Questions -> Evaluation & Report

- **Role-based AI Personas:** 
  - Technical, HR, DSA, and System Design specialists.
- **Natural Voice Interaction:** 
  - Real-time Speech-to-Text (STT) and Text-to-Speech (TTS) for a fluid conversational experience.
- **Interactive Technical Rounds:** 
  - Live coding support directly within the browser during the interview.
- **Actionable Feedback:** 
  - Auto-generated PDF reports with detailed scoring and constructive feedback.

---

## ⚔️ Feature Deep Dive: 1v1 Coding Battles

**Workflow:** Match Found -> Problem Assigned -> Live Coding Sync -> Judge0 Execution -> Winner Decided -> XP Updated

- **Real-Time Matchmaking:** Instantly pairs users of similar skill levels.
- **Live Opponent Sync:** Features "Ghost Typing" to view your opponent's progress live, adding competitive pressure.
- **Anti-Cheat Ecosystem:** 
  - Overrides critical browser shortcuts (Ctrl+C, Ctrl+V).
  - Monitors page visibility to ensure fairness.
- **Robust Execution:** Evaluates code against hidden edge cases via Judge0.

---

## ✅ Feasibility and Viability

**Technical Feasibility:**
- Built entirely on proven, production-ready frameworks (MERN + FastAPI).
- Secure, sandboxed code execution using Judge0 prevents malicious code from harming the main servers.
- **Offline / Edge Case Resilience:** Incorporates fallback to local Ollama models, ensuring the platform remains fully functional even if external LLM APIs (like OpenAI) hit rate limits or downtime.

**Economic Viability:**
- Employs an efficient serverless edge architecture (Vercel) allowing the platform to scale dynamically.
- Utilizes open-source integrations to heavily reduce API overhead costs.
- Gamified mechanics (XP, Streaks) ensure high user retention without expensive marketing.

---

## 🌟 Impact and Benefits

**For the Users (Students & Job Seekers):**
- **Realistic Preparation:** Accurately mimics the stress and format of actual tech company interviews.
- **Continuous Motivation:** XP tracking, consecutive day streaks, and battle win/loss ratios turn learning into an engaging game.
- **Profile Building:** Structured ATS-analyzer ensures resumes pass automated corporate filters.
- **Comprehensive Growth:** Holistic development of both hard coding skills and soft communication skills.

**For the Educational Ecosystem:**
- Democratizes access to high-quality, mock-interview practice that is traditionally expensive or requires human mentorship.

---

## 📚 Research and Scientific Basis

**How the Features Work and Professional Context:**
- **Conversational AI Cognitive Load:** Research shows that voice-based technical interviews simulate cognitive stress accurately. InturnX utilizes low-latency TTS/STT to force spontaneous problem-solving, preventing rehearsed, rote learning.
- **Competitive Programming Efficacy:** Real-time 1v1 peer environments (via Socket.io) leverage "social facilitation theory," where visibility of a peer's progress (Ghost Typing) significantly increases focus and compilation speed.
- **ATS Algorithms:** InturnX's resume scanner uses NLP term-frequency analysis to mirror real Applicant Tracking Systems (Workday, Greenhouse), providing students with empirical data on keyword matching rather than subjective guesswork.
- **Sandboxed Compilation (Judge0):** Utilizes standard Linux cgroups and namespaces for 100% secure RCE (Remote Code Execution) to assess Big-O time and space complexity against optimized test cases.
