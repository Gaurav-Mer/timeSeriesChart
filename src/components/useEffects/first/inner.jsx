import React, { useEffect, useState } from 'react'
import InnerMost from './innerMost';

const Inner = ({ userData }) => {
    const [child, setChild] = useState("A")
    useEffect(() => {
        alert("Inner component load FIRST TIME")
    }, []);

    useEffect(() => {
        alert("INNER RELOAD ==> USERDATA CHANGES--", userData);
        setChild(Math.floor(Math.random() * 10) + 1) 
    }, [userData]);



    return (
        <>
            <div style={{ marginTop: 10, padding: 10, background: "orange" }}>
                I am inner comp userData is {userData} {child}
            </div>
            <InnerMost userData={userData} child={child} />
        </>
    )
}

export default Inner
