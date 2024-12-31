import React from "react";
import img1 from "../assets/image/green.png";
import img2 from "../assets/image/black.png";
import img3 from "../assets/image/yellow.png";
import img4 from "../assets/image/suitcase.png";
import waveline from "../assets/image/waveline.png";
import "./FreeTraning.css"; // Import CSS for styling

const FreeTraning = () => {
  const freetrainingData = [
    {
      backgroundColor: "rgb(190, 241, 253)",
      icon:img1,
      title: "Free Training",
      headings: "Free Training",
      description:
        "Transform your career with our compassive and industrial focus training programmes",
      duration: "18 Nov 24, 04:00 PM IST - 22 Dec 24, 11:59 PM IST",
      color: "#000", // Light red background for this card
      borderColor: "red"
    },
    {
        backgroundColor: "rgb(0, 4, 5)",  
        icon:img2,
      title: "Team Formation",
      headings: "Free Jobs",
      description:
        "Transform your career with our compassive and industrial focus training programmes",
      duration: "18 Nov 24, 04:01 PM IST - 02 Jan 25, 11:59 PM IST",
      color: "#fff", // Light green background for this card
       borderColor: "hsl(128, 92%, 47%)"
    },
    {
        backgroundColor: "rgba(253, 243, 156, 0.73)",  
        icon:img3,
      title: "Idea Submissions",
      headings: "Free Internship",
      description:
        "Transform your career with our compassive and industrial focus training programmes",
      duration: "18 Nov 24, 04:02 PM IST - 02 Jan 25, 11:59 PM IST",
      color: "#000", // Light green background for this card
       borderColor: "hsl(128, 92%, 47%)"
    },
    {
        backgroundColor: "rgb(249, 252, 253)",  
        icon:img4,
      title: "Idea Submissions",
      headings: "Degree programs",
      description:
        "Transform your career with our compassive and industrial focus training programmes",
      duration: "18 Nov 24, 04:02 PM IST - 02 Jan 25, 11:59 PM IST",
      color: "#000", // Light green background for this card
       borderColor: "hsl(128, 92%, 47%)"
    },
    ];

  return (
<>
<div style={{
  borderImage: `url(${waveline}) 30 repeat`,
  
  borderTop: '10px solid transparent', // You need to define a border for the image to apply
}}></div>

    <div className="gridContainer">
     
      {freetrainingData.map((item, index) => (
        
                

          
            <div className="item1" style={{backgroundColor:item.backgroundColor}}>
                <div className="subitem1-1">
                <img src={item.icon}width={"100px"} alt="image" />

                </div>
                <div className="subitem1-2" style={{color:item.color}}>
                    <h2>{item.headings}</h2>
                  
                    <p>{item.description}</p>
                </div>
            </div>

    
    
     
      ))}
    </div>
    <div style={{
  borderImage: `url(${waveline}) 30 repeat`,
  
  borderTop: '10px solid transparent', // You need to define a border for the image to apply
}}></div>
    </>
  );
};

export default FreeTraning;