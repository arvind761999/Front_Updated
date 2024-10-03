import React, { useContext } from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Userlist from "../pages/Userlist";
import Admin from "../pages/Admin";
import Home from "../pages/Home";
import { AuthContext } from "../context/authContext";
import ResetPassword from "../pages/ResetPassword";
import {
  userColumns,
  hotelColumns,
  tourColumns,
  tourReservationColumns,
  trainColumns,
  vehicleColumns,
  vehicleReservationColumns,

} from "../components/datatable/datatablesource";


import Hotellist from "../pages/Hotellist";
import Tourlist from "../pages/Tourlist";
import Tourreservations from "../pages/Tourreservations";
import Trainlist from "../pages/Trainlist";
import Vehiclelist from "../pages/Vehiclelist";
import Vehiclereservation from "../pages/Vehiclereservation";
import UserpageA from "../pages/UserpageA";
import UpdateuserA from "../pages/UpdateuserA";
import Profile from "../pages/Profile";
import Profileupdate from "../pages/Profileupdate";
import Adduser from "../pages/Adduser";


import VehicleHome from "../pages/vehicle/VehicleHome";
import VehicleBook from "../pages/vehicle/VehicleBook";
import VehiclePayment from "../pages/vehicle/VehiclePayment";
import AddVehicle from "../pages/vehicle/AddVehicle";
import EditVehicle from "../pages/vehicle/EditVehicle";
import VehicleView from "../pages/vehicle/VehicleView";

import ToursHome from "../pages/Tour/ToursHome";
import TourDetails from "../pages/Tour/TourDetails";
import SearchResults from "../pages/Tour/SearchResults";
import AddTourPackage from "../pages/Tour/Admin/AddTourPackage";
import ToursView from "../pages/Tour/Admin/ToursView";
import UpdateAddedTours from "../pages/Tour/Admin/UpdateAddedTours";

import AllTourCategories from "../components/Tour/AllTourCategories";


import ContactUs from "../pages/ContactUs";
import ActivityForm from "../pages/special_activity/ActivityForm";
import PendingActivities from "../pages/special_activity/PendingActivities";
import PendingReservationsPage from "../pages/special_activity/PendingReservations";
import FilterActivities from "../pages/special_activity/FilterActivities";
import Activity from "../pages/special_activity/Activity";
import MyActivities from "../pages/special_activity/MyActivities";
import ReservationPage from "../pages/special_activity/Reservations";

import TrainBook from "../pages/train/TrainBook";
import AddNewTrain from "../pages/train/AddNewTrain";
import TrainHomeAdmmin from "../pages/train/TrainHomeAdmin";
import SingleTrainView from "../pages/train/SingleTrainView";
import AddPassengerDetails from "../pages/train/AddPassengerDetails";
import DoUpdateTrain from "../pages/train/DoUpdateTrain";
import TravelerHome from "../pages/train/TravelerHome";
import ReviewTickets from "../pages/train/ReviewTickets";
import ReviewPanel from "../pages/train/ReviewPanel";
import MyTickets from "../pages/train/MyTickets";
import MyOneTicket from "../pages/train/MyOneTicket";
import RestaurentForm from "../pages/Restaturant/RestaurantForm";


