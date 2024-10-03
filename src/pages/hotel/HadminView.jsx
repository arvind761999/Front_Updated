import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";

const HadminView = () => {

    const { state } = useLocation();

    //   console.log(state._id);

    const [data, setData] = useState([]);

    const id = state?.data?._id || null;
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`/hotels/find/${id}`)
            .then((response) => {
                setData(response.data);
                // console.log(data.HotelImg);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    const hotelDelete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete this hotel!",
        }).then((result) => {
            if (result.isConfirmed) {
                axios
                    .delete(`/hotels/${state._id}`)
                    .then((res) => {
                        Swal.fire("Deleted!", res.data.status, "success");
                        navigate("/hotels");
                    })
                    .catch((err) => {
                        Swal.fire("Not Deleted!", err.message, "error");
                    });
            }
        })
    }




    return (
        <div>
            <div className="lg:p-24 ">
                <h1 className="ml-18 md:ml-20 lg:ml-20 text-center lg:text-left py-5 font-bold text-3xl">
                    <p>Name: {state?.name || "No Name Available"}</p>
                    <p>Type: {data?.type || "No Type Available"}</p>
                </h1>
                <div className="flex justify-center items-center w-full flex-col lg:flex-row pt-12 lg:pt-0">
                    <img
                        src={`${process.env.REACT_APP_API_URL}/api/hotels/images/${state?.HotelImg || "default-image-url.jpg"}`}
                        alt="Hotel"
                        className="w-[320px] md:w-[700px] lg:w-[800px] rounded-lg mb-10"
                    />

                    <div className="lg:px-24">


                        <div className="flex flex-col md:flex-col">
                            <Link to={`/rooms/new/${id}`}>
                                <button className="bg-[#1E90FF] text-white rounded-md font-bold p-3 my-2 md:my-0 md:mx-2 lg:w-[300px] ">
                                    Add Room
                                </button>
                            </Link>
                            <div className="mb-5"></div>
                            <Link to={state?._id ? `/hotels/update/${state._id}` : '/hotels'}>
                                <button className="bg-[#474747] text-white rounded-md font-bold p-3 my-2 md:my-0 md:mx-2 lg:w-[300px]">
                                    Update
                                </button>
                            </Link>

                            <div className="mb-5"></div>
                            <button className="bg-[#FE4D42] text-white rounded-md font-bold p-3 my-2 md:my-0 md:mx-2 lg:w-[300px]" onClick={hotelDelete}>
                                Delete
                            </button>
                        </div>
                        <h1 className="text-center md:text-left py-5 font-bold text-1.5xl">
                            {state?.title || 'Default Title'}  {/* Fallback title */}
                        </h1>
                        <p className="max-w-[320px] md:max-w-[700px] lg:max-w-[600px] text-justify">
                            {state?.description || 'No description is Available'}
                        </p>
                        <div className="flex items-center">
                            <h1 className="font-bold py-5">City : </h1>
                            <h1 className="px-4">{state?.city || 'No city is Available'}</h1>
                        </div>


                        <div className="flex flex-col md:flex-row py-4">
                            <h1 className="text-[#636363]">
                                {" "}
                                Excellent location – {state?.distance || 'Can not say about of distance'}Km from {state?.city || "can not say"}
                            </h1>
                        </div>

                        <div className="flex"></div>

                        <div className="flex flex-col md:flex-row  py-4 justify-between lg:items-center">
                            <div className="flex items-center">
                                <h1 className="font-bold text-2xl">
                                    Book a stay over Rs.{state?.cheapestPrice || "Can not say!"}
                                </h1>
                                <h1 className="ml-3 md:text-1xl">/per day</h1>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
            <h1 className="text-center lg:text-left py-5 font-bold text-2xl ml-10">
                Images of hotel
            </h1>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 mb-10">
                {state?.HotelImgs && Array.isArray(state.HotelImgs) &&
                    state.HotelImgs.map((image, index) => (
                        <img
                            src={`${process.env.REACT_APP_API_URL}/api/hotels/images/${image}`}
                            alt=""
                            key={index}
                            className="ml-10 w-64 h-64 rounded-lg mb-2"
                        />
                    ))
                }



            </div>

            <h1 className="text-center lg:text-left py-5 font-bold text-2xl ml-10">
                Certificates of {state?.name || 'Unknown'} hotel
            </h1>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 mb-10">
                {state?.certificates && Array.isArray(state.certificates) &&
                    state.certificates.map((image, index) => (
                        <img
                            src={`${process.env.REACT_APP_API_URL}/api/hotels/images/${image}`}
                            alt=""
                            key={index}
                            className="ml-10 w-64 h-64 rounded-lg mb-2"
                        />
                    ))
                }


            </div>


        </div>
    );
};

export default HadminView;
