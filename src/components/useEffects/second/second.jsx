import React, { useEffect, useState } from 'react'
import Third from './third';

const Second = () => {
    const [secondData, setSecondData] = useState("INITAL");
    const [userData, setUserData] = useState("checking")

    useEffect(() => {
        alert("Second comp loaded")
    }, []);

    useEffect(() => {
        alert("SECOND With dependency ");
        setSecondData("HEYAAA")
    }, [userData]);

    return (
        <>
            <div style={{ backgroundColor: "green", padding: 10, marginBottom: 10 }}>
                second
            </div>
            <Third secondData={secondData} />
        </>
    )
}

export default Second
