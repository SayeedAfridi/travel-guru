import React from 'react';
import './Hotel.css';
import hotel1 from '../../Image/Rectangle 26.png';
import hotel2 from '../../Image/Rectangle 27.png';
import hotel3 from '../../Image/Rectangle 28.png';
import starIcon from '../../Image/Icon/star_1_.png';

const Hotel = () => {
    return (
        <div className="container">
            <small>252 stays april 13 17 3 guests</small>
            <h3>Stay In Cox's Bazar</h3>
            <div className="row">
                <div className="col-md-6">
                    <div className="row images">
                        <div className="col-md-6">
                            <img src={hotel1} alt="" />
                        </div>
                        <div className="col-md-6 star_Icon">
                            <h5>Light bright airy stylesh apt & safe pecefull stay</h5>
                            <small>4 guests 2 bedrooms 2 beds 2 baths Wig Air conditioning kitchen cancellation fexibillty availiable</small>
                            <br />
                            <div className="d-flex justify-content-between Gold_icon">
                                <img src={starIcon} alt="" />4.9 (20)
                                <h5>$34/</h5><small className="my-1">night $167 total</small>
                            </div>
                        </div>
                   </div>
                </div>
            </div>
            <br/><br/>
            <div className="row">
                <div className="col-md-6">
                    <div className="row images">
                        <div className="col-md-6">
                            <img src={hotel2} alt="" />
                        </div>
                        <div className="col-md-6 star_Icon">
                            <h5>Light bright airy stylesh apt & safe pecefull stay</h5>
                            <small>4 guests 2 bedrooms 2 beds 2 baths Wig Air conditioning kitchen cancellation fexibillty availiable</small>
                            <br />
                            <div className="d-flex justify-content-between Gold_icon">
                                <img src={starIcon} alt="" />4.9 (20)
                                <h5>$34/</h5><small className="my-1">night $167 total</small>
                            </div>
                        </div>
                   </div>
                </div>
            </div>
            <br/><br/>
            <div className="row">
                <div className="col-md-6">
                    <div className="row images">
                        <div className="col-md-6">
                            <img src={hotel3} alt="" />
                        </div>
                        <div className="col-md-6 star_Icon">
                            <h5>Light bright airy stylesh apt & safe pecefull stay</h5>
                            <small>4 guests 2 bedrooms 2 beds 2 baths Wig Air conditioning kitchen cancellation fexibillty availiable</small>
                            <br />
                            <div className="d-flex justify-content-between Gold_icon">
                                <img src={starIcon} alt="" />4.9 (20)
                                <h5>$34/</h5><small className="my-1">night $167 total</small>
                            </div>
                        </div>
                   </div>
                </div>
            </div>

            <div className="div maps">

            </div>
        </div>
    );
};

export default Hotel;