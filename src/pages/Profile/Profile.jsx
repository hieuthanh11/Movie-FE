import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useStyles from "./style";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { useTranslation } from "react-i18next";
import { Box } from "@mui/system";
import {
  editUserProfileAction,
  getUserInfoDetailAction,
  // getUserInfoAction,
} from "../../redux/action/ManageUserAction";
import { useFormik } from "formik";
import { GROUPID } from "../../util/settings/config";
import * as yup from "yup";
import _ from "lodash";
import moment from "moment";
import { REMOVE_USER } from "../../redux/type/ManageUserType";
const schema = yup.object().shape({
  taiKhoan: yup.string().required("User is required"),
  matKhau: yup.string().required("Password is required"),
  email: yup.string().required("Email is required").email("Email is invalid"),
  soDt: yup
    .string()
    .required("Phone is required")
    .matches(/^[0-9]+$/g, "Phone mus be number"),
  hoTen: yup.string().required("Name is required"),
});
const Profile = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const styles = useStyles();
  const { userLogin } = useSelector((state) => {
    return state.UserReducer;
  });

  const { userInfoDetail, userInfo } = useSelector((state) => {
    return state.UserReducer;
  });

  useEffect(() => {
    if (userInfoDetail) {
      formik.setFieldValue("taiKhoan", userInfoDetail.taiKhoan);
      formik.setFieldValue("matKhau", userInfoDetail.matKhau);
      formik.setFieldValue("email", userInfoDetail.email);
      formik.setFieldValue("soDt", userInfoDetail.soDt);
      formik.setFieldValue("maLoaiNguoiDung", userInfoDetail.maLoaiNguoiDung);
      formik.setFieldValue("hoTen", userInfoDetail.hoTen);
    }
  }, [userInfoDetail]);

  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      maLoaiNguoiDung: "",
      hoTen: "",
      maNhom: GROUPID,
    },
    validateOnMount: true,
    validationSchema: schema,
    validateOnBlur: true,
    onSubmit: (values) => {
      dispatch(editUserProfileAction(values));
    },
  });

  useEffect(() => {
    dispatch(getUserInfoDetailAction(userLogin.taiKhoan));
    return () => {
      dispatch({
        type: REMOVE_USER,
      });
    };
  }, []);

  // useEffect(() => {
  // dispatch(getUserInfoAction());
  // }, []);

  return (
    <Container maxWidth='lg'>
      <div className={styles.root}>
        <div className={styles.info}>
          <Typography gutterBottom variant='h4' color='primary'>
            {t("Hello")}: {userLogin.taiKhoan}
          </Typography>
          <div>
            <Typography gutterBottom color='secondary.contrastText'>
              {t("Total visits")}: 0
            </Typography>
            <Typography gutterBottom color='secondary.contrastText'>
              {t("Active visits")}: 0
            </Typography>
            <Typography gutterBottom color='secondary.contrastText'>
              {t("Expried visits")}: 0
            </Typography>
            <Typography gutterBottom color='secondary.contrastText'>
              {t("Reward Points")}: 0
            </Typography>
            <Typography gutterBottom color='secondary.contrastText'>
              {t("Total spending for the month")}: 0đ
            </Typography>
          </div>
          <div className={styles.history}>
            <Typography variant='h4' gutterBottom color='primary'>
              {t("History")}
            </Typography>
            <div className={styles.cardList}>
              {userInfoDetail?.thongTinDatVe?.map((item, index) => {
                return (
                  <Card className={styles.card} key={index}>
                    <CardActionArea>
                      <CardMedia
                        component='img'
                        image={item.hinhAnh}
                        alt='film'
                        className={styles.cardImage}
                      />
                      <CardContent>
                        <div>
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
                                key={index}
                              >
                                [{id.tenGhe}]
                              </Typography>
                            );
                          })}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
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
          </div>
        </div>

        <div className={styles.control}>
          <Box onSubmit={formik.handleSubmit} component='form'>
            <TextField
              disabled
              fullWidth
              label='Tài Khoản'
              name='taiKhoan'
              margin='normal'
              onChange={formik.handleChange}
              value={formik.values.taiKhoan}
              // autoFocus
            />
            <TextField
              fullWidth
              InputLabelProps={{ style: { color: "green" } }}
              type='password'
              label='Password'
              name='matKhau'
              margin='normal'
              onChange={formik.handleChange}
              value={formik.values.matKhau}
              onBlur={formik.handleBlur}
              error={formik.touched.matKhau && !!formik.errors.matKhau}
              helperText={formik.touched.matKhau && formik.errors.matKhau}
              // autoFocus
            />
            <TextField
              fullWidth
              InputLabelProps={{ style: { color: "green" } }}
              label='Email'
              name='email'
              margin='normal'
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
              error={formik.touched.email && !!formik.errors.email}
              helperText={formik.touched.email && formik.errors.email}
              // autoFocus
            />

            <TextField
              fullWidth
              InputLabelProps={{ style: { color: "green" } }}
              label='Mobile'
              name='soDt'
              margin='normal'
              onChange={formik.handleChange}
              value={formik.values.soDt}
              onBlur={formik.handleBlur}
              error={formik.touched.soDt && !!formik.errors.soDt}
              helperText={formik.touched.soDt && formik.errors.soDt}
              // autoFocus
            />

            <TextField
              fullWidth
              label='Type'
              name='maLoaiNguoiDung'
              margin='normal'
              disabled
              onChange={formik.handleChange}
              value={formik.values.maLoaiNguoiDung}
              // autoFocus
            />
            <TextField
              InputLabelProps={{ style: { color: "green" } }}
              fullWidth
              label='Full Name'
              name='hoTen'
              margin='normal'
              onChange={formik.handleChange}
              value={formik.values.hoTen}
              onBlur={formik.handleBlur}
              error={formik.touched.hoTen && !!formik.errors.hoTen}
              helperText={formik.touched.hoTen && formik.errors.hoTen}
              // autoFocus
            />
            <Button
              sx={{ color: "#fff", display: "block" }}
              className={styles.btn}
              type='submit'
            >
              Edit User
            </Button>
          </Box>
        </div>
      </div>
    </Container>
  );
};

export default Profile;
