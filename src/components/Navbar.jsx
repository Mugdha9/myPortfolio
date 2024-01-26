import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';


const Navbar = () => {
    const [nav, setNav] = useState(false);
    const links = [
        {
            id: 1,
            link: 'home',
        },
        {
            id: 2,
            link: 'experience',
        },
        {
            id: 3,
            link: 'education',
        },
        {
            id: 4,
            link: 'projects',
        },
        {
            id: 5,
            link: 'skills',
        },
        {
            id: 6,
            link: 'contact',
        },
    ];

    return (
        <div className="flex justify-between items-center h-20 px-4 text-text_color fixed w-full top-0 z-50 bg-bgColor">
            
            <ul className="hidden md:flex ml-auto">
                {links.map(({ id, link,to }) => (
                    <li
                        key={id}
                        className={`px-4 cursor-pointer capitalize font-medium text-lg hover:scale-105 duration-200 rounded-md w-full mr-2`}
                    >
                        <Link to={link} smooth duration={500} offset={-80}>{link}</Link>
                    </li>   
                ))}
            </ul>

            <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 md:hidden ml-auto">
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {nav &&
                (<ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-bgColor text-black">
                    {links.map(({ id, link }) => (
                        <li
                            key={id}
                            className="px-4 cursor-pointer capitalize py-6 text-4xl"
                        >
                            <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
                        </li>
                    ))}
                </ul>)
            }
        </div>
    );
}

export default Navbar;
