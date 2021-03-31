import React from 'react';
import { Link } from 'react-router-dom';
import './ExjectTravelContent.css';

const ExjectTravelContent = (props) => {
    const{name,title,id} = props.travleInfos;
    return (
        <div className="content">
            <h1>{name}</h1>
            <p>{title}</p>
            <Link to={`/booking/${id}`}>
            <button className="all_button"> Booking → </button>
            </Link>
        </div>
    );
};

export default ExjectTravelContent;