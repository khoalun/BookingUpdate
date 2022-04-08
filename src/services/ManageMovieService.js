import { baseService } from "./baseService";
import { GROUPID } from "../util/settings/config";
export default class ManageMovieService extends baseService {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  getBannerList = () => {
    return this.get(`/api/QuanLyPhim/LayDanhSachBanner`);
  };

  getMovieList = (tenPhim='') => {
    if(tenPhim.trim()!==''){
      return this.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}&tenPhim=${tenPhim}`);
    }
    return this.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}`);
  };
  addFilmUploadImage = (formData) => {
    return this.post(`/api/QuanLyPhim/ThemPhimUploadHinh`, formData);
  };

  editFilm = (formData) => {
    return this.post(`/api/QuanLyPhim/CapNhatPhimUpload`, formData);
  };

  deleteFilm = (maPhim) => {
    return this.delete(`/api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`);
  };
  getInforFilm = (maPhim) => {
    return this.get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`);
  };
}

export const manageMovieService = new ManageMovieService();
