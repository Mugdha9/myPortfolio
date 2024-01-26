import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Experience = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const workExperiences = [
    {
      id: 1,
      title: 'Work Experience 1',
      description: 'Description for Work Experience 1...',
    },
    {
      id: 2,
      title: 'Work Experience 2',
      description: 'Description for Work Experience 2...',
    },
    {
      id: 3,
      title: 'Work Experience 3',
      description: 'Description for Work Experience 3...',
    },
  ];

  return (
    <div name="experience" className="text-white w-full h-full bg-bgColor mb-20 flex justify-center items-center">
      <Slider {...settings} className="max-w-screen-lg mx-auto w-full">
        {workExperiences.map((experience) => (
          <div key={experience.id} className="flex justify-center items-center w-full md:h-[450px]">
            <div className="max-w-screen-md p-8 bg-cardColor w-full h-full md:w-3/4 flex justify-center items-center rounded-xl shadow-lg border border-gray-200">
              <div className="flex flex-col md:flex-row w-full">
                <div className="md:w-1/2">
                  <h2 className="text-2xl font-bold">{experience.title}</h2>
                </div>
                <div className="text-left md:w-1/2 p-4 md:ml-10">
                  <p>{experience.description}</p>
                  <a
                    href="https://www.utdallas.edu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 duration-200 hover:scale-105"
                  >
                    utdallas.edu
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Experience;
