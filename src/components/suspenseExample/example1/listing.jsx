import React from 'react'
import { fetchUserData } from '../manageAPI/fetchUserData'

const data = fetchUserData("https://api.github.com/users");
const Listing = () => {
    const userDetails = data.read();
    console.log("Git fetch data is ", userDetails);
    return (
        <div>
            Listing
        </div>
    )
}

export default Listing
