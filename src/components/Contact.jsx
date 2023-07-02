import React from 'react'

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black p-4 text-white"
    >
      <div className="flex flex-col p-4 max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
        <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Contact
          </p>
          <p className="py-6">Complete the form provided below to contact me.</p>
        </div>
        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/3695b5e3-0f1d-4f79-a7d7-79cdda5a2814"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              autoComplete="off"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              autoComplete="off"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              autoComplete="off"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's Talk
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact;