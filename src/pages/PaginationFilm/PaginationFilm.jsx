import { Button, Container, Rating, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import useStyles from "./style";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useDispatch, useSelector } from "react-redux";
import { getMoviePagination } from "../../redux/action/ManageMovieAction";
import { AccessTime, DateRangeOutlined } from "@mui/icons-material";
import moment from "moment";
import { history } from "../../App";
import { useTranslation } from "react-i18next";
import ModalTrailer from "../../components/Modal/Modal";
const PaginationFilm = () => {
  const styles = useStyles();
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const countInNumber = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const [trailer, setTrailer] = useState("");
  const [open, setOpen] = useState(false);
  const handleClickOpen = (value) => {
    setTrailer(value);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const { moviePagination } = useSelector((state) => {
    return state.MovieListReducer;
  });
  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  useEffect(() => {
    dispatch(getMoviePagination(currentPage, countInNumber));
  }, [currentPage]);

  return (
    <div>
      <div className={styles.banner}>
        <Typography align='center' color='secondary.contrastText' variant='h2'>
          {t("MOVIE SELECTION")}
        </Typography>
      </div>
      <Container maxWidth='lg'>
        {moviePagination.items?.map((item, index) => {
          return (
            <div key={index} className={styles.card}>
              <div className={styles.image}>
                <img
                  className={styles.filmImage}
                  src={item.hinhAnh}
                  alt={item.hinhAnh}
                />
              </div>
              <div className={styles.info}>
                <div className={styles.title}>
                  <Typography variant='h4' color='primary.main'>
                    {item.tenPhim}
                  </Typography>
                </div>
                <Rating name='read-only' value={item.danhGia / 2} readOnly />
                <div className={styles.date}>
                  <DateRangeOutlined color='primary' />
                  <Typography color='secondary.contrastText'>
                    {moment(item.ngayKhoiChieu).format("DD/MM/YYYY")}
                  </Typography>
                  <AccessTime color='primary' style={{ marginLeft: 20 }} />
                  <Typography color='secondary.contrastText'>
                    {moment(item.ngayKhoiChieu).format("hh-mm A")}
                  </Typography>
                </div>
                <div className={styles.rate}>
                  <div className={styles.icon}>
                    <img src='../../assets/img/item1.png' alt='apple' />
                    <Typography>88%</Typography>
                  </div>
                  <div className={styles.icon}>
                    <img src='../../assets/img/item2.png' alt='corn' />
                    <Typography>88%</Typography>
                  </div>
                </div>

                <Button
                  sx={{ color: "#fff", marginRight: 4, marginBottom: "5px" }}
                  className={styles.btn}
                  variant='outlined'
                  onClick={() => {
                    handleClickOpen(item.trailer);
                  }}
                >
                  {t("Watch Trailer")}
                </Button>
                <Button
                  sx={{ color: "#fff", marginRight: 4, marginBottom: "5px" }}
                  className={styles.btn}
                  variant='outlined'
                  onClick={() => {
                    history.push(`/detail/${item.maPhim}`);
                  }}
                >
                  {t("Detail")}
                </Button>
              </div>
            </div>
          );
        })}

        <Stack sx={{ alignItems: "center", margin: "40px 0" }} spacing={2}>
          <Pagination
            onChange={handleChange}
            count={moviePagination.totalPages}
          />
        </Stack>
      </Container>
      <ModalTrailer open={open} handleClose={handleClose} trailer={trailer} />
    </div>
  );
};

export default PaginationFilm;
