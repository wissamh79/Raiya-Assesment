import React from "react";
import caloriesWebsite from "../assets/portfolio/caloriesWebsite.JPG";
import metaversus from "../assets/portfolio/metaversus.png";
import GENDERIZE from "../assets/portfolio/GENDERIZE.IO.png";
import PriorityMatrix from "../assets/portfolio/Priority-Matrix.png";
import RaiyaAssesment from "../assets/portfolio/RaiyaAssesment.png";

const Portfolio = () => {
  return (
    <div
      name="portfolio"
      className="flex flex-col items-center justify-center bg-gradient-to-b from-black to-gray-800 w-full h-full text-white text-center md:text-start md:h-screen py-5"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-4">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 mb-10 ">
          {/* {portfolios.map(({ id, src }) => ( */}
          <div className="shadow-md shadow-gray-600 rounded-lg">
            <p className=" px-3 py-3 m-2 text-bold text-center">
              Calories Website
            </p>
            <img
              src={caloriesWebsite}
              alt=""
              className="rounded-md duration-200 hover:scale-105"
              loading="lazy"
            />
            <div className="flex items-center justify-center">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href =
                    "https://calories-calculator.onrender.com";
                  window.location.target = "_blank";
                }}
                className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
              >
                Demo
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href =
                    "https://github.com/wissamh79/Calories-Website";
                  window.location.target = "_blank";
                }}
                className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
              >
                Code
              </button>
            </div>
          </div>
          <div className="shadow-md shadow-gray-600 rounded-lg">
            <p className=" px-3 py-3 m-2 text-bold text-center">Metaversus</p>
            <img
              src={metaversus}
              alt=""
              className="rounded-md duration-200 hover:scale-105"
              loading="lazy"
            />
            <div className="flex items-center justify-center">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "https://metaversus-216r.onrender.com";
                  window.location.target = "_blank";
                }}
                className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
              >
                Demo
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href =
                    "https://github.com/wissamh79/metaversus";
                  window.location.target = "_blank";
                }}
                className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
              >
                Code
              </button>
            </div>
          </div>
          <div className="shadow-md shadow-gray-600 rounded-lg">
            <p className=" px-3 py-3 m-2 text-bold text-center">GENDERIZE.IO</p>
            <img
              src={GENDERIZE}
              alt=""
              className="rounded-md duration-200 hover:scale-105"
              loading="lazy"
            />
            <div className="flex items-center justify-center">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "https://assesment-task.onrender.com";
                  window.location.target = "_blank";
                }}
                className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
              >
                Demo
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href =
                    "https://github.com/wissamh79/Career-Accelerator---Assesment-Task";
                  window.location.target = "_blank";
                }}
                className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
              >
                Code
              </button>
            </div>
          </div>
          <div className="shadow-md shadow-gray-600 rounded-lg">
            <p className=" px-3 py-3 m-2 text-bold text-center">
              Priority Matrix
            </p>
            <img
              src={PriorityMatrix}
              alt=""
              className="rounded-md duration-200 hover:scale-105"
              loading="lazy"
            />
            <div className="flex items-center justify-center">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href =
                    "https://priority-matrix-v1.onrender.com";
                  window.location.target = "_blank";
                }}
                className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
              >
                Demo
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href =
                    "https://github.com/wissamh79/Priority-Matrix";
                  window.location.target = "_blank";
                }}
                className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
              >
                Code
              </button>
            </div>
          </div>
          <div className="shadow-md shadow-gray-600 rounded-lg">
            <p className=" px-3 py-3 m-2 text-bold text-center">
              Raiya Assesment
            </p>
            <img
              src={RaiyaAssesment}
              alt=""
              className="rounded-md duration-200 hover:scale-105"
              loading="lazy"
            />
            <div className="flex items-center justify-center">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href =
                    "https://raiya-assesment.onrender.com/";
                  window.location.target = "_blank";
                }}
                className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
              >
                Demo
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href =
                    "https://github.com/wissamh79/Raiya-Assesment";
                  window.location.target = "_blank";
                }}
                className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
              >
                Code
              </button>
            </div>
          </div>

          {/* ))} */}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
