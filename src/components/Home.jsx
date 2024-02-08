import React from 'react';
import heroImage from '../assets/heroImg.jpg';
import laptop from '../assets/laptop.png';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { Link as ScrollLink, Element } from 'react-scroll';

const Home = () => {
  return (
    <Element name="home" className="h-screen w-full bg-bgColor mt-5">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full mx-auto max-w-screen-md mb-8 md:mb-0 md:mr-8">
          <img src={laptop} alt="hand_wave" className="rounded-2xl w-20 h-20 gap-5 mr-5 mt-20 md:mt-0 inline-flex-row" />
          <div className="flex items-center">
            <h2 className="text-4xl sm:text-6xl font-bold whitespace-nowrap text-text_color">
              Software Developer
            </h2>
          </div>
          <p className="text-text_color py-4 mb-4">
            Hi, I'm Mugdha. A passionate Full-Stack Developer and Software Developer. I love to turn code into seamless experiences.
          </p>
          <div>
            <ScrollLink to="projects" smooth={true} duration={500} spy={true} activeClass="active">
              <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-fromColor to-toColor hover:scale-105 duration-200">
                Projects
                <span className="group-hover:rotate-90 duration-300">
                  <MdKeyboardArrowRight size={25} className="ml-1" />
                </span>
              </button>
            </ScrollLink>
          </div>
        </div>

        <div className="flex-shrink-0 mb-8 md:mb-0">
          <img src={heroImage} alt="my profile" className="rounded-full w-60 h-60 mb-10 md:w-80 md:h-80 object-cover ml-auto max-w-md" />
        </div>
      </div>
    </Element>
  );
}

export default Home;
