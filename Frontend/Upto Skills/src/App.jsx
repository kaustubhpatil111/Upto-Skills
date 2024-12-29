import "./App.css";
import Footer from "./Component/Footer";
import ExploreJobs from "./Component/Explore-Jobs";
import StatisticsSection from "./Component/StatisticsSection";
import FreeTraining from "./components/FreeTraining";
// import CourseCard from "./component/CourseCard";
// import CourseSection from "./component/CourseSection";
import NavigationBar from "./Component/NavigationBar";
import Login from "./Component/Login";
import Register from "./Component/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<div>Welcome to the Home Page</div>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/courses" element={<div>Courses Page</div>} />
        <Route path="/jobs" element={<div>Jobs Page</div>} />
        <Route path="/shops" element={<div>Shops Page</div>} />
        <Route path="/discover" element={<div>Discover Page</div>} />
        <Route
          path="/degree-program"
          element={<div>Degree Program Page</div>}
        />
      </Routes>
      <FreeTraining />
      {/* <CourseCard />
      <CourseSection /> */}
      <StatisticsSection />
      <ExploreJobs />
      <Footer />
    </Router>
  );
}

export default App;
