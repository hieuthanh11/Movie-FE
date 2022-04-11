import { quanLyNguoiDungService } from "../../service/QuanLyNguoiDungService";
import {
  GET_USER_DETAIL,
  LOG_IN_ACTION,
  REGISTER_ACTION,
  SET_USER_INFO,
} from "../type/ManageUserType";
import { history } from "../../App";
import { displayLoadingAction, hideLoadingAction } from "./LoadingAction";
import { notifiError, notifiSuccess } from "../../util/toastify/toastify";
export const loginAction = (loginInfo) => {
  return async (dispatch) => {
    try {
      dispatch(displayLoadingAction);
      const result = await quanLyNguoiDungService.login(loginInfo);
      notifiSuccess("Login Successfully !");
      await dispatch(hideLoadingAction);
      dispatch({
        type: LOG_IN_ACTION,
        loginInfo: result.data.content,
      });
      history.goBack();
    } catch (err) {
      console.log(err);
      notifiError("Login Fail !");
      dispatch(hideLoadingAction);
    }
  };
};

export const registerAction = (registerInfo) => {
  return async (dispatch) => {
    try {
      dispatch(displayLoadingAction);
      const result = await quanLyNguoiDungService.register(registerInfo);
      notifiSuccess("Register Successfully!");

      await dispatch(hideLoadingAction);
      dispatch({
        type: REGISTER_ACTION,
        registerInfo: result.data.content,
      });
      history.push("/login");
    } catch (err) {
      console.log(err);
      notifiSuccess("Register Fail !");
      dispatch(hideLoadingAction);
    }
  };
};

export const getUserInfoAction = () => {
  return async (dispatch) => {
    try {
      dispatch(displayLoadingAction);
      const result = await quanLyNguoiDungService.getHistory();
      await dispatch(hideLoadingAction);
      dispatch({
        type: SET_USER_INFO,
        userInfomation: result.data.content,
      });
    } catch (err) {
      console.log(err);
      dispatch(hideLoadingAction);
    }
  };
};

export const getUserInfoDetailAction = (taiKhoan) => {
  return async (dispatch) => {
    try {
      dispatch(displayLoadingAction);
      const result = await quanLyNguoiDungService.getUserInfo(taiKhoan);
      await dispatch(hideLoadingAction);
      dispatch({
        type: GET_USER_DETAIL,
        userDetail: result.data.content,
      });
    } catch (err) {
      console.log(err);
      dispatch(hideLoadingAction);
    }
  };
};

export const editUserProfileAction = (user) => {
  return async (dispatch) => {
    try {
      dispatch(displayLoadingAction);
      await quanLyNguoiDungService.editUserProfile(user);
      await dispatch(hideLoadingAction);
      history.push("/");
      notifiSuccess("Edit Successfully!");
    } catch (err) {
      console.log(err);
      notifiSuccess("Edit Fail!");
      dispatch(hideLoadingAction);
    }
  };
};
