import { ShowTimes } from "../../_core/models/BookingTicketRoomInfo";
import {
  SET_DETAIL_ROOM,
  BOOKING_TICKET,
  COMPLETE_BOOKING_TICKET,
  BOOKING_SEAT,
  REMOVE_SEAT,
} from "../type/ManageBookingTicketType";
import { RESET_LIST_SEATS } from "../type/ManageMovieType";

const initialState = {
  detailTicketRoom: new ShowTimes(),
  listOfSeatIsBooking: [],
  beingBookedArr: [],
};

const BookingTicketReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DETAIL_ROOM:
      state.detailTicketRoom = action.detailBookingRoom;
      break;
    case BOOKING_TICKET:
      let updateListSeat = [...state.listOfSeatIsBooking];
      let index = updateListSeat.findIndex((selected) => {
        return selected.maGhe === action.selectedSeat.maGhe;
      });
      if (index !== -1) {
        updateListSeat.splice(index, 1);
      } else {
        updateListSeat.push(action.selectedSeat);
      }
      state.listOfSeatIsBooking = updateListSeat;
      break;
    case COMPLETE_BOOKING_TICKET:
      state.listOfSeatIsBooking = [];
      break;
    case BOOKING_SEAT:
      state.beingBookedArr = action.arrBeingBooked;
      break;
    case REMOVE_SEAT:
      let removeListOfSeatIsBooking = [...state.listOfSeatIsBooking];
      let indexRemove = removeListOfSeatIsBooking.findIndex(
        (item) => item.maGhe === action.id
      );
      if (indexRemove !== -1) {
        removeListOfSeatIsBooking.splice(indexRemove, 1);
      }
      state.listOfSeatIsBooking = removeListOfSeatIsBooking;
      break;
    case RESET_LIST_SEATS:
      state.listOfSeatIsBooking = [];
    default:
      break;
  }
  return { ...state };
};

export default BookingTicketReducer;
