import React, { useState, useEffect } from "react";
import { Box } from "@mui/system";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { LocalizationProvider, MobileDateTimePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import useStyles from "./style";
import { useFormik } from "formik";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import {
  getTheaterSystemInfomationAction,
  getTheaterSystemInfomationDebaseOnSystemAction,
} from "../../../redux/action/ManageTheaterAction";
import { quanLyDatVeService } from "../../../service/QuanLyDatVeService";
import { history } from "../../../App";
import { notifiSuccess, notifiError } from "../../../util/toastify/toastify";
const ShowTime = (props) => {
  const formik = useFormik({
    initialValues: {
      maPhim: props.match.params.id,
      ngayChieuGioChieu: "",
      maRap: "",
      giaVe: "",
    },
    onSubmit: async (values) => {
      try {
        const result = await quanLyDatVeService.createShowTimes(values);
        notifiSuccess("Tạo lịch chiếu thành công");
        history.push("/admin/films");
      } catch (error) {
        console.log(error);
        notifiError("Tạo lịch chiếu thất bại");
      }
    },
  });

  const classes = useStyles();
  const dispatch = useDispatch();
  const [value, setValue] = useState(new Date());
  const { messageError } = useSelector((state) => {
    return state.MovieListReducer;
  });

  useEffect(() => {
    dispatch(getTheaterSystemInfomationAction());
  }, []);

  const { theaterArr, theaterDebase } = useSelector((state) => {
    return state.TheaterReducer;
  });

  const handleChangeSystemTheater = (e) => {
    dispatch(getTheaterSystemInfomationDebaseOnSystemAction(e.target.value));
  };

  const [theater, setTheater] = useState("");

  const handleChangeListTheater = (e) => {
    setTheater(e.target.value);
    formik.setFieldValue("maRap", e.target.value);
  };

  const handleChangeDate = (newValue) => {
    setValue(newValue);
    let ngayChieuGioChieu = moment(newValue).format("DD/MM/yyyy hh:mm:ss");
    formik.setFieldValue("ngayChieuGioChieu", ngayChieuGioChieu);
  };

  return (
    <Box className={classes.root}>
      <Typography
        sx={{ paddingTop: "20px" }}
        variant='h3'
        align='center'
        color='secondary.contrastText'
      >
        Create ShowTimes
      </Typography>

      <Box display='flex' justifyContent='center' padding='50px 0'>
        <Box width={500} component='form' onSubmit={formik.handleSubmit}>
          <FormControl fullWidth margin='normal'>
            <InputLabel id='heThongRap'>Hệ Thống Rạp</InputLabel>
            <Select
              labelId='heThongRap'
              id='heThongRap'
              label='Hệ Thống Rạp'
              onChange={handleChangeSystemTheater}
            >
              {theaterArr?.map((htr, index) => {
                return (
                  <MenuItem key={index} value={htr.tenHeThongRap}>
                    {htr.tenHeThongRap}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>

          <FormControl fullWidth margin='normal'>
            <InputLabel id='cumRap'>Cụm Rạp</InputLabel>
            {messageError == "" && (
              <Select
                labelId='cumRap'
                id='cumRap'
                label='Cụm Rạp'
                onChange={handleChangeListTheater}
              >
                {theaterDebase?.map((cumRap, index) => {
                  return (
                    <MenuItem
                      selected={theater == cumRap.maCumRap ? true : false}
                      key={index}
                      value={cumRap.maCumRap}
                    >
                      {cumRap.tenCumRap}
                    </MenuItem>
                  );
                })}
              </Select>
            )}
            {messageError != "" && (
              <Select labelId='Error' id='Error' label='Error'>
                <MenuItem value={messageError}>{messageError}</MenuItem>
              </Select>
            )}
          </FormControl>

          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Stack spacing={3}>
              <MobileDateTimePicker
                inputFormat='dd/MM/yyyy hh:mm:ss'
                value={value}
                onChange={handleChangeDate}
                renderInput={(params) => <TextField {...params} />}
              />
            </Stack>
          </LocalizationProvider>

          <TextField
            fullWidth
            type='number'
            label='Giá Vé'
            name='giaVe'
            margin='normal'
            onChange={formik.handleChange}
          />

          <Button
            sx={{ color: "#fff", display: "block" }}
            className={classes.btn}
            type='submit'
            disabled={messageError ? true : false}
          >
            Create ShowTimes
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ShowTime;
