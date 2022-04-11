import {
  Table,
  Typography,
  Paper,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TablePagination,
  Button,
  AppBar,
  Toolbar,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteMovieAction,
  getMovieListAction,
} from "../../../redux/action/ManageMovieAction";
import useStyles from "./style";
import { Box } from "@mui/system";
import moment from "moment";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DateRangeIcon from "@mui/icons-material/DateRange";
import { history } from "../../../App";

export default function FilmManager() {
  const styles = useStyles();
  const { control, img, btnAdd } = styles;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovieListAction());
  }, []);

  const films = useSelector((state) => state.MovieListReducer.arrFilm) || [];

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Box minHeight='100vh' paddingBottom='40px'>
      <Typography
        variant='h3'
        align='center'
        color='secondary'
        sx={{ marginY: "40px" }}
      >
        MANAGER FILM
      </Typography>

      <Button
        className={btnAdd}
        sx={{ color: "#fff", marginLeft: "7.5%", marginBottom: "20px" }}
        onClick={() => {
          history.push("/admin/addfilms");
        }}
      >
        Add Film
      </Button>

      <Box display='flex' justifyContent='center'>
        <Paper sx={{ width: "85%" }}>
          <TableContainer>
            <Table stickyHeader aria-label='sticky table'>
              <TableHead>
                <TableRow>
                  <TableCell colSpan={2}>
                    <Typography variant='h6' color='secondary'>
                      Movie name
                    </Typography>
                  </TableCell>
                  <TableCell colSpan={1}>
                    <Typography variant='h6' color='secondary'>
                      Id
                    </Typography>
                  </TableCell>
                  <TableCell colSpan={1}>
                    <Typography variant='h6' color='secondary'>
                      Image
                    </Typography>
                  </TableCell>
                  <TableCell colSpan={2}>
                    <Typography variant='h6' color='secondary'>
                      Projection Date
                    </Typography>
                  </TableCell>
                  <TableCell colSpan={2}>
                    <Typography variant='h6' color='secondary'>
                      Rating
                    </Typography>
                  </TableCell>
                  <TableCell colSpan={2}>
                    <Typography variant='h6' color='secondary'>
                      Description
                    </Typography>
                  </TableCell>
                  <TableCell colSpan={2}>
                    <Typography variant='h6' color='secondary'>
                      Option
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {films
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((film) => {
                    const {
                      hinhAnh,
                      maPhim,
                      tenPhim,
                      ngayKhoiChieu,
                      danhGia,
                      moTa,
                    } = film;
                    return (
                      <TableRow
                        hover
                        role='checkbox'
                        tabIndex={-1}
                        key={film.maPhim}
                      >
                        <TableCell colSpan={2}>
                          <Typography variant='body1' color='secondary.light'>
                            {tenPhim}
                          </Typography>
                        </TableCell>
                        <TableCell colSpan={1}>
                          <Typography variant='body1' color='secondary.light'>
                            {maPhim}
                          </Typography>
                        </TableCell>
                        <TableCell colSpan={1}>
                          <img className={img} src={hinhAnh} alt={hinhAnh} />
                        </TableCell>
                        <TableCell colSpan={2}>
                          <Typography variant='body1' color='secondary.light'>
                            {moment(ngayKhoiChieu).format("DD/MM/yyyy")}
                          </Typography>
                          <Typography variant='body1' color='secondary.light'>
                            {moment(ngayKhoiChieu).format("hh-mm A")}
                          </Typography>
                        </TableCell>
                        <TableCell colSpan={2}>
                          <Typography variant='body1' color='secondary.light'>
                            {danhGia}
                          </Typography>
                        </TableCell>
                        <TableCell colSpan={2}>
                          <Typography variant='body1' color='secondary.light'>
                            {moTa.substr(0, 100) + "..."}
                          </Typography>
                        </TableCell>
                        <TableCell colSpan={2}>
                          <div className={control}>
                            <Box
                              sx={{ cursor: "pointer" }}
                              onClick={() =>
                                dispatch(deleteMovieAction(maPhim))
                              }
                            >
                              <DeleteIcon color='error' />
                            </Box>
                            <Box
                              sx={{ cursor: "pointer" }}
                              onClick={() => {
                                history.push(`/admin/editfilms/${maPhim}`);
                              }}
                            >
                              <ModeEditIcon color='success' />
                            </Box>

                            <Box
                              sx={{ cursor: "pointer" }}
                              onClick={() => {
                                history.push(`/admin/showtimes/${maPhim}`);
                              }}
                            >
                              <DateRangeIcon color='info' />
                            </Box>
                          </div>
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 20, 30]}
            component='div'
            count={films.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Box>
    </Box>
  );
}
