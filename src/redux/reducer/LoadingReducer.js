import { DISPLAY_LOADING, HIDE_LOADING } from "../type/LoadingType";

const initialState = {
  isLoading: false,
};

const LoadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_LOADING:
      state.isLoading = true;
      break;
    case HIDE_LOADING:
      state.isLoading = false;
      break;
    default:
      break;
  }
  return { ...state };
};

export default LoadingReducer;
