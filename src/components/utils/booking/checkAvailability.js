export default function CheckAvaliability(checkingData) {
    const { checkIn, checkOut } = checkingData;
    const bookingDate = [{ checkIn: "22/02/2024", checkOut: "25/02/2024", status: "booked" }, { checkIn: "01/03/2024", checkOut: "02/03/2024", status: "booked" }, { checkIn: "19/03/2024", checkOut: "25/03/2024", status: "cancel" }]
    console.log("is greater ", new Date(checkIn) > new Date(checkOut))
    bookingDate.map(data => {
        // console.log("IN DATA IS ",data);

    })

}


//take input checkin, checkout
// validate them
// bookingdates m check karo with both checkin date and checkout
//If already then check its status if it is booked then return "no booking available"
//    NOTE :- above suituation where i am checking with status there are higher chances that booking check in and checkout ho  but uska booking status cancel or ongoing hai .