import React from 'react';
import './MainContent.css';

const MainConten = (props) => {
    const {name, image} = props.data;
    return (
        <div className="col-md-4 image_section"> 
            <div>
                <img onClick={() => props.handleShowData(props.data)} src={image} alt=""/>
                <h3>{name}</h3>
            </div>
        </div>
    );
};

export default MainConten;