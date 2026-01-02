# 🎯 New Year Invitation Optimization Problem

> **A Graph Theory Approach to Minimizing Travel Costs**

A college project that demonstrates how graph algorithms can be applied to solve real-world optimization problems. This interactive website visualizes the journey from problem definition to optimal solution using **Prim's Minimum Spanning Tree Algorithm**.

---

## 📋 Problem Statement

**Scenario:** New Year party invitations must be hand-delivered to multiple locations across Hubli, starting from KLE Tech. The challenge is to **minimize the total travel cost** while ensuring every location is reached.

This real-world constraint mapping problem is solved using:
- **Graph Theory** - Modeling locations as nodes and travel costs as edge weights
- **Minimum Spanning Tree (MST)** - Finding the optimal connecting path
- **Prim's Algorithm** - Greedy approach for MST construction
- **DFS Traversal** - Generating the final visiting order

---

## ✨ Features

- 🎨 **Futuristic UI** - Dark theme with neon accents, glassmorphism, and smooth animations
- 📊 **Interactive Visualizations** - Graph representation with animated nodes and edges
- 🦎 **LizardAzarr** - AI companion mascot with eye-tracking and fun interactions
- 📝 **Step-by-step Explanation** - Algorithm breakdown from problem to solution
- 💻 **Code Implementation** - Complete C++ solution with syntax highlighting
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 14** | React framework with App Router |
| **TypeScript** | Type-safe development |
| **Tailwind CSS** | Utility-first styling |
| **Framer Motion** | Smooth animations |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/invitation-problem.git

# Navigate to project directory
cd invitation-problem/nextjs-migration

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
nextjs-migration/
├── app/
│   ├── page.tsx          # Main page with all sections
│   ├── layout.tsx        # Root layout with fonts
│   └── globals.css       # Design system & animations
├── components/
│   ├── Hero.tsx          # Landing section
│   ├── ProblemVisualization.tsx  # Problem statement
│   ├── AlgorithmBrainstorm.tsx   # Algorithm comparison
│   ├── Breakthrough.tsx  # MST solution reveal
│   ├── PrimsAlgorithm.tsx        # Step-by-step explanation
│   ├── Implementation.tsx        # C++ code display
│   ├── TreeToPath.tsx    # DFS traversal visualization
│   ├── FinalOutcome.tsx  # Results & statistics
│   ├── Team.tsx          # Team members
│   └── LizardAzarr.tsx   # AI mascot companion
└── public/               # Static assets
```

---

## 🧠 Algorithm Overview

### The Solution Approach

1. **Model as Graph** - Locations become vertices, distances become edge weights
2. **Apply Prim's Algorithm** - Build MST starting from KLE Tech (node 0)
3. **DFS Traversal** - Walk the MST to generate visiting order
4. **Result** - Optimal path with minimum total travel cost

### Time Complexity
- **Prim's Algorithm:** O(E log V)
- **DFS Traversal:** O(V + E)

### Result
- **Total MST Weight:** 23 units
- **Locations Covered:** 8
- **Efficiency:** Maximum coverage, minimum cost

---

## 👥 Team

| Name | Role |
|------|------|
| **Sarosh** | Project Lead |
| **Shrihari Deshpande** | Developer |
| **Sudhanva S Kulkarni** | Developer |
| **Abhishek K** | Developer |

---

## 📄 License

This project was created as part of the Design and Analysis of Algorithms course.

---

## 🙏 Acknowledgments

- KLE Technological University, Hubli
- Course instructors and mentors
- The open-source community for amazing tools

---

<div align="center">
  <b>Built with ❤️ for learning graph algorithms</b>
</div>
