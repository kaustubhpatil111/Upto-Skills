import "./App.css";
import CourseCard from "./components/CourseCard";
import { CourseSection } from "./components/CourseSection";
import cardImage1 from "./assets/Image/card1.png";
import cardImage2 from "./assets/Image/card2.png";
import cardImage3 from "./assets/Image/card4.png";
import cardImage4 from "./assets/Image/card3.png";

function App() {
  return (
    <>
      <div className="flex items-center justify-between py-16 px-8 text-white m-4 rounded-xl">
        <CourseCard
          imageSrc={cardImage1}
          imageAlt="Noteworthy technology acquisitions"
          title="Product Management Basic - Course"
          description="Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia."
        />
        <CourseCard
          imageSrc={cardImage2}
          imageAlt="Noteworthy technology acquisitions"
          title="BM Data Science Professional Certificate"
          description="Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia."
        />
        <CourseCard
          imageSrc={cardImage3}
          imageAlt="Noteworthy technology acquisitions"
          title="The Science of Well-Being"
          description="Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia."
        />
        <CourseCard
          imageSrc={cardImage4}
          imageAlt="Noteworthy technology acquisitions"
          title="Python for Everybody Specialization"
          description="Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek Indonesia."
        />
      </div>
      <CourseSection />
    </>
  );
}

export default App;
