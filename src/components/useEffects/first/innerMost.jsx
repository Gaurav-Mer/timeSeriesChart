import React, { useEffect, useState } from 'react'

const InnerMost = ({ userData, child }) => {
    const [innerChild, setInnerChild] = useState("U")
    useEffect(() => {
        alert("INNER MOST--")
    }, []);

    useEffect(() => {
        alert("INNER MOST USERDATA")
    }, [userData, child]);

    return (
        <div style={{ marginTop: 20, padding: 10, background: "green" }}>
            I am innerMost   {userData} + {child} + {innerChild}
        </div>
    )
}

export default InnerMost;
