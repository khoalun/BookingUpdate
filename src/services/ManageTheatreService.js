import { baseService } from "./baseService";
import { GROUPID } from "../util/settings/config";
export default class ManageTheatreService extends baseService {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  getTheatreList = () => {
    return this.get(
      `api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUPID}`
    );
  };

  getMovieSchedule = (maPhim) => {
    return this.get(`/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`);
  };
}

export const manageTheatreService = new ManageTheatreService();
