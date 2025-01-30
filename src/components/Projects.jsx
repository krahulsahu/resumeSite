import React from "react";

const Projects = () => {
  return (
    <div className="mt-6">
      <h2 className="text-2xl font-semibold border-b pb-2">Projects</h2>
      <div className="mt-4 ">
        <div className="py-1">
          <p className="font-bold">
            Sorting Visualizer
            <span className="italic font-normal">| ReactJS, JavaScript</span>
          </p>
          <p>
            -Built a website to visualize sorting algorithms (Bubble, Selection,
            Insertion, Merge, Quicksort) with real-time animations using ReactJS
            and JavaScript.
          </p>
        </div>

        <div className="py-1">
          <p className="font-bold">
            Image Generator AI
            <span className="italic font-normal">| MERN Stack</span>
          </p>
          <p>
            - Built an AI-powered image generation web application using React,
            Node.js, Express, and MongoDB. - Integrated external APIs for
            text-to-image generation and implemented user authentication,
            credit-based usage, and a responsive UI.
          </p>
        </div>
        <div className="py-1">
          <p className="font-bold">
            E-commerce Platform
            <span className="italic font-normal">
              {" "}
              | ReactJS, Node.js, MongoDB
            </span>
          </p>
          <p>
            - Built a fully functional e-commerce platform featuring product
            listings, login system, and cart management
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
