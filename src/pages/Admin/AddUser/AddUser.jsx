import React, { useState } from "react";
import { Box } from "@mui/system";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import useStyles from "./style";
import { useFormik } from "formik";
import moment from "moment";
import { render } from "@testing-library/react";
import { useDispatch } from "react-redux";
import { addMovieAction } from "../../../redux/action/ManageMovieAction";
import { GROUPID } from "../../../util/settings/config";
import * as yup from "yup";
import { addUserAction } from "../../../redux/action/ManagerUsersAdminAction";
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

const AddUser = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const handleChange = (e) => {
    // console.log(e.target.value);
    formik.setFieldValue("maLoaiNguoiDung", e.target.value);
  };

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
    validationSchema: schema,
    validateOnBlur: true,
    validateOnMount: true,
    onSubmit: (values) => {
      // console.log(values);
      dispatch(addUserAction(values));
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
        Create New User
      </Typography>

      <Box display='flex' justifyContent='center' padding='50px 0'>
        <Box onSubmit={formik.handleSubmit} width={500} component='form'>
          <TextField
            fullWidth
            label='Tài Khoản'
            name='taiKhoan'
            margin='normal'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.taiKhoan && !!formik.errors.taiKhoan}
            helperText={formik.touched.taiKhoan && formik.errors.taiKhoan}
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
          />

          <FormControl fullWidth margin='normal'>
            <InputLabel id='maLoaiNguoiDung'>Type</InputLabel>
            <Select
              labelId='maLoaiNguoiDung'
              id='maLoaiNguoiDung'
              label='Type'
              onChange={handleChange}
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
          />
          <Button
            sx={{ color: "#fff", display: "block" }}
            className={classes.btn}
            type='submit'
          >
            Create User
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AddUser;
