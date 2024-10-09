import React, { useEffect, useState } from "react"; //remove useContext
import { useParams, useNavigate } from "react-router-dom";
import HeroTour from "./HeroTour";
import TourNav from "../../components/navbar/TourNav";
import { AiFillStar } from "react-icons/ai";
import { initTWE, Ripple, Input } from "tw-elements";
import Datepicker from 'react-datepicker';
import { Stepper } from '@mui/material';
import DaysShow from "../../components/Tour/DaysShow";
import InclusionExclusion from "../../components/Tour/InclusionExclusion";
// import { AuthContext } from "../../context/authContext";
// import Swal from "sweetalert2";
import axios from "axios";
import ToursBook from "./ToursBook";

const TourDetails = () => {
  const { id } = useParams();

  const [allTours, setTour] = useState([]);
  useEffect(() => {
    const getTours = async () => {
      try {
        const response = await axios.get(`/tours/${id}`);
        console.log(response.data.data.oneTour);
        setTour(response.data.data.oneTour);
      } catch (err) {
        console.log(err.message);
      }
    };
    getTours();
    initTWE({ Stepper, initTWE, Ripple, Input, Datepicker });
  }, [id]);

  return (
    <div>
      {/* import upper section */}
      <HeroTour />
      <TourNav />
      {/* details brief */}
      <div className="mx-auto max-w-2xl px-4 py-10 sm:px-4 sm:py-15 lg:max-w-7xl lg:px-8">
        {/* title */}
        <div className="mb-20">
          {/* Title */}
          <p className="text-5xl font-bold ">{allTours.name}</p>
        </div>

        {/* brief */}
        <div className="my-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-8">
          <div>
            <p className="text-3xl font-bold mb-6  text-gray-500">Category</p>
            <p className="text-2xl mb-6">{allTours.category}</p>
          </div>
          <div>
            <p className="text-3xl font-bold mb-6  text-gray-500">Duration</p>
            <p className="text-2xl mb-6">{allTours.duration} days</p>
          </div>
          <div>
            <p className="text-3xl font-bold mb-6  text-gray-500">Ranking</p>
            <div className="flex flex-row mr-2 space-x-2">
              <p className="text-2xl mb-6">{ }</p>
              <AiFillStar className="text-3xl text-yellow-500 " />
            </div>
          </div>
          <div>
            <p className="text-3xl font-bold mb-6  text-gray-500">Group Size</p>
            <p className="text-2xl mb-6">{allTours.groupCount}</p>
          </div>
          <div>
            <p className="text-3xl font-bold mb-6  text-gray-500">Languages</p>
            <p className="text-2xl mb-6">{allTours.languages}</p>
          </div>
        </div>
        {/* image and details brief */}
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
          {/* image left */}
          <div className="">
            <div>
              <img
                src={allTours.img}
                alt={""}
                class="h-auto max-w-full rounded-3xl"
              />
            </div>
            {/* below map */}
            <div className="mt-5 grid grid-cols-2 gap-2">
              {/* left */}
              <div>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/travely-7264c.appspot.com/o/route1.png?alt=media&token=99974a15-ffab-4900-b805-5da493d16d73"
                  alt=""
                />
              </div>
              {/* right */}
              <div className="flex flex-col gap-6 ">
                {/* Download Brochure */}
                <button
                  type="button"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  class="flex items-center rounded-xl bg-black px-6 pb-2 pt-2.5 text-md font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                  <svg
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    class=" h-4 w-4 mr-5"
                  >
                    <path d="M.5 9.9a.5.5 0 01.5.5v2.5a1 1 0 001 1h12a1 1 0 001-1v-2.5a.5.5 0 011 0v2.5a2 2 0 01-2 2H2a2 2 0 01-2-2v-2.5a.5.5 0 01.5-.5z" />
                    <path d="M7.646 11.854a.5.5 0 00.708 0l3-3a.5.5 0 00-.708-.708L8.5 10.293V1.5a.5.5 0 00-1 0v8.793L5.354 8.146a.5.5 0 10-.708.708l3 3z" />
                  </svg>
                  Download Brochure
                </button>

                <button
                  type="button"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  class="flex items-center rounded-xl bg-black px-6 pb-2 pt-2.5 text-md font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                  <svg
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    class=" h-4 w-4 mr-5"
                  >
                    <path d="M16 8A8 8 0 110 8a8 8 0 0116 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 00.25.246h.811a.25.25 0 00.25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 00.241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z" />
                  </svg>
                  Ask A Question
                </button>

                <button
                  type="button"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  class="flex items-center rounded-xl bg-black px-6 pb-2 pt-2.5 text-md font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                  <svg fill="none" viewBox="0 0 16 16" class=" h-4 w-4 mr-5">
                    <path
                      fill="currentColor"
                      d="M2 8a1 1 0 011-1h18a1 1 0 110 2H3a1 1 0 01-1-1zM2 12a1 1 0 011-1h18a1 1 0 110 2H3a1 1 0 01-1-1zM3 15a1 1 0 100 2h12a1 1 0 100-2H3z"
                    />
                  </svg>
                  Check FAQ
                </button>

              </div>
            </div>
          </div>

          {/* details -right*/}
          <div className="shadow-2xl rounded-xl border-dotted border-2 border-red-500 grid grid-cols-1 px-4">
            <div>
              {/* first row */}
              <div className="grid grid-cols-2">
                {/* left col */}
                <div>
                  <p className="text-lg p-2 font-bold ">Starting From</p>
                  <p className="p-3 ml-10 text-red-500  text-5xl">
                    <span className="font-semibold">₹{allTours.price}</span>
                    <span className="text-sm text-black">/Per Person</span>
                  </p>
                </div>
                {/* right col */}
                <div className="flex flex-row-reverse space-x-2 float-right pt-3 ">
                  {/* <p className="text-lg">({reviews.length} Reviews)</p> */}
                  <AiFillStar className="text-2xl text-yellow-500 " />
                  <p className="text-lg mb-6">{ }</p>
                </div>
              </div>

              {/* second row */}
              <div className="flex flex-row pl-10 pt-2 pr-2 space-x-3 mb-4">
                <p className="text-xl font-bold">Cities:</p>
                <p className="text-xl  mb-0   text-red-500">
                  {allTours.cities}
                </p>
              </div>

              {/* third row */}
              <div className="text-xl p-2 grid grid-cols-2">
                <div>
                  <span className="font-bold">Tour ID :</span> T0027
                </div>
                <div>
                  <button
                    type="button"
                    class=" w-full rounded-xl bg-[#FE4D42] px-6 pb-2 pt-2.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  >
                    Customize Your Tour
                  </button>
                </div>
              </div>
            </div>
            {/* booking form */}
             <ToursBook />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-2xl px-4 py-10 sm:px-4 sm:py-15 lg:max-w-7xl lg:px-8">
        <h1 className="text-5xl  mb-11">Description</h1>
        <p className="text-2xl">{allTours.description}</p>
      </div>
      <div className="mx-auto max-w-2xl px-4 py-10 sm:px-4 sm:py-15 lg:max-w-7xl lg:px-8">
        <h1 className="text-5xl  mb-11">Introduction</h1>
        <p className="text-2xl">{allTours.introduction}</p>
      </div>
      {/* stepper */}
      <div className="mx-auto max-w-2xl px-4 py-10 sm:px-4 sm:py-15 lg:max-w-7xl lg:px-8">
        <DaysShow />
      </div>
      {/* inclustion exclution */}
      <div className="mx-auto max-w-2xl px-4 py-10 sm:px-4 sm:py-15 lg:max-w-7xl lg:px-8">
        <InclusionExclusion />
      </div>
    </div>
  );
};

export default TourDetails;
