import { BookingTicketInfo } from "../_core/models/BookingTiceketInfo";
import { baseService } from "./baseService";

export class QuanLyNguoiDatVeService extends baseService {
  constructor(props) {
    super(props);
  }
  getDetailTicketRoom = (maLichChieu) => {
    return this.get(
      `/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`
    );
  };
  bookingTicket = (bookingTicketInfo = new BookingTicketInfo()) => {
    return this.post(`api/QuanLyDatVe/DatVe`, bookingTicketInfo);
  };

  createShowTimes = (thongTinLichChieu) => {
    return this.post(`/api/QuanLyDatVe/TaoLichChieu`, thongTinLichChieu);
  };
}

export const quanLyDatVeService = new QuanLyNguoiDatVeService();
