import { history } from "../App";
import { manageUserService } from "../services/ManageUser";
import {
  LOG_IN_ACTION,
  SET_INFOR_USER_BOOKING,
  SET_USER_ADMIN,
} from "./types/ManageUser";
// import axios from 'axios'
// import { registerStart, registerSuccess, registerFailed } from "../reducers/authSlice";

export const loginAction = (inforLogin) => {
  return async (dispatch) => {
    try {
      const result = await manageUserService.getUser(inforLogin);

      if (result.data.statusCode === 200) {
        dispatch({
          type: LOG_IN_ACTION,
          inforLogin: result.data.content,
        });
        // return to page before
        history.goBack();
      }
      console.log("result", result);
    } catch (error) {
      console.log("errors", error.response.data);
    }
  };
};

export const getUserInforAction = () => {
  return async (dispatch) => {
    try {
      const result = await manageUserService.inforUserBooking();

      if (result.data.statusCode === 200) {
        dispatch({
          type: SET_INFOR_USER_BOOKING, //gửi lên reducer
          userInfor: result.data.content,
        });
      }
      console.log("result", result);
    } catch (error) {
      console.log("errors", error.response.data);
    }
  };
};

export const getUserAdminAction = () => {
  return async (dispatch) => {
    try {
      const result = await manageUserService.getUserAdmin();
      if (result.data.statusCode === 200) {
        dispatch({
          type: SET_USER_ADMIN, //gửi lên reducer
          userAdmin: result.data.content,
        });
      }
      console.log("userList", result);
    } catch (error) {
      console.log("errors", error.response.data);
    }
  };
};

export const registerAction = (formData) => {
  return async (dispatch) => {
    try {
      console.log("asdasdasdadsad", formData);
      let result = await manageUserService.getRegister(formData);
      alert("Success adding User");
      console.log("result", result.data.content);
      history.goBack();
    } catch (errors) {
      console.log(errors.response?.data);
    }
  };
};

// export const registerUser = async(user,dispatch) => {
//   dispatch(registerStart());
//    try {
//     await axios.post("http://movieapi.cyberlearn.vn/api/QuanLyNguoiDung/DangKy",user);
//     dispatch(registerSuccess());
//     history.push('/login')
//     }catch(err) {
//       dispatch(registerFailed());
//    }
// }
