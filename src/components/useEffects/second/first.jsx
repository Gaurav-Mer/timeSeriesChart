import React, { useEffect } from 'react'
import Second from './second'

const First = () => {
    useEffect(() => {
        alert("First comp loaded")
    }, []);
    
    return (
        <div>
            <div style={{ padding: 10, background: "orange", marginBottom: 10 }}>
                First component
            </div>
            <Second />
        </div>
    )
}

export default First
