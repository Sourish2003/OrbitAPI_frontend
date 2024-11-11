import { useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import "./App.css";
import About from "@/screens/About.jsx";
import Home from "@/screens/Home.jsx";
import Features from "@/screens/Features.jsx";
import Pricing from "@/screens/Pricing.jsx";
import Navbar from "@/NavBar/Navbar.jsx";
import Dashboard from "@/dashboard/dashboard.jsx";
import { useAuth0 } from "@auth0/auth0-react";
import PropTypes from "prop-types";

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth0();

  console.log(isAuthenticated);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
};

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <div className="App-body">
        {location.pathname === "/" && <Navbar />}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
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
ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
