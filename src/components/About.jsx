import React from "react";

const About = () => {
  return (
    <div className="bg-backgroundColor text-white min-h-screen flex flex-col items-center py-12">
      {/* Header Section */}
      <div className="text-center max-w-3xl">
        <h1 className="text-6xl font-bold mb-6">About Me</h1>
        <p className="text-xl text-gray-300">
         This is a E-Commerce website developed by Palash Tinkhede
        </p>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto mt-12 px-6">
        <div className="grid md:grid-cols-2 gap-12 ">
          {/* Image */}
         

          {/* Content */}
          <div className="space-y-6 align-middle justify-center">
            <h2 className="text-5xl font-bold">Key Features</h2>
            
            <p className="text-gray-300 text-xl">
              1. Robust e-commerce application using MERN stack
              </p>
            <p className="text-gray-300 text-xl">
              2. Incorporating secure authentication
              </p>
            <p className="text-gray-300 text-xl">
              3. password hashing, and    
              responsive user-centric design
              </p>
            <p className="text-gray-300 text-xl">
              4. incorporating secure authentication
              </p>
           

            <h3 className="text-xl font-semibold">Features</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Frontend Development: React, Tailwind CSS, Next.js</li>
              <li>Backend Development: Node.js, Express.js</li>
              <li>UI/UX Design: Figma, Adobe XD</li>
              <li>Version Control: Git, GitHub</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="mt-12 text-center">
        <p className="text-gray-400">
          Feel free to reach out to me for collaborations, job opportunities, or just to say hi!
        </p>
        <a href="https://portfolio-eta-two-33.vercel.app/"><button className="mt-6 px-6 py-2 bg-indigo-600  hover:bg-indigo-500 text-white font-semibold rounded-lg" >
          Protfolio Website
        </button></a>
      </div>
    </div>
  );
};

export default About;
