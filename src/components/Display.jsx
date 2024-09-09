import React from "react";
import "../styles/fill.css";

function Display({ name }) {
  const generateText = (name) => {
    if (name === "rank") {
      return "Know about Countries and their Rankings !";
    } else if (name === "quiz") {
      return "Play the Quiz and test your Knowledge !";
    } else if (name === "translate") {
      return "Translate your Text and Communicate with the World !";
    } else return "";
  };

  return (
    <div className="lg:w-[40vw] lg:h-[70vh] md:w-[60vw] md:h-[60vh] sm:w-[70vw] sm:h-[50vh] w-full h-[40vh]  flex p-4 justify-center items-center">
      <div className=" xl:h-[40vh] xl:w-[20vw] md:w-[20vw] md:h-[30vh] sm:h-[25vh] h-[20vh] w-[30vw] text-white rounded-full flex  justify-center items-center fill-effect p-4">
        <p className="lg:text-[1.8rem] md:text-[1.5rem] sm:text-[1rem] text-[0.875rem] font-bold text-center">
          {generateText(name)}
        </p>
      </div>
    </div>
  );
}

export default Display;
