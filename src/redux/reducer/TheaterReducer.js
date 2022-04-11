import {
  SET_THEATER,
  GET_THEATER_INFO,
  GET_THEATER_BY_ID,
  GET_THEATER_INFO_DEBASE_ON_SYSTEM,
} from "../type/ManageTheaterType";

const initialState = {
  theaterArr: [],
  theaterInfo: [],
  theaterId: {},
  theaterDebase: [],
};

const TheaterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_THEATER:
      state.theaterArr = action.manageTheater;
      break;
    case GET_THEATER_INFO:
      state.theaterInfo = action.theaterInfo;
      break;
    case GET_THEATER_BY_ID:
      state.theaterId = action.theaterId;
      break;
    case GET_THEATER_INFO_DEBASE_ON_SYSTEM:
      state.theaterDebase = action.theaterInfoDebase;
    default:
      break;
  }
  return { ...state };
};

export default TheaterReducer;
