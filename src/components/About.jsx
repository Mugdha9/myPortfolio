import React from 'react';
import aboutImage from '../assets/aboutImage.jpg';

const About = () => {
  return (
    <div name="about" className="bg-bgColor text-text_color min-h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full min-h-full">
        <div className="pb-8 w-full md:w-1/2">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>
        <div className="flex flex-col md:flex-row w-full mt-8">
        <div className="w-full md:w-1/2">
            <img src={aboutImage} alt="my profile" className="rounded-md w-full h-auto md:h-full object-cover mr-auto max-w-md" style={{ maxHeight: '50%' }} />
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim culpa, perferendis exercitationem magnam voluptatem consequatur aut accusamus nobis molestiae similique at. Perspiciatis necessitatibus aperiam repudiandae veritatis accusantium. Earum, corporis? Officiis in labore dolores iure fugiat vero illum qui sit repellendus iusto rerum voluptatem, aspernatur fugit consequuntur repellat blanditiis aliquid reprehenderit.
            </p>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
