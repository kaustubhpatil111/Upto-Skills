import React from "react";
import img1 from "../assets/image/exp2.png";
import img2 from "../assets/image/exp3.png";
import img3 from "../assets/image/exp4.png";
import img4 from "../assets/image/exp5.png";

import "./Explore.css"; // Import CSS for styling

const Explore = () => {
  const freetrainingData = [
    {
      icon: img1,
      title: "Free Training",
      headings: "Degree programs",
      description:
        "Transform your career with our comprehensive and industrial-focused training programmes",

      float: "left",
    },
    {},
    {},
    {
      icon: img2,
      title: "Team Formation",
      headings: "Degree programs",
      description:
        "Transform your career with our comprehensive and industrial-focused training programmes",

      float: "right",
    },

    {
      icon: img3,
      title: "Idea Submissions",
      headings: "Degree programs",
      description:
        "Transform your career with our comprehensive and industrial-focused training programmes",

      float: "left",
    },
    {},
    {},
    {
      icon: img4,
      title: "Idea Submissions",
      headings: "Degree programs",
      description:
        "Transform your career with our comprehensive and industrial-focused training programmes",

      float: "right",
    },

    {
      icon: img3,
      title: "Idea Submissions",
      headings: "Degree programs",
      description:
        "Transform your career with our comprehensive and industrial-focused training programmes",

      float: "left",
    },
    {},
  ];

  return (
    <>
      <div className="boxContainer">
        <div className="blurredSpot spot1"></div>
        <div className="blurredSpot spot2"></div>
        <div className="imageContainer">
          <h1>Explore Our Ecosystem</h1>
          <p>
            A one-stop destination for all your learning to placement needs.
          </p>
          <img src="SVG.png" alt="" />
        </div>

        <div className="gridContainer1 ">
          {freetrainingData.map((item, index) => {
            if (!item.icon) {
              return <div key={index} className="empty-cell"></div>;
            }
            return (
              <div
                className={`item2 ${index % 2 === 0 ? "right" : "left"}`}
                key={index}
              >
                <div className="subitem2-1">
                  <img src={item.icon} width={"40px"} alt="icon" />
                </div>
                <div className="subitem2-2">
                  <h2>{item.headings}</h2>
                  <p>{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Explore;
