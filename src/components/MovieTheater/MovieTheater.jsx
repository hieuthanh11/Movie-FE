import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import useStyles from "./style";
import { useDispatch, useSelector } from "react-redux";
import {
  getTheaterInfomationAction,
  getTheaterSystemInfomationAction,
} from "../../redux/action/ManageTheaterAction";
import { Button, Grid, Link } from "@mui/material";
import moment from "moment";
import { useTranslation } from "react-i18next";
import { history } from "../../App";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Box>{children}</Box>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function MovieTheater() {
  const { t, i18n } = useTranslation();

  const styles = useStyles();
  const dispatch = useDispatch();

  const [value, setValue] = useState(0);
  const [indexParent, setIndexParent] = useState(0);
  const [indexChild, setIndexChild] = useState(0);
  const [indexChildOfChild, setIndexChildOfChild] = useState(0);
  const [system, setSystem] = useState({ maCumRap: "" });
  const [root, setRoot] = useState({ maHeThongRap: "" });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { theaterArr, theaterInfo } = useSelector((state) => {
    return state.TheaterReducer;
  });

  useEffect(() => {
    if (theaterArr.length > 0) {
      dispatch(getTheaterInfomationAction(theaterArr[0]?.maHeThongRap));
      setRoot({
        ...root,
        maHeThongRap: theaterArr[0]?.maHeThongRap,
      });
    }
  }, [theaterArr]);

  useEffect(() => {
    dispatch(getTheaterSystemInfomationAction());
  }, []);

  useEffect(() => {
    if (theaterInfo.length > 0) {
      setSystem({
        ...system,
        maCumRap: theaterInfo[0]?.lstCumRap[0]?.maCumRap,
      });
    }
  }, [theaterInfo]);

  return (
    <div className={styles.root}>
      <div className={styles.topic}>
        <Typography variant='h3' color='secondary.main'>
          {t("THEATER")}
        </Typography>
      </div>

      <Box className={styles.theaterLogo}>
        <Tabs
          orientation='vertical'
          variant='scrollable'
          value={indexParent}
          onChange={handleChange}
          aria-label='Vertical tabs example'
          sx={{ borderRight: 1, borderColor: "divider" }}
        >
          {theaterArr.map((theaterDetail, index) => {
            return (
              <Tab
                key={index}
                onClick={() => {
                  dispatch(
                    getTheaterInfomationAction(theaterDetail.maHeThongRap)
                  );
                  setRoot({
                    ...root,
                    maHeThongRap: theaterDetail.maHeThongRap,
                  });
                  setIndexParent(index);
                }}
                label={<img className={styles.img} src={theaterDetail.logo} />}
                {...a11yProps(indexParent)}
              />
            );
          })}
        </Tabs>
        <TabPanel value={indexParent} index={indexParent}>
          <Box className={styles.theater}>
            <Tabs
              orientation='vertical'
              variant='scrollable'
              value={indexChild}
              onChange={handleChange}
              aria-label='Vertical tabs example'
              sx={{ borderRight: 1, borderColor: "divider" }}
            >
              {theaterInfo[0]?.lstCumRap.map((theater, indexSub) => {
                return (
                  <Tab
                    key={indexSub}
                    onClick={() => {
                      setSystem({ ...system, maCumRap: theater.maCumRap });
                      setIndexChild(indexSub);
                    }}
                    label={
                      <Fragment>
                        <Grid container spacing={3}>
                          <Grid item md={2}>
                            <img
                              className={styles.rapImg}
                              src={theater.hinhAnh}
                              alt={theater.hinhAnh}
                            />
                          </Grid>
                          <Grid sx={{ textAlign: "left" }} item md={10}>
                            <Typography variant='h6'>
                              {theater.tenCumRap}
                            </Typography>
                            <Typography variant='p' color='secondary.main'>
                              {theater.diaChi}
                            </Typography>
                            <Link
                              sx={{ display: "block", marginTop: "10px" }}
                              color='secondary.light'
                              href='#'
                            >
                              Chi tiết
                            </Link>
                          </Grid>
                        </Grid>
                      </Fragment>
                    }
                    {...a11yProps(indexChild)}
                  />
                );
              })}
            </Tabs>

            <TabPanel value={indexChild} index={indexChild}>
              <Box className={styles.showTimes}>
                <Tabs
                  orientation='vertical'
                  variant='scrollable'
                  value={indexChildOfChild}
                  onChange={handleChange}
                  aria-label='Vertical tabs example'
                  sx={{ borderRight: 1, borderColor: "divider" }}
                >
                  {theaterInfo[0]?.lstCumRap
                    ?.find((item) => item.maCumRap === system.maCumRap)
                    ?.danhSachPhim.map((filmItem, index) => {
                      return (
                        <Tab
                          onClick={() => {
                            setIndexChildOfChild(index);
                          }}
                          key={index}
                          label={
                            <Grid container spacing={5}>
                              <Grid item md={3}>
                                <img
                                  className={styles.filmImg}
                                  src={filmItem.hinhAnh}
                                  alt={filmItem.hinhAnh}
                                />
                              </Grid>
                              <Grid sx={{ textAlign: "left" }} item md={9}>
                                <Typography
                                  sx={{ marginBottom: "10px" }}
                                  variant='h6'
                                >
                                  {filmItem.tenPhim}
                                </Typography>
                                <div className={styles.time}>
                                  {filmItem.lstLichChieuTheoPhim
                                    .slice(0, 6)
                                    .map((item, index) => {
                                      return (
                                        <Typography
                                          className={styles.showTimeItem}
                                          gutterBottom
                                          color='warning'
                                          key={index}
                                          onClick={() => {
                                            history.push(
                                              `/checkout/${item.maLichChieu}`
                                            );
                                          }}
                                        >
                                          {moment(
                                            item.ngayChieuGioChieu
                                          ).format("hh:mm A")}
                                        </Typography>
                                      );
                                    })}
                                </div>
                              </Grid>
                            </Grid>
                          }
                          {...a11yProps(indexChildOfChild)}
                        />
                      );
                    })}
                </Tabs>
              </Box>
            </TabPanel>
          </Box>
        </TabPanel>
      </Box>
    </div>
  );
}
