import React, { Fragment, useEffect, useState } from "react";
import Slider from "react-slick";
import {
  Box,
  Typography,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import Film from "../Film/Film";
import { useDispatch, useSelector } from "react-redux";
import { getMovieListAction } from "../../redux/action/ManageMovieAction";
import useStyles from "./style.js";
import {
  FETCH_COMMING_SOON,
  FETCH_NOW_SHOWING,
} from "../../redux/type/ManageMovieType";
import { useTranslation } from "react-i18next";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  const styles = useStyles();
  return (
    <div
      className={`${className} ${styles["slick-next"]}`}
      style={{
        ...style,
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const styles = useStyles();
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styles["slick-prev"]}`}
      style={{
        ...style,
      }}
      onClick={onClick}
    />
  );
}

const CenterModeFilm = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "90px",
    slidesToShow: 3,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          centerPadding: "180px",
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          centerPadding: "90px",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerPadding: "150px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerPadding: "65px",
        },
      },
    ],
  };
  const styles = useStyles();
  const { t, i18n } = useTranslation();

  const dispatch = useDispatch();
  const { arrFilm } = useSelector((state) => {
    return state.MovieListReducer;
  });
  useEffect(() => {
    dispatch(getMovieListAction());
  }, []);
  const renderMovieList = () => {
    return arrFilm.map((film, index) => {
      return (
        <Box key={index}>
          <Film film={film} />
        </Box>
      );
    });
  };

  const [alignment, setAlignment] = useState(true);

  const handleChange = (event, newAlignment) => {
    event.preventDefault();
    setAlignment(newAlignment);
  };

  return (
    <Fragment>
      <div className={styles.title}>
        <div className={styles.topic}>
          <Typography variant='h3' color='secondary.main'>
            {t("MOVIE")}
          </Typography>
        </div>

        <ToggleButtonGroup
          color='primary'
          value={alignment}
          exclusive
          onChange={handleChange}
        >
          <ToggleButton
            onClick={() => {
              dispatch({
                type: FETCH_NOW_SHOWING,
                payload: !alignment,
              });
            }}
            value={true}
          >
            {t("NOW SHOWING")}
          </ToggleButton>
          <ToggleButton
            onClick={() => {
              dispatch({
                type: FETCH_COMMING_SOON,
                payload: alignment,
              });
            }}
            value={false}
          >
            {t("COMMING SOON")}
          </ToggleButton>
        </ToggleButtonGroup>
      </div>

      <Slider {...settings}>{renderMovieList()}</Slider>
    </Fragment>
  );
};

export default CenterModeFilm;
