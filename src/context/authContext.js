import axios from "axios";
import React from 'react';
import { createContext, useReducer,useEffect } from "react";

let initialUser;
try {
    initialUser = JSON.parse(localStorage.getItem("user"));
} catch (error) {
    console.error("Error parsing user from localStorage:", error);
    initialUser = null; // Fallback to null if parsing fails
}

const INITIAL_STATE = {
    user: initialUser,
    loading: false,
    error: null,
};

const AuthReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_START":
            return {
                user: null,
                loading: true,
                error: null,
            };
        case "LOGIN_SUCCESS":
            return {
                user: action.payload,
                loading: false,
                error: null,
            };
        case "LOGIN_FAILURE":
            return {
                user: null,
                loading: false,
                error: action.payload,
            };
        case "LOGOUT":
            return {
                user: null,
                loading: false,
                error: null,
            };
        default:
            return state;
    }
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

   

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user));
    }, [state.user]);

    const logout = () => {
        localStorage.removeItem("user"); // remove the user from localStorage
        axios.get("/api/logout")
            .then(() => {
                dispatch({ type: "LOGOUT" }); // update the state to clear the user
            })
            .catch((error) => {
                console.error("Logout failed:", error);
                // Optionally, you can dispatch an error action here
            });
    };
    console.log(logout);

    
    return (
        <AuthContext.Provider
            value={{
                user: state.user,
                loading: state.loading,
                error: state.error,
                dispatch,
                // logout, add the logout function to the context
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};