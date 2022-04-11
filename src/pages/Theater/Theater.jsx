import { Button, Container, Typography } from "@mui/material";
import moment from "moment";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTheaterBasedOnIdAction } from "../../redux/action/ManageTheaterAction";
import useStyles from "./style";
import { history } from "../../App";
import { useTranslation } from "react-i18next";
const Theater = (props) => {
  const { t, i18n } = useTranslation();
  const styles = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    let { id } = props.match.params;
    dispatch(getTheaterBasedOnIdAction(id));
  }, []);

  const { theaterId } = useSelector((state) => {
    return state.TheaterReducer;
  });

  const renderTheater = () => {
    return theaterId.heThongRapChieu?.map((item, index) => {
      return (
        <div className={styles.content} key={index}>
          <div className={styles.brand}>
            <img height={100} width={100} src={item.logo} alt={item.logo} />
          </div>
          <div className='lichChieu'>
            {item.cumRapChieu.map((theater, index) => {
              return (
                <div key={index}>
                  <Typography
                    sx={{ margin: "20px 0" }}
                    color='secondary.main'
                    variant='h6'
                    align='center'
                  >
                    {theater.diaChi}
                  </Typography>
                  <div className={styles.time}>
                    {theater.lichChieuPhim.map((time, index) => {
                      return (
                        <div key={index} className={styles.timeItem}>
                          <Button
                            sx={{ color: "#fff", margin: "10px" }}
                            className={styles.btn}
                            onClick={() => {
                              history.push(`/checkout/${time.maLichChieu}`);
                            }}
                          >
                            <span style={{ margin: "auto" }}>
                              {moment(time.ngayChieuGioChieu).format(
                                "DD/MM/YYYY"
                              )}
                            </span>

                            <span style={{ margin: "auto" }}>
                              {moment(time.ngayChieuGioChieu).format("hh:mm A")}
                            </span>
                          </Button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      <div className={styles.banner}>
        <Typography align='center' color='secondary.contrastText' variant='h2'>
          {t("THEATER")}
        </Typography>
      </div>

      <Container maxWidth='lg'>{renderTheater()}</Container>
    </div>
  );
};

export default Theater;
