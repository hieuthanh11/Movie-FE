import { baseService } from "./baseService";

export class QuanLyNguoiDungService extends baseService {
  constructor(props) {
    super(props);
  }
  login = (loginInfo) => {
    return this.post(`/api/QuanLyNguoiDung/DangNhap`, loginInfo);
  };
  register = (registerInfo) => {
    return this.post(`/api/QuanLyNguoiDung/DangKy`, registerInfo);
  };

  getHistory = () => {
    return this.post(`/api/QuanLyNguoiDung/ThongTinTaiKhoan`);
  };

  getUserInfo = (taiKhoan) => {
    return this.post(
      `/api/QuanLyNguoiDung/LayThongTinNguoiDung?taiKhoan=${taiKhoan}`
    );
  };

  editUserProfile = (user) => {
    return this.post(`/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`, user);
  };
}

export const quanLyNguoiDungService = new QuanLyNguoiDungService();
