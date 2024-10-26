import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import './App.css';
import About from './screens/About.jsx';
import Home from './screens/Home.jsx';
import Features from './screens/Features.jsx';
import Pricing from './screens/Pricing.jsx';
import Navbar from './NavBar/Navbar.jsx';
import Dashboard from './dashboard/dashboard.jsx';
import { useAuth0 } from "@auth0/auth0-react";

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
};

function App() {
  const [repos, setRepos] = useState([]);
  const location = useLocation();

  return (
      <div className="App">
        <div className="App-body">
        {location.pathname === '/' && <Navbar setRepos={setRepos} />}
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home repos={repos} />} />
              <Route path="/features" element={<Features />} />
              <Route path="/about" element={<About />} />
              <Route path="/pricing" element={<Pricing />} />
              
              {/* Protected Dashboard Route */}
              <Route 
                path="/dashboard/*" 
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                } 
              />
            </Routes>
          </main>
        </div>
      </div>
  );
}

export default App;