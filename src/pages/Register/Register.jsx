import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { registerAction } from "../../redux/action/ManageUserAction";
import { GROUPID } from "../../util/settings/config";
import { useTranslation } from "react-i18next";
import * as yup from "yup";
import useStyles from "./styles";
import { NavLink } from "react-router-dom";
const schema = yup.object().shape({
  taiKhoan: yup.string().required("User is required"),
  matKhau: yup.string().required("Password is required"),
  email: yup.string().required("Email is required").email("Email is invalid"),
  hoTen: yup.string().required("Name is required"),
  soDt: yup
    .string()
    .required("Phone is required")
    .matches(/^[0-9]+$/g, "Phone mus be number"),
});

const Register = () => {
  const { t, i18n } = useTranslation();
  const styles = useStyles();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      maNhom: GROUPID,
      hoTen: "",
    },
    validateOnMount: true,
    validationSchema: schema,
    validateOnBlur: true,
    onSubmit: (values) => {
      dispatch(registerAction(values));
    },
  });

  return (
    <div className={styles.root}>
      <div className={styles.item}>
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5' color='primary'>
          {t("REGISTER")}
        </Typography>
        <Box
          component='form'
          noValidate
          onSubmit={formik.handleSubmit}
          sx={{ mt: 1 }}
        >
          <TextField
            margin='normal'
            required
            fullWidth
            label={t("User")}
            name='taiKhoan'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.taiKhoan && !!formik.errors.taiKhoan}
            helperText={formik.touched.taiKhoan && formik.errors.taiKhoan}
            autoFocus
          />
          <TextField
            margin='normal'
            required
            fullWidth
            name='matKhau'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.matKhau && !!formik.errors.matKhau}
            helperText={formik.touched.matKhau && formik.errors.matKhau}
            label={t("Password")}
            type='password'
          />

          <TextField
            margin='normal'
            required
            fullWidth
            name='email'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && !!formik.errors.email}
            helperText={formik.touched.email && formik.errors.email}
            label='Email'
          />
          <TextField
            margin='normal'
            required
            fullWidth
            name='soDt'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.soDt && !!formik.errors.soDt}
            helperText={formik.touched.soDt && formik.errors.soDt}
            label={t("Mobile")}
          />
          <TextField
            margin='normal'
            required
            fullWidth
            name='hoTen'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.hoTen && !!formik.errors.hoTen}
            helperText={formik.touched.hoTen && formik.errors.hoTen}
            label={t("FullName")}
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2 }}
          >
            {t("Register")}
          </Button>
          <Grid container>
            <Grid item>
              <NavLink className={styles.navLink} to='/login'>
                {t("Already have an account? Sign In")}
              </NavLink>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
};

export default Register;
