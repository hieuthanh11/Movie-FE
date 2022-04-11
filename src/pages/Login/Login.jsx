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
import { loginAction } from "../../redux/action/ManageUserAction";
import { useTranslation } from "react-i18next";
import useStyles from "./styles";
import { NavLink } from "react-router-dom";
import * as yup from "yup";
const schema = yup.object().shape({
  taiKhoan: yup.string().required("User is required"),
  matKhau: yup.string().required("Password is required"),
});

const Login = () => {
  const { t, i18n } = useTranslation();
  const styles = useStyles();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },
    validateOnMount: true,
    validationSchema: schema,
    validateOnBlur: true,
    onSubmit: (values) => {
      // console.log(values);
      dispatch(loginAction(values));
    },
  });

  return (
    <div className={styles.root}>
      <div className={styles.item}>
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5' color='primary'>
          {t("SIGN IN")}
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
            autoComplete='email'
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
            autoComplete='current-password'
          />

          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2 }}
          >
            {t("Login")}
          </Button>
          <Grid container spacing={3}>
            <Grid item xs>
              <Link href='#' variant='body1' color='secondary.contrastText'>
                {t("Forgot password?")}
              </Link>
            </Grid>
            <Grid item>
              <NavLink to='/register' className={styles.navLink}>
                {t("Don't have an account? Register")}
              </NavLink>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
};

export default Login;
