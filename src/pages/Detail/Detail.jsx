import React, { useEffect, useState } from "react";
import { CustomCard } from "@tsamantanis/react-glassmorphism";
import "@tsamantanis/react-glassmorphism/dist/index.css";
import { Button, Container, Rating, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getMovieDetailAction } from "../../redux/action/ManageMovieAction";
import useStyles from "./style";
import {
  AccessTime,
  DateRangeOutlined,
  Facebook,
  Google,
  LinkedIn,
  Pinterest,
  Twitter,
} from "@mui/icons-material";
import moment from "moment";
import { history } from "../../App";
import { useTranslation } from "react-i18next";
import ModalTrailer from "../../components/Modal/Modal";
const Detail = (props) => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const styles = useStyles();
  useEffect(() => {
    let { id } = props.match.params;
    dispatch(getMovieDetailAction(id));
  }, []);

  const { filmDetail } = useSelector((state) => {
    return state.MovieListReducer;
  });

  const [trailer, setTrailer] = useState("");
  const [open, setOpen] = useState(false);
  const handleClickOpen = (value) => {
    setTrailer(value);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={styles.root}>
      <div
        className={styles.banner}
        style={{ backgroundImage: `url(${filmDetail.hinhAnh})` }}
      ></div>
      <div className={styles.main}>
        <Container sx={{ position: "relative" }} maxWidth='lg'>
          <div className={styles.content}>
            <div className={styles.filmImage}>
              <img
                className={styles.img}
                src={filmDetail.hinhAnh}
                alt={filmDetail.hinhAnh}
              />
            </div>
            <div className={styles.info}>
              <Typography variant='h4' sx={{ color: "#fff" }}>
                {filmDetail.tenPhim}
              </Typography>
              <Typography variant='h6' sx={{ color: "#fff" }}>
                ID:{filmDetail.maPhim}
              </Typography>
              <Button
                sx={{ color: "#fff" }}
                className={styles.btn}
                variant='outlined'
                onClick={() => {
                  handleClickOpen(filmDetail.trailer);
                }}
              >
                Trailer
              </Button>

              <div className={styles.time}>
                <div className={styles.date}>
                  <DateRangeOutlined color='secondary' />
                  <Typography color='secondary.main'>
                    {moment(filmDetail.ngayKhoiChieu).format("DD/MM/YYYY")}
                  </Typography>
                  <AccessTime color='secondary' style={{ marginLeft: 20 }} />
                  <Typography color='secondary.main'>
                    {moment(filmDetail.ngayKhoiChieu).format("hh-mm A")}
                  </Typography>
                </div>
                <div className={styles.icon}>
                  <Facebook color='secondary' />
                  <Twitter color='secondary' />
                  <Pinterest color='secondary' />
                  <LinkedIn color='secondary' />
                  <Google color='secondary' />
                </div>
              </div>

              <div className={styles.rate}>
                <div className={styles.vote}>
                  <div className={styles.rateItem}>
                    <img src='../../assets/img/item1.png' alt='item' />
                    <Typography color='secondary.main'>88%</Typography>
                  </div>
                  <div className={styles.rateItem}>
                    <img src='../../assets/img/item2.png' alt='item' />
                    <Typography color='secondary.main'>88%</Typography>
                  </div>
                  <div>
                    <Rating
                      name='read-only'
                      value={filmDetail.danhGia / 2}
                      readOnly
                    />
                    <Typography color='secondary.main'>{t("Rate")}</Typography>
                  </div>
                </div>

                <div>
                  <Button
                    sx={{ color: "#fff" }}
                    className={styles.btn}
                    variant='outlined'
                    onClick={() => {
                      history.push(`/theater/${filmDetail.maPhim}`);
                    }}
                  >
                    {t("Book Ticket")}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Container maxWidth='lg'>
        <div className={styles.desc}>
          <div>
            <Typography variant='h3' color='secondary.main'>
              {t("PHOTOS")}
            </Typography>

            <div className={styles.imgList}>
              <div className={styles.imgItem}>
                <img
                  className={styles.imgDetail}
                  src='../../assets/img/film1.jpg'
                  alt='film'
                />
              </div>
              <div className={styles.imgItem}>
                <img
                  className={styles.imgDetail}
                  src='../../assets/img/film2.jpg'
                  alt='film'
                />
              </div>
              <div className={styles.imgItem}>
                <img
                  className={styles.imgDetail}
                  src='../../assets/img/film3.jpg'
                  alt='film'
                />
              </div>
            </div>
          </div>
          <div>
            <Typography
              sx={{ marginBottom: "24px" }}
              variant='h3'
              color='secondary.main'
            >
              {t("SYNOPSIS")}
            </Typography>

            <Typography variant='h6' color='secondary.light'>
              {filmDetail.moTa}
            </Typography>
          </div>
          <div>
            <Typography
              sx={{ margin: "24px 0" }}
              variant='h3'
              color='secondary.main'
            >
              {t("CAST")}
            </Typography>
            <div className={styles.castList}>
              <div className={styles.castItem}>
                <div className={styles.actorImg}>
                  <img
                    style={{ width: "100%" }}
                    src='../../assets/img/cast1.jpg'
                    alt='actor'
                  />
                </div>
                <div className='about'>
                  <Typography color='primary'>Angela</Typography>
                  <Typography color='secondary.light'>Actor</Typography>
                </div>
              </div>
              <div className={styles.castItem}>
                <div className={styles.actorImg}>
                  <img
                    style={{ width: "100%" }}
                    src='../../assets/img/cast2.jpg'
                    alt='actor'
                  />
                </div>
                <div className='about'>
                  <Typography color='primary'>Bill Hader</Typography>
                  <Typography color='secondary.light'>Actor</Typography>
                </div>
              </div>
              <div className={styles.castItem}>
                <div className={styles.actorImg}>
                  <img
                    style={{ width: "100%" }}
                    src='../../assets/img/cast3.jpg'
                    alt='actor'
                  />
                </div>
                <div className='about'>
                  <Typography color='primary'>Hakimi</Typography>
                  <Typography color='secondary.light'>Actor</Typography>
                </div>
              </div>
              <div className={styles.castItem}>
                <div className={styles.actorImg}>
                  <img
                    style={{ width: "100%" }}
                    src='../../assets/img/cast4.jpg'
                    alt='actor'
                  />
                </div>
                <div className='about'>
                  <Typography color='primary'>Richard</Typography>
                  <Typography color='secondary.light'>Actor</Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <ModalTrailer open={open} handleClose={handleClose} trailer={trailer} />
    </div>
  );
};

export default Detail;
