/* eslint-disable */

import React from "react";
import { SectionWrapper } from "../hoc";

const ProgressBar = ({ label, percentage }) => {
  return (
    <div className='w-full mb-6'>
      <div className='flex justify-between mb-1'>
        <span className='text-lg font-medium'>{label}</span>
        <span className='text-lg font-medium'>{percentage}%</span>
      </div>
      <div className='w-full bg-gray-300 rounded-full h-4'>
        <div
          className='h-4 rounded-full'
          style={{ width: `${percentage}%`, backgroundColor: '#915EFF' }}
        ></div>
      </div>
    </div>
  );
};

const Tech = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h2 className='text-4xl font-bold mb-4'>Skills</h2>

      <p className='text-lg mb-8'>
        I started my coding career at Microverse. During my time there, I acquired the skills to code competently with time-tested tools like React and Rails. 
        I then decided to hone my skills in JavaScript, React, Next, Node, Ruby, Rails, Tailwind, HTML, and CSS, with a solid understanding of web development principles and best practices.
        I also have experience working in multicultural work teams. Strong knowledge of Artificial Intelligence, applying Machine Learning and Deep Learning techniques.       
        Since the program was designed to function as a work environment, I also honed some very important soft skills for the industry, such as pair programming and deadline-driven development.  
      </p>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl'>
        <div className='flex-1 mr-8 flex flex-col'>
          <h3 className='text-2xl font-bold mb-4 text-purple-600 underline'>
            Front-End
          </h3>
          <ProgressBar label="React" percentage={90} />
          <ProgressBar label="Next" percentage={80} />
          <ProgressBar label="JavaScript" percentage={90} />
          <ProgressBar label="Typescript" percentage={85} />
          <ProgressBar label="HTML" percentage={95} />
          <ProgressBar label="CSS" percentage={95} />
          <ProgressBar label="Tailwind" percentage={80} />
          <ProgressBar label="Redux" percentage={80} />
          
          <h3 className='text-2xl font-bold mt-8 mb-4 text-purple-600 underline'>
            Professional
          </h3>
          <ProgressBar label="Remote Pair-Programming" percentage={90} />
          <ProgressBar label="Teamwork" percentage={95} />
          <ProgressBar label="Mentoring" percentage={85} />

          <h3 className='text-2xl font-bold mt-8 mb-4 text-purple-600 underline'>
            AI
          </h3>
          <ProgressBar label="Python" percentage={85} />
          <ProgressBar label="Machine Learning" percentage={80} />
          <ProgressBar label="Deep Learning" percentage={75} />

          <h3 className='text-2xl font-bold mt-8 mb-4 text-purple-600 underline'>
            CMS
          </h3>
          <ProgressBar label="WordPress" percentage={90} />

          <h3 className='text-2xl font-bold mt-8 mb-4 text-purple-600 underline'>
            ORM
          </h3>
          <ProgressBar label="Sequelize" percentage={80} />
          <ProgressBar label="Mongoose" percentage={85} />
        </div>

        <div className='flex-1 mr-8 flex flex-col'>
          <h3 className='text-2xl font-bold mb-4 text-purple-600 underline'>
            Back-End
          </h3>
          <ProgressBar label="Node" percentage={95} />
          <ProgressBar label="Express" percentage={85} />
          <ProgressBar label="Ruby" percentage={80} />
          <ProgressBar label="Rails" percentage={75} />
          <ProgressBar label="Mongo" percentage={85} />
          <ProgressBar label="Postgre" percentage={90} />
          <ProgressBar label="SQL" percentage={80} />
          <ProgressBar label="MySQL" percentage={75} />
          <ProgressBar label="Strapi" percentage={70} />
          <ProgressBar label="REST APIs" percentage={90} />

          <h3 className='text-2xl font-bold mt-8 mb-4 text-purple-600 underline'>
            Tools & Methods
          </h3>
          <ProgressBar label="RSpec" percentage={70} />
          <ProgressBar label="Postman" percentage={90} />
          <ProgressBar label="Thunder Client" percentage={70} />
          <ProgressBar label="Git" percentage={95} />
          <ProgressBar label="Netlify" percentage={75} />
          <ProgressBar label="Render" percentage={70} />
          <ProgressBar label="Vercel" percentage={75} />
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
