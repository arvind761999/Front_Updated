import React from "react";
import SearchBar from "./SearchBar";

const image = {
  backgroundImage:
    "url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/50/26/f1/boating-area.jpg?w=1200&h=1200&s=1')",
  height: "500px",
  backgroundPosition: "50%",
};

const HeroTour = () => {
  return (
    // <!-- Container for demo purpose -->
    <div>
      <div className="">
        <div
          class="relative overflow-hidden bg-no-repeat bg-cover "
          style={image}
        >
          <div class="flex h-full items-center justify-center text-center">
            <div>
              <h2
                class="mb-5  text-6xl font-bold text-black "
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "bolder",
                }}
              >
                Do More With Lucky
              </h2>
              <div>
              <div className="mt-12 w-1/2 mr-auto ml-auto">
                  <h4
                    class="mt-5 mb-6 text-xl uppercase text-center"
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: "600",
                      border: "solid 2px white",
                      borderRadius: "10px",
                      padding: "10px",
                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                      color: "#ff5252",
                      textShadow: "3px 3px 0 #000, 6px 6px 5px rgba(0,0,0,0.2)",
                      letterSpacing: "2px",
                      lineHeight: "1.4",
                    }}
                  >
                    An Island Awaits You <br />
                    Discover Madhya Pradesh
                  </h4>

                </div>
              </div>
              <SearchBar />
            </div>
          </div>
        </div>
      </div>
    </div>
    // <!-- Container for demo purpose -->
  );
};

export default HeroTour;
