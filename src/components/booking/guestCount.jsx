import { Button } from 'primereact/button';
import React, { useState } from 'react'

const GuestCount = () => {
    const [guestCount, setGuestCount] = useState(0);
    const hanldeClick = (type) => {
        if (type === "inc") {
            setGuestCount(prev => {

                if (prev < 6) {
                    return prev + 1
                } else {
                    return prev
                }
            })
        }
        else {
            setGuestCount(prev => {
                if (prev > 0) {
                    return prev - 1;
                } else {
                    return prev;
                }
            })
        }
    };

    return (
        <div style={{ marginTop: 10 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <p>Guests {guestCount}</p>
                <div style={{ display: "flex", gap: 10, alignItems: 'center' }}>
                    <button onClick={() => hanldeClick("desc")} style={{ borderRadius: 5, width: 30, height: 30, border: "none", background: "red", color: 'white', fontWeight: "bold", cursor: 'pointer' }}>-</button>
                    <button onClick={() => hanldeClick("inc")} style={{ borderRadius: 5, width: 30, height: 30, border: "none", background: "green", color: 'white', fontWeight: "bold", cursor: 'pointer' }}>+</button>
                </div>
            </div>
            <p style={{ fontWeight: 'bold', fontSize: 12 }}>Note: Maximum 6 person allowed!</p>
        </div>
    )
}

export default GuestCount
