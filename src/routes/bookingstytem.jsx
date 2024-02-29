import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Calendar } from 'primereact/calendar';
import GuestCount from '../components/booking/guestCount';
import CheckAvaliability from '../components/utils/booking/checkAvailability';


const Bookingstytem = () => {
    const [bookingData, setBookingData] = useState({ checkIn: "", checkOut: "", guest: 0 });

    const handleChange = (e, type = "") => {
        setBookingData(prev => ({ ...prev, [type ? type : e.target.name]: type ? e.value : e.target.value }))
    }
    CheckAvaliability({checkIn:"09/22/2024",checkOut:"04/21/2024"});


    return (
        <div style={{ display: 'flex', justifyContent: 'center', margin: "50px 0px" }}>
            <div style={{ border: '1px solid #ffaaaa9c', padding: 30, margin: 20, borderRadius: 5 }}>
                <h1>Booking system :-</h1>
                <span className="p-float-label" style={{ marginTop: 10, width: "100%" }}>
                    <Calendar style={{ width: "100%" }} inputId="check_in" value={bookingData?.checkIn} onChange={(e) => handleChange(e, "checkIn")} />
                    <label htmlFor="check_in">Check In Date</label>
                </span>
                <span className="p-float-label" style={{ marginTop: 30, width: "100%" }}>
                    <Calendar style={{ width: "100%" }} inputId="check_out" value={bookingData?.checkOut} onChange={(e) => handleChange(e, "checkOut")} />
                    <label htmlFor="check_out ">Check Out Date</label>
                </span>
                <GuestCount />
                <Button style={{ marginTop: 30, width: "100%", display: "flex", justifyContent: 'center' }}  >Find booking </Button>
            </div>
        </div>
    )
}

export default Bookingstytem
