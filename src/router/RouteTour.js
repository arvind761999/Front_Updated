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
    </Routes>
  )
}

export default RouteTour