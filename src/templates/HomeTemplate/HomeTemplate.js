import { Fragment  } from "react";
import { Route } from "react-router-dom";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";

const HomeTemplate = (props) => {


  // props path exact component
  const { Component, ...restProps } = props; // boc tach' props
 
  return (
    
    <Route
      {...restProps}
      render={(propsRoute) => {
        return (
          <Fragment>
            <Header {...propsRoute} />
            <Component {...propsRoute}  />
            <hr />
            <Footer />
          </Fragment>
        );
      }}
    />
  );
};
export default HomeTemplate;
