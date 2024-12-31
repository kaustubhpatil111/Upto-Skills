import React, { useState, useEffect, Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Modal from "react-modal";

import "./App.css";
import Footer from "./Component/Footer";
import ExploreJobs from "./Component/Explore-Jobs";
import StatisticsSection from "./Component/StatisticsSection";
import FreeTraining from "./components/FreeTraining";
import Hero from "./Component/Hero";
import NavigationBar from "./Component/NavigationBar";
import Partners from "./Component/Partners";

// Lazy-loaded components
const Login = lazy(() => import("./Component/Login"));
const Register = lazy(() => import("./Component/Register"));

function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  // Manage body scroll when modal is open
  useEffect(() => {
    if (isLoginModalOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
    return () => document.body.classList.remove("modal-open"); // Cleanup on unmount
  }, [isLoginModalOpen]);

  // Modal control functions
  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);

  return (
    <Router>
      <NavigationBar openLoginModal={openLoginModal} />{" "}
      {/* Pass openModal function */}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/register" element={<Register />} />
          <Route path="/courses" element={<div>Courses Page</div>} />
          <Route path="/jobs" element={<ExploreJobs />} />
          <Route path="/shops" element={<div>Shops Page</div>} />
          <Route path="/discover" element={<StatisticsSection />} />
          <Route
            path="/degree-program"
            element={<div>Degree Program Page</div>}
          />
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
            backgroundColor: "rgba(0,0,0,0.8)",
            zIndex: 1000,
          },
          content: {
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            border: "none",
            borderRadius: "0",
            padding: "0",
            margin: "0",
            overflow: "hidden",
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
      <StatisticsSection />
      <ExploreJobs />
      <Footer />
    </Router>
  );
}

export default App;
