import React, { useState, useEffect } from "react";
import { Box } from "@mui/system";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import useStyles from "./style";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { GROUPID } from "../../../util/settings/config";
import * as yup from "yup";
import { editUserAction } from "../../../redux/action/ManagerUsersAdminAction";
import { getUserInfoDetailAction } from "../../../redux/action/ManageUserAction";
import { REMOVE_USER } from "../../../redux/type/ManageUserType";
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

const EditUser = (props) => {
  //   console.log(props.match.params);

  const classes = useStyles();

  const dispatch = useDispatch();
  const { userInfoDetail } = useSelector((state) => {
    return state.UserReducer;
  });

  useEffect(() => {
    let { id } = props.match.params;
    dispatch(getUserInfoDetailAction(id));
    return () => {
      dispatch({
        type: REMOVE_USER,
      });
    };
  }, []);

  //   console.log(userInfoDetail);

  const handleChange = (e) => {
    // console.log(e.target.value);
    formik.setFieldValue("maLoaiNguoiDung", e.target.value);
  };

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
      dispatch(editUserAction(values));
    },
  });

  return (
    <Box className={classes.root}>
      <Typography
        sx={{ paddingTop: "20px" }}
        variant='h3'
        align='center'
        color='secondary.contrastText'
      >
        Edit User
      </Typography>

      <Box display='flex' justifyContent='center' padding='50px 0'>
        <Box onSubmit={formik.handleSubmit} width={500} component='form'>
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
            type='password'
            label='Password'
            name='matKhau'
            margin='normal'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.matKhau && !!formik.errors.matKhau}
            helperText={formik.touched.matKhau && formik.errors.matKhau}
            value={formik.values.matKhau}
            // autoFocus
          />
          <TextField
            fullWidth
            label='Email'
            name='email'
            margin='normal'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && !!formik.errors.email}
            helperText={formik.touched.email && formik.errors.email}
            value={formik.values.email}
            // autoFocus
          />

          <TextField
            fullWidth
            label='Mobile'
            name='soDt'
            margin='normal'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.soDt && !!formik.errors.soDt}
            helperText={formik.touched.soDt && formik.errors.soDt}
            value={formik.values.soDt}
            // autoFocus
          />

          <FormControl fullWidth margin='normal'>
            <InputLabel id='maLoaiNguoiDung'>Type</InputLabel>
            <Select
              labelId='maLoaiNguoiDung'
              id='maLoaiNguoiDung'
              label='Type'
              onChange={handleChange}
              value={formik.values.maLoaiNguoiDung}
            >
              <MenuItem value='KhachHang'>Khách Hàng</MenuItem>
              <MenuItem value='QuanTri'>Quản Trị</MenuItem>
            </Select>
          </FormControl>

          <TextField
            fullWidth
            label='Full Name'
            name='hoTen'
            margin='normal'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.hoTen && !!formik.errors.hoTen}
            helperText={formik.touched.hoTen && formik.errors.hoTen}
            value={formik.values.hoTen}
            // autoFocus
          />
          <Button
            sx={{ color: "#fff", display: "block" }}
            className={classes.btn}
            type='submit'
          >
            Edit User
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default EditUser;
