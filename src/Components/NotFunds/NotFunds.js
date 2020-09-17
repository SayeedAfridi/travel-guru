import React from 'react';
import Header from '../Header/Header';

const NotFunds = () => {
    return (
        <div className="bg-dark h-50">
            <Header></Header>
            <h3 className="text-light p-5">This route is protected.  if you want to access this page. Than you have to go  back or click on the news tab and select travel package</h3>
        </div>
    );
};

export default NotFunds;