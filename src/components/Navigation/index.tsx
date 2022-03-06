import React from 'react';

const Navigation = () => {
  return (
    <header className="bg-white">
      <nav className="px-4 mx-auto max-w-7xl" aria-label="Top">
        <div className="flex justify-between items-center py-3 w-full lg:py-5 lg:border-none">
          <div className="flex items-center">
            <a href="#">
              <span className="sr-only">Workflow</span>
              <img
                className="w-auto h-10"
                src="assets/images/app_icon.png"
                alt=""
              />
            </a>
          </div>
          <div className="ml-10 space-x-4">
            <a
              href="#"
              className="inline-block py-2 px-6 text-base font-medium text-curious-blue-500 bg-white rounded-md border-2 border-curious-blue-500 hover:border-curious-blue-600"
            >
              Log In
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
