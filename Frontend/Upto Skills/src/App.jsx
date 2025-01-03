import React, { useState, Suspense, lazy } from "react";
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
import Explore from "./components/Explore";
// Lazy-loaded components
const Login = lazy(() => import("./Component/Login"));
const Register = lazy(() => import("./Component/Register"));

function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  // Modal control functions
  const openLoginModal = () => {
    setIsRegisterModalOpen(false); // Close register modal if open
    setIsLoginModalOpen(true);
  };
  const closeLoginModal = () => setIsLoginModalOpen(false);

  const openRegisterModal = () => {
    setIsLoginModalOpen(false); // Close login modal if open
    setIsRegisterModalOpen(true);
  };
  const closeRegisterModal = () => setIsRegisterModalOpen(false);

  return (
    <Router>
      <NavigationBar openLoginModal={openLoginModal} />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/register" element={<Hero />} />
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
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1000,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
          content: {
            backdropfilter: "blur(8px)",
            width: "800px",
            height: "auto",
            maxHeight: "90vh",
            margin: "auto",
            overflowY: "hidden",
            borderRadius: "8px",
            padding: 0,
          },
        }}
      >
        <Suspense fallback={<div>Loading Login...</div>}>
          <Login
            openRegisterModal={openRegisterModal}
            closeLoginModal={closeLoginModal}
          />
        </Suspense>
      </Modal>

      {/* Modal for Register */}
      <Modal
        isOpen={isRegisterModalOpen}
        onRequestClose={closeRegisterModal}
        contentLabel="Register Modal"
        ariaHideApp={false}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1000,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
          content: {
            backdropfilter: "blur(8px)",
            width: "800px",
            height: "auto",
            maxHeight: "90vh",
            margin: "auto",
            overflowY: "hidden",
            borderRadius: "8px",
            padding: 0,
          },
        }}
      >
        <Suspense fallback={<div>Loading Register...</div>}>
          <Register closeRegisterModal={closeRegisterModal} />
        </Suspense>
      </Modal>

      {/* Footer and other sections */}
      <Partners />
      <FreeTraining />
      <Explore />
      <CourseCard />
      <CourseSection />
      <StatisticsSection />
      <ExploreJobs />
      <Footer />
    </Router>
  );
}

export default App;
