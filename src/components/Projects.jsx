import React,{ useState } from 'react';

const Projects = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

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

    const handleNext = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % projects.length);
    };
    
    const handlePrev = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + projects.length) % projects.length);
    };
    
  return (
    <div>
      <div name="projects" className="m-10 mx-auto p-16 sm:p-24 lg:p-48 bg-gray-100">
        <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline text-text_color">Projects</p>
        <p className="py-6 text-text_color">Check out my work here</p>
        <div className="relative rounded-lg block md:flex items-center bg-gray-100 shadow-xl" style={{ minHeight: '22rem' }}>
          <div key={projects[currentSlide].id} className="relative w-full md:w-2/5 h-full overflow-hidden rounded-t-lg md:rounded-t-none md:rounded-l-lg" style={{ minHeight: '22rem' }}>
            <div className="absolute inset-0 w-full h-full bg-fromColor opacity-75"></div>
            <div className="absolute inset-0 w-full h-full flex items-center justify-center fill-current text-white text-3xl">
            {projects[currentSlide].name}
            </div>
          </div>
          <div className="w-full md:w-3/5 h-full flex items-center bg-gray-100 rounded-lg">
            <div className="p-12 md:pr-24 md:pl-16 md:py-12">
            <ul className = "list-disc">
              <li className="text-gray-600">{projects[currentSlide].desc1}</li>
              <li className="text-gray-600">{projects[currentSlide].desc2}</li>
              {projects[currentSlide].desc3 && <li className="text-gray-600">{projects[currentSlide].desc3}</li>}
            </ul>
              <a className="flex items-baseline mt-3 text-fromColor hover:text-fromColor focus:text-fromColor" href={projects[currentSlide].link} target="_blank" rel="noreferrer">
                <span>Github</span>
                <span className="text-xs ml-1">&#x279c;</span>
              </a>
            </div>
            <svg className="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-gray-100 -ml-12" viewBox="0 0 100 100" preserveAspectRatio="none">
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>
          </div>

          <button
            onClick={handlePrev}
            className="absolute top-0 mt-32 left-0 bg-white rounded-full shadow-md h-12 w-12 text-2xl text-fromColor hover:text-toColor focus:text-toColor -ml-6 focus:outline-none focus:shadow-outline">
            <span className="block" style={{ transform: 'scale(-1)' }}>
              &#x279c;
            </span>
          </button>
          <button
            onClick={handleNext}
            className="absolute top-0 mt-32 right-0 bg-white rounded-full shadow-md h-12 w-12 text-2xl text-fromColor hover:text-toColor focus:text-toColor -mr-6 focus:outline-none focus:shadow-outline">
            <span className="block">&#x279c;</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Projects;
