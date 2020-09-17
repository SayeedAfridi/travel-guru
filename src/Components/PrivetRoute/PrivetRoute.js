import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../../App';

const PrivetRoute = ({children, ...rest}) => {
    const [logUser, setLogUser] = useContext(UserContext);
    return (
        <Route
      {...rest}
      render={({ location }) =>
        logUser.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivetRoute;