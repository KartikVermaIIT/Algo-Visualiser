import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

function Me() {
  return (
    <div className="flex lg:flex-row w-[100%]">
      <div className=" lg:ml-4 lg:mr-2 lg:w-[30%] ml-4  flex flex-col justify-center items-center">
        <img
          className="w-48 h-48 mt-3 lg:mt-0 xl:gap-5 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 mx-auto lg:mx-0 object-cover object-center"
          src="/Kartik.jpeg"
          alt="Bordered avatar"
        />
        <div className="text-white text-center flex lg:items-start lg:flex lg:flex-col">
          <div className="text-2xl mt-3">Connect with Me</div>
          <div className="flex gap-4 ml-8">
          <a href="https://www.linkedin.com/in/kartik-verma-6643161b2/" target="_blank" rel="noopener noreferrer" className="text-xs flex gap-1 items-center mt-1 cursor-pointer justify-center">
            <span className="text-3xl icons duration-200"><FaLinkedin /></span>
          </a>
          <a href="https://www.instagram.com/kartik_verma_2328/" target="_blank" rel="noopener noreferrer" className="text-xs flex gap-1 items-center mt-1 cursor-pointer justify-center">
            <span className="text-3xl icons duration-200"><FaInstagram /></span>
          </a>
          <a href="https://github.com/KartikVermaIIT" target="_blank" rel="noopener noreferrer" className="text-xs flex gap-1 items-center mt-1 cursor-pointer justify-center">
            <span className="text-3xl icons duration-200"><FaGithub /></span>
          </a>
        </div>
        </div>
      </div>
      <div className="lg:w-[80%] lg:ml-2 lg:mr-2">
        <h1 className="text-4xl font-semibold mt-4 lg:mt-0 text-[#420665]">
          Diving Deep into Code: Unveiling the World of
          <span className=" text-nowrap "> Kartik Verma</span>
        </h1>
        <div className="text-white mt-2">
          <p>
            I'm Kartik Verma, an enthusiastic undergrad at IIT Mandi diving
            headfirst into the realms of Computer Science and Engineering. As
            a full-stack web developer, I merge my love for technology with an
            extensive understanding of Machine Learning and Deep Learning.
            With a firm grip on Data Structures and Algorithms, I thrive on
            exploring and contributing to the world of open source.
          </p>
          <p className="mt-2">
          My journey includes securing a globally under 40 rank in the NASA Space Apps Challenge 2024, 
          competing against more than 1500 teams, and being one of the three teams selected in India, where we developed a 
          system for greenhouse gas emission mapping., contributing to
            the frontend development of innovative solutions addressing
            complex problem statements.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Me;
