##Please visit the deployed version of the app via: https://umg-deploy-frontend.onrender.com/##


# 🎶 Bucky's UMG Software Engineering Skills Test – Full-Stack Solution

Welcome to the source code repository for my complete solution to the **Capital Music Group Software Engineering Skills Test**.

This repo contains the frontend and backend implementations for all three tasks, built with **React**, **FastAPI**, and **BigQuery**.

---

## 🧩 Project Structure

```
.
├── backend/       # FastAPI server with BigQuery integration
├── frontend/      # React application (Vite + MUI)
├── start.sh       # One-line script to start everything
```

---

## 🚀 Getting Started

To run the entire project locally (frontend + backend), simply clone this repo and run:

Make sure the script has execute permissions and also you have pip and npm installed on your machine:

```bash
chmod +x start.sh

./start.sh
```


This will:
- Download Google Cloud Secrets
- Set up a Python virtual environment and install backend dependencies
- Install frontend dependencies via `npm`
- Start both servers concurrently
- Use Control C to exit the program

---

## 🌐 Live Features

Each of the three parts can be accessed via the browser after running the local server:

- Part 1 – React Table using iTunes API
- Part 2 – FastAPI Submission Form with BigQuery integration
- Part 3 – Multi-user Custom Artist List Manager

Implementation notes and source code links are also provided within the app interface.

---

## 🛠️ Tech Stack

- React (Vite + MUI)
- FastAPI (Python)
- BigQuery (Google Cloud)
- Axios, Pydantic, dotenv
