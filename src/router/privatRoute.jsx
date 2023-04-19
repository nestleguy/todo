import {Navigate, Outlet} from "react-router-dom"
import React from "react";

const PrivateRoute = () => {
    const auth = true
    return (
        auth ? <Outlet /> : <Navigate to="login" />
    );
};

export default PrivateRoute;