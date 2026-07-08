import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "AI/ML Engineer",
          "Machine Learning Engineer",
          "Data Scientist",
          "Generative AI Developer",
          "Python Developer",
          "LLM Engineer",
          "RAG Developer",
          "Deep Learning Enthusiast",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 20,
      }}
    />
  );
}

export default Type;