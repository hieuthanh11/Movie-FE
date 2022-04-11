import { SET_DARK_MODE } from "../type/MuiType";

const initialState = {
  darkMode: false,
};

const MuiReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DARK_MODE:
      state.darkMode = action.payload;
      break;
    default:
      break;
  }
  return { ...state };
};

export default MuiReducer;
