import React from "react";
import mainImage from "../assets/Image/img1.png";
import imagelogo2 from "../assets/Image/img2.png";
import imagelogo3 from "../assets/Image/img3.png";
import imagelogo4 from "../assets/Image/img4.png";

export const CourseSection = () => {
  return (
    <section className="flex items-center justify-between py-16 px-8 bg-[#D2E6E4] text-white m-4 rounded-xl">
      <div className="w-full lg:w-1/2">
        <p className="text-sm font-semibold bg-[#FFFFFF] inline-block py-1 px-3 mb-2 rounded-md shadow-md text-black">
          Never stop learning
        </p>
        <h1 className="text-xl lg:text-5xl font-bold leading-tight pt-7 text-[#0B7077]">
          Grow up your skills by online courses with Onlearning
        </h1>
        <button className="bg-orange-500 text-white mt-6 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-orange-600 transition duration-300">
          VIEW COURSES
        </button>
        <div className="flex items-center gap-4 mt-6">
          <div className="flex -space-x-2">
            <img
              src={imagelogo2}
              alt="Profile 1"
              className="w-10 h-10 rounded-full border-2 border-white"
            />
            <img
              src={imagelogo3}
              alt="Profile 2"
              className="w-10 h-10 rounded-full border-2 border-white"
            />
            <img
              src={imagelogo4}
              alt="Profile 3"
              className="w-10 h-10 rounded-full border-2 border-white"
            />
          </div>
          <p className="text-sm text-gray-600 font-medium">(10k+ Reviews)</p>
        </div>
      </div>

      <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
        <img
          src={mainImage}
          alt="Hero Image"
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
    </section>
  );
};

export default CourseSection;
