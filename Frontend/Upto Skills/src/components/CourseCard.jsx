import React, { useRef, useEffect, useState } from "react";
import "./CourseCard.css";

const initialCourses = [
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
    image: "/card1.png",
  },
];

const CourseData = () => {
  const [courses, setCourses] = useState(initialCourses);
  const sliderRef = useRef(null);

  const appendCourses = () => {
    setCourses((prevCourses) => [...prevCourses, ...initialCourses]);
  };

  useEffect(() => {
    const slider = sliderRef.current;

    const handleScroll = () => {
      if (
        slider.scrollLeft >=
        slider.scrollWidth - slider.offsetWidth - 10 // Adjust for margin
      ) {
        appendCourses();
      }
    };

    slider.addEventListener("scroll", handleScroll);
    return () => slider.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollBy = (direction) => {
    const slider = sliderRef.current;
    const card = slider.querySelector(".course-card");
    if (!card) return;

    const cardWidth =
      card.offsetWidth + parseInt(getComputedStyle(card).marginRight || 0, 10);

    slider.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="course-container">
      <div className="containerTitle">
        <h3>Top Courses</h3>
        <h4>Top Most Rated Web Development Courses</h4>
      </div>
      <div className="sliderContainer">
        <button
          className="arrow left-arrow"
          aria-label="Scroll Left"
          onClick={() => scrollBy("left")}
        >
          &#8249;
        </button>
        <div className="courses-slider" ref={sliderRef}>
          <div className="slider-track">
            {courses.map((course, index) => (
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
                  <div className="enrollBtnContainer">
                    <div className="pricing">
                      <span className="price">{course.price}</span>
                      <span className="original-price">
                        {course.originalPrice}
                      </span>
                    </div>
                    <button className="enroll-btn">Enroll Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          className="arrow right-arrow"
          aria-label="Scroll Right"
          onClick={() => scrollBy("right")}
        >
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default CourseData;
