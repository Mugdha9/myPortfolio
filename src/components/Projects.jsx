import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
    const settings =  {
        dots: true,
        infinite: true,
        speed: 100,
        slidesToShow: 1, // Show three cards at once
        slidesToScroll: 1
    };

    const projects = [
        {
            id: 1,
            name: "Davisbase",
            link: "https://github.com/Mugdha9/DavisBase",
            desc1: "A command line-based database management engine that is based on file-per-table variation in the SQLite file format. Each database table and index are stored as a separate file, which is divided into fixed size pages",
            desc2: "Implemented SQL commands such as Create, Insert, Select, Where, Delete, Drop, Show and Update along with Primary Key, Not Null and Unique constraints",
            desc3: "Physical storage is managed by the implementation of B trees where each node of the B Tree is a page of the file"
        },
        {
            id: 2,
            name: "Library Management System",
            link: "https://github.com/Mugdha9/Library-Management-System",
            desc1: "Developed a Django-based database host application with MySQL backend, featuring a user-friendly GUI.",
            desc2: "Implemented advanced search functionality, allowing users to search books by ISBN, title, or author using substring matching",
            desc3: "Designed features for book management, including check-in/out, fine payments, history tracking, and borrower management, catering specifically to librarian needs",
            desc4: "Performed data parsing, cleaning, and normalization on provided datasets to enhance application functionality"
        },
        {
            id: 3,
            name: "Tic Tac Toe",
            link: "https://github.com/Mugdha9/Tic-Tac-Toe---React",
            desc1: "A web-based tic tac toe game using React framework which maintains users’ scores and logs of moves that they have played",
            desc2: "Has additional features like saving users’ names and giving out appropriate messages",
        },
        {
            id: 4,
            name: "Mitra",
            link: "https://github.com/Mugdha9/Mitra",
            desc1: "Successfully designed and developed ‘Mitra’, a web application using Django that served as a comprehensive mental health platform, offering self-assessment tools and virtual therapies to support users’ well-being",
            desc2: "Developed a RASA chatbot for user assistance and crafted visual tracking tools for user self-improvement",
            desc3: "Used SQL Server to build a database, perform CRUD operations and data transfer from front-end to back-end"
        },
        {
            id: 5,
            name: "Notifier",
            link: "https://github.com/Mugdha9/NotifierWebApp",
            desc1: "Developed a comprehensive notifir application using Java, JSP, Servlets, MySQL, and Maven",
            desc2: "The application boasted an array of features, including task creation, subtask management, status updates (pending, completed, or overdue), and the ability to set reminders",
            desc3: "The user-friendly interface facilitated easy task management, allowing users to efficiently create, modify, and track tasks seamlessly"
        },
    ];

    const handleKnowMore = (link) => {
        window.open(link, '_blank');
      };

    return (
        <div name="projects" className="bg-bgColor py-16 text-text_color">
            <div className="container mx-auto max-w-screen-lg p-4 flex flex-col w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500 mt-10">Projects</p>
                    <p className="py-6">Check out some of my work right here</p>
                </div>

                <div className="mt-1">
                    <Slider {...settings} className="max-w-4xl mx-auto">
                        {projects.map(({ id,name,link,desc1,desc2,desc3,desc4 }) => (
                            <div key={id} className="bg-bgColor rounded-lg p-8 shadow-md">
                                <div className="bg-bgColor h-[300px] md:h-[450px] text-black rounded-xl">
                                    <div className="flex flex-col items-center gap-4 p-4">
                                        <p className="text-xl font-semibold text-center mt-5 mb-8">{name}</p>
                                        {desc1?.trim() && <p className="text-gray-800">{desc1}</p>}
                                        <p className="text-gray-800">{desc2}</p>
                                        <p className="text-gray-800">{desc3}</p>
                                        {desc4?.trim() && <p className="text-gray-800">{desc4}</p>}
                                        <div className="flex justify-center">
                                            <button className="bg-gradient-to-r from-fromColor to-toColor text-white text-lg px-6 py-1 rounded-xl text-center" onClick={() => handleKnowMore(link)}>Know more</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Projects;
