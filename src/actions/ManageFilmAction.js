import { manageMovieService } from "../services/ManageMovieService";
import { SET_MOVIE_LIST } from "./types/ManageFilmType";

export const getFilmAction = () => {
  return async (dispatch) => {
    try {
      const result = await manageMovieService.getMovieList();
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
