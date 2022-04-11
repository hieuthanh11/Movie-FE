import { baseService } from "./baseService";
import { GROUPID } from "../util/settings/config";

export class QuanLyNguoiDungAdmin extends baseService {
  constructor(props) {
    super(props);
  }
  getUsersList = (tuKhoa = "") => {
    if (tuKhoa.trim() !== "") {
      return this.get(
        `/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUPID}&tuKhoa=${tuKhoa}`
      );
    }
    return this.get(
      `/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUPID}`
    );
  };

  addUser = (formData) => {
    return this.post(`/api/QuanLyNguoiDung/ThemNguoiDung`, formData);
  };

  deleteUser = (taiKhoan) => {
    return this.delete(
      `/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`
    );
  };

  editUser = (user) => {
    return this.post(`/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`, user);
  };
}
export const quanLyNguoiDungAdmin = new QuanLyNguoiDungAdmin();
