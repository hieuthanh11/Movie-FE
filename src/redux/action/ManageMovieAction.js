import { history } from "../../App";
import { quanLyPhimService } from "../../service/QuanLyPhimService";
import { notifiError, notifiSuccess } from "../../util/toastify/toastify";
import {
  GET_MOVIE_DETAIL,
  GET_MOVIE_LIST,
  GET_MOVIE_PAGINATION,
} from "../type/ManageMovieType";
import { displayLoadingAction, hideLoadingAction } from "./LoadingAction";

export const getMovieListAction = (tenPhim = "") => {
  return async (dispatch) => {
    try {
      dispatch(displayLoadingAction);

      const result = await quanLyPhimService.getMovieList(tenPhim);
      await dispatch(hideLoadingAction);

      dispatch({
        type: GET_MOVIE_LIST,
        arrFilm: result.data.content,
      });
    } catch (err) {
      console.log(err);
      dispatch(hideLoadingAction);
    }
  };
};

export const getMovieDetailAction = (id) => {
  return async (dispatch) => {
    try {
      dispatch(displayLoadingAction);

      const result = await quanLyPhimService.getMovieDetail(id);
      await dispatch(hideLoadingAction);

      dispatch({
        type: GET_MOVIE_DETAIL,
        movieDetail: result.data.content,
      });
    } catch (err) {
      console.log(err);
      dispatch(hideLoadingAction);
    }
  };
};

export const getMoviePagination = (currentPage, countInNumber) => {
  return async (dispatch) => {
    try {
      dispatch(displayLoadingAction);

      const result = await quanLyPhimService.getMoviePagination(
        currentPage,
        countInNumber
      );
      await dispatch(hideLoadingAction);

      dispatch({
        type: GET_MOVIE_PAGINATION,
        moviePaginationAct: result.data.content,
      });
    } catch (err) {
      console.log(err);
      dispatch(hideLoadingAction);
    }
  };
};

export const addMovieAction = (formData) => {
  return async (dispatch) => {
    try {
      dispatch(displayLoadingAction);
      let result = await quanLyPhimService.addMovie(formData);
      await dispatch(hideLoadingAction);
      notifiSuccess("Add movie successfully !");

      history.push("/admin/films");
    } catch (err) {
      console.log(err);
      dispatch(hideLoadingAction);
      notifiError("Add movie failed");
    }
  };
};

export const deleteMovieAction = (id) => {
  return async (dispatch) => {
    try {
      dispatch(displayLoadingAction);
      const result = await quanLyPhimService.deleteMovie(id);
      await dispatch(hideLoadingAction);
      notifiSuccess("Delete movie successfully");

      dispatch(getMovieListAction());
    } catch (err) {
      console.log(err);
      notifiError("Delete movie failed");
      dispatch(hideLoadingAction);
    }
  };
};

export const editMovieAction = (formData) => {
  return async (dispatch) => {
    try {
      dispatch(displayLoadingAction);
      const result = await quanLyPhimService.editMovie(formData);
      await dispatch(hideLoadingAction);
      notifiSuccess("Edit movie successfully");
      dispatch(getMovieListAction());
      history.push("/admin/films");
    } catch (err) {
      console.log(err);
      notifiError("Edit movie failed");
      dispatch(hideLoadingAction);
    }
  };
};
