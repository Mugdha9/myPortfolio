import React from 'react';
import utd from '../assets/images.png';
import sppu from '../assets/sppu.jpg';

const Education = () => {
  return (
    <div name="education" className="mt-0 mx-auto p-16 sm:p-24 lg:p-48 bg-bgColor w-full">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col w-full h-auto">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 mb-4 mt-8 border-gray-500 text-text_color">Education</p>
          <p className="py-6 text-text_color">My Academics</p>
        </div>

        <div className="flex flex-col md:flex-row mb-8 mt-5">
          <div className="md:w-1/2">
            <img src={utd} alt="" className="rounded-md mb-4 md:mr-6 w-full md:w-80 h-80" />
          </div>
          <div className="text-left md:w-1/2 p-4 md:ml-10">
            <h1 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">The University of Texas at Dallas</h1>
            <p className="text-gray-600">I am a CS Grad student currently in my second semester.</p>
            <p className="text-gray-600">Coursework till date: </p>
            <ul className="list-disc ml-4 text-gray-600">
              <li>Database Design</li>
              <li>Design and Analysis of Algorithms</li>
              <li>Algorithm Analysis and Data Structures</li>
              <li>Natural Language Processing</li>
              <li>Big Data Management and Analytics</li>
              <li>Software Maintenance and Evolution</li>
            </ul>
            <p>GPA : 4.0 </p>
            <a href="https://www.utdallas.edu/" target="_blank" rel="noopener noreferrer" className="text-blue-500 duration-200 hover:scale-105">utdallas.edu</a>
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row-reverse mt-5">
          <div className="md:w-1/2">
            <img src={sppu} alt="" className="rounded-md mb-4 md:ml-6 w-full md:w-80 h-80" />
          </div>
          <div className="text-left md:w-1/2 p-4 md:mr-10">
            <h1 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">Savitribai Phule Pune University</h1>
            <p className="text-gray-600">Completed my Bachelors degree in Computer Science.</p>
            <p className="text-gray-600">Coursework: </p>
            <ul className="list-disc ml-4 text-gray-600">
              <li>Discrete Structures</li>
              <li>Computer Organization and Architecture</li>
              <li>Problem Solving and OOPS</li>
              <li>Computer Graphics</li>
              <li>Operating Systems</li>
              <li>Database Management Systems</li>
              <li>Human Computer Interaction</li>
              <li>Machine Learning</li>
              <li>Internet of Things</li>
              <li>Ubiquitous Computing</li>
              <li>Software Design and Modeling</li>
              <li>Computer Networks</li>
            </ul>
            <p>And more</p>
            <p>GPA: 3.8</p>
            <a href="https://www.unipune.ac.in/" className="text-blue-500 duration-200 hover:scale-105">unipune.ac.in</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
