import React from 'react';

const Download = () => {
  return (
    <div className="overflow-hidden py-20 bg-no-repeat bg-download-bg">
      <div className="relative px-4 mx-auto max-w-xl lg:max-w-7xl">
        <div className="relative lg:grid lg:grid-cols-2 lg:gap-8 ">
          <div className="relative lg:pt-20">
            <h3 className="mb-8 text-4xl font-bold tracking-tight text-gray-900">
              Download the app
            </h3>
            <p className="mt-3 mb-6 max-w-md text-lg font-semibold text-gray-800">
              Get the Investagrams app on your mobile phone. It&apos;s easy.
              Just click here to download.
            </p>
            <div className="flex flex-col gap-4 items-center lg:flex-row">
              <img
                className="max-w-[250px]"
                src="assets/images/play-store.png"
                alt=""
              />
              <img
                className="max-w-[250px]"
                src="assets/images/app-store.png"
                alt=""
              />
              <img
                className="max-w-[250px]"
                src="assets/images/huawei-icon.png"
                alt=""
              />
            </div>
          </div>
          <div className="relative -mx-4 mt-10 lg:mt-0" aria-hidden="true">
            <img
              className="relative mx-auto"
              width="490"
              src="/assets/images/phones.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
