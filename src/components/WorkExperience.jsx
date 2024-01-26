import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const WorkExperience = () => {
  const workExperiences = [
    {
      id: 1,
      title: 'Software Engineer',
      company: 'Newgen Software Technologies Limited',
      description1: 'Automated Business and Loan Life Cycle Management processes for three major banks by designing their workflow, integrating external APIs and using Socket utilities for data communication',
      description2: 'Implemented 50 change requests, configured front-end and back-end, and deployed applications using JBoss, Websphere, solving more than 200 bugs guaranteeing 100% bug resolution',
      description3: 'Conducted regression and system-level testing which led to quality deployment reducing the processing time',

    },
    {
      id: 2,
      title: 'Full Stack Developer Intern',
      company: 'Virtusa Consulting Services',
      description1: 'Independently designed and developed two full stack web applications using Java framework each with more than 10,000 lines of code, and completed extensive training in Java, JSP, Servlets, Angular and Spring',
      description2: 'Assisted colleagues in their projects, conducted meetings to resolve problems and bugs'
    },
    {
      id: 3,
      title: 'Data Science Intern',
      company: 'Knowledge Solutions',
      description1: 'Studied datasets and developed a heart disease prediction model with an accuracy rate of 85%',
      description2: 'Studied and implemented Python, R and Data Science models'
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div name="experience" className="bg-bgColor py-16 text-text_color">
      <div className="container mx-auto max-w-screen-lg p-4 flex flex-col w-full h-full">
      <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500 mt-10">Work Experience</p>
                    <p className="py-6">Check out some of my work right here</p>
      </div>
        <Slider {...sliderSettings} className="max-w-4xl mx-auto">
          {workExperiences.map((experience) => (
            <div key={experience.id} className="bg-bgColor rounded-lg p-8 shadow-md">
              <h3 className="text-xl font-semibold mb-2">{experience.title}</h3>
              <p className="text-gray-600 mb-2">{experience.company}</p>
              <p className="text-gray-800">{experience.description1}</p>
              <p className="text-gray-800">{experience.description2}</p>
              <p className="text-gray-800">{experience.description3}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default WorkExperience;
