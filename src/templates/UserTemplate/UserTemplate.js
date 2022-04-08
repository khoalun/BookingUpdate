import { Fragment } from "react";
import { Route } from "react-router-dom";

const UserTemplate = (props) => {
  // props path exact component
  const { Component, ...restProps } = props; // boc tach' props

  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        return (
          <Fragment>
            <div className="lg:flex">
              <Component {...propsRoute} />
              <div className="hidden lg:flex items-center justify-center flex-1 h-screen">
                <img
                  src="./img/background.jpg"
                  alt="background"
                  className="w-full h-full"
                />
              </div>
            </div>
          </Fragment>
        );
      }}
    />
  );
};
export default UserTemplate;
