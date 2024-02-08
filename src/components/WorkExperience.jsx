import React,{useState} from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const WorkExperience = () => {

  const [currentSlide, setCurrentSlide] = useState(0);

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

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % workExperiences.length);
  };

  const handlePrev = () => {
      setCurrentSlide((prevSlide) => (prevSlide - 1 + workExperiences.length) % workExperiences.length);
  };

  return (
    <div>
      <div name="experience" className="m-10 mx-auto p-16 sm:p-24 lg:p-48 bg-gray-100">
      <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline text-text_color">Work Experience</p>
        <p className="py-6 text-text_color">My Corporate Journey</p>
        <div className="relative rounded-lg block md:flex items-center bg-gray-100 shadow-xl" style={{ minHeight: '25rem' }}>
          <div key={workExperiences[currentSlide].id} className="relative w-full md:w-2/5 h-full overflow-hidden rounded-t-lg md:rounded-t-none md:rounded-l-lg" style={{ minHeight: '26rem' }}>
            <div className="absolute inset-0 w-full h-full bg-fromColor opacity-75"></div>
            <div className="absolute inset-0 w-full h-full flex items-center justify-center fill-current text-white text-3xl">
            <div>
                <p className="text-white text-2xl font-semibold">{workExperiences[currentSlide].title}</p>
                <p className="text-white text-lg">{workExperiences[currentSlide].company}</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-3/5 h-full flex items-center bg-gray-100 rounded-lg">
            <div className="p-12 md:pr-24 md:pl-16 md:py-12">
              <ul className="list-disc">
              <li className="text-gray-600 text-lg">{workExperiences[currentSlide].description1}</li>
              <li className="text-gray-600 text-lg">{workExperiences[currentSlide].description2}</li>
              {workExperiences[currentSlide].description3 && <li className="text-gray-600 text-lg">{workExperiences[currentSlide].description3}</li>}
              </ul>
            </div>
            <svg className="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-gray-100 -ml-12" viewBox="0 0 100 100" preserveAspectRatio="none">
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>
          </div>

          <button
            onClick={handlePrev}
            className="absolute top-0 mt-32 left-0 bg-white rounded-full shadow-md h-12 w-12 text-2xl text-fromColor hover:text-toColor focus:text-toColor -ml-6 focus:outline-none focus:shadow-outline"
          >
            <span className="block" style={{ transform: 'scale(-1)' }}>
              &#x279c;
            </span>
          </button>
          <button
            onClick={handleNext}
            className="absolute top-0 mt-32 right-0 bg-white rounded-full shadow-md h-12 w-12 text-2xl text-fromColor hover:text-toColor focus:text-toColor -mr-6 focus:outline-none focus:shadow-outline"
          >
            <span className="block">&#x279c;</span>
          </button>
        </div>
      </div>
    </div>
  );
};


export default WorkExperience;
