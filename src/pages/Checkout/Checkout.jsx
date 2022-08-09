import React, { Fragment, useEffect } from "react";
import {
  Typography,
  Button,
  Container,
  Grid,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableFooter,
  Box,
  Tab,
  Tabs,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";
import PropTypes from "prop-types";
import {
  Close,
  Weekend,
  AccountCircle,
  PersonAddDisabled,
} from "@mui/icons-material";
import useStyles from "./style";
import { useDispatch, useSelector } from "react-redux";
import {
  bookingSeatAction,
  bookingTicketAction,
  getDetailBookingRoom,
} from "../../redux/action/ManageBookingTicketAction";
import { BookingTicketInfo } from "../../_core/models/BookingTiceketInfo";
import { getUserInfoAction } from "../../redux/action/ManageUserAction";
import moment from "moment";
import _ from "lodash";
import { connection } from "../..";
import { useTranslation } from "react-i18next";
import {
  BOOKING_SEAT,
  REMOVE_SEAT,
} from "../../redux/type/ManageBookingTicketType";
import { RESET_LIST_SEATS } from "../../redux/type/ManageMovieType";
const Checkout = (props) => {
  const { t, i18n } = useTranslation();
  const styles = useStyles();
  const dispatch = useDispatch();
  const { userLogin } = useSelector((state) => {
    return state.UserReducer;
  });

  const { detailTicketRoom, listOfSeatIsBooking, beingBookedArr } = useSelector(
    (state) => {
      return state.BookingTicketReducer;
    }
  );

  const { thongTinPhim, danhSachGhe } = detailTicketRoom;

  useEffect(() => {
    return () => {
      dispatch({
        type: RESET_LIST_SEATS,
      });
    };
  }, []);

  useEffect(() => {
    const action = getDetailBookingRoom(props.match.params.id);
    dispatch(action);

    connection.on("datVeThanhCong", () => {
      dispatch(action);
    });

    connection.invoke("loadDanhSachGhe", props.match.params.id);

    connection.on("loadDanhSachGheDaDat", (beingBookedList) => {
      beingBookedList = beingBookedList.filter(
        (item) => item.taiKhoan !== userLogin.taiKhoan
      );

      let arrBeingBooked = beingBookedList.reduce((result, item) => {
        let arrSeat = JSON.parse(item.danhSachGhe);

        return [...result, ...arrSeat];
      }, []);

      arrBeingBooked = _.uniqBy(arrBeingBooked, "maGhe");

      dispatch({
        type: BOOKING_SEAT,
        arrBeingBooked,
      });
    });

    window.addEventListener("beforeunload", clearSeat);

    return () => {
      clearSeat();
      window.removeEventListener("beforeunload", clearSeat);
    };
  }, []);

  const clearSeat = function (event) {
    connection.invoke("huyDat", userLogin.taiKhoan, props.match.params.id);
  };

  const renderSeat = () => {
    return danhSachGhe.map((seat, index) => {
      let classVipSeat = seat.loaiGhe === "Vip" ? "vipSeat" : "";
      let classBookedSeat = seat.daDat === true ? "bookedSeat" : "";
      let classSelected = "";
      let classBookedSeatByMe = "";
      let classBeingBooked = "";

      let indexBeingBooked = beingBookedArr.findIndex(
        (beingBookedSeat) => beingBookedSeat.maGhe === seat.maGhe
      );

      if (indexBeingBooked !== -1) {
        classBeingBooked = "beingBooked";
      }

      if (userLogin.taiKhoan === seat.taiKhoanNguoiDat) {
        classBookedSeatByMe = "bookedSeatByMe";
      }

      let indexSelected = listOfSeatIsBooking.findIndex((selected) => {
        return selected.maGhe === seat.maGhe;
      });

      if (indexSelected !== -1) {
        classSelected = "isBooking";
        classVipSeat = "isBooking";
      }
      return (
        <Fragment key={index}>
          <Button
            onClick={() => {
              const action = bookingSeatAction(seat, props.match.params.id);
              dispatch(action);
            }}
            disabled={seat.daDat || classBeingBooked !== ""}
          >
            {seat.daDat ? (
              classBookedSeatByMe !== "" ? (
                <span style={{ width: "20px" }}>
                  <AccountCircle />
                </span>
              ) : (
                <span style={{ width: "20px" }}>
                  <Close />
                </span>
              )
            ) : classBeingBooked !== "" ? (
              <span style={{ width: "20px" }}>
                <PersonAddDisabled />
              </span>
            ) : (
              <span style={{ width: "20px" }}>{seat.stt}</span>
            )}

            <Weekend
              sx={{ fontSize: 30 }}
              className={`${styles["seat"]} ${styles[classVipSeat]}  ${styles[classBookedSeat]} ${styles[classSelected]}  ${styles[classBookedSeatByMe]} ${styles[classBeingBooked]} `}
            />
          </Button>
        </Fragment>
      );
    });
  };

  return (
    <div className={styles.root}>
      <Container maxWidth='lg'>
        <div className={styles.note}>
          <div className={styles.noteItem}>
            <Typography variant='h5' color='secondary'>
              {t("Normal")}
            </Typography>
            <Button>
              <Weekend sx={{ fontSize: 30 }} className={`${styles["seat"]}`} />
            </Button>
          </div>
          <div className={styles.noteItem}>
            <Typography variant='h5' color='secondary'>
              Vip
            </Typography>
            <Button>
              <Weekend
                sx={{ fontSize: 30 }}
                className={`${styles["seat"]} ${styles["vipSeat"]} `}
              />
            </Button>
          </div>
          <div className={styles.noteItem}>
            <Typography variant='h5' color='secondary'>
              {t("Selecting")}
            </Typography>
            <Button>
              <Weekend
                sx={{ fontSize: 30 }}
                className={`${styles["seat"]} ${styles["isBooking"]} `}
              />
            </Button>
          </div>

          <div className={styles.noteItem}>
            <Typography variant='h5' color='secondary'>
              {t("Booked")}
            </Typography>
            <Button>
              <Weekend
                sx={{ fontSize: 30 }}
                className={`${styles["seat"]} ${styles["bookedSeat"]} `}
              />
            </Button>
          </div>
          <div className={styles.noteItem}>
            <Typography variant='h5' color='secondary'>
              {t("Selected")}
            </Typography>
            <Button>
              <Weekend
                sx={{ fontSize: 30 }}
                className={`${styles["seat"]} ${styles["bookedSeatByMe"]} `}
              />
            </Button>
          </div>
          <div className={styles.noteItem}>
            <Typography variant='h5' color='secondary'>
              {t("Being Selected")}
            </Typography>
            <Button>
              <Weekend
                sx={{ fontSize: 30 }}
                className={`${styles["seat"]} ${styles["beingBooked"]} `}
              />
            </Button>
          </div>
        </div>

        <Grid container spacing={5}>
          <Grid item md={8}>
            <div>
              <img
                className={styles.screenImage}
                src='../../assets/img/screen.png'
                alt='screen'
              />
            </div>
            {renderSeat()}
          </Grid>
          <Grid className={styles.checkoutInfo} item md={4}>
            <div>
              <Typography
                sx={{ marginBottom: "20px" }}
                variant='h4'
                color='primary.main'
              >
                {t("CHECKOUT SUMMARY")}
              </Typography>
              <Typography
                sx={{ fontWeight: "bold" }}
                variant='h5'
                color='secondary'
              >
                {thongTinPhim.tenPhim}
              </Typography>
              <Typography variant='h6' color='secondary.light'>
                {thongTinPhim.diaChi}
              </Typography>
              <Typography variant='h6' color='secondary'>
                <Typography variant='span' color='secondary.light'>
                  {t("Day")}: {thongTinPhim.ngayChieu}
                </Typography>
                <Typography
                  sx={{ marginLeft: "80px" }}
                  variant='span'
                  color='secondary.light'
                >
                  {t("Time")}: {thongTinPhim.gioChieu}
                </Typography>
              </Typography>
            </div>
            <Table sx={{ margin: "40px 0" }} size='small'>
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    {t("Number")}
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    {t("Price")}
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    {t("Action")}
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {listOfSeatIsBooking.map((selected, index) => {
                  return (
                    <TableRow key={index}>
                      <TableCell
                        sx={{
                          textAlign: "center",
                        }}
                      >
                        {selected.tenGhe}
                        {selected.loaiGhe === "Vip" ? "[Vip]" : ""}
                      </TableCell>
                      <TableCell
                        sx={{
                          textAlign: "center",
                        }}
                      >
                        {selected.giaVe.toLocaleString()}
                      </TableCell>
                      <TableCell
                        sx={{
                          textAlign: "center",
                        }}
                      >
                        <Button
                          onClick={() => {
                            dispatch({
                              type: REMOVE_SEAT,
                              id: selected.maGhe,
                            });
                          }}
                          variant='outlined'
                        >
                          <Close />
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell
                    sx={{
                      textAlign: "center",
                      fontSize: 28,
                    }}
                  >
                    {t("Total")}
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: "center",
                      fontSize: 28,
                    }}
                    colSpan={2}
                  >
                    {listOfSeatIsBooking
                      .reduce((total, seat) => {
                        return (total += seat.giaVe);
                      }, 0)
                      .toLocaleString()}
                  </TableCell>
                </TableRow>
              </TableFooter>
            </Table>
            <div>
              <Typography variant='h6' color='secondary'>
                {t("User")}: {userLogin.taiKhoan}
              </Typography>
              <Typography variant='h6' color='secondary'>
                Email: {userLogin.email}
              </Typography>
            </div>
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <Button
                onClick={() => {
                  let bookingTicketInfo = new BookingTicketInfo();
                  bookingTicketInfo.maLichChieu = props.match.params.id;
                  bookingTicketInfo.danhSachVe = listOfSeatIsBooking;
                  dispatch(bookingTicketAction(bookingTicketInfo));
                }}
                sx={{ color: "#fff" }}
                className={styles.btn}
                variant='outlined'
              >
                {t("PROCEED")}
              </Button>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
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
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs(props) {
  const { t, i18n } = useTranslation();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const styles = useStyles();
  const { detailTicketRoom } = useSelector((state) => {
    return state.BookingTicketReducer;
  });
  const { thongTinPhim } = detailTicketRoom;
  return (
    <Box>
      <div className={styles.banner}>
        <div className={styles.subBanner}>
          <Typography
            align='center'
            variant='h4'
            color='secondary.contrastText'
          >
            {thongTinPhim.tenPhim}
          </Typography>
          <Typography
            align='center'
            variant='h4'
            color='secondary.contrastText'
          >
            {thongTinPhim.tenCumRap}
          </Typography>
          <Typography
            align='center'
            variant='h4'
            color='secondary.contrastText'
          >
            {thongTinPhim.tenRap}
          </Typography>
        </div>
      </div>
      <Box className={styles.switchTabs}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label={t("CHECKOUT SUMMARY")} {...a11yProps(0)} />
          <Tab label={t("HISTORY")} {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Checkout {...props} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CheckoutHistory {...props} />
      </TabPanel>
    </Box>
  );
}

const CheckoutHistory = (props) => {
  const { userInfo, userLogin } = useSelector((state) => {
    return state.UserReducer;
  });
  const styles = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserInfoAction());
  }, []);

  const Test = () => {};

  return (
    <div className={styles.history}>
      <Container maxWidth='lg'>
        <div className={styles.historyList}>
          {userInfo.thongTinDatVe?.map((item, index) => {
            return (
              <Card
                className={styles.historyItem}
                key={index}
                sx={{ maxWidth: 345 }}
              >
                <CardActionArea>
                  <CardMedia
                    component='img'
                    height='140'
                    image={item.hinhAnh}
                    alt='film'
                  />
                  <CardContent>
                    <div className={styles.title}>
                      <Typography
                        gutterBottom
                        variant='h5'
                        color='primary.main'
                      >
                        {item.tenPhim}
                      </Typography>
                    </div>

                    <Typography variant='body1' color='secondary'>
                      {_.first(item.danhSachGhe).tenHeThongRap}
                    </Typography>
                    <Typography variant='body1' color='secondary.light'>
                      {_.first(item.danhSachGhe).tenCumRap}
                    </Typography>
                    <Typography variant='body1' color='secondary'>
                      No.
                      {item.danhSachGhe.map((id, index) => {
                        return (
                          <Typography
                            sx={{ margin: "0 5px" }}
                            variant='span'
                            color='warning.main'
                            className={styles.number}
                            key={index}
                          >
                            [{id.tenGhe}]
                          </Typography>
                        );
                      })}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions className={styles.time}>
                  <Typography variant='body1' color='text.secondary'>
                    {moment(item.ngayDat).format("DD/MM/YYYY")}
                  </Typography>
                  <Typography variant='body1' color='text.secondary'>
                    {moment(item.ngayDat).format("hh:mm A")}
                  </Typography>
                </CardActions>
              </Card>
            );
          })}
        </div>
      </Container>
    </div>
  );
};
