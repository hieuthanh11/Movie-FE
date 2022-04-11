import React, { useEffect } from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { getCarouselAction } from "../../../redux/action/CarouselAction";
const HomeCarousel = () => {
  const dispatch = useDispatch();

  const { arrBanner } = useSelector((state) => {
    return state.CarouselReducer;
  });

  useEffect(() => {
    dispatch(getCarouselAction());
  }, []);

  return (
    <AwesomeSlider>
      {arrBanner.map((banner, index) => {
        return <div key={index} data-src={banner.hinhAnh} />;
      })}
    </AwesomeSlider>
  );
};

export default HomeCarousel;
