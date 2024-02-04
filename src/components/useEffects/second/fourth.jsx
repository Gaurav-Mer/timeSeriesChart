import React, { useEffect } from 'react'

const FOurth = ({ thirdData }) => {
    useEffect(() => {
        alert("FOurth comp with depen")
    }, [thirdData]);


    return (
        <div>
            I am fourth
        </div>
    )
}

export default FOurth
