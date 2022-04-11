import { quanLyPhimService } from "../../service/QuanLyPhimService";
import { SET_CAROUSEL } from "../type/CarouselType";

export const getCarouselAction = () => {
  return async (dispatch) => {
    try {
      const result = await quanLyPhimService.getBanner();
      dispatch({
        type: SET_CAROUSEL,
        arrBanner: result.data.content,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
