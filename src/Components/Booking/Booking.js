import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import travelFakeData from '../../travelFakeData';
import BookingDetails from './BookingDetails';
// import './Booking.css';

const Booking = () => {
    const {bookingid} = useParams();
    const [travleInfos, setTravelInfos] = useState([]);
    useEffect( () => {
        const travelInfo = travelFakeData.filter(td => td.id === bookingid)
        setTravelInfos(travelInfo)
    }, [])  

    return (
        <div>
            {
                travleInfos.map(travelData => <BookingDetails travelData={travelData}></BookingDetails>)
            }
        </div>
    );
};

export default Booking;