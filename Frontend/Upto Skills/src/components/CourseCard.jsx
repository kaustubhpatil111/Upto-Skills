import React from "react";
import card1 from "../assets/Image/card1.png";
import card2 from "../assets/Image/card2.png";
import card3 from "../assets/Image/card3.png";
import card4 from "../assets/Image/card4.png";

const CourseCard = () => {
  return (
    <>
      <div className="sm:flex sm:items-center sm:p-5 m-4">
        
        <div className="sm:w-[250px] w-[200px] h-auto mx-auto bg-white rounded-lg shadow-2xl">
          <div className="h-[150px] w-full">
            <img
              className="w-full h-full object-fill rounded-t-lg"
              src={card1}
              alt="Course Image"
            />
          </div>

          <div className="p-4">
            <h2 className="sm:text-lg font-semibold text-[#0B7077]">Learn Java</h2>
            <p className="mt-2 text-sm text-gray-600">
              This is a brief description of the course. Learn the essential
              skills to improve your career.
            </p>

            <div className="mt-4 flex items-center justify-between">
              <span className="font-semibold text-gray-900">$49.99</span>
              <button className="sm:px-4 sm:py-2 p-2 bg-[#FF6D34] text-white text-sm sm:font-medium rounded-lg shadow-md hover:bg-orange-600 transition duration-300">
                Enroll Now
              </button>
            </div>
          </div>
        </div>

        <div className="sm:w-[250px] w-[200px] h-auto mx-auto bg-white rounded-lg shadow-2xl m-5">
          <div className="h-[150px] w-full">
            <img
              className="w-full h-full object-fill rounded-t-lg"
              src={card2}
              alt="Course Image"
            />
          </div>

          <div className="p-4">
            <h2 className="sm:text-lg font-semibold text-[#0B7077]">Learn Java</h2>
            <p className="mt-2 text-sm text-gray-600">
              This is a brief description of the course. Learn the essential
              skills to improve your career.
            </p>

            <div className="mt-4 flex items-center justify-between">
              <span className="font-semibold text-gray-900">$49.99</span>
              <button className="sm:px-4 sm:py-2 p-2 bg-[#FF6D34] text-white text-sm sm:font-medium rounded-lg shadow-md hover:bg-orange-600 transition duration-300">
                Enroll Now
              </button>
            </div>
          </div>
        </div>

        <div className="sm:w-[250px] w-[200px] h-auto mx-auto bg-white rounded-lg shadow-2xl m-5">
          <div className="h-[150px] w-full">
            <img
              className="w-full h-full object-fill rounded-t-lg"
              src={card3}
              alt="Course Image"
            />
          </div>

          <div className="p-4">
            <h2 className="sm:text-lg font-semibold text-[#0B7077]">Learn Java</h2>
            <p className="mt-2 text-sm text-gray-600">
              This is a brief description of the course. Learn the essential
              skills to improve your career.
            </p>

            <div className="mt-4 flex items-center justify-between">
              <span className="font-semibold text-gray-900">$49.99</span>
              <button className="sm:px-4 sm:py-2 p-2 bg-[#FF6D34] text-white text-sm sm:font-medium rounded-lg shadow-md hover:bg-orange-600 transition duration-300">
                Enroll Now
              </button>
            </div>
          </div>
        </div>

        <div className="sm:w-[250px] w-[200px] h-auto mx-auto bg-white rounded-lg shadow-2xl m-5">
          <div className="h-[150px] w-full">
            <img
              className="w-full h-full object-fill rounded-t-lg"
              src={card4}
              alt="Course Image"
            />
          </div>

          <div className="p-4">
            <h2 className="sm:text-lg font-semibold text-[#0B7077]">Learn Java</h2>
            <p className="mt-2 text-sm text-gray-600">
              This is a brief description of the course. Learn the essential
              skills to improve your career.
            </p>

            <div className="mt-4 flex items-center justify-between">
              <span className="font-semibold text-gray-900">$49.99</span>
              <button className="sm:px-4 sm:py-2 p-2 bg-[#FF6D34] text-white text-sm sm:font-medium rounded-lg shadow-md hover:bg-orange-600 transition duration-300">
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseCard;
