import React from "react";
import img1 from "../assets/image/exp2.png";
import img2 from "../assets/image/exp3.png";
import img3 from "../assets/image/exp4.png";
import img4 from "../assets/image/exp5.png";
import img5 from "../assets/image/explore-1.png";
import waveline from "../assets/image/waveline.png";
import "./Explore.css"; // Import CSS for styling

const Explore = () => {
  const freetrainingData = [
    {
      icon: img1,
      title: "Free Training",
      headings: "Degree programs",
      description:
        "Transform your career with our comprehensive and industrial-focused training programmes",
      duration: "18 Nov 24, 04:00 PM IST - 22 Dec 24, 11:59 PM IST",
      color: "#000", // Light red background for this card
      borderColor: "red",
      float: "left",
    },
    {
      icon: img2,
      title: "Team Formation",
      headings: "Degree programs",
      description:
        "Transform your career with our comprehensive and industrial-focused training programmes",
      duration: "18 Nov 24, 04:01 PM IST - 02 Jan 25, 11:59 PM IST",
      color: "#fff", // Light green background for this card
      borderColor: "hsl(128, 92%, 47%)",
      float: "right",
    },
    {
      icon: img3,
      title: "Idea Submissions",
      headings: "Degree programs",
      description:
        "Transform your career with our comprehensive and industrial-focused training programmes",
      duration: "18 Nov 24, 04:02 PM IST - 02 Jan 25, 11:59 PM IST",
      color: "#000", // Light green background for this card
      borderColor: "hsl(128, 92%, 47%)",
      float: "left",
    },
    {
      icon: img4,
      title: "Idea Submissions",
      headings: "Degree programs",
      description:
        "Transform your career with our comprehensive and industrial-focused training programmes",
      duration: "18 Nov 24, 04:02 PM IST - 02 Jan 25, 11:59 PM IST",
      color: "#000", // Light green background for this card
      borderColor: "hsl(128, 92%, 47%)",
      float: "right",
    },
    {
      icon: img3,
      title: "Idea Submissions",
      headings: "Degree programs",
      description:
        "Transform your career with our comprehensive and industrial-focused training programmes",
      duration: "18 Nov 24, 04:02 PM IST - 02 Jan 25, 11:59 PM IST",
      color: "#000", // Light green background for this card
      borderColor: "hsl(128, 92%, 47%)",
      float: "left",
    },
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
          {freetrainingData.map((item, index) => (
            <>
              <div
                className={`item2 ${index % 2 === 0 ? "right" : "left"}`}
                key={index}
              >
                <div className="subitem2-1">
                  <img src={item.icon} width={"50px"} alt="icon" />
                </div>
                <div className="subitem2-2">
                  <h2>{item.headings}</h2>
                  <p>{item.description}</p>
                </div>
              </div>
            </>
          ))}
          <div style={{ clear: "both" }}></div>
        </div>
      </div>
    </>
  );
};

export default Explore;
