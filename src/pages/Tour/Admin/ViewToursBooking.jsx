import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ViewToursBooking = () => {
    const [getBookTour, setBookTour] = useState([]);

    useEffect(() => {
        const getAllBookTours = async () => {
            console.log('Hare');
            const res = await axios.put("tours/tourReservations");
            console.log(res.data);
            setBookTour(res.data);
        }
        getAllBookTours();
    }, [])

    return (
        <div className="p-4 bg-gray-50 min-h-screen">
            <h1 className="text-2xl font-bold text-center mb-8 text-red-500">
                View Tours Booking
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    getBookTour.map((items, index) => {
                        return (
                            <div 
                                key={index}
                                className="bg-gray-100 hover:bg-red-500 shadow-md rounded-lg p-6 transition-transform transform hover:scale-105 hover:from-red-700 hover:to-red-900"
                            >
                                <ul className="space-y-2 text-black hover:text-white transition-colors">
                                    <li><span className="font-semibold">User:</span> {items.currentUser}</li>
                                    <li><span className="font-semibold">First Name:</span> {items.firstName}</li>
                                    <li><span className="font-semibold">Last Name:</span> {items.lastName}</li>
                                    <li><span className="font-semibold">Date:</span> {items.date}</li>
                                    <li><span className="font-semibold">Phone:</span> {items.phone}</li>
                                    <li><span className="font-semibold">Guest Count:</span> {items.guestCount}</li>
                                </ul>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default ViewToursBooking;
