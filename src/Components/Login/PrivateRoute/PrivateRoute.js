import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { userContext } from '../../../App';
import jwt_decode from "jwt-decode";


const PrivateRoute = ({children, ...rest}) => {

    const [loggedInUser, setLoggedInUser] = useContext(userContext);

    return (
        <Route
      {...rest}
      render={({ location }) =>
      loggedInUser.email? (
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
    )
     
};

export default PrivateRoute;