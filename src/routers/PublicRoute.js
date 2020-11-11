import React from "react";
import { Redirect, Route } from "react-router-dom";
import PropTypes from 'prop-types';

export const PublicRoute = ({ isLogged, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      component={(props) =>
        !isLogged ? <Component {...props} /> : <Redirect to="/" />
      }
    ></Route>
  );
};

PublicRoute.propTypes = {
    isLogged: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired,
  };