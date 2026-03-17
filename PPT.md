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

## Idea Title & Problem Statement

**Title:** InturnX - Bridging the gap between academic learning and real-world execution

**The Problem:**
Most placement preparation today is either theory-heavy or limited to basic coding practice. It misses what actually matters in real interviews:

- Lack of real interview pressure  
- Weak communication practice with interviewers  
- No real competition or time pressure  

**The Solution:**  
InturnX creates a realistic environment where students can experience actual interview scenarios, compete with others, and improve both technical and communication skills.

---

## Technical Approach

InturnX combines real-time systems, AI services, and code execution into one platform.

**Tech Stack:**
- **Frontend:** React 19, Vite, Tailwind CSS, Monaco Editor  
- **Backend:** Node.js, Express, MongoDB  
- **AI Service:** FastAPI (Python)  
- **Real-time:** Socket.io  
- **Code Execution:** Judge0 API  
- **AI Tools:** STT/TTS (ElevenLabs/Web APIs), Ollama (offline fallback)  

---

## Architecture / Flow

**System Workflow:**

```text
User Login
   ↓
Choose Module
   ↓
Interview | Coding Battle | Resume Builder
   ↓
AI Interaction | Matchmaking | Resume Analysis
   ↓
Evaluation (AI/System)
   ↓
XP + Analytics Update
   ↓
Dashboard
Technical Component Architecture
Frontend (React)
      ↓
Backend (Node.js + Express)
      ↓
---------------------------------
AI Service | Judge0 | MongoDB
(FastAPI)  | API     | Database
---------------------------------
      ↓
Socket.io (Real-time layer)
AI Interviews

Flow:
Select interview → AI asks questions → user responds → follow-ups → final report

Different roles: Technical, HR, DSA, System Design

Voice-based interaction (STT + TTS)

Live coding support

Auto-generated report with feedback

1v1 Coding Battles

Flow:
Match → problem → live coding → execution → result → XP update

Real-time matchmaking

Live opponent code view (ghost typing)

Anti-cheat system (tab switch + shortcut tracking)

Code evaluation using Judge0

Feasibility and Viability

Technical:

Built on stable technologies (MERN + FastAPI)

Secure code execution via Judge0

Works even during API downtime using Ollama fallback

Economic:

Serverless deployment (Vercel) for scalability

Uses open-source tools to reduce cost

Gamification improves user retention naturally

Impact and Benefits

For Students:

Real interview-like experience

Better consistency through XP and streaks

Resume improvement with ATS insights

Growth in both coding and communication

For Education:

Makes quality interview practice accessible without expensive coaching

Research and Basis

Voice-based interviews simulate real pressure and improve thinking speed

Competitive environments improve focus and performance

Resume analysis uses keyword matching similar to real ATS systems

Judge0 ensures safe and reliable code execution

Final Thought

Preparation without pressure is incomplete.

InturnX brings:

real scenarios

real competition

real improvement
