import { GET_USERS_LIST } from "../type/ManageUserType";
import { quanLyNguoiDungAdmin } from "../../service/QuanLyNguoiDungAdminService";
import { history } from "../../App";
import { displayLoadingAction, hideLoadingAction } from "./LoadingAction";
import { notifiError, notifiSuccess } from "../../util/toastify/toastify";
export const getUsersListAction = (tuKhoa = "") => {
  return async (dispatch) => {
    try {
      dispatch(displayLoadingAction);

      const result = await quanLyNguoiDungAdmin.getUsersList(tuKhoa);
      await dispatch(hideLoadingAction);

      dispatch({
        type: GET_USERS_LIST,
        arrUserAd: result.data.content,
      });
    } catch (err) {
      console.log(err);
      dispatch(hideLoadingAction);
    }
  };
};

export const deleteUserAction = (taiKhoan) => {
  return async (dispatch) => {
    try {
      dispatch(displayLoadingAction);
      const result = await quanLyNguoiDungAdmin.deleteUser(taiKhoan);
      await dispatch(hideLoadingAction);

      notifiSuccess("Delete user successfully");
      dispatch(getUsersListAction());
    } catch (err) {
      console.log(err);
      notifiError("Delete user failed");
      dispatch(hideLoadingAction);
    }
  };
};

export const addUserAction = (formData) => {
  return async (dispatch) => {
    try {
      dispatch(displayLoadingAction);
      let result = await quanLyNguoiDungAdmin.addUser(formData);
      await dispatch(hideLoadingAction);
      notifiSuccess("Add user successfully!");
      history.push("/admin/users");
    } catch (err) {
      console.log(err);
      notifiError("Add user failed!");
      dispatch(hideLoadingAction);
    }
  };
};

export const editUserAction = (user) => {
  return async (dispatch) => {
    try {
      dispatch(displayLoadingAction);
      await quanLyNguoiDungAdmin.editUser(user);
      await dispatch(hideLoadingAction);
      history.push("/admin/users");
      notifiSuccess("Edit user successfully!");
    } catch (err) {
      console.log(err);
      notifiError("Edit user failed!");
      dispatch(hideLoadingAction);
    }
  };
};
