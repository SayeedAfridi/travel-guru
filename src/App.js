import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import Booking from './Components/Booking/Booking';
import NotFunds from './Components/NotFunds/NotFunds';
import Hotel from './Components/Hotel/Hotel';
import Login from './Components/Firebase/Login';
import Header from './Components/Header/Header';
import PrivetRoute from './Components/PrivetRoute/PrivetRoute';

export const UserContext = createContext();

function App() {
  const [logUser, setLogUser] = useState({});
  return (
    <UserContext.Provider value={[logUser, setLogUser]}>
      <Router>
        <Switch>
          <Route path="/news">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/destination">
            <NotFunds></NotFunds>
          </Route>
          <Route path="/blog">
          <NotFunds></NotFunds>
          </Route>
          <Route path="/contact">
          <NotFunds></NotFunds>
          </Route>
          <Route path="/booking:bookingid">
            <Booking></Booking>
          </Route>
          <PrivetRoute path="/hotel:hotelid">
            <Hotel></Hotel>
          </PrivetRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
        </Switch>
      </Router>
      
    </UserContext.Provider>
  );
}

export default App;
