import React from "react";

const Hero2 = () => {
  return (
    <>
      <div className="md:px-36 px-8 md:py-28 py-5">
        <div className="flex lg:flex-row flex-col grid-cols-2 gap-10">
          <div className="flex flex-col gap-5 justify-center p-5">
            <h1 className="text-4xl md:text-4xl font-bold">Explore</h1>
            <h1 className="text-4xl md:text-4xl font-bold">the Wonders in</h1>
            <h1 className="text-4xl md:text-5xl font-bold text-red-500">
              Madhya Pradesh
            </h1>
            <p className="mt-4">
            Explore Madhya Pradesh effortlessly with FlyOla air taxis for quick, convenient travel. Enjoy safe and comfortable journeys to stunning destinations across the state.
            </p>
            <button className=" grid grid-items-center bg-gray-800 text-white px-2 py-3 rounded-lg hover:bg-gray-600 hover:border hover:text-white hover:font-bold mt-4">
              Get started
            </button>
          </div>
          <div className="">
            <img
              src="https://feeds.abplive.com/onecms/images/uploaded-images/2022/10/10/f8650180385e100acabdaacef3d2f3081665364792110369_original.jpg"
              alt="heroimg"
              className="rounded-3xl h-[100%] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero2;
