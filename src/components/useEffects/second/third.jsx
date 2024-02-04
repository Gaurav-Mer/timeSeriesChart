import React, { useEffect, useState } from 'react'
import FOurth from './fourth';

const Third = ({ secondData }) => {
    const [thirdData, setThirdDAta] = useState("INITAL")
    useEffect(() => {
        alert("Third comp loaded")
    }, []);

    useEffect(() => {
        alert("THIRD WITH DEPENDency");
        setThirdDAta("SDFSDF");
    }, [secondData])


    return (
        <>
            <div style={{ backgroundColor: "pink", padding: 10, marginBottom: 10 }}>
                Third
                <FOurth thirdData={thirdData} />
            </div>
        </>
    )
}

export default Third
