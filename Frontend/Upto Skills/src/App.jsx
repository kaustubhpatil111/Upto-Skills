import "./App.css";
import Footer from "./Component/Footer";
import ExploreJobs from "./Component/Explore-Jobs";
import StatisticsSection from "./Component/StatisticsSection";
import Freetraining from "./components/FreeTraning";

function App() {
  return (
    <>
     <Freetraining />
      <StatisticsSection />
      <ExploreJobs />
      <Footer />
    </>
  );
}

export default App;
