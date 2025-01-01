import React, { useState, useEffect, Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Modal from "react-modal";

import "./App.css";
import Footer from "./Component/Footer";
import ExploreJobs from "./Component/Explore-Jobs";
import StatisticsSection from "./Component/StatisticsSection";
import CourseCard from "./components/CourseCard";
import CourseSection from "./components/CourseSection";
import FreeTraining from "./components/FreeTraining";
import Hero from "./Component/Hero";
import NavigationBar from "./Component/NavigationBar";
import Partners from "./Component/Partners";

// Lazy-loaded components
const Login = lazy(() => import("./Component/Login"));
const Register = lazy(() => import("./Component/Register"));
import Explore from "./components/Explore";

function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  // Modal control functions
  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);

  return (
    <Router>
      <NavigationBar openLoginModal={openLoginModal} />
      {/* Pass openModal function */}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/register" element={<Register />} />
          <Route path="/courses" element={<Hero />} />
          <Route path="/jobs" element={<Hero />} />
          <Route path="/shops" element={<Hero />} />
          <Route path="/discover" element={<Hero />} />
          <Route path="/degree-program" element={<Hero />} />
        </Routes>
      </Suspense>
      {/* Modal for Login */}
      <Modal
        isOpen={isLoginModalOpen}
        onRequestClose={closeLoginModal}
        contentLabel="Login Modal"
        ariaHideApp={false}
        style={{
          overlay: {
            backgroundColor: "transparent",
            zIndex: 1000,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
          content: {
            backdropfilter: " blur(8px)",
            width: "800px", // Fixed width
            height: "auto", // Adjust height dynamically
            maxHeight: "90vh", // Prevent overflowing viewport
            margin: "auto", // Center the modal
            overflowY: "hidden", // Enable scrolling if content overflows
            borderRadius: "8px", // Optional: Rounded corners
          },
        }}
      >
        <div className="full-screen-login">
          <button
            className="close-button"
            onClick={closeLoginModal}
            aria-label="Close"
          >
            &times;
          </button>
          <div className="login-content">
            <Suspense fallback={<div>Loading Login...</div>}>
              <Login />
            </Suspense>
          </div>
        </div>
      </Modal>
      {/* Footer and other sections */}
      <Partners />
      <FreeTraining />
      <Explore />
      <div className="container mx-auto p-4">
        <CourseCard />
      </div>
      <div className="container mx-auto p-4">
        <CourseSection />
      </div>
      <StatisticsSection />
      <ExploreJobs />
      <Footer />
    </Router>
  );
}

export default App;
