import { baseService } from "./baseService";
import { GROUPID } from "../util/settings/config";

export class QuanLyRapService extends baseService {
  constructor(props) {
    super(props);
  }
  getTheaterSystemInfomation = () => {
    return this.get(`/api/QuanLyRap/LayThongTinHeThongRap`);
  };

  getTheaterSystemInfoDebaseOnSystem = (maHeThongRap) => {
    return this.get(
      `/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`
    );
  };

  getTheaterInfomation = (maHeThongRap) => {
    return this.get(
      `/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=${GROUPID}`
    );
  };
  getTheaterBasedOnId = (id) => {
    return this.get(`/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`);
  };
}

export const quanLyRapService = new QuanLyRapService();