const RouteTour = () => {
  const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    if (!user) {
      return <Navigate to="/login" />;
    }
    return children;

  };

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <Admin />
          </ProtectedRoute>
        }
      />
      <Route path="/register" element={<Register />} />

      <Route
        path="/users"
        element={
          <ProtectedRoute>
            <Userlist columns={userColumns} />
          </ProtectedRoute>
        }
      />

      <Route
        path="/hotels"
        element={
          <ProtectedRoute>
            <Hotellist columns={hotelColumns} />
          </ProtectedRoute>
        }
      />
      <Route
        path="/tours"
        element={
          <ProtectedRoute>
            <Tourlist columns={tourColumns} />
          </ProtectedRoute>
        }
      />
      <Route
        path="/tourreservation/all"
        element={
          <ProtectedRoute>
            <Tourreservations columns={tourReservationColumns} />
          </ProtectedRoute>
        }
      />
      <Route
        path="/train"
        element={
          <ProtectedRoute>
            <Trainlist columns={trainColumns} />
          </ProtectedRoute>
        }
      />
      <Route
        path="/vehicle"
        element={
          <ProtectedRoute>
            <Vehiclelist columns={vehicleColumns} />
          </ProtectedRoute>
        }
      />
      <Route
        path="/vehiclereservation"
        element={
          <ProtectedRoute>
            <Vehiclereservation columns={vehicleReservationColumns} />
          </ProtectedRoute>
        }
      />

      <Route path="/userpage" element={<UserpageA />} />
      <Route path="/update" element={<UpdateuserA />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/updateProfile" element={<Profileupdate />} />
      <Route path="/adduser" element={<Adduser />} />


      <Route path="/vehicles" element={<VehicleHome />} />
      <Route path="/vehicle/book/:id" element={<VehicleBook />} />
      <Route path="/vehicle/payment/" element={<VehiclePayment />} />
      <Route path="/vehicle/add" element={<AddVehicle />} />
      <Route path="/vehicle/edit/:id" element={<EditVehicle />} />
      <Route path="/vehicle/view/" element={<VehicleView />} />


      <Route path="/tours/home" element={<ToursHome />} />
      <Route path="/tours/:id" element={<TourDetails />} />
      <Route
        path="/tours/search/:destination/:duration/:maxsize"
        element={<SearchResults />}
      />
      <Route path="/addtour" element={<AddTourPackage />} />
      <Route path="/tour/view" element={<ToursView />} />
      <Route path="/tour/update" element={<UpdateAddedTours />} />

      <Route path="/sunandbeach" element={<AllTourCategories />} />
      <Route path="/hikingandtrekking" element={<AllTourCategories />} />
      <Route path="/wildsafari" element={<AllTourCategories />} />
      <Route path="/special" element={<AllTourCategories />} />
      <Route path="/cultural" element={<AllTourCategories />} />
      <Route path="/festival" element={<AllTourCategories />} />

      <Route path="/contactus" element={<ContactUs />} />

      <Route path="/add-new-activity" element={<ActivityForm />} />
      <Route path="/add-new-activity/:id" element={<ActivityForm />} />
      <Route path="/pending-activities" element={<PendingActivities />} />
      <Route
        path="/pending-reservations"
        element={<PendingReservationsPage />}
      />
      <Route path="/events" element={<FilterActivities />} />
      <Route path="/activities/:id" element={<Activity />} />
      <Route path="/my-activities" element={<MyActivities />} />
      <Route path="/my-reservations" element={<ReservationPage />} />


      <Route path="/train/book/:id" element={<TrainBook />} />
      <Route path="/admintrain/add" element={<AddNewTrain />} />
      <Route path="/adminTrain" element={<TrainHomeAdmmin />} />
      <Route path="/adminTrain/:id" element={<SingleTrainView />} />
      <Route path="/passengerDet" element={<AddPassengerDetails />} />
      <Route path="/train/book/:id" element={<TrainBook />} />
      <Route path="/train/update/:id" element={<DoUpdateTrain />} />
      <Route path="/TrainHome" element={<TravelerHome />} />
      <Route path="/adminTrain/reviewTicket/:id" element={<ReviewTickets />} />
      <Route path="/adminTrain/reviewPanel" element={<ReviewPanel />} />
      <Route path="/train/MyTickets" element={<MyTickets />} />
      <Route path="/train/MyTickets/:id" element={<MyOneTicket />} />


      <Route path="/addrestaurant" element={<RestaurentForm />} />

      <Route path="/train/book/:id" element={<TrainBook />} />
      <Route path="/train/add" element={<AddNewTrain />} />
      <Route path="/adminTrain" element={<TrainHomeAdmmin />} />
      <Route path="/adminTrain/:id" element={<SingleTrainView />} />
      <Route
        path="/train/book/passengerDet"
        element={<AddPassengerDetails />}
      />

    </Routes>
  )
}

export default RouteTour