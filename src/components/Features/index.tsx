import React from 'react';

const Features = () => {
  return (
    <div className="py-20">
      <div className="px-4 mx-auto max-w-7xl">
        <h2 className="sr-only">A better way to send money.</h2>
        <dl className="space-y-10 text-center lg:grid lg:grid-cols-4 lg:gap-8 lg:space-y-0">
          <div>
            <dt>
              <p className="mt-5 mb-4 text-xl font-medium leading-6 text-gray-800">
                EDUCATION
              </p>
              <div className="mb-4 w-42 h-42">
                <img
                  className="mx-auto"
                  src="assets/images/education-icon.png"
                  alt="icon"
                />
              </div>
            </dt>
            <dd className="mt-2 text-base text-gray-700">
              Your first step begins here. Learn the right investing strategies
              so you can embark on your stock market journey.
            </dd>
          </div>
          <div>
            <dt>
              <p className="mt-5 mb-4 text-xl font-medium leading-6 text-gray-800">
                VIRTUAL TRADING
              </p>
              <div className="mb-4 w-42 h-42">
                <img
                  className="mx-auto"
                  src="assets/images/virtual-icon.png"
                  alt="icon"
                />
              </div>
            </dt>
            <dd className="mt-2 text-base text-gray-700">
              Experience the stock market without risking money. Improve your
              trading skills and practice in our platform.
            </dd>
          </div>
          <div>
            <dt>
              <p className="mt-5 mb-4 text-xl font-medium leading-6 text-gray-800">
                ANALYTIC TOOLS
              </p>
              <div className="mb-4 w-42 h-42">
                <img
                  className="mx-auto"
                  src="assets/images/tools-icon.png"
                  alt="icon"
                />
              </div>
            </dt>
            <dd className="mt-2 text-base text-gray-700">
              Be a more effective and efficient investor with our powerful tools
              built to make your life easier.
            </dd>
          </div>

          <div>
            <dt>
              <p className="mt-5 mb-4 text-xl font-medium leading-6 text-gray-800">
                COMMUNITY
              </p>
              <div className="mb-4 w-42 h-42">
                <img
                  className="mx-auto"
                  src="assets/images/community-icon.png"
                  alt="icon"
                />
              </div>
            </dt>
            <dd className="mt-2 text-base text-gray-700">
              Collaborate with your fellow stock market enthusiasts and win in
              the stock market together.
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default Features;
