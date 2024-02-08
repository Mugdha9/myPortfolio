import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className="mx-auto p-16 sm:p-24 lg:p-48 bg-gray-100">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-text_color">Contact</p>
            <p className="py-6 text-text_color">Submit the form below to get in touch with me</p>
        </div>

        <div className="flex justify-center items-center">
            <form action="https://getform.io/f/3c24b085-13e6-4327-a281-3a9248211c75" method="POST" className="flex flex-col w-full md:w-1/2">
                <input type="text"
                    name="name" 
                    placeholder="Enter your name" 
                    className="p-2 bg-transparent border-2 rounded-md text-black focus:outline-none"/>
                <input type="text"
                    name="email" 
                    placeholder="Enter your email" 
                    className="my-4 p-2 bg-transparent border-2 rounded-md text-black focus:outline-none"/>

                <textarea
                name="message"
                placeholder="Enter your message"
                rows="10"
                className="p-2 bg-transparent border-2 rounded-md text-black focus:outline-none">
                </textarea>

                <button className="text-black w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-fromColor to-toColor hover:scale-105 duration-200 mb-5">
                    Let's talk!
                </button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
