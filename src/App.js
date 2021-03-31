import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Booking from './Components/Booking/Booking';
import NotFunds from './Components/NotFunds/NotFunds';
import Hotel from './Components/Hotel/Hotel';
import Login from './Components/Firebase/Login';
import PrivetRoute from './Components/PrivetRoute/PrivetRoute';
import {auth} from './Components/Firebase/firebase'

export const UserContext = createContext();

function App() {
  const [logUser, setLogUser] = useState({});
  React.useEffect(() => {
    const unsunb = auth.onAuthStateChanged((user) => {
      console.log(user);
    });
    return () => unsunb();
  }, []);
  return (
    <UserContext.Provider value={[logUser, setLogUser]}>
      <Router>
        <Switch>
          <Route exact path="/news" component={Home} />
          <Route exact path="/"  component={Home} />
          <Route path="/destination" exact component={NotFunds}/>
          <Route exact path="/blog" component={NotFunds}  />
          <Route path="/contact">
          <NotFunds />
          </Route>
          <Route path="/booking/:bookingid">
            <Booking />
          </Route>
          <PrivetRoute path="/hotel/:hotelid">
            <Hotel />
          </PrivetRoute>
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
