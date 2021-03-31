import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import travelFakeData from '../../travelFakeData';
import BookingDetails from './BookingDetails';
// import './Booking.css';

const Booking = () => {
    const {bookingid} = useParams();
    const [travleInfo, setTravelInfos] = useState(null);
    
    useEffect( () => {
        const travelInfo = travelFakeData.find(td => td.id === bookingid)
        setTravelInfos(travelInfo)
    }, [])  

    return (
        <div>
           {travleInfo && <BookingDetails travelData={travleInfo} />}
        </div>
    );
};

export default Booking;