import {
  SET_CURRENT_FILM,
  SET_MOVIE_LIST,
  SET_UPCOMING_FILM,
} from "../actions/types/ManageFilmType";
import { SET_DETAIL_FILM } from "../actions/types/ManageTheatreType";

const stateDefault = {
  arrFilm: [
    {
      maPhim: 9427,
      tenPhim: "Trạng Tí Phiêu Lưu Ký 121",
      biDanh: "trang-ti-phieu-luu-ky-121",
      trailer: "https://youtu.be/sx1ROHCmY-4",
      hinhAnh:
        "http://movieapi.cyberlearn.vn/hinhanh/trang-ti-phieu-luu-ky-121_gp01.png",
      moTa: "Trạng tí phiêu lưu ký là một bộ phim do người Việt sản xuất",
      maNhom: "GP01",
      ngayKhoiChieu: "2022-01-25T13:57:40.603",
      danhGia: 10,
      hot: true,
      dangChieu: true,
      sapChieu: true,
    },
  ],
  filmDetail: {},
  arrFilmDefault: [],
  dangChieu: true,
  sapChieu: true,
};

export const MovieListReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case SET_MOVIE_LIST: {
      state.arrFilm = action.arrFilm;
      state.arrFilmDefault = state.arrFilm;
      return { ...state };
    }
    case SET_CURRENT_FILM: {
      state.dangChieu = !state.dangChieu;
      state.arrFilm = state.arrFilmDefault.filter(
        (movie) => movie.dangChieu === state.dangChieu
      );
      return { ...state };
    }

    case SET_UPCOMING_FILM: {
      state.sapChieu = !state.sapChieu;

      state.arrFilm = state.arrFilmDefault.filter(
        (movie) => movie.sapChieu === state.sapChieu
      );
      return { ...state };
    }
    case SET_DETAIL_FILM: {
      state.filmDetail = action.filmDetail;
      return { ...state };
    }

    default:
      return {
        ...state,
      };
  }
};
