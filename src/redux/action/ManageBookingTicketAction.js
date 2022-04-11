import { connection } from "../..";
import { quanLyDatVeService } from "../../service/QuanLyDatVeService";
import { BookingTicketInfo } from "../../_core/models/BookingTiceketInfo";

import {
  BOOKING_TICKET,
  COMPLETE_BOOKING_TICKET,
  SET_DETAIL_ROOM,
} from "../type/ManageBookingTicketType";
import { displayLoadingAction, hideLoadingAction } from "./LoadingAction";

export const getDetailBookingRoom = (maLichChieu) => {
  return async (dispatch) => {
    try {
      dispatch(displayLoadingAction);

      const result = await quanLyDatVeService.getDetailTicketRoom(maLichChieu);
      await dispatch(hideLoadingAction);

      dispatch({
        type: SET_DETAIL_ROOM,
        detailBookingRoom: result.data.content,
      });
    } catch (err) {
       dispatch(hideLoadingAction);
      console.log(err);
    }
  };
};

export const bookingTicketAction = (
  bookingTicketInfo = new BookingTicketInfo()
) => {
  return async (dispatch, getState) => {
    try {
      dispatch(displayLoadingAction);
      const result = await quanLyDatVeService.bookingTicket(bookingTicketInfo);
      await dispatch(getDetailBookingRoom(bookingTicketInfo.maLichChieu));
      await dispatch(hideLoadingAction);
      await dispatch({
        type: COMPLETE_BOOKING_TICKET,
      });

      let userLogin = getState().UserReducer.userLogin;

      connection.invoke(
        "datGheThanhCong",
        userLogin.taiKhoan,
        bookingTicketInfo.maLichChieu
      );
    } catch (error) {
      dispatch(hideLoadingAction);
      console.log(error);
    }
  };
};

export const bookingSeatAction = (seat, maLichChieu) => {
  return async (dispatch, getState) => {
    await dispatch({
      type: BOOKING_TICKET,
      selectedSeat: seat,
    });

    let danhSachGheDangDat =
      getState().BookingTicketReducer.listOfSeatIsBooking;
    let taiKhoan = getState().UserReducer.userLogin.taiKhoan;

    danhSachGheDangDat = JSON.stringify(danhSachGheDangDat);

    connection.invoke("datGhe", taiKhoan, danhSachGheDangDat, maLichChieu);
  };
};
