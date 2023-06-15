/* eslint-disable */

import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h2 className='text-4xl font-bold mb-4'>Skills</h2> {/* Title */}

      <p className='text-lg mb-4'>
        I started my coding path in the Microverse program. During my time there, 
        I acquired the skills to proficiently code with time-tested tools like React and Rails. 
        Since the program was designed to function as a work environment, I also polished some very important soft skills for the industry such as pair-programming and deadline-driven development.
      </p> {/* Description */}

      <h3 className='text-2xl font-bold mb-2'>Tools</h3> {/* Subtitle */}
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");

