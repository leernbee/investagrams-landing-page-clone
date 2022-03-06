import React from 'react';

const Cta = () => {
  return (
    <div className="bg-curious-blue-500">
      <div className="py-20 px-4 mx-auto max-w-7xl text-center sm:px-6 lg:px-8">
        <h2 className="text-4xl font-medium tracking-tight text-white">
          <span className="block">
            Don&apos;t Miss This Life Changing Opportunity
          </span>
        </h2>
        <div className="flex justify-center mt-8">
          <div className="inline-flex rounded-md shadow">
            <a
              href="#"
              className="inline-flex justify-center items-center py-3 px-8 text-base font-medium text-white bg-transparent rounded-md border-2 border-white"
            >
              Start Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
