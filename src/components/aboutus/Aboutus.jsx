import React from "react";

const Aboutus = () => {
  return (
    <>
      <div className="lg:px-36 md:py-5 px-5">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap items-center justify-between">
            <div className="w-full lg:w-6/12">
              <div className="-mx-3 flex items-center sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4">
                    <img
                      src="https://www.mptourism.com/web/image/catalog/Blog%20Image/RamGhat-Ujjain.jpg"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                  <div className="py-3 sm:py-4">
                    <img
                      src="https://thumbs.dreamstime.com/blog/2022/12/hello-86147-image56209946.jpg"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 my-4">
                    <img
                      src="https://banjarakanpuriya.com/wp-content/uploads/2024/01/pachmarhi-waterfalls.png"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0">
                <span className="text-red-500 mb-2 block text-lg font-semibold">
                  Why Choose Us
                </span>
                <h2 className="text-dark mb-8 text-3xl font-bold sm:text-4xl">
                Must-Visit Destinations in Madhya Pradesh
                </h2>
                <p className="text-body-color mb-8 text-base">
                Ujjain, a historic city in Madhya Pradesh, India, is one of the seven sacred cities in Hinduism. It is renowned for the Mahakaleshwar Temple.
                </p>
                <p className="text-body-color mb-12 text-base">
                Ujjain also boasts a rich cultural heritage, with ancient astronomical sites like the Vedh Shala, constructed by Raja Jai Singh for celestial observations..
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutus;
