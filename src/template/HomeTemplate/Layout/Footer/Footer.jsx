import React from "react";
import SubFooter from "./SubFooter/SubFooter";
import useStyle from "./style";
import { Container, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
const Footer = () => {
  const { t, i18n } = useTranslation();
  const { theaterArr } = useSelector((state) => {
    return state.TheaterReducer;
  });

  const styles = useStyle();
  return (
    <Container maxWidth='lg'>
      <SubFooter />
      <div style={{ padding: "0 24px" }}>
        <div className={styles.brand}>
          {theaterArr.map((item, index) => {
            return (
              <div key={index} className={styles.brandItem}>
                <img
                  src={item.logo}
                  alt={item.logo}
                  className={styles.brandImage}
                />
              </div>
            );
          })}
        </div>
        <div className={styles.content}>
          <div className={styles.content_item}>
            <Typography variant='body2' color='secondary.main'>
              RẠP VIỆT NAM
            </Typography>
            <div className={styles.subTitle}>
              <Typography gutterBottom color='secondary.light'>
                {t("About")}
              </Typography>
              <Typography gutterBottom color='secondary.light'>
                {t("Online Utility")}
              </Typography>
              <Typography gutterBottom color='secondary.light'>
                {t("Coupon")}
              </Typography>
              <Typography gutterBottom color='secondary.light'>
                {t("Recruitment")}
              </Typography>
            </div>
          </div>
          <div className={styles.content_item}>
            <Typography variant='body2' color='secondary.main'>
              {t("TERM & CONDITION")}
            </Typography>
            <div className={styles.subTitle}>
              <Typography gutterBottom color='secondary.light'>
                {t("General Terms")}
              </Typography>

              <Typography gutterBottom color='secondary.light'>
                {t("Payment Policy")}
              </Typography>
              <Typography gutterBottom color='secondary.light'>
                {t("Privacy Policy")}
              </Typography>
              <Typography gutterBottom color='secondary.light'>
                {t("Frequently Asked Questions")}
              </Typography>
            </div>
          </div>
          <div className={styles.content_item}>
            <Typography variant='body2' color='secondary.main'>
              {t("CONTACT US")}
            </Typography>
            <div className={styles.subTitle}>
              <img src='../../../../assets/img/icon.png' alt='icon' />
              <img src='../../../../assets/img/license.png' alt='license' />
            </div>
          </div>
          <div className={styles.content_item}>
            <Typography variant='body2' color='secondary.main'>
              {t("ADDRESS")}
            </Typography>
            <div className={styles.subTitle}>
              <Typography gutterBottom color='secondary.light'>
                Hotline: 1900 0000
              </Typography>
              <Typography gutterBottom color='secondary.light'>
                {t("Working Hours: 8:00 - 22:00 (All days including New Year)")}
              </Typography>
              <Typography gutterBottom color='secondary.light'>
                Email: hoidap@gmail.com
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
