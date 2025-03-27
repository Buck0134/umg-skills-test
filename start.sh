#!/bin/bash

# Exit on any error
set -e

# Backend setup
echo "🔧 Setting up backend..."
cd backend

# Create virtual environment if not exists
if [ ! -d "venv" ]; then
  echo "🐍 Creating virtual environment..."
  python3 -m venv venv
fi

# Activate venv
source venv/bin/activate

# Install Python dependencies
echo "📦 Installing Python packages..."
pip install --upgrade pip
pip install -r requirements.txt

# Start FastAPI backend
echo "🚀 Starting FastAPI backend..."
uvicorn main:app --reload &
BACKEND_PID=$!

# Frontend setup
cd ../frontend
echo "🔧 Setting up frontend..."

# Install frontend dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
  echo "📦 Installing npm packages..."
  npm install
fi

# Start React frontend
echo "🚀 Starting React frontend..."
npm start &
FRONTEND_PID=$!

# Trap Ctrl+C to kill both processes
trap "echo '🛑 Shutting down...'; kill $BACKEND_PID $FRONTEND_PID" EXIT

# Wait for both to complete
echo "🕒 Waiting for both backend and frontend to exit..."
wait