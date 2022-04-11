import React, { useEffect } from "react";
import { Route } from "react-router";
import Footer from "./Layout/Footer/Footer";
import HeaderResponsive from "./Layout/Header/HeaderResponsive";

const HomeTemplate = (props) => {
  const { Component, ...restProps } = props;

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        return (
          <div>
            <HeaderResponsive />
            <Component {...propsRoute} />
            <Footer />
          </div>
        );
      }}
    />
  );
};

export default HomeTemplate;
