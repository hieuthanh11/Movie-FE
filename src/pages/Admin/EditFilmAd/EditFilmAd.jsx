import React, { useState, useEffect } from "react";
import { Box } from "@mui/system";
import {
  Button,
  FormControlLabel,
  FormGroup,
  Stack,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { DesktopDatePicker, LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import useStyles from "./style";
import { useFormik } from "formik";
import moment from "moment";
import { render } from "@testing-library/react";
import { useDispatch, useSelector } from "react-redux";
import {
  editMovieAction,
  getMovieDetailAction,
} from "../../../redux/action/ManageMovieAction";
import { GROUPID } from "../../../util/settings/config";
import * as yup from "yup";

const schema = yup.object().shape({
  tenPhim: yup.string().required(),
  trailer: yup.string().url(),
  moTa: yup.string().required(),
  ngayKhoiChieu: yup.string().required(),
  danhGia: yup.string().required(),
  hinhAnh: yup.string().required(),
});

const EditFilmAd = (props) => {
  const classes = useStyles();
  const [value, setValue] = useState(new Date(""));
  const [imgSrc, setImgSrc] = useState("");
  const dispatch = useDispatch();
  const { filmDetail } = useSelector((state) => {
    return state.MovieListReducer;
  });

  useEffect(() => {
    let { id } = props.match.params;
    dispatch(getMovieDetailAction(id));
  }, []);

  const handleChange = (newValue) => {
    setValue(newValue);
    let ngayKhoiChieu = moment(newValue).format("DD/MM/yyyy");
    formik.setFieldValue("ngayKhoiChieu", ngayKhoiChieu);
  };

  const handleChangeSwitch = (name) => {
    return (e) => {
      formik.setFieldValue(name, e.target.checked);
    };
  };

  const handleChangeFile = async (e) => {
    let file = e.target.files[0];
    if (
      file.type === "image/jpeg" ||
      file.type === "image/jpg" ||
      file.type === "image/gif" ||
      file.type === "image/png"
    ) {
      await formik.setFieldValue("hinhAnh", file);

      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        setImgSrc(e.target.result);
      };
    }
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      maPhim: filmDetail.maPhim,
      tenPhim: filmDetail.tenPhim,
      trailer: filmDetail.trailer,
      moTa: filmDetail.moTa,
      ngayKhoiChieu: moment(filmDetail.ngayKhoiChieu).format("DD/MM/YYYY"),
      dangChieu: filmDetail.dangChieu,
      sapChieu: filmDetail.sapChieu,
      hot: filmDetail.hot,
      danhGia: filmDetail.danhGia,
      hinhAnh: null,
      maNhom: GROUPID,
    },

    validateOnBlur: true,
    validateOnMount: true,
    validationSchema: schema,
    onSubmit: (values) => {
      // console.log(values);

      let formData = new FormData();
      for (let key in values) {
        if (key !== "hinhAnh") {
          formData.append(key, values[key]);
        } else {
          if (values.hinhAnh !== null) {
            formData.append("File", values.hinhAnh, values.hinhAnh.name);
          }
        }
      }

      dispatch(editMovieAction(formData));
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
        Edit Movie
      </Typography>

      <Box display='flex' justifyContent='center' padding='50px 0'>
        <Box onSubmit={formik.handleSubmit} width={500} component='form'>
          <TextField
            fullWidth
            label='Tên Phim'
            name='tenPhim'
            margin='normal'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.tenPhim && !!formik.errors.tenPhim}
            helperText={formik.touched.tenPhim && formik.errors.tenPhim}
            value={formik.values.tenPhim}
            autoFocus
          />
          <TextField
            fullWidth
            label='Trailer'
            name='trailer'
            margin='normal'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.trailer && !!formik.errors.trailer}
            helperText={formik.touched.trailer && formik.errors.trailer}
            value={formik.values.trailer}
            autoFocus
          />
          <TextField
            fullWidth
            label='Mô Tả'
            name='moTa'
            margin='normal'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.moTa && !!formik.errors.moTa}
            helperText={formik.touched.moTa && formik.errors.moTa}
            value={formik.values.moTa}
            autoFocus
          />

          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Stack spacing={3}>
              <DesktopDatePicker
                label='Date'
                inputFormat='dd/MM/yyyy'
                // value={value}
                value={moment(formik.values.ngayKhoiChieu, "DD/MM/yyyy")}
                onChange={handleChange}
                onError={formik.errors.ngayKhoiChieu}
                renderInput={(params) => <TextField {...params} />}
              />
            </Stack>
          </LocalizationProvider>

          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  onChange={handleChangeSwitch("dangChieu")}
                  defaultChecked={formik.values.dangChieu}
                />
              }
              label='Đang Chiếu'
            />
          </FormGroup>

          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  onChange={handleChangeSwitch("sapChieu")}
                  defaultChecked={formik.values.sapChieu}
                />
              }
              label='Sắp Chiếu'
            />
          </FormGroup>

          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  onChange={handleChangeSwitch("hot")}
                  defaultChecked={formik.values.hot}
                />
              }
              label='Hot'
            />
          </FormGroup>

          <TextField
            fullWidth
            type='number'
            label='Đánh Giá'
            name='danhGia'
            margin='normal'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.danhGia && !!formik.errors.danhGia}
            helperText={formik.touched.danhGia && formik.errors.danhGia}
            value={formik.values.danhGia}
            autoFocus
          />
          <TextField
            type='file'
            fullWidth
            name='hinhAnh'
            margin='normal'
            onChange={handleChangeFile}
            accept='image/png, image/jpeg,image/gif,image/png'
          />
          <img
            width={100}
            height={100}
            src={imgSrc === "" ? filmDetail.hinhAnh : imgSrc}
            alt='hinhAnh'
          />
          <Button
            sx={{ color: "#fff", display: "block" }}
            className={classes.btn}
            type='submit'
          >
            Edit Film
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default EditFilmAd;
