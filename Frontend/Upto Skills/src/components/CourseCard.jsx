import React from "react";
import PropTypes from "prop-types";

const CourseCard = ({ imageSrc, imageAlt, title, description, onEnroll }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#" aria-label={title}>
        <img
          className="rounded-t-lg w-full h-48 object-cover"
          src={imageSrc}
          alt={imageAlt}
        />
      </a>
      <div className="p-5">
        <a href="#" aria-label={title}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <button
          onClick={onEnroll}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Enroll now
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

// Define prop types
CourseCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onEnroll: PropTypes.func,
};

// Define default props
CourseCard.defaultProps = {
  imageSrc: "https://via.placeholder.com/150",
  imageAlt: "Course Image",
  title: "Default Title",
  description: "Default description of the course.",
  onEnroll: () => alert("Enrolled!"),
};

export default CourseCard;
