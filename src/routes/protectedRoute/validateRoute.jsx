import React from 'react'
import { Navigate } from 'react-router-dom';

const ValidateRoute = ({ userData, pageType = "", children }) => {
    const nonloginRoutes = ["login", "register"];

    if (Object.keys(userData)?.length <= 0 && !nonloginRoutes.includes(pageType)) {
        return <Navigate to={"/login"} />
    }

    //check that if user login not show login and register page redirect to home
    if (Object.keys(userData)?.length > 0 && nonloginRoutes.includes(pageType)) {
        return <Navigate to={"/"} />
    }

    return (children)
}

export default ValidateRoute;
