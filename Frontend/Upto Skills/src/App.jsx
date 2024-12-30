import "./App.css";
import Footer from "./Component/Footer";
import ExploreJobs from "./Component/Explore-Jobs";
import StatisticsSection from "./Component/StatisticsSection";
import FreeTraining from "./components/FreeTraining";
import Hero from "./Component/Hero";
import NavigationBar from "./Component/NavigationBar";
import Login from "./Component/Login";
import Register from "./Component/Register";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<div></div>} />
        <Route path="/login" element={<Login />} />
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
      <Hero />
      <FreeTraining />
      <StatisticsSection />
      <ExploreJobs />
      <Footer />
    </Router>
  );
}

export default App;
