import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router";
import { notifiError } from "../../util/toastify/toastify";
import HeaderAd from "./Layout/Header/Header";
import SideBar from "./Layout/SideBar/SideBar";

export default function AdminTemplate(props) {
  const { Component, ...restProps } = props;

  const { userLogin } = useSelector((state) => {
    return state.UserReducer;
  });

  if (userLogin.maLoaiNguoiDung != "QuanTri") {
    notifiError("Bạn không có quyền truy cập");
    return <Redirect to='/login' />;
  }

  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        return (
          <div>
            <SideBar />
            <HeaderAd />
            <Component {...propsRoute} />
          </div>
        );
      }}
    />
  );
}
