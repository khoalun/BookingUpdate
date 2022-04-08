import { history } from "../App";
import { manageMovieService } from "../services/ManageMovieService";
import { SET_INFOR_FILM, SET_MOVIE_LIST } from "./types/ManageFilmType";

export const getFilmAction = (tenPhim ="") => {
  return async (dispatch) => {
    try {
      const result = await manageMovieService.getMovieList(tenPhim);
      dispatch({
        type: SET_MOVIE_LIST,
        arrFilm: result.data.content,
      });
    } catch (errors) {
      console.log("errors", errors);
    }
  };
};

export const addFilmUploadImageAction = (formData) => {
  return async (dispatch) => {
    try {
      let result = await manageMovieService.addFilmUploadImage(formData);
      alert("Success add Movie");
      console.log("result", result.data.content);
    } catch (errors) {
      console.log(errors.response?.data);
    }
  };
};

export const updateFilmAction = (formData) => {
  return async (dispatch) => {
    try {
      let result = await manageMovieService.editFilm(formData);
      alert("Success Editing Film");
      console.log("result", result.data.content);
      dispatch(getFilmAction());
      history.push("/admin/films");
    } catch (errors) {
      console.log(errors.response?.data);
    }
  };
};

export const deleteFilmAction = (maPhim) => {
  return async (dispatch) => {
    try {
      let result = await manageMovieService.deleteFilm(maPhim);
      alert("Success Delete Film");
      console.log("result", result.data.content);
      dispatch(getFilmAction());
    } catch (errors) {
      console.log(errors.response?.data);
    }
  };
};

export const getInforFilmAction = (maPhim) => {
  return async (dispatch) => {
    try {
      const result = await manageMovieService.getInforFilm(maPhim);
      dispatch({
        type: SET_INFOR_FILM,
        filmInforAdmin: result.data.content,
      });
    } catch (errors) {
      console.log(errors.response?.data);
    }
  };
};
