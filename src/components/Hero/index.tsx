import React from 'react';

const Hero = () => {
  return (
    <div className="py-24 bg-hero-bg">
      <div className="px-4 mx-auto max-w-7xl sm:text-center lg:text-left ">
        <h1 className="text-5xl font-bold tracking-tight text-gray-700">
          The Stock Market Made Easier
        </h1>
        <p className="mt-3 text-base text-gray-700 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
          EVERYTHING YOU NEED TO GO FROM START TO PROFITS.
        </p>
        <div className="mt-5 sm:flex sm:justify-center sm:mt-8 lg:justify-start">
          <a
            href="#"
            className="inline-flex gap-3 items-center py-3 px-8 text-base font-medium text-white bg-curious-blue-500  rounded-full md:py-4 md:px-12 md:text-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            Get started
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
