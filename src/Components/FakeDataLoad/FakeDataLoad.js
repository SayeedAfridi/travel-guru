import React, { useState } from 'react';
import './FakeDataLoad.css';
import travelFakeData from '../../travelFakeData';
import MainConten from '../MainContent/MainConten';
import ExjectTravelContent from '../ExjectTravelContent/ExjectTravelContent';

const FakeDataLoad = () => {
    const [travelData, setTravelData] = useState(travelFakeData);
    const [travelInfo, setTravelInfo] = useState([]);

    const handleShowData = (data) => {
        const newTravelInfo = [...travelInfo, data];
        setTravelInfo(newTravelInfo);
        console.log('click');
    }
    console.log(travelInfo);
    return (
        <div className="container parent">
            <div className="travel_content">
              {
                  travelInfo.map((travleInfos => <ExjectTravelContent travleInfos={travleInfos}></ExjectTravelContent>))
              }
            </div>

            <div className="travel_Img row">
                {
                    travelData.map(data => <MainConten data={data} handleShowData={handleShowData}></MainConten>)
                }
            </div>
        </div>
    );
};

export default FakeDataLoad;