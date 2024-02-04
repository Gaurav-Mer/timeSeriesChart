import React, { useEffect } from 'react'
import First from './first';

const Entry = () => {
    useEffect(() => {
        alert("Entry point")
    }, []);

    return (
        <div >
            <div style={{ padding: 10, background: "red", marginBottom: 10 }}>
                I am entry point :
            </div>
            <First />
        </div>
    )
}

export default Entry
