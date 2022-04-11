import { SET_CAROUSEL } from "../type/CarouselType";

const initialState = {
  arrBanner: [],
};

const CarouselReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CAROUSEL: {
      state.arrBanner = action.arrBanner;
      return { ...state };
    }

    default:
      return state;
  }
};

export default CarouselReducer;
