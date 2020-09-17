import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import './Booking.css';
const BookingDetails = (props) => {
    const { name, title, image, id } = props.travelData;
    return (
        <div className="booking_details">
            <div className="backgound_opacity">
                <div className="container">
                <Header></Header>
                    <div className="row ">
                        <div className="col-md-6 text_control">
                            <h1>{name}</h1>
                            <p>{title}</p>
                        </div>
                        <div className="col-md-6 ">
                            <div className="destination_box">
                               <from>
                               <p>origin</p>
                               <input className="text_filid" type="text" required />
                               <br/>
                               <p>Destination</p>
                               <input className="text_filid" type="text" required />
                               <div className="d-flex justify-content-between text-dark">
                                   <div className="mx-3">From</div>
                                   <div className="mx-3">To</div>
                               </div>
                               <div className="form d-flex my-3">
                                   <input type="date" required />
                                   <input type="date"  required />
                               </div>
                               <Link to={`/hotel${id}`}>
                                <button className="all_button booking_button">Start Booking</button>
                               </Link>
                               </from>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingDetails;