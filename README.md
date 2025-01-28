# ChatNest - Real-Time Chat Application

ChatNest is a real-time chat application built using the **MERN stack** (MongoDB, Express.js, React, Node.js) and **Socket.io** for seamless real-time communication. It allows users to join chat rooms, send messages, and interact in real-time.

---

## Features
- **Real-Time Messaging**: Instant message delivery using Socket.io.
- **User-Friendly Interface**: Clean and intuitive UI built with React.
- **Room-Based Chatting**: Join or create chat rooms for group conversations.
- **Scalable Backend**: Built with Node.js and Express.js for high performance.
- **Database Support**: MongoDB for storing chat history and user data.

---

## Technologies Used
- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Real-Time Communication**: Socket.io
- **Styling**: Tailwind
- **Environment Management**: `.env` file

---

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MongoDB Atlas account or local MongoDB installation

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/ChatNest.git
   cd ChatNest

### Project structure
    ```bash
        ChatNest/
        ├── frontend/                  # Frontend (React)
        │   ├── public/
        │   ├── src/
        │   │   ├── components/      # React components
        │   │   ├── App.js           # Main React component
        │   │   └── index.js         # Entry point
        │   └── package.json
        ├── backend/                  # Backend (Node.js + Express)
        │   ├── controllers/         # Route controllers
        │   ├── models/              # MongoDB models
        │   ├── routes/              # API routes
        │   ├── utils/               # Utility functions
        │   ├── app.js               # Express app setup
        │   ├── server.js            # Server entry point
        │   └── package.json
        ├── .gitignore               # Files to ignore in Git
        └── README.md                # Project documentation
