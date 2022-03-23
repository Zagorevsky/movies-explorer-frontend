import React from 'react';
import {Navigate} from "react-router-dom";

export default function ProtectedRoute({loggedIn, children}) {

  return loggedIn ? children : <Navigate to="/signin" />
}
