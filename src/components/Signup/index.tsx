import React from 'react';

const Signup = () => {
  return (
    <div className="py-20 bg-center bg-cover bg-signup-bg">
      <div className="px-4 mx-auto max-w-7xl">
        <h2 className="mb-12 tracking-tight text-white">
          <span className="block mb-4 text-5xl font-semibold">
            Your stock market journey begins here.
          </span>
          <span className="block max-w-2xl text-xl font-normal">
            The stock market changed our lives, it&apos;s time to change yours.
            Don&apos;t worry — we&apos;ll guide you on each step of the way.
          </span>
        </h2>

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
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Signup;
