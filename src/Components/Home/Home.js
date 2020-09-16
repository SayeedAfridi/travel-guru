import React from 'react';
import './Home.css';
import Header from '../Header/Header';
import FakeDataLoad from '../FakeDataLoad/FakeDataLoad';

const Home = () => {
    return (
        
        <div className="home">
            <div className="efect">
            <Header></Header>
            <FakeDataLoad></FakeDataLoad>
            </div>
        </div>
    );
};

export default Home;