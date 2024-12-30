import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Modal from "react-modal"; // Import Modal

import "./App.css";
import Footer from "./Component/Footer";
import ExploreJobs from "./Component/Explore-Jobs";
import StatisticsSection from "./Component/StatisticsSection";
import FreeTraining from "./components/FreeTraining";
import Hero from "./Component/Hero";
import NavigationBar from "./Component/NavigationBar";
import Login from "./Component/Login";
import Register from "./Component/Register";

function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false); // Modal state

  const openLoginModal = () => setIsLoginModalOpen(true); // Opens modal
  const closeLoginModal = () => setIsLoginModalOpen(false); // Closes modal

  return (
    <Router>
      <NavigationBar openLoginModal={openLoginModal} />{" "}
      {/* Pass function as prop */}
      <Routes>
        <Route path="/" element={<div></div>} />
        <Route path="/register" element={<Register />} />
        <Route path="/courses" element={<div></div>} />
        <Route path="/jobs" element={<div></div>} />
        <Route path="/shops" element={<div></div>} />
        <Route path="/discover" element={<div></div>} />
        <Route
          path="/degree-program"
          element={<div>Degree Program Page</div>}
        />
      </Routes>
      {/* Modal for Login */}
      <Modal
        isOpen={isLoginModalOpen} // Modal visibility controlled by state
        onRequestClose={closeLoginModal} // Close modal on request
        contentLabel="Login Modal"
        ariaHideApp={false} // Prevent issues with accessibility
      >
        <Login />
        <button onClick={closeLoginModal}>Close</button> {/* Close button */}
      </Modal>
      <Hero />
      <FreeTraining />
      <StatisticsSection />
      <ExploreJobs />
      <Footer />
    </Router>
  );
}

export default App;
