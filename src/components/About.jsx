import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full  h-screen bg-gradient-to-b from-gray-800 to-black text-white text-center md:text-start"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pt-4">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          I'm a self-motivated person who always aims to reach his goal. Even
          though I have graduated as a translator, I admire software
          development.That is why I'm taking problem solving as a hobby,
          especially when I work on any project. It gives me joy like nothing
          else.
        </p>

        <br />

        <p className="text-xl"></p>
      </div>
    </div>
  );
};

export default About;
