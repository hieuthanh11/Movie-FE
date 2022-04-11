import React, { Fragment, useEffect } from "react";
import { Redirect, Route } from "react-router";
import { USER_LOGIN } from "../../util/settings/config";
import Footer from "../HomeTemplate/Layout/Footer/Footer";
import HeaderResponsive from "../HomeTemplate/Layout/Header/HeaderResponsive";

const CheckoutTemplate = (props) => {
  const { Component, ...restProps } = props;

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  if (!localStorage.getItem(USER_LOGIN)) {
    return <Redirect to='/login' />;
  }

  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        return (
          <div>
            <Fragment>
              <HeaderResponsive />
              <Component {...propsRoute} />
              <Footer />
            </Fragment>
          </div>
        );
      }}
    />
  );
};

export default CheckoutTemplate;
