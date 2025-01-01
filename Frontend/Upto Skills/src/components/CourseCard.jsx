import React, { useState, useRef, useEffect } from "react";
import "./CourseCard.css";

const courses = [
  {
    id: 1,
    title: "Product Management Basic - Course",
    date: "1 - 28 July 2022",
    description:
      "Learn product management with Sarah Johnson - Head of Product Customer Platform, Gojek Indonesia.",
    price: "$380",
    originalPrice: "$500",
    students: "40",
    image: "/card1.png",
  },
  {
    id: 2,
    title: "BM Data Science Professional Certificate",
    date: "1 - 28 July 2022",
    description:
      "Get a professional certificate in data science with our hands-on training program.",
    price: "$678",
    originalPrice: "$800",
    students: "11",
    image: "/card2.png",
  },
  {
    id: 3,
    title: "The Science of Well-Being",
    date: "1 - 28 July 2022",
    description:
      "Discover the science of happiness and well-being with this engaging course.",
    price: "$123",
    originalPrice: "$150",
    students: "324",
    image: "/card3.png",
  },
  {
    id: 4,
    title: "Python for Everybody Specialization",
    date: "1 - 28 July 2022",
    description:
      "Master Python programming with this beginner-friendly specialization.",
    price: "$567",
    originalPrice: "$600",
    students: "342",
    image: "/card4.png",
  },
  {
    id: 5,
    title: "Full-Stack Web Development Bootcamp",
    date: "1 - 28 July 2022",
    description:
      "Learn full-stack web development with hands-on projects and industry experts.",
    price: "$499",
    originalPrice: "$700",
    students: "150",
    image: "/card5.png",
  },
];
const CourseData = () => {
  const [cards] = useState([...courses, ...courses]); // Duplicate for seamless loop
  const sliderRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const slider = sliderRef.current;
      const totalWidth = slider.scrollWidth / 2; // Width of half the track
      if (slider.scrollLeft >= totalWidth) {
        slider.scrollLeft -= totalWidth; // Reset to start of loop
      } else if (slider.scrollLeft === 0) {
        slider.scrollLeft += totalWidth; // Reset to end of loop
      }
    };
    const slider = sliderRef.current;
    slider.addEventListener("scroll", handleScroll);
    return () => slider.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    sliderRef.current.classList.add("dragging");
    startX.current = e.pageX - sliderRef.current.offsetLeft;
    scrollLeft.current = sliderRef.current.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5; // Adjust drag sensitivity
    sliderRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    sliderRef.current.classList.remove("dragging");
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
    sliderRef.current.classList.remove("dragging");
  };

  const scrollBy = (direction) => {
    const slider = sliderRef.current;
    const scrollAmount = 300; // Adjust to card width
    slider.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="courses-slider">
      <button className="arrow left-arrow" onClick={() => scrollBy("left")}>
        &#8249;
      </button>
      <div
        className="slider-wrapper"
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        <div className="slider-track">
          {cards.map((course, index) => (
            <div className="course-card" key={`${course.id}-${index}`}>
              <div
                className="card-image"
                style={{ backgroundImage: `url(${course.image})` }}
              >
                <div className="students-badge">
                  <img src="/StudentBadge.png" alt="students" />+{" "}
                  {course.students} students
                </div>
              </div>
              <div className="card-details">
                <p className="date">{course.date}</p>
                <h3 className="title">{course.title}</h3>
                <p className="description">{course.description}</p>
                <div className="pricing">
                  <span className="price">{course.price}</span>
                  <span className="original-price">{course.originalPrice}</span>
                </div>
                <button className="enroll-btn">Enroll Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className="arrow right-arrow" onClick={() => scrollBy("right")}>
        &#8250;
      </button>
    </div>
  );
};

export default CourseData;
