import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className=" w-full h-full bg-gradient-to-b from-black via-black to-gray-800  text-center md:text-start"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col items-center justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have experience building and developing software. Currently, I
            love to work on web application using front-end technologies like
            React, Tailwind and Next JS .and using back-end technologies like
            Node Js, Express Js, MongoDB.
          </p>
          <div className="flex w-full items-center justify-center">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center justify-center rounded-md bg-gradient-to-r from-violet-500 to-purple-900 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
