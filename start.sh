#!/bin/bash

# Exit on any error
set -e

# Navigate to backend
echo "🔧 Setting up backend..."
cd backend

# 🔐 Download Google Cloud credentials if not already present
CRED_FILE="creds-umg-bq-key.json"
CRED_URL="https://gist.githubusercontent.com/Buck0134/d9b0c86d523f6cbe71b9b78c78289daa/raw/a2e8681412c54cb9cb975ca452200cb5d54516b8/creds-umg-bq-key.json"

if [ ! -f "$CRED_FILE" ]; then
  echo "🔐 Downloading BigQuery credentials..."
  curl -o "$CRED_FILE" "$CRED_URL"
fi

# Set environment variable for BigQuery
export GOOGLE_APPLICATION_CREDENTIALS=$(pwd)/$CRED_FILE

# 🐍 Create virtual environment if not exists
if [ ! -d "venv" ]; then
  echo "🐍 Creating virtual environment..."
  python3 -m venv venv
fi

# Activate venv
source venv/bin/activate

# 📦 Install Python dependencies
echo "📦 Installing Python packages..."
pip install --upgrade pip
pip install -r requirements.txt

# 🚀 Start FastAPI backend
echo "🚀 Starting FastAPI backend..."
uvicorn main:app --reload &
BACKEND_PID=$!

# Navigate to frontend
cd ../frontend
echo "🔧 Setting up frontend..."

# 📦 Install frontend dependencies
if [ ! -d "node_modules" ]; then
  echo "📦 Installing npm packages..."
  npm install
fi

# 🚀 Start React frontend
echo "🚀 Starting React frontend..."
npm start &
FRONTEND_PID=$!

# 🛑 Trap Ctrl+C to shutdown both processes
trap "echo '🛑 Shutting down...'; kill $BACKEND_PID $FRONTEND_PID" EXIT

# Wait for both to complete
echo "🕒 Waiting for processes..."
wait