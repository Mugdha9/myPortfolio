import React from 'react';
import lbms from "../assets/portfolio/lbms.png";
import proj_mgmt from "../assets/portfolio/proj_mgmt.png";
import tic_tac_toe from "../assets/portfolio/tic_tac_toe.png";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";

const Portfolio = () => {
    const portfolios = [
        {
            id: 1,
            src: lbms,
            link: "https://github.com/Mugdha9/Library-Management-System"
        },
        {
            id: 2,
            src: proj_mgmt
        },
        {
            id: 3,
            src: tic_tac_toe
        },
        {
            id: 4,
            src: reactParallax
        },
        {
            id: 5,
            src: reactSmooth
        },
        {
            id: 6,
            src: reactWeather
        }
    ]

    function handleButtonClick(link){
        window.open(link, "_blank");
    }

  return (
    <div name="portfolio" className="bg-bgColor w-full md:h-screen mt-20 mb-8">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500 mt-20">Projects</p>
            <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            {portfolios.map(({id,src,link}) => (
                
                <div key = {id} className="shadow-md shadow-gray-600 rounded-lg">
                    <img src={src} alt="" className="rounded-md duration-200 hover:scale-105"/>
                    <div className="flex items-center justify-start">
                        <button onClick={() => handleButtonClick(link)} className="py-3 ml-5 duration-200 hover:scale-105 text-left">Code</button>
                    </div>
                </div>
            ))}
        </div>

      </div>
    </div>
  )
}

export default Portfolio
