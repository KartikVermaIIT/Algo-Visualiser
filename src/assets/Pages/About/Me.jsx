import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

function Me() {
  return (
    <div className="flex flex-col lg:flex-row w-full p-4">
      <div className="flex flex-col items-center lg:items-start lg:w-1/3">
        <img
          className="w-32 h-32 lg:w-48 lg:h-48 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 object-cover"
          src="/Kartik.jpeg"
          alt="Bordered avatar"
        />
        <div className="text-black text-center lg:text-left mt-3">
          <h2 className="text-2xl">Connect with Me</h2>
          <div className="flex gap-4 justify-center lg:justify-start mt-2">
            <a href="https://www.linkedin.com/in/kartik-verma-6643161b2/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-3xl hover:text-blue-500 transition" />
            </a>
            <a href="https://www.instagram.com/kartik_verma_2328/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-3xl hover:text-pink-500 transition" />
            </a>
            <a href="https://github.com/KartikVermaIIT" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-3xl hover:text-gray-500 transition" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="lg:w-2/3 mt-6 lg:mt-0">
        <h1 className="text-3xl lg:text-4xl font-semibold text-[#420665] text-center lg:text-left">
          Diving Deep into Code: Unveiling the World of 
          <span className="text-nowrap"> Kartik Verma</span>
        </h1>
        <div className="text-black mt-4 text-sm lg:text-base text-center lg:text-left px-2">
          <p>
            I'm Kartik Verma, an enthusiastic undergrad at IIT Mandi diving into 
            Computer Science and Engineering. As a full-stack developer, I merge 
            my love for tech with Machine Learning and Deep Learning, leveraging 
            a strong foundation in Data Structures and Algorithms.
          </p>
          <p className="mt-4">
            My journey includes securing a globally under 40 rank in the NASA Space 
            Apps Challenge 2024, competing against over 15000 teams, and being among 
            the top 3 in India. Our project focused on a greenhouse gas emission 
            mapping system using ML/DL and built a website for it. I have also participated 
            in intra-college and inter-college hackathons, exploring blockchain, ML/DL, 
            web development, and app development.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Me;
