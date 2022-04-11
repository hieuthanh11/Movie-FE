import {
  FETCH_COMMING_SOON,
  FETCH_NOW_SHOWING,
  GET_ERROR,
  GET_MOVIE_DETAIL,
  GET_MOVIE_LIST,
  GET_MOVIE_PAGINATION,
} from "../type/ManageMovieType";

const initialState = {
  arrFilm: [],
  dangChieu: true,
  sapChieu: true,

  arrFilmDefault: [],

  filmDetail: {},
  moviePagination: {},
  messageError: "",
};

const MovieListReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIE_LIST:
      state.arrFilm = action.arrFilm;
      state.arrFilmDefault = state.arrFilm;
      break;
    case FETCH_NOW_SHOWING:
      state.dangChieu = action.payload;
      state.arrFilm = state.arrFilmDefault.filter((film) => {
        return film.dangChieu === action.payload;
      });
      break;
    case FETCH_COMMING_SOON:
      state.sapChieu = action.payload;

      state.arrFilm = state.arrFilmDefault.filter((film) => {
        return film.sapChieu === action.payload;
      });
      break;
    case GET_MOVIE_DETAIL:
      state.filmDetail = action.movieDetail;
      break;
    case GET_MOVIE_PAGINATION:
      state.moviePagination = action.moviePaginationAct;
      break;
    case GET_ERROR:
      state.messageError = action.messages;
    default:
      break;
  }
  return { ...state };
};

export default MovieListReducer;
