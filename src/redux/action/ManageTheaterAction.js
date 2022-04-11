import { quanLyRapService } from "../../service/QuanLyRapService";
import { GET_ERROR } from "../type/ManageMovieType";
import {
  GET_THEATER_BY_ID,
  GET_THEATER_INFO,
  GET_THEATER_INFO_DEBASE_ON_SYSTEM,
  SET_THEATER,
} from "../type/ManageTheaterType";
import { displayLoadingAction, hideLoadingAction } from "./LoadingAction";

export const getTheaterSystemInfomationAction = () => {
  return async (dispatch) => {
    try {
      dispatch(displayLoadingAction);
      const result = await quanLyRapService.getTheaterSystemInfomation();
      await dispatch(hideLoadingAction);
      dispatch({
        type: SET_THEATER,
        manageTheater: result.data.content,
      });
    } catch (err) {
      console.log(err);
      dispatch(hideLoadingAction);
    }
  };
};

export const getTheaterSystemInfomationDebaseOnSystemAction = (
  maHeThongRap
) => {
  return async (dispatch) => {
    try {
      dispatch(displayLoadingAction);
      const result = await quanLyRapService.getTheaterSystemInfoDebaseOnSystem(
        maHeThongRap
      );
      await dispatch(hideLoadingAction);
      dispatch({
        type: GET_THEATER_INFO_DEBASE_ON_SYSTEM,
        theaterInfoDebase: result.data.content,
      });
      dispatch({
        type: GET_ERROR,
        messages: "",
      });
    } catch (err) {
      console.log({ ...err });
      dispatch(hideLoadingAction);
      dispatch({
        type: GET_ERROR,
        messages: err.response.data.message,
      });
    }
  };
};

export const getTheaterInfomationAction = (maHeThongRap) => {
  return async (dispatch) => {
    try {
      dispatch(displayLoadingAction);
      const result = await quanLyRapService.getTheaterInfomation(maHeThongRap);
      await dispatch(hideLoadingAction);
      dispatch({
        type: GET_THEATER_INFO,
        theaterInfo: result.data.content,
      });
    } catch (err) {
      console.log(err);
      dispatch(hideLoadingAction);
    }
  };
};

export const getTheaterBasedOnIdAction = (id) => {
  return async (dispatch) => {
    try {
      dispatch(displayLoadingAction);
      const result = await quanLyRapService.getTheaterBasedOnId(id);
      await dispatch(hideLoadingAction);

      dispatch({
        type: GET_THEATER_BY_ID,
        theaterId: result.data.content,
      });
    } catch (err) {
      console.log(err);
      dispatch(hideLoadingAction);
    }
  };
};
