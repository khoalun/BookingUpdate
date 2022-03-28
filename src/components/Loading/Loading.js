import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import "../Loading/Loading.scss";
export default function Loading() {
  const  {isLoading}  = useSelector((state) => state.LoadingReducer);
  return (
    <Fragment>
      {isLoading ? (
        <div className="loader-wrapper">
          <div className="loader">
            <div className="loader__bar"></div>
            <div className="loader__bar"></div>
            <div className="loader__bar"></div>
            <div className="loader__bar"></div>
            <div className="loader__bar"></div>
            <div className="loader__ball"></div>
          </div>
        </div>
      ) : (
        ""
      )}
    </Fragment>
  );
}
