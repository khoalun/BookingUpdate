import { Fragment } from "react";
import { Route } from "react-router-dom";
// import { USER_LOGIN } from "../../util/settings/config";
import { Redirect } from 'react-router-dom'
import './CheckoutTemplate.scss'
import { USER_LOGIN } from "../../util/settings/config";
const CheckoutTemplate = (props) => {
  // props path exact component
  const { Component, ...restProps } = props; // boc tach' props

  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        if (!localStorage.getItem(USER_LOGIN)) {
          return <Redirect to="/login" />;
        }
        return (
          <Fragment>
            <Component {...propsRoute}   />
          </Fragment>
        );
      }}
    />
  );
};

export default CheckoutTemplate;
