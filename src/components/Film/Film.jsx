import moment from "moment";
import React from "react";
import { NavLink } from "react-router-dom";
import useStyle from "./style";
import { useTranslation } from "react-i18next";
import { Typography } from "@mui/material";
const Film = ({ film }) => {
  const { t, i18n } = useTranslation();
  const styles = useStyle();
  return (
    <div className={styles.card}>
      <div className={styles.cardInner}>
        <div
          style={{
            backgroundImage: `url(${film.hinhAnh}),url("https://picsum.photos/400/400")`,
          }}
          className={styles.frontCard}
        ></div>
        <div className={styles.backCard}>
          <div className={styles.date}>
            <Typography
              sx={{ fontWeight: "bolder" }}
              variant='span'
              color='secondary.light'
            >
              {moment(film.ngayKhoiChieu).format("DD/MM/YYYY")}
            </Typography>
            <Typography
              sx={{ fontWeight: "bolder" }}
              variant='span'
              color='secondary.light'
            >
              {moment(film.ngayKhoiChieu).format("hh:mm A")}
            </Typography>
          </div>
          <div className={styles.data}>
            <div className={styles.content}>
              <Typography
                variant='span'
                color='secondary.light'
                sx={{ fontWeight: "bolder" }}
              >
                {film.maPhim}
              </Typography>
              <Typography
                sx={{ fontWeight: "bolder" }}
                variant='h5'
                color='primary'
                gutterBottom
              >
                {film.tenPhim}
              </Typography>
              <Typography variant='body1' color='secondary.main'>
                {film.moTa.length > 17 ? (
                  <span>{film.moTa.slice(0, 50)}...</span>
                ) : (
                  <span>{film.moTa}</span>
                )}
              </Typography>
              <NavLink to={`/detail/` + film.maPhim} className={styles.navLink}>
                {t("Detail")}
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Film;
