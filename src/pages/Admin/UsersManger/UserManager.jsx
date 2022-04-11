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
import {
  deleteUserAction,
  getUsersListAction,
} from "../../../redux/action/ManagerUsersAdminAction";

export default function FilmManager() {
  const styles = useStyles();
  const { control, img, btnAdd } = styles;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersListAction());
  }, []);

  const users = useSelector((state) => {
    return state.UserAdminReducer.arrUser;
  });

  // console.log(users);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    // console.log(event);
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    // console.log(event.target.value);
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
          history.push("/admin/adduser");
        }}
      >
        Add User
      </Button>

      <Box display='flex' justifyContent='center'>
        <Paper sx={{ width: "85%" }}>
          <TableContainer>
            <Table stickyHeader aria-label='sticky table'>
              <TableHead>
                <TableRow>
                  <TableCell colSpan={2}>
                    <Typography variant='h6' color='secondary'>
                      Name
                    </Typography>
                  </TableCell>
                  <TableCell colSpan={1}>
                    <Typography variant='h6' color='secondary'>
                      User
                    </Typography>
                  </TableCell>
                  <TableCell colSpan={1}>
                    <Typography variant='h6' color='secondary'>
                      Password
                    </Typography>
                  </TableCell>
                  <TableCell colSpan={2}>
                    <Typography variant='h6' color='secondary'>
                      Email
                    </Typography>
                  </TableCell>
                  <TableCell colSpan={2}>
                    <Typography variant='h6' color='secondary'>
                      Mobile
                    </Typography>
                  </TableCell>
                  <TableCell colSpan={2}>
                    <Typography variant='h6' color='secondary'>
                      Type
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
                {users
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((film, index) => {
                    const {
                      hoTen,
                      email,
                      maLoaiNguoiDung,
                      matKhau,
                      soDt,
                      taiKhoan,
                    } = film;
                    return (
                      <TableRow hover role='checkbox' tabIndex={-1} key={index}>
                        <TableCell colSpan={2}>
                          <Typography variant='body1' color='secondary.light'>
                            {hoTen}
                          </Typography>
                        </TableCell>
                        <TableCell colSpan={1}>
                          <Typography variant='body1' color='secondary.light'>
                            {taiKhoan}
                          </Typography>
                        </TableCell>
                        <TableCell colSpan={1}>
                          <Typography variant='body1' color='secondary.light'>
                            {matKhau.substr(0, 3) + "***"}
                          </Typography>
                        </TableCell>
                        <TableCell colSpan={2}>
                          <Typography variant='body1' color='secondary.light'>
                            {email}
                          </Typography>
                        </TableCell>
                        <TableCell colSpan={2}>
                          <Typography variant='body1' color='secondary.light'>
                            {soDt}
                          </Typography>
                        </TableCell>
                        <TableCell colSpan={2}>
                          <Typography variant='body1' color='secondary.light'>
                            {maLoaiNguoiDung}
                          </Typography>
                        </TableCell>
                        <TableCell colSpan={2}>
                          <div className={control}>
                            <Box
                              sx={{ cursor: "pointer" }}
                              onClick={() =>
                                dispatch(deleteUserAction(taiKhoan))
                              }
                            >
                              <DeleteIcon color='error' />
                            </Box>
                            <Box
                              sx={{ cursor: "pointer" }}
                              onClick={() => {
                                history.push(`/admin/edituser/${taiKhoan}`);
                              }}
                            >
                              <ModeEditIcon color='success' />
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
            count={users.length}
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
