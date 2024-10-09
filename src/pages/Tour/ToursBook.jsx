import React, { useState , useContext, useEffect} from 'react';
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/authContext";
import { initTWE , Ripple, Input } from "tw-elements";
import axios from "axios"; 
import { Stepper } from '@mui/material';
import Datepicker from 'react-datepicker';


const ToursBook = () => {
    
    const { id } = useParams();

    const [firstName, setFname] = useState("");
    const [lastName, setLname] = useState("");
    const [date, setDate] = useState("");
    const [phone, setPhone] = useState(0);
    const [guestCount, setGuests] = useState("");
    // const [isSigned, setSigned] = useState(true);
    const navigate = useNavigate();

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
  },[]);

     //get email of current user
  const { user } = useContext(AuthContext);
  const currentUser = user.email;
//   console.log(currentUser);
//   console.log("Arvind");

    const inputHandler = async (e) => {
        e.preventDefault();
        if (
          firstName === "" ||
          lastName === "" ||
          date === "" ||
          phone === "" ||
          guestCount === ""
        ) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "missing required fields!",
          });
          return;
        }
    
        if (phone.length !== 10) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "enter valid mobile number",
          });
          return;
        }
    
        if (guestCount > allTours.groupCount) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `This tour can have maximum of ${allTours.groupCount} members`,
          });
          return;
        }
        const tourReservation = {
          currentUser,
          firstName,
          lastName,
          date,
          phone,
          guestCount,
        };
    
        try {
          const result = await Swal.fire({
            title: "Do you want to Book this tour?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Book",
            denyButtonText: `Don't Book`,
          });
    
          if (result.isConfirmed) {
            const response = await axios.post(
              "tourReservations",
              tourReservation
            );
            Swal.fire(response.data.message, "", "success");
            navigate('/veiwToursBooking')
          } else if (result.isDenied) {
            Swal.fire("Tour Booking Cancelled", "", "error");
          }
        } catch (err) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: err.message,
          });
        }
        //  setSigned(false);
         console.log("Hare Krishna!");
        //  console.log({isSigned});
      };
       

  return (
    <div className="px-4 mb-6 mt-2">
    <p className="text-3xl mb-10 text-center">Booking Details</p>
    <div className="flex justify-center items-center">
      <div class=" block max-w-md rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
        <form>
          <div class="grid grid-cols-2 gap-4">
            <div class="relative mb-6" data-te-input-wrapper-init>
              <label
                for="firstName"
                class="block mb-2 text-sm font-medium text-gray-700"
              >
                First Name
              </label>
              <input
                type="text"
                class="peer block w-full rounded-lg border border-gray-300 bg-white p-3 leading-[1.6] outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500 transition-all ease-linear text-gray-900"
                id="firstName"
                placeholder="Enter First Name"
                onChange={(e) => setFname(e.target.value)}
              />
            </div>

            <div class="relative mb-6" data-te-input-wrapper-init>
              <label
                for="lastName"
                class="block mb-2 text-sm font-medium text-gray-700"
              >
                Last Name
              </label>
              <input
                type="text"
                class="peer block w-full rounded-lg border border-gray-300 bg-white p-3 leading-[1.6] outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500 transition-all ease-linear text-gray-900"
                id="lastName"
                placeholder="Enter Last Name"
                onChange={(e) => setLname(e.target.value)}
              />
            </div>
          </div>

          <div class="relative mb-6" data-te-input-wrapper-init>
            <label
              for="date"
              class="block mb-2 text-sm font-medium text-gray-700"
            >
              Select a Date
            </label>
            <input
              type="date"
              id="date"
              min={new Date().toISOString().split("T")[0]}
              class="block w-full rounded-lg border border-gray-300 bg-white p-3 leading-[1.6] outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500 transition-all ease-linear text-gray-900"
              placeholder="Select a date"
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div class="relative mb-6" data-te-input-wrapper-init>
              <label
                for="phone"
                class="block mb-2 text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="tel"
                class="block w-full rounded-lg border border-gray-300 bg-white p-3 leading-[1.6] outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500 transition-all ease-linear text-gray-900"
                id="phone"
                placeholder="Enter Phone Number"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div class="relative mb-6" data-te-input-wrapper-init>
              <label
                for="countGuest"
                class="block mb-2 text-sm font-medium text-gray-700"
              >
                No of Guests
              </label>
              <input
                type="number"
                class="block w-full rounded-lg border border-gray-300 bg-white p-3 leading-[1.6] outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500 transition-all ease-linear text-gray-900"
                id="countGuest"
                placeholder="Enter Number of Guests"
                onChange={(e) => setGuests(e.target.value)}
              />
            </div>
          </div>

          <button
            type="submit"
            class="inline-block w-full rounded-lg bg-red-500 px-6 py-3 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(59,113,202,0.3)] transition duration-150 ease-in-out hover:bg-red-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-red-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-red-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
            // onClick={() => {
            //   if (isSigned) {
            //     inputHandler();
            //   } else {
            //     bookHandler();
            //   }
            // }}
            onClick={inputHandler}
          >
            Book Now
          </button>
        </form>

      </div>
    </div>
  </div>
  )
}

export default ToursBook