import { GROUPID } from "../util/settings/config";
import { baseService } from "./baseService";

export class QuanLyPhimService extends baseService {
  constructor(props) {
    super(props);
  }
  getBanner = () => {
    return this.get(`/api/QuanLyPhim/LayDanhSachBanner`);
  };
  getMovieList = (tenPhim = "") => {
    if (tenPhim.trim() != "") {
      return this.get(
        `/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}&tenPhim=${tenPhim}`
      );
    }
    return this.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}`);
  };
  getMovieDetail = (id) => {
    return this.get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`);
  };
  getMoviePagination = (currentPage, countInNumber) => {
    return this.get(
      `/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=${GROUPID}&soTrang=${currentPage}&soPhanTuTrenTrang=${countInNumber}`
    );
  };
  addMovie = (formData) => {
    return this.post(`/api/QuanLyPhim/ThemPhimUploadHinh`, formData);
  };

  deleteMovie = (id) => this.delete(`api/QuanLyPhim/XoaPhim?MaPhim=${id}`);

  editMovie = (formData) => {
    return this.post(`/api/QuanLyPhim/CapNhatPhimUpload`, formData);
  };
}

export const quanLyPhimService = new QuanLyPhimService();
