import React from 'react';
import { Route , Redirect } from 'react-router-dom';

import { useSelector } from "react-redux";



const PrivateRoute = ({ component: Component, ...rest}) =>  {
    const auth = useSelector((state) => state.signin);
  
    return (
        <Route { ...rest } render={props => (
            auth.token
              ? <Component {...props} />
              : <Redirect to="/login" />
          )}/>
       )
}


export default PrivateRoute;
